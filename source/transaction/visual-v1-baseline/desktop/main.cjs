const {app,BrowserWindow,session,Menu}=require('electron');
const path=require('node:path'),fs=require('node:fs'),{pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..');
// Development data is task-scoped, not a global Electron profile.
app.setPath('userData',path.join(root,'runtime-profile'));
app.name='清池';
if(!app.requestSingleInstanceLock())app.exit(0);
app.on('second-instance',()=>{if(win){if(win.isMinimized())win.restore();win.focus();}});
const smoke=process.argv.includes('--verify-shell');
const index=pathToFileURL(path.join(root,'app/index.html')).href;
let win;
function createWindow(){
 win=new BrowserWindow({width:1280,height:820,minWidth:680,minHeight:560,title:'清池 · 桌面小憩',backgroundColor:'#173e39',show:false,webPreferences:{preload:path.join(__dirname,'preload.cjs'),nodeIntegration:false,contextIsolation:true,sandbox:true,webSecurity:true}});
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
  const checks=[];const out=path.join(root,'evidence');fs.mkdirSync(out,{recursive:true});
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
   const renderDeadline=Date.now()+7000;
   while(await evalPage('QingchiPond.inspect().frames')<90){if(Date.now()>renderDeadline)throw Error('Rendering did not advance');await new Promise(resolve=>setTimeout(resolve,100));}
   checks.push({test:'native-render-advances',passed:true});
   const screenshot=await win.webContents.capturePage();fs.writeFileSync(path.join(out,'desktop-native.png'),screenshot.toPNG());
   if(checks[0].data.host!=='desktop'||checks[0].data.nodeExposed||checks[0].data.engine.fish<1)throw Error('Native isolation/rendering failed');
   const report={platform:process.platform,arch:process.arch,electron:process.versions.electron,checks,windowSize:win.getSize(),windowsWallpaperMount:'NOT_TESTED',result:'PASS'};
   fs.writeFileSync(path.join(out,'desktop-smoke.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));clearTimeout(failSafe);app.quit();
  }catch(e){console.error(e.stack);clearTimeout(failSafe);app.exit(1);}
 }
});
app.on('window-all-closed',()=>app.quit());
app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});
