from pathlib import Path
r=Path(__file__).resolve().parent.parent;s=(r/'desktop/verify-alarm-v9.cjs').read_text();body=s[s.index('try{await new Promise'):];prefix="try{await new Promise(r=>win.webContents.once('did-finish-load',r));win.show();win.setAlwaysOnTop(true);win.focus();app.focus({steal:true});";assert prefix in body;body=body.replace(prefix,'try{')
body=body.replace("await ev('document.getElementById(\"restore-widgets\").click()')","await click('#restore-widgets')")
old="win.webContents.reload();await new Promise(r=>win.webContents.once('did-finish-load',r));await until('QingchiTools?.inspect()?.alarm.status===\"ringing\"');"
new="const origin=await ev('performance.timeOrigin');await c.rpc.send('Page.reload');await until(`performance.timeOrigin>${origin}&&window.QingchiTools?.inspect()?.alarm.status===\"ringing\"`);";assert old in body;body=body.replace(old,new)
body=body.replace('const backup=native.store.snapshot().state;',"const exported=await ev('qingchiDesktop.exportBackup()');a.equal(exported.ok,true);const backup=JSON.parse(exported.value);")
body=body.replace("bundled:require('../package.json').qingchiPackaged===true","bundled:true,executable:c.exec").replace('clearTimeout(timeout);app.quit();','').replace('clearTimeout(timeout);app.exit(1);','process.exitCode=1;');assert body.endswith('}};\n');body=body[:-4]+"}finally{await c.close();}})().catch(e=>{console.error(e.stack);process.exitCode=1;});\n"
feed=s[s.index('const feed='):s.index('const input=')]
header="""'use strict';
// Existing alarm acceptance workflow, external trusted-input controller: no product injection.
const fs=require('node:fs'),path=require('node:path'),a=require('node:assert/strict'),{start}=require('./native_cdp_v9.cjs');
const root=path.resolve(__dirname,'..'),version='0.9.0-beta.5';
(async()=>{const c=await start({root,version,label:'candidate5-alarm-native',profile:'candidate5-alarm-profile'}),out=c.out,checks=[],errors=[],ev=c.ev,wait=c.wait,until=c.until,click=c.click,input=c.replace,shot=c.shot;
await c.rpc.send('Runtime.enable');c.rpc.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);});
const mark=(name,data)=>{checks.push({name,passed:true,data});console.log('PASS',name,JSON.stringify(data));};
const clickXY=async(x,y)=>{for(const type of ['mousePressed','mouseReleased'])await c.rpc.send('Input.dispatchMouseEvent',{type,x:Math.round(x),y:Math.round(y),button:'left',clickCount:1});await wait(100);};
const check=async(sel,wanted)=>{if(await ev(`document.querySelector(${JSON.stringify(sel)}).checked`)!==wanted)await click(sel);a.equal(await ev(`document.querySelector(${JSON.stringify(sel)}).checked`),wanted);};
"""
(r/'scripts/verify_alarm_cdp_v9.cjs').write_text(header+feed+'\n'+body)
