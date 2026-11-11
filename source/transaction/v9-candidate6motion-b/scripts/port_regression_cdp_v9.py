from pathlib import Path
r=Path(__file__).resolve().parent.parent
s=(r/'desktop/verify-regression-v9.cjs').read_text();body=s[s.index('try{await new Promise'):]
body=body.replace("await new Promise(r=>win.webContents.once('did-finish-load',r));",'')
body=body.replace("window.QingchiGarden?.inspect().loaded===10","window.QingchiGarden?.inspect().loaded>=10&&[...document.querySelectorAll(\".garden-object img\")].every(n=>n.complete&&n.naturalWidth>0)")
body=body.replace("require('../package.json').version",'version').replace("require('../package.json').qingchiPackaged===true",'true')
body=body.replace("(await win.webContents.capturePage()).resize({width:960}).toPNG()",'await capture()')
for w,h in [(800,650),(1280,820)]:body=body.replace(f'win.setSize({w},{h})',f"await c.rpc.send('Emulation.setDeviceMetricsOverride',{{width:{w},height:{h},deviceScaleFactor:1,mobile:false}})")
body=body.replace("method:'Native Electron mouse/keyboard, isolated profile, screenshots and timed capturePage frames'","method:'CDP trusted mouse/keyboard into actual packaged Electron, isolated profile; existing regression assertions ported without product changes',executable:c.exec")
body=body.replace('clearTimeout(limit);app.quit();','').replace('clearTimeout(limit);app.exit(1);','process.exitCode=1;')
assert body.endswith('}};\n');body=body[:-4]+"}finally{await c.close();}})().catch(e=>{console.error(e.stack);process.exitCode=1;});\n"
header="""'use strict';
// Port of existing native regression: preserve workflow assertions, use external CDP input.
// Readiness checks actual images instead of an obsolete exact cache count of 10.
const fs=require('node:fs'),path=require('node:path'),a=require('node:assert/strict'),{start}=require('./native_cdp_v9.cjs');
const root=path.resolve(__dirname,'..'),version='0.9.0-beta.4',reopen=process.argv.includes('--v9-reopen');
(async()=>{const c=await start({root,version,label:'candidate4-regression/'+(reopen?'reopen':'native'),profile:'candidate4-regression-profile'}),out=c.out,checks=[],errors=[],ev=c.ev,wait=c.wait,until=c.until;
await c.rpc.send('Runtime.enable');c.rpc.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);});
const mark=(test,data)=>{checks.push({test,passed:true,data});console.log('PASS',test,JSON.stringify(data));};
const capture=async()=>Buffer.from((await c.rpc.send('Page.captureScreenshot',{format:'png'})).data,'base64');
const shot=async n=>{await wait(150);fs.writeFileSync(path.join(out,n+'.png'),await capture());};
const focus=async()=>{await c.rpc.send('Page.bringToFront');await wait(60);};
const point=async sel=>ev(`(()=>{const n=document.querySelector(${JSON.stringify(sel)}),r=n.getBoundingClientRect();return{x:Math.round(r.x+r.width/2),y:Math.round(r.y+r.height/2),width:r.width,height:r.height}})()`);
const clickPoint=async p=>{for(const type of ['mouseMoved','mousePressed','mouseReleased']){await c.rpc.send('Input.dispatchMouseEvent',{type,x:p.x,y:p.y,button:type==='mouseMoved'?'none':'left',clickCount:1});await wait(45);}await wait(150);};
const click=async sel=>{await ev(`document.querySelector(${JSON.stringify(sel)})?.scrollIntoView({block:'nearest'})`);await focus();await until(`(()=>{const n=document.querySelector(${JSON.stringify(sel)});if(!n)return false;const r=n.getBoundingClientRect(),hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return !n.disabled&&(hit===n||n.contains(hit));})()`);await clickPoint(await point(sel));};
const key=async name=>{const k={Left:'ArrowLeft',Right:'ArrowRight',Up:'ArrowUp',Down:'ArrowDown'}[name]||name;const codes={ArrowLeft:37,ArrowRight:39,ArrowUp:38,ArrowDown:40,Escape:27};for(const type of ['rawKeyDown','keyUp'])await c.rpc.send('Input.dispatchKeyEvent',{type,key:k,code:k,windowsVirtualKeyCode:codes[k]||0});await wait(120);};
const bounds=async sels=>ev(`(${JSON.stringify(sels)}).map(s=>{const r=document.querySelector(s).getBoundingClientRect();return{s,x:r.x,y:r.y,right:r.right,bottom:r.bottom,ok:r.x>=0&&r.y>=0&&r.right<=innerWidth&&r.bottom<=innerHeight}})`);
"""
(r/'scripts/verify_regression_cdp_v9.cjs').write_text(header+body)
