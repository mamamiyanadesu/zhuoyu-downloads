'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
module.exports=async({app,win,native,root})=>{
 const out=process.env.QINGCHI_VERIFY_OUT||path.join(root,'evidence/v3/native');fs.mkdirSync(out,{recursive:true});
 const checks=[],errors=[];const wait=ms=>new Promise(r=>setTimeout(r,ms));const ev=code=>win.webContents.executeJavaScript(code);
 win.webContents.on('console-message',e=>{if(e.level==='error')errors.push(e.message);});
 const timeout=setTimeout(()=>{console.error('Life verification timeout');app.exit(2);},180000);
 const mark=(test,data)=>{checks.push({test,passed:true,data});console.log('PASS',test,JSON.stringify(data||''));};
 const until=async(code,ms=12000)=>{const end=Date.now()+ms;while(!await ev(code)){if(Date.now()>end)throw Error('Timeout: '+code);await wait(70);}};
 const click=async selector=>{const p=await ev(`(()=>{const r=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();return {x:Math.round(r.x+r.width/2),y:Math.round(r.y+r.height/2)}})()`);win.webContents.sendInputEvent({type:'mouseDown',button:'left',clickCount:1,...p});win.webContents.sendInputEvent({type:'mouseUp',button:'left',clickCount:1,...p});await wait(100);};
 const shot=async name=>{await wait(220);fs.writeFileSync(path.join(out,name+'.png'),(await win.webContents.capturePage()).toPNG());};
 try{
  await new Promise(resolve=>win.webContents.once('did-finish-load',resolve));win.show();win.focus();win.setAlwaysOnTop(true);
  await until('window.QingchiLife?.inspect().ready && !QingchiLife.inspect().blocked');
  await ev('window.confirm=()=>true;void 0'); // test-only acceptance of explicit confirmation UI, not shipped behavior
  assert.equal(await ev('typeof require'),'undefined');mark('isolated-native-store-ready',native.store.snapshot().state.life.revision);
  await until('QingchiPond.inspect().frames>15');await shot('01-pond');
  await click('#life-open');await click('#new-fish');
  await ev(`document.querySelector('#fish-name').value='青禾 · 自绘验收';document.querySelector('#fish-name').dispatchEvent(new Event('input',{bubbles:true}));`);
  const b=await ev(`(()=>{const r=document.querySelector('#fish-editor').getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height}})()`);
  const pt=(x,y)=>({x:Math.round(b.x+b.w*x),y:Math.round(b.y+b.h*y)});
  win.webContents.sendInputEvent({type:'mouseDown',button:'left',clickCount:1,...pt(.4,.45)});
  for(let i=0;i<=16;i++){win.webContents.sendInputEvent({type:'mouseMove',button:'left',modifiers:['leftButtonDown'],...pt(.4+i*.012,.45+Math.sin(i*.4)*.065)});await wait(60);await ev('void 0');}
  win.webContents.sendInputEvent({type:'mouseUp',button:'left',clickCount:1,...pt(.592,.46)});await wait(100);
  assert.match(await ev('document.querySelector("#stroke-count").textContent'),/1 笔/);
  await click('#brush-undo');assert.match(await ev('document.querySelector("#stroke-count").textContent'),/0 笔/);await click('#brush-redo');await shot('02-draw-fish');
  await click('#fish-save');await until('QingchiLife.inspect().state.fish.length===1');
  const id=await ev('QingchiLife.inspect().state.fish[0].id');assert.ok((await ev('QingchiLife.inspect().state.fish[0].strokes[0].points.length'))>8);mark('draw-undo-redo-save-place',{id});await shot('03-my-fish');
  await click('#life-close');
  const end=Date.now()+22000;while(await ev('QingchiLife.inspect().state.fish[0].fed')===0&&Date.now()<end){const f=await ev('QingchiPond.ranking().find(f=>f.custom)');win.webContents.sendInputEvent({type:'mouseDown',button:'left',clickCount:1,x:Math.round(f.x),y:Math.round(f.y)});win.webContents.sendInputEvent({type:'mouseUp',button:'left',clickCount:1,x:Math.round(f.x),y:Math.round(f.y)});await wait(500);}
  assert.ok(await ev('QingchiLife.inspect().state.fish[0].fed>0'));mark('real-pond-feed-growth-ranking',await ev('QingchiLife.inspect().state.fish[0]'));
  await click('#environment-open');await ev(`for(const [id,value] of [['season','winter'],['daylight','night'],['weather','snow']]){const e=document.getElementById(id);e.value=value;e.dispatchEvent(new Event('change',{bubbles:true}));}`);
  await until('QingchiEnvironment.inspect().weather==="snow"');await click('#preview-environment');await wait(1400);await shot('04-winter-night');mark('environment-winter-night-snow',await ev('QingchiEnvironment.inspect()'));
  // Return to clear daylight for game readability.
  await click('#environment-open');await ev(`for(const [id,value] of [['season','summer'],['daylight','day'],['weather','clear']]){const e=document.getElementById(id);e.value=value;e.dispatchEvent(new Event('change',{bubbles:true}));}`);await wait(200);await click('[data-life-tab="fishing"]');
  for(let round=1;round<=4;round++){
   await click('#cast-button');await until('QingchiLife.inspect().fishing?.phase==="bite"');await click('#cast-button');let holding=false;const limit=Date.now()+19000;
   while(Date.now()<limit){const s=await ev('QingchiLife.inspect().fishing');if(s.phase!=='tug')break;const next=s.tension<s.target;if(next!==holding){win.webContents.sendInputEvent({type:next?'keyDown':'keyUp',keyCode:'Space'});holding=next;}await wait(35);}
   win.webContents.sendInputEvent({type:'keyUp',keyCode:'Space'});
   await until(`QingchiLife.inspect().state.records.catches===${round}`,3000);mark('interactive-fishing-catch-'+round,await ev('QingchiLife.inspect().fishing'));
  }
  await shot('05-fishing');await click('[data-life-tab="basket"]');await shot('06-basket');
  await ev(`document.querySelector('#basket-cards button').click()`);await until('QingchiLife.inspect().state.basket[0].locked');assert.ok(await ev(`Array.from(document.querySelectorAll('#basket-cards .fish-card:first-child button')).slice(1).every(b=>b.disabled)`));await ev(`document.querySelector('#basket-cards button').click()`);await until('!QingchiLife.inspect().state.basket[0].locked');
  const before=await ev('QingchiLife.inspect().state.wallet');await ev(`Array.from(document.querySelectorAll('#basket-cards .fish-card:first-child button')).find(b=>b.textContent==='出售').click()`);await until('QingchiLife.inspect().state.basket.length===3');assert.ok(await ev('QingchiLife.inspect().state.wallet')>before);
  await ev(`Array.from(document.querySelectorAll('#basket-cards .fish-card:first-child button')).find(b=>b.textContent==='放入池塘').click()`);await until('QingchiLife.inspect().state.fish.length===2');mark('basket-lock-sell-adopt',await ev('({wallet:QingchiLife.inspect().state.wallet,fish:QingchiLife.inspect().state.fish.length})'));
  await click('[data-life-tab="shop"]');const baitBefore=await ev('QingchiLife.inspect().state.bait');await ev(`Array.from(document.querySelectorAll('#shop-cards button')).find(b=>b.textContent==='购买鱼饵').click()`);await until(`QingchiLife.inspect().state.bait===${baitBefore+10}`);await shot('07-shop');mark('shop-bait-purchase');
  await click('[data-life-tab="dex"]');await shot('08-dex');assert.equal(await ev('QingchiLife.inspect().state.records.catches'),4);await click('[data-life-tab="salvage"]');assert.equal(await ev('QingchiLife.inspect().state.salvage.length'),1);await shot('09-salvage');mark('dex-records-story-unlock');
  await click('#life-close');await click('#tab-focus');await ev(`document.getElementById('custom-minutes').value=1;document.getElementById('custom-repeat').checked=true;`);await click('#custom-timer-start');await until('QingchiApp.inspect().state.timer.kind==="custom" && QingchiApp.inspect().state.timer.status==="running"');mark('custom-one-minute-repeat-start');await click('#timer-start');assert.equal(await ev('QingchiApp.inspect().state.timer.status'),'paused');
  const backup=await ev('qingchiDesktop.exportBackup()');assert.ok(backup.ok);fs.writeFileSync(path.join(out,'full-backup.json'),backup.value);const invalid=await ev(`qingchiDesktop.importBackup('{}')`);assert.equal(invalid.ok,false);mark('full-backup-export-and-invalid-import-guard');
  const saved=await ev('({id:QingchiLife.inspect().state.fish[0].id,strokes:QingchiLife.inspect().state.fish[0].strokes,records:QingchiLife.inspect().state.records})');
  let loaded=new Promise(r=>win.webContents.once('did-finish-load',r));win.webContents.reload();await loaded;await until('QingchiLife.inspect().ready');assert.deepEqual(await ev('({id:QingchiLife.inspect().state.fish[0].id,strokes:QingchiLife.inspect().state.fish[0].strokes,records:QingchiLife.inspect().state.records})'),saved);mark('native-reload-preserves-fish-strokes-progress');
  await click('#tab-focus');await click('#timer-start');await until('QingchiApp.inspect().state.timer.status==="finished"',65000);await shot('timer-reminder');await click('#dismiss-reminder');assert.equal(await ev('QingchiApp.inspect().state.timer.status'),'running');mark('real-one-minute-reminder-and-confirmed-repeat');await click('#timer-start');
  const on=await ev('qingchiDesktop.toggleWallpaper()');assert.ok(on.ok&&on.value.enabled);await wait(1500);assert.ok(native.inspect().windows.every(w=>!w.focusable&&w.visible));const wall=native.walls()[0];await wait(400);const frames1=await wall.webContents.executeJavaScript('QingchiPond.inspect().frames');await wait(700);const frames2=await wall.webContents.executeJavaScript('QingchiPond.inspect().frames');assert.ok(frames2>frames1);fs.writeFileSync(path.join(out,'10-desktop-layer.png'),(await wall.webContents.capturePage()).toPNG());mark('desktop-layer-renders-no-focus',native.inspect());
  const off=await ev('qingchiDesktop.toggleWallpaper()');assert.ok(off.ok&&!off.value.enabled);assert.equal(native.inspect().windows.length,0);mark('desktop-layer-closes-cleanly');
  await click('#life-open');await shot('11-final');
  assert.deepEqual(errors,[]);const report={result:'PASS',platform:process.platform,arch:process.arch,userData:app.getPath('userData'),checks,errors,confirmationDialogs:'window.confirm accepted in test harness only',boundaries:['Desktop layer render verified; macOS Spaces/sleep/multiple displays and icon clicking not yet verified','No real weather, payment, activation or autostart']};fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));clearTimeout(timeout);win.setAlwaysOnTop(false);app.quit();
 }catch(e){fs.writeFileSync(path.join(out,'failure.json'),JSON.stringify({error:e.stack,checks,errors},null,2));await shot('failure').catch(()=>{});console.error(e.stack);clearTimeout(timeout);native.stopWalls();app.exit(1);}
};
