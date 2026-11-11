'use strict';
const {app,BrowserWindow,ipcMain,Menu,Tray,nativeImage,screen,powerMonitor,Notification}=require('electron');
const path=require('node:path'),{pathToFileURL}=require('node:url');
const {FileStore}=require('./store.cjs');
module.exports=function setup(root,getWin,{clearSample=false}={}){
 const store=new FileStore(path.join(app.getPath('userData'),'qingchi-save.json'));
 const index=pathToFileURL(path.join(root,'app/index.html')).href;
 let walls=[],tray=null,lastReminder=0,mounting=false;
 const windows=process.platform==='win32'?()=>require('./windows-bridge.cjs').get():null;
 const expedition=pathToFileURL(path.join(root,'app/expedition.html')).href;
 const okay=e=>e.sender===getWin()?.webContents&&[index,expedition].includes(e.senderFrame?.url);
 const weather=require('./weather.cjs').createWeather();
 for(const [key,fn] of [['weather',v=>weather.current(v)],['weather-search',q=>weather.search(q)]])ipcMain.handle('qc:'+key,async(e,v)=>{if(!okay(e))return {ok:false,error:'不允许的来源'};try{return {ok:true,value:await fn(v)};}catch(err){return {ok:false,error:err.message};}});
 const wrap=(e,fn)=>{try{if(!okay(e))throw Error('不允许的调用来源');return {ok:true,value:fn()};}catch(x){return {ok:false,error:x.message};}};
 function readCore(){if(store.blocked)throw Error(store.error);return store.snapshot().state.components;}
 ipcMain.on('qc:read-core',e=>e.returnValue=wrap(e,readCore));
 ipcMain.on('qc:save-core',(e,v)=>e.returnValue=wrap(e,()=>store.core(v)));
 for(const [name,fn] of Object.entries({
  'expedition':()=>{getWin().loadFile(path.join(root,'app/expedition.html'));return true;},
  'pond':()=>{getWin().loadFile(path.join(root,'app/index.html'));return true;},
  'load-life':()=>{if(store.blocked)throw Error(store.error);return store.snapshot().state.life;},
  'save-life':(v,n)=>{const result=store.life(v,n);publish();return result;},
  'export':()=>{if(store.blocked)throw Error('原存档异常，请先恢复备份');return JSON.stringify(store.snapshot().state,null,2);},
  'import':text=>{const s=store.import(text).state;queueMicrotask(()=>tools.broadcast());return s;},
  'recover':()=>{const s=store.recover().state;queueMicrotask(()=>tools.broadcast());return s;},
  'wallpaper-status':()=>({enabled:!!walls.length}),
  'remind':text=>{if(typeof text!=='string'||text.length>100)throw Error('提醒内容无效');if(Date.now()-lastReminder<2000)return false;lastReminder=Date.now();const w=getWin();if(w){w.show();w.focus();app.dock?.bounce('informational');}if(Notification.isSupported())new Notification({title:'桌鱼提醒',body:text}).show();return true;}
 }))ipcMain.handle('qc:'+name,(e,...args)=>wrap(e,()=>fn(...args)));
 ipcMain.handle('qc:wallpaper',async e=>{if(!okay(e))return {ok:false,error:'不允许的来源'};if(mounting)return {ok:false,error:'桌面正在切换，请稍候'};mounting=true;try{if(walls.length)stopWalls();else await startWalls();return {ok:true,value:{enabled:!!walls.length}};}catch(err){return {ok:false,error:err.message};}finally{mounting=false;}});
 ipcMain.on('qc:publish',e=>{if(okay(e))publish();});
 let tools;tools=require('./tools-native.cjs')({store,okay,getWindows:()=>[getWin(),...walls],publish:()=>publish()});
 const wheel=require('./wheel-native.cjs')({root,tools,store,okay,getWin});
 function publish(){const s=store.snapshot().state;for(const w of walls)if(!w.isDestroyed())w.webContents.send('qc:pond',{fish:s.life.fish,garden:s.life.garden,habitats:s.life.habitats,env:s.life.env,settings:s.components.settings,tools:s.tools,power:tools?.runtime()});}
 function showTools(){const w=getWin();if(w){w.show();if(w.isMinimized())w.restore();w.focus();}}
 function broadcast(){const w=getWin();if(w&&!w.isDestroyed())w.webContents.send('qc:wallpaper-status',{enabled:!!walls.length});}
 function stopWalls(){const old=walls;walls=[];for(const w of old){try{if(windows&&!w.isDestroyed())windows().detach(w);}catch{}w.destroy();}if(tray){tray.destroy();tray=null;}broadcast();}
 async function startWalls(){
  if(!['darwin','win32'].includes(process.platform))throw Error('当前平台未提供桌面挂载');
  if(windows)windows();
  try{for(const d of screen.getAllDisplays()){
   const w=new BrowserWindow({...d.bounds,...(windows?{}:{type:'desktop'}),title:'桌鱼桌面观赏',frame:false,show:false,focusable:false,skipTaskbar:true,resizable:true,movable:true,enableLargerThanScreen:true,backgroundColor:'#c5e0cb',webPreferences:{additionalArguments:clearSample?['--qingchi-clear-art-sample=1']:[],preload:path.join(__dirname,'wallpaper-preload.cjs'),sandbox:true,contextIsolation:true,nodeIntegration:false,backgroundThrottling:false}});
   walls.push(w);w.setIgnoreMouseEvents(true);if(!windows)w.setVisibleOnAllWorkspaces(true,{visibleOnFullScreen:false});
   w.webContents.setWindowOpenHandler(()=>({action:'deny'}));w.webContents.on('will-navigate',e=>e.preventDefault());
   await w.loadFile(path.join(root,'app/wallpaper.html'));publish();w.setBounds(d.bounds,false);if(windows)windows().attach(w);w.showInactive();if(!windows)w.setBounds(d.bounds,false);w.setResizable(false);w.setMovable(false);
  }
  const icon=nativeImage.createFromPath(path.join(root,'app/assets/qingchi-icon-1024.png')).resize({width:18,height:18});
  tray=new Tray(icon);if(!windows)tray.setTitle('桌鱼');tray.setToolTip('桌鱼 · 桌面观赏');tray.setContextMenu(Menu.buildFromTemplate([{label:'打开桌鱼',click:showTools},{label:'关闭鱼池',click:()=>{stopWalls();showTools();}},{type:'separator'},{label:'退出桌鱼',click:()=>app.quit()}]));
  broadcast();
  }catch(e){stopWalls();throw e;}
 }
 async function rebuild(){if(!walls.length||mounting)return;mounting=true;stopWalls();try{await startWalls();}catch(e){console.error('wallpaper-rebuild',e.message);showTools();}finally{mounting=false;}}
 const health=windows?setInterval(()=>{if(walls.some(w=>!w.isDestroyed()&&!windows().healthy(w)))rebuild();},3000):null;health?.unref?.();
 screen.on('display-added',rebuild);screen.on('display-removed',rebuild);screen.on('display-metrics-changed',rebuild);powerMonitor.on('resume',rebuild);
 app.on('before-quit',()=>{if(health)clearInterval(health);wheel.stop();tools.stop();stopWalls();});
 return {store,tools,wheel,inspect:()=>({enabled:!!walls.length,windows:walls.map(w=>({id:w.id,bounds:w.getBounds(),visible:w.isVisible(),focusable:w.isFocusable()})),tray:!!tray}),walls:()=>walls,stopWalls};
};
