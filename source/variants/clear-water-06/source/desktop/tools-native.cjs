/* Native scheduler owns wall-clock deadlines even when every renderer is hidden.
 * No OS notification or focus stealing unless the saved user options opt in. */
'use strict';const {ipcMain,powerMonitor,Notification}=require('electron'),T=require('../app/tools-core.js');
module.exports=function({store,okay,getWindows,publish}){let timer,stopped=false;const watchers=new Set();let system={available:false,fullscreen:null};
const state=()=>store.snapshot().state.tools;
const runtime=()=>T.powerState(state().power,system);
function sendPower(){for(const w of getWindows())if(w&&!w.isDestroyed())w.webContents.send('qc:power-state',runtime());}
function broadcast(){sendPower();const value=state();for(const w of getWindows())if(w&&!w.isDestroyed())w.webContents.send('qc:tools-state',value);publish();for(const fn of watchers)fn(value);}
function apply(action){if(store.blocked)throw Error(store.error);const result=T.dispatch(state(),action);if(JSON.stringify(result.state)!==JSON.stringify(state())){store.tools(result.state);broadcast();}if(result.event==='ring'){const t=result.state.alarm;if(!t.quiet){if(t.notify&&Notification.isSupported())new Notification({title:'清池提醒',body:t.label,silent:true}).show();if(t.strong){const w=getWindows()[0];w?.show();w?.focus();}}}return state();}
ipcMain.handle('qc:power-read',e=>okay(e)?{ok:true,value:runtime()}:{ok:false,error:'denied'});
ipcMain.handle('qc:tools-read',e=>{if(!okay(e))return{ok:false,error:'不允许的来源'};return{ok:true,value:state()};});
ipcMain.handle('qc:tools-action',(e,action)=>{if(!okay(e))return{ok:false,error:'不允许的来源'};try{if(!['alarm-config','alarm-start','alarm-pause','alarm-cancel','alarm-complete','power-config'].includes(action?.type))throw Error('不允许的工具操作');return{ok:true,value:apply(action)};}catch(err){return{ok:false,error:err.message};}});
function tick(recovered=false){if(stopped||store.blocked)return;try{apply({type:'alarm-tick',recovered});}catch(e){console.error('tool-scheduler',e.message);}}
const resumed=()=>tick(true);timer=setInterval(tick,200);powerMonitor.on('resume',resumed);tick(true);
return{state,apply,broadcast,runtime,setSystem(value){system={available:value.available===true,fullscreen:value.fullscreen,source:value.source};sendPower();publish();},onChange(fn){watchers.add(fn);return()=>watchers.delete(fn);},stop(){stopped=true;clearInterval(timer);powerMonitor.removeListener('resume',resumed);}};
};
