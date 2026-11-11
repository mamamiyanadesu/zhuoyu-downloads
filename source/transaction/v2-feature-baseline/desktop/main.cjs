const {app,BrowserWindow,session,Menu}=require('electron');
const path=require('node:path'),fs=require('node:fs'),{pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..');
// Development data is task-scoped, not a global Electron profile.
const bundled = require('../package.json').qingchiPackaged === true;
app.setPath('userData', bundled ? path.join(app.getPath('appData'),'Qingchi') : path.join(root,'runtime-profile'));
app.name='清池';
if(!app.requestSingleInstanceLock())app.exit(0);
app.on('second-instance',()=>{if(win){if(win.isMinimized())win.restore();win.focus();}});
const smoke=process.argv.includes('--verify-shell');
const index=pathToFileURL(path.join(root,'app/index.html')).href;
let win;
function createWindow(){
 win=new BrowserWindow({width:1280,height:820,minWidth:680,minHeight:560,title:'清池 · 桌面小憩',backgroundColor:'#c5e0cb',show:false,webPreferences:{preload:path.join(__dirname,'preload.cjs'),nodeIntegration:false,contextIsolation:true,sandbox:true,webSecurity:true}});
 win.webContents.setWindowOpenHandler(()=>({action:'deny'}));
 win.webContents.on('will-navigate',(e,url)=>{if(url.split('#')[0]!==index)e.preventDefault();});
 win.webContents.on('render-process-gone',(_,details)=>console.error('renderer-gone',details.reason));
 win.on('ready-to-show',()=>win.show());
 win.loadFile(path.join(root,'app/index.html'));
 win.on('closed',()=>{win=null;});
}
app.whenReady().then(async()=>{
 session.defaultSession.setPermissionRequestHandler((wc,permission,callback)=>callback(false));
 session.defaultSession.webRequest.onBeforeRequest({urls:['http://*/*','https://*/*','ws://*/*','wss://*/*']},(details,callback)=>callback({cancel:true}));
 Menu.setApplicationMenu(Menu.buildFromTemplate([{label:'清池',submenu:[{role:'about'},{type:'separator'},{role:'quit'}]},{label:'编辑',submenu:[{role:'undo'},{role:'redo'},{type:'separator'},{role:'cut'},{role:'copy'},{role:'paste'},{role:'selectAll'}]},{label:'视图',submenu:[{role:'reload'},{role:'togglefullscreen'}]}]));
 createWindow();
 if(smoke){
  const checks=[];const out=process.env.QINGCHI_VERIFY_OUT || path.join(root,'evidence');fs.mkdirSync(out,{recursive:true});
  const failSafe=setTimeout(()=>{console.error('Desktop smoke timeout');app.exit(2);},30000);
  try{
   await new Promise(resolve=>win.webContents.once('did-finish-load',resolve));
   const evalPage=code=>win.webContents.executeJavaScript(code);
   checks.push({test:'native-window',data:await evalPage('({host:QingchiApp.inspect().host,engine:QingchiPond.inspect(),nodeExposed:typeof require!=="undefined"})')});
   const original=await evalPage('document.getElementById("note").value');
   await evalPage('document.getElementById("note").value="桌面壳验收手笺";document.getElementById("note").dispatchEvent(new Event("input",{bubbles:true}));');
   const waitReload=new Promise(resolve=>win.webContents.once('did-finish-load',resolve));win.webContents.reload();await waitReload;
   const restored=await evalPage('document.getElementById("note").value');if(restored!=='桌面壳验收手笺')throw Error('Native persistence failed');checks.push({test:'native-reload-persistence',passed:true});
   await evalPage(`document.getElementById("note").value=${JSON.stringify(original)};document.getElementById("note").dispatchEvent(new Event("input",{bubbles:true}));`);
   win.show();win.focus();win.setAlwaysOnTop(true);
   const renderDeadline=Date.now()+12000;
   while(await evalPage('QingchiPond.inspect().frames')<90){if(Date.now()>renderDeadline)throw Error('Rendering did not advance: '+JSON.stringify(await evalPage('({engine:QingchiPond.inspect(),visibility:document.visibilityState})')));await new Promise(resolve=>setTimeout(resolve,100));}
   checks.push({test:'native-render-advances',passed:true});
   const asset=await evalPage(`new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve({width:i.naturalWidth,height:i.naturalHeight,src:i.src});i.onerror=()=>reject(Error('Pond asset unavailable'));i.src=new URL('assets/clear-pond-v2.png',location.href).href})`);
   if(asset.width<1500)throw Error('Asset dimensions');checks.push({test:'local-pond-asset-decodes',passed:true,data:asset});
   const icon=await evalPage(`new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>{const c=document.createElement('canvas');c.width=c.height=1024;c.getContext('2d').drawImage(i,0,0,1024,1024);resolve(c.toDataURL('image/png').split(',')[1])};i.onerror=reject;i.src='icon.svg'})`);
   fs.writeFileSync(path.join(out,'qingchi-icon-1024.png'),Buffer.from(icon,'base64'));
   const isolation=await evalPage(`(()=>{const n=QingchiPond.inspect().food;document.querySelector('#tab-tasks').click();const a=QingchiPond.inspect().food;document.querySelector('#wallpaper-canvas').dispatchEvent(new MouseEvent('click',{bubbles:true,clientX:600,clientY:350}));return {before:n,afterWidget:a,afterWater:QingchiPond.inspect().food}})()`);
   if(isolation.before!==isolation.afterWidget||isolation.afterWater!==isolation.before+1)throw Error('Input regression');checks.push({test:'widget-water-input-isolation',passed:true,data:isolation});
   await evalPage(`document.querySelector('#pause-pond').click()`);const paused=await evalPage('QingchiPond.inspect()');
   await new Promise(resolve=>setTimeout(resolve,250));const afterPause=await evalPage('QingchiPond.inspect()');
   if(!paused.paused||paused.frames!==afterPause.frames)throw Error('Pause failed');checks.push({test:'pause-freezes-animation',passed:true});
   await evalPage(`document.querySelector('#pause-pond').click();document.querySelector('#tab-focus').click();document.querySelector('#timer-start').click()`);
   const timer=await evalPage(`document.querySelector('#timer-start').textContent`);if(!timer.includes('暂停'))throw Error('Timer failed');
   await evalPage(`document.querySelector('#timer-reset').click();document.querySelector('#tab-note').click();document.querySelector('#immersive').click()`);
   const hidden=await evalPage(`getComputedStyle(document.querySelector('.widgets')).visibility`);if(hidden!=='hidden')throw Error('Immersive failed');
   fs.writeFileSync(path.join(out,'desktop-immersive.png'),(await win.webContents.capturePage()).toPNG());
   await evalPage(`document.querySelector('#restore-widgets').click()`);checks.push({test:'focus-and-immersive-controls',passed:true});
   const screenshot=await win.webContents.capturePage();fs.writeFileSync(path.join(out,'desktop-native.png'),screenshot.toPNG());
   if(checks[0].data.host!=='desktop'||checks[0].data.nodeExposed||checks[0].data.engine.fish<1)throw Error('Native isolation/rendering failed');
   const report={bundled,userData:app.getPath('userData'),platform:process.platform,arch:process.arch,electron:process.versions.electron,checks,windowSize:win.getSize(),windowsWallpaperMount:'NOT_TESTED',result:'PASS'};
   win.setAlwaysOnTop(false);
   fs.writeFileSync(path.join(out,'desktop-smoke.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));clearTimeout(failSafe);app.quit();
  }catch(e){fs.writeFileSync(path.join(out,'desktop-failure.json'),JSON.stringify({error:e.stack,checks,visible:win.isVisible(),focused:win.isFocused()},null,2));console.error(e.stack);clearTimeout(failSafe);app.exit(1);}
 }
});
app.on('window-all-closed',()=>app.quit());
app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});
