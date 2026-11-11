'use strict';
const {app,BrowserWindow,ipcMain,globalShortcut,screen,shell,dialog}=require('electron'),fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process'),{pathToFileURL}=require('node:url'),T=require('../app/tools-core.js'),L=require('../app/launcher-core.js');
module.exports=function({root,tools,store,okay,getWin}){
 const helper=path.join(root,'desktop/native-helper/QingchiSystemBridge'),wheelURL=pathToFileURL(path.join(root,'app/wheel.html')).href;
 let win=null,registered='',previousPID=0,byOption=false,child=null,lastConfig='',stopped=false,generation=0,closeTask=null,altTimer=null,releaseRequested=false;
 let system={accessibility:false,monitor:false,fullscreen:null,available:false,pid:0},status={active:false,requested:'Option',reason:'waiting'};
 const events=[];let windows=null,windowsStop=null,previousHWND='0';
 if(process.platform==='win32'){try{windows=require('./windows-bridge.cjs').get();}catch(e){status.reason='Windows 原生组件加载失败：'+e.message;}}
 const log=(event,data={})=>{events.push({event,at:Date.now(),...data});if(events.length>100)events.shift();};
 function runHelper(args){return new Promise(resolve=>{if(process.platform!=='darwin'||!fs.existsSync(helper))return resolve(null);cp.execFile(helper,args,{timeout:2500,maxBuffer:8192},(_err,stdout)=>{try{resolve(JSON.parse(stdout.trim().split('\n').at(-1)));}catch{resolve(null);}});});}
 function adopt(p){if(typeof p!=='string')throw Error('请选择本机绝对路径');let st;try{st=fs.statSync(p);}catch{throw Error('路径不存在或无法访问，请重新选择');}if(!st.isFile()&&!st.isDirectory())throw Error('仅支持应用、文件夹和普通文件');return L.slotFromStat(p,{platform:process.platform,isFile:st.isFile(),isDirectory:st.isDirectory()});}
 function shortcutOf(file){if(process.platform!=='win32'||!file.toLowerCase().endsWith('.lnk')||typeof shell.readShortcutLink!=='function')return null;try{return shell.readShortcutLink(file);}catch{return null;}}
 function place(a){
  if(a.kind==='action')return L.normalizeSlot({kind:'action',path:a.path,label:a.label||''});
  if(a.kind==='url'||L.looksLikeUrl(a.path))return L.normalizeSlot({kind:'url',path:a.path,label:a.label||''});
  const slot=adopt(a.path);if(a.label!==undefined)slot.label=a.label;return slot;
 }
 const launchIo={
  openExternal:url=>shell.openExternal(url),
  openPath:p=>shell.openPath(p),
  spawn(file,args,opts){return new Promise((resolve,reject)=>{let child;try{child=cp.spawn(file,args,opts);}catch(e){reject(e);return;}child.once('error',reject);child.once('spawn',()=>resolve(child));});},
  async action(id){const m=getWin();if(!m||m.isDestroyed())throw Error('鱼池窗口不可用');if(m.isMinimized())m.restore();m.show();m.focus();m.webContents.send('qc:wheel-invoke',id);}
 };
 async function decorate(s,i){
  if(!s)return {index:i,empty:true};
  if(s.kind==='url'||s.kind==='action')return {...s,index:i,exists:true,icon:''};
  let exists=true,icon='';try{adopt(s.path);try{icon=(await app.getFileIcon(s.path,{size:'normal'})).toDataURL();}catch{icon='';}}catch{exists=false;}
  return {...s,index:i,exists,icon};
 }
 async function view(){const w=tools.state().wheel,slots=await Promise.all(w.slots.map(decorate));return {config:w,slots,status:{...status,hold:byOption},system:{...system}};}
 function notify(){view().then(v=>{const m=getWin();if(m&&!m.isDestroyed())m.webContents.send('qc:wheel-state',v);if(win&&!win.isDestroyed())win.webContents.send('qc:wheel-state',v);});}
 function noteRelease(){releaseRequested=true;if(byOption)close();}
 function close(restore=true){
  if(closeTask)return closeTask;
  const mine=++generation,wasVisible=!!(win&&!win.isDestroyed()&&win.isVisible());byOption=false;log('cancel',{restore,wasVisible});
  if(!wasVisible)return Promise.resolve();
  closeTask=(async()=>{
   try{
    try{win.webContents.send('qc:wheel-closing');}catch{}
    await new Promise(r=>setTimeout(r,150));
    if(mine!==generation||!win||win.isDestroyed())return;
    win.hide();notify();
    if(restore&&windows&&previousHWND!=='0')windows.activate(previousHWND);
    else if(restore&&previousPID&&previousPID!==process.pid)await runHelper(['--activate',String(previousPID)]);
   }finally{closeTask=null;}
  })();
  return closeTask;
 }
 async function show(option=false){
  if(stopped||!tools.state().wheel.enabled)return;
  if((win&&!win.isDestroyed()&&win.isVisible())||closeTask){if(option){generation++;return;}await close();return;}
  releaseRequested=false;const mine=++generation;const front=windows?windows.front():await runHelper(['--frontmost']);
  if(mine!==generation||(option&&releaseRequested))return;
  previousPID=front?.pid||0;previousHWND=front?.hwnd||'0';byOption=option;
  if(option&&releaseRequested){byOption=false;return;}
  const cursor=screen.getCursorScreenPoint(),d=screen.getDisplayNearestPoint(cursor),bounds=T.wheelBounds(cursor,d.workArea,400);
  if(!win||win.isDestroyed()){
   win=new BrowserWindow({...bounds,transparent:true,frame:false,show:false,resizable:false,movable:false,skipTaskbar:true,alwaysOnTop:true,hasShadow:false,webPreferences:{preload:path.join(root,'desktop/wheel-preload.cjs'),sandbox:true,contextIsolation:true,nodeIntegration:false}});
   win.webContents.setWindowOpenHandler(()=>({action:'deny'}));win.webContents.on('will-navigate',e=>e.preventDefault());win.on('blur',()=>{if(win?.isVisible())close(false);});
   await win.loadFile(path.join(root,'app/wheel.html'));
  }
  if(mine!==generation||(option&&releaseRequested)){byOption=false;return;}
  win.setBounds(bounds);win.setAlwaysOnTop(true,'floating');if(process.platform==='darwin')win.setVisibleOnAllWorkspaces(true,{visibleOnFullScreen:true});
  win.show();win.focus();notify();log('shown',{displayId:d.id,bounds,byOption,previousPID});
 }
 function configure(){
  const c=tools.state().wheel,key=JSON.stringify([c.enabled,c.shortcut]);if(key===lastConfig)return;lastConfig=key;
  if(registered){globalShortcut.unregister(registered);registered='';}
  status={active:false,requested:c.shortcut,reason:!c.enabled?'disabled':c.shortcut==='Option'?'permission-required':'conflict'};
  if(c.enabled&&c.shortcut==='Option'){status.active=process.platform==='win32'?!!windows:system.accessibility&&system.monitor;status.reason=status.active?(windows?'global-alt':'global-option'):(process.platform==='win32'?'win32-bridge-unavailable':'permission-required');}
  else if(c.enabled){try{if(globalShortcut.register(c.shortcut,()=>{log('global-shortcut-fired',{shortcut:c.shortcut});show(false);})){registered=c.shortcut;status.active=true;status.reason='global-shortcut';}}catch(e){status.reason=e.message;}}
  notify();
 }
 function saveWheel(value){
  const prior=tools.state(),next=T.dispatch(prior,{type:'wheel-config',value}).state;
  if(next.wheel.enabled&&next.wheel.shortcut!=='Option'&&next.wheel.shortcut!==registered){let reserved=false;try{reserved=globalShortcut.register(next.wheel.shortcut,()=>{log('global-shortcut-fired',{shortcut:next.wheel.shortcut});show(false);});}catch{}if(!reserved)throw Error('快捷键已被占用或系统拒绝；原快捷键保留');globalShortcut.unregister(next.wheel.shortcut);}
  store.tools(next);tools.broadcast();configure();return view();
 }
 const wheelOkay=e=>win&&!win.isDestroyed()&&e.sender===win.webContents&&e.senderFrame?.url===wheelURL;
 ipcMain.handle('qc:wheel-read',async e=>okay(e)||wheelOkay(e)?{ok:true,value:await view()}:{ok:false,error:'不允许的来源'});
 ipcMain.handle('qc:wheel-action',async(e,a)=>{if(!okay(e))return {ok:false,error:'不允许的来源'};try{
  const current=tools.state().wheel;let slots=current.slots.map(s=>s&&({...s}));
  const index=()=>{if(!Number.isInteger(a.index)||a.index<0||a.index>=slots.length)throw Error('无效槽位');return a.index;};
  if(a.type==='show'){await show(!!a.hold);return {ok:true,value:await view()};}
  if(a.type==='cancel'){await close();return {ok:true,value:await view()};}
  if(a.type==='configure'){if(a.value.slots)throw Error('槽位必须逐个选择');if(a.value.count!==undefined){if(!Number.isInteger(a.value.count)||a.value.count<6||a.value.count>10)throw Error('槽位数量应为 6–10');if(a.value.count<slots.length&&slots.slice(a.value.count).some(Boolean))throw Error('请先清除将被隐藏的槽位');slots=Array.from({length:a.value.count},(_,i)=>slots[i]||null);}return {ok:true,value:await saveWheel({...a.value,slots})};}
  if(a.type==='choose'){const i=index(),folder=a.kind==='folder',props=process.platform==='win32'?(folder?['openDirectory']:['openFile']):['openFile','openDirectory'];const options={title:folder?'选择文件夹':'选择应用或文件',properties:props};if(process.platform==='win32'&&!folder)options.filters=[{name:'应用',extensions:['exe','lnk','com']},{name:'所有文件',extensions:['*']}];const r=await dialog.showOpenDialog(getWin(),options);if(r.canceled||!r.filePaths[0])return {ok:true,value:await view()};slots[i]=adopt(r.filePaths[0]);}
  else if(a.type==='put')slots[index()]=place(a);
  else if(a.type==='rename'){const i=index();if(!slots[i])throw Error('空槽位不能命名');slots[i].label=a.label;}
  else if(a.type==='clear')slots[index()]=null;
  else if(a.type==='swap'){const i=index();if(!Number.isInteger(a.to)||a.to<0||a.to>=slots.length)throw Error('无效位置');[slots[i],slots[a.to]]=[slots[a.to],slots[i]];}
  else throw Error('未知轮盘操作');
  return {ok:true,value:await saveWheel({slots})};
 }catch(err){return {ok:false,error:err.message};}});
 ipcMain.handle('qc:wheel-run',async(e,index)=>{if(!wheelOkay(e)||!win.isVisible())return {ok:false,error:'不允许的来源'};try{
  if(!Number.isInteger(index))throw Error('无效槽位');const s=tools.state().wheel.slots[index];if(!s)throw Error('空槽位，请先在设置中添加目标');
  if(s.kind!=='url'&&s.kind!=='action')adopt(s.path);
  const plan=L.launchPlan(s,{platform:process.platform,link:shortcutOf(s.path||'')});
  await L.performLaunch(plan,launchIo);log('opened',{index,kind:s.kind,path:s.path,via:plan.reason});await close(false);return {ok:true};
 }catch(err){log('open-failed',{index});return {ok:false,error:err.message};}});
 ipcMain.on('qc:wheel-cancel',e=>{if(wheelOkay(e))close();});
 const unsubscribe=tools.onChange(()=>{configure();notify();});
 if(process.platform==='darwin'&&fs.existsSync(helper)){
  child=cp.spawn(helper,['--watch',String(process.pid)],{stdio:['ignore','pipe','pipe']});let buffer='';child.stdout.setEncoding('utf8');
  child.stdout.on('data',data=>{buffer+=data;if(buffer.length>65536){buffer='';return;}let idx;while((idx=buffer.indexOf('\n'))>=0){const line=buffer.slice(0,idx);buffer=buffer.slice(idx+1);try{const m=JSON.parse(line);
   if(m.event==='option-down'&&tools.state().wheel.shortcut==='Option')show(true);
   else if(m.event==='option-up')noteRelease();
   else if(m.event==='monitor'||m.event==='permission'){system.accessibility=!!m.accessibility;if(m.event==='monitor')system.monitor=!!m.installed;if(!system.accessibility)system.monitor=false;lastConfig='';configure();}
   else if(m.event==='frontmost'){system={...system,...m};tools.setSystem(system);notify();}
  }catch{}}});
  child.stderr.on('data',()=>{});child.on('error',e=>{status.reason='helper-error';log('helper-error',{message:e.message});});child.on('exit',()=>{system.monitor=false;status.active=!!registered;notify();});
 }
 if(windows){system={...system,accessibility:true,monitor:true};windowsStop=windows.watch({enabled:()=>tools.state().wheel.enabled&&tools.state().wheel.shortcut==='Option',onAltDown:()=>{clearTimeout(altTimer);altTimer=setTimeout(()=>show(true),180);},onAltUp:()=>{clearTimeout(altTimer);noteRelease();},onSystem:v=>{system={...system,...v};tools.setSystem(system);notify();}});}
 configure();
 return {show,close,view,inspect:()=>({status:{...status,hold:byOption},system,registered,events:[...events],visible:!!win?.isVisible()}),window:()=>win,stop(){stopped=true;clearTimeout(altTimer);windowsStop?.();unsubscribe();if(registered)globalShortcut.unregister(registered);child?.kill();if(win&&!win.isDestroyed())win.destroy();}};
};
