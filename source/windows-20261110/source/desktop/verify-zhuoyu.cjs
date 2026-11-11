'use strict';
module.exports=async({app,win,native,root})=>{
const fs=require('node:fs'),path=require('node:path'),out=process.env.QINGCHI_VERIFY_OUT||path.join(app.getPath('userData'),'verification');fs.mkdirSync(out,{recursive:true});const checks=[];const evaluate=s=>win.webContents.executeJavaScript(s);const wait=async(s)=>{const end=Date.now()+20000;while(!await evaluate(s)){if(Date.now()>end)throw Error('Timeout: '+s);await new Promise(r=>setTimeout(r,100));}};const timeout=setTimeout(()=>app.exit(3),75000);
try{
 await wait("window.QingchiLife&&window.QingchiScene&&window.QingchiPond&&window.QingchiSeasonWater?.inspect().ready");
 win.show();await wait('QingchiPond.inspect().frames>10');
 checks.push({kind:'host',value:await evaluate('({platform:qingchiDesktop.platform,host:QingchiApp.inspect().host,nodeExposed:typeof require!=="undefined",scene:QingchiScene.inspect().season,fish:QingchiPond.inspect().fish})')});
 for(const season of ['spring','summer','autumn']){
  for(const [id,value] of [['season',season],['daylight','day'],['weather','clear']]){
   await evaluate(`(()=>{const el=document.getElementById(${JSON.stringify(id)});el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('change',{bubbles:true}));})()`);
   await wait(`QingchiLife.inspect().state.env[${JSON.stringify(id==='daylight'?'light':id)}]===${JSON.stringify(value)}`);
  }
  await wait(`QingchiScene.inspect().season===${JSON.stringify(season)}&&QingchiSeasonWater.inspect().ready`);
  checks.push({kind:'season',value:await evaluate('({season:QingchiScene.inspect().season,assets:QingchiScene.inspect().assets,water:QingchiSeasonWater.inspect(),fish:QingchiPond.inspect().fishArt})')});
  fs.writeFileSync(path.join(out,season+'.png'),(await win.webContents.capturePage()).toPNG());
 }
 const original=await evaluate('document.querySelector("#note").value');
 await evaluate(`document.querySelector('#note').value='ZHUOYU_ISOLATED_PERSISTENCE_TEST';document.querySelector('#note').dispatchEvent(new Event('input',{bubbles:true}))`);
 const loaded=new Promise(r=>win.webContents.once('did-finish-load',r));win.webContents.reload();await loaded;await wait('window.QingchiApp&&window.QingchiLife?.inspect().ready&&QingchiPond.inspect().frames>5');
 const restored=await evaluate('document.querySelector("#note").value');if(restored!=='ZHUOYU_ISOLATED_PERSISTENCE_TEST')throw Error('Note did not persist');
 await evaluate(`document.querySelector('#note').value=${JSON.stringify(original)};document.querySelector('#note').dispatchEvent(new Event('input',{bubbles:true}))`);
 checks.push({kind:'restart-persistence',note:true,season:await evaluate('QingchiLife.inspect().state.env.season')});
 const feed=await evaluate(`(()=>{const p=QingchiPond.inspect().food;document.querySelector('#wallpaper-canvas').dispatchEvent(new MouseEvent('click',{bubbles:true,clientX:innerWidth/2,clientY:innerHeight/2}));return {before:p,after:QingchiPond.inspect().food}})()`);if(feed.after!==feed.before+1)throw Error('Synthetic feed event failed');checks.push({kind:'synthetic-feed-contract',value:feed});
 const report={result:'PASS',platform:process.platform,arch:process.arch,userData:app.getPath('userData'),checks,windowsDesktopMount:'NOT_TESTED',windowsAlt:'NOT_TESTED',note:'Renderer/native storage checks on actual host only; not cross-platform runtime acceptance.'};fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));clearTimeout(timeout);app.quit();
}catch(e){const report={result:'FAIL',error:e.stack,checks};fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));console.error(e.stack);clearTimeout(timeout);app.exit(1);}
};
