'use strict';
const {app,BrowserWindow,ipcMain,Menu,Tray,nativeImage,screen,powerMonitor,Notification}=require('electron');
const path=require('node:path'),{pathToFileURL}=require('node:url');
const {FileStore}=require('./store.cjs');
module.exports=function setup(root,getWin){
 const store=new FileStore(path.join(app.getPath('userData'),'qingchi-save.json'));
 const index=pathToFileURL(path.join(root,'app/index.html')).href;
 let walls=[],tray=null,lastReminder=0;
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
  'import':text=>store.import(text).state,
  'recover':()=>store.recover().state,
  'wallpaper-status':()=>({enabled:!!walls.length}),
  'wallpaper':()=>{if(walls.length)stopWalls();else startWalls();return {enabled:!!walls.length};},
  'remind':text=>{if(typeof text!=='string'||text.length>100)throw Error('提醒内容无效');if(Date.now()-lastReminder<2000)return false;lastReminder=Date.now();const w=getWin();if(w){w.show();w.focus();app.dock?.bounce('informational');}if(Notification.isSupported())new Notification({title:'清池提醒',body:text}).show();return true;}
 }))ipcMain.handle('qc:'+name,(e,...args)=>wrap(e,()=>fn(...args)));
 ipcMain.on('qc:publish',e=>{if(okay(e))publish();});
 function publish(){const s=store.snapshot().state;for(const w of walls)if(!w.isDestroyed())w.webContents.send('qc:pond',{fish:s.life.fish,env:s.life.env,settings:s.components.settings});}
 function showTools(){const w=getWin();if(w){w.show();if(w.isMinimized())w.restore();w.focus();}}
 function broadcast(){const w=getWin();if(w&&!w.isDestroyed())w.webContents.send('qc:wallpaper-status',{enabled:!!walls.length});}
 function stopWalls(){const old=walls;walls=[];for(const w of old)w.destroy();if(tray){tray.destroy();tray=null;}broadcast();}
 function startWalls(){
  if(process.platform!=='darwin')throw Error('本试用版仅验证 Mac 桌面层');
  try{for(const d of screen.getAllDisplays()){
   const w=new BrowserWindow({...d.bounds,type:'desktop',title:'清池桌面观赏',frame:false,show:false,focusable:false,skipTaskbar:true,resizable:true,movable:true,enableLargerThanScreen:true,backgroundColor:'#c5e0cb',webPreferences:{preload:path.join(__dirname,'wallpaper-preload.cjs'),sandbox:true,contextIsolation:true,nodeIntegration:false,backgroundThrottling:false}});
   walls.push(w);w.setIgnoreMouseEvents(true);w.setVisibleOnAllWorkspaces(true,{visibleOnFullScreen:false});
   w.webContents.setWindowOpenHandler(()=>({action:'deny'}));w.webContents.on('will-navigate',e=>e.preventDefault());
   w.webContents.once('did-finish-load',()=>{publish();w.setBounds(d.bounds,false);w.showInactive();w.setBounds(d.bounds,false);w.setResizable(false);w.setMovable(false);});w.loadFile(path.join(root,'app/wallpaper.html'));
  }
  const icon=nativeImage.createFromPath(path.join(root,'app/assets/qingchi-icon-1024.png')).resize({width:18,height:18});
  tray=new Tray(icon);tray.setTitle('清池');tray.setToolTip('清池 · 桌面观赏');tray.setContextMenu(Menu.buildFromTemplate([{label:'打开清池工具',click:showTools},{label:'关闭桌面观赏',click:()=>{stopWalls();showTools();}},{type:'separator'},{label:'退出清池',click:()=>app.quit()}]));
  broadcast();
  }catch(e){stopWalls();throw e;}
 }
 function rebuild(){if(walls.length){stopWalls();try{startWalls();}catch(e){console.error('wallpaper-rebuild',e.message);showTools();}}}
 screen.on('display-added',rebuild);screen.on('display-removed',rebuild);screen.on('display-metrics-changed',rebuild);powerMonitor.on('resume',rebuild);
 app.on('before-quit',stopWalls);
 return {store,inspect:()=>({enabled:!!walls.length,windows:walls.map(w=>({id:w.id,bounds:w.getBounds(),visible:w.isVisible(),focusable:w.isFocusable()})),tray:!!tray}),walls:()=>walls,stopWalls};
};
