'use strict';
// Final delivery application, external CDP controller. No application payload edits.
const fs=require('node:fs'),path=require('node:path'),a=require('node:assert/strict');
const {start}=require('./native_cdp_v9.cjs'),root=path.resolve(__dirname,'..');
const weatherOnly=process.env.QINGCHI_WEATHER_ONLY==='1',label=weatherOnly?'candidate5-delivery-weather-check':'candidate5-delivery-day-matrix';
const delivery=JSON.parse(fs.readFileSync(path.join(root,'evidence/v9/candidate5-distribution.json')));
(async()=>{let c;const checks=[],mark=(name,data)=>{checks.push({name,passed:true,data});console.log('PASS',name,JSON.stringify(data));};
try{
c=await start({root,appPath:delivery.app,label,profile:label+'-profile'});
await c.until('window.QingchiLife?.inspect().ready&&window.QingchiScene?.active()');a.equal(await c.ev('qingchiDesktop.version'),'0.9.0-beta.5');
await c.ev("QingchiLife.gardenAction({type:'visitor-settings',value:{enabled:false}})");
const stable=()=>c.ev('(()=>{const s=QingchiLife.inspect().state;return{fish:s.fish,wallet:s.wallet,dex:s.dex,records:s.records,garden:s.garden,habitats:s.habitats}})()');
const initial=await stable();const matrix=[];
for(const map of ['clear','lotus','beach']){
 await c.ev(`QingchiLife.gardenAction({type:'habitat-switch',id:${JSON.stringify(map)}})`);
 await c.until(`QingchiScene.inspect().map===${JSON.stringify(map)}`);
 for(const season of (weatherOnly?[]:['spring','summer','autumn','winter'])){
  await c.ev(`QingchiEnvironment.apply({season:${JSON.stringify(season)},light:'day',weather:'clear'})`);
  await c.until(`QingchiScene.inspect().season===${JSON.stringify(season)}&&QingchiScene.inspect().light==='day'`);
  await c.until("[...document.querySelectorAll('.garden-object img')].every(n=>n.complete&&n.naturalWidth>0)");
  await c.wait(600);
  const data=await c.ev(`({scene:QingchiScene.inspect(),water:QingchiWaterSurface.inspect(),garden:QingchiGarden.inspect(),fish:QingchiLife.inspect().state.fish.length,quiet:QingchiApp.inspect().state.settings.quietView,bed:document.querySelector('.pond-bed').style.backgroundImage,images:[...document.images].filter(n=>n.getBoundingClientRect().width>0).map(n=>({src:n.getAttribute('src'),complete:n.complete,w:n.naturalWidth,h:n.naturalHeight}))})`);
  a.equal(data.scene.map,map);a.equal(data.scene.season,season);a.equal(data.scene.light,'day');a.ok(data.water.ready);a.ok(data.quiet);a.equal(data.fish,initial.fish.length);a.ok(data.images.every(n=>n.complete&&n.w>0));if(map==='clear')a.ok(data.bed.includes('clear-pond-v2.png'));
  const name=`${map}-${season}-day`;await c.shot(name);matrix.push({name,...data});mark(name,{map,season,images:data.images.length,fish:data.fish});
 }
 for(const [season,weather] of [['spring','rain'],['winter','snow']]){
  await c.ev(`QingchiEnvironment.apply({season:'${season}',light:'day',weather:'${weather}'})`);await c.until(`QingchiScene.inspect().season==='${season}'`);await c.wait(800);
  await c.shot(`${map}-${season}-${weather}`);const state=await c.ev('({scene:QingchiScene.inspect(),water:QingchiWaterSurface.inspect(),weather:document.body.dataset.weather,environment:QingchiEnvironment.inspect(),renderedFish:QingchiPond.inspect().fish})');a.equal(state.scene.map,map);a.equal(state.scene.season,season);a.ok(state.water.ready);a.equal(state.weather,weather);a.equal(state.environment.weather,weather);a.equal(state.renderedFish,18);matrix.push({name:`${map}-${season}-${weather}`,...state});mark(`${map}-${season}-${weather}`,state.weather);
 }
}
await c.ev("QingchiLife.gardenAction({type:'habitat-switch',id:'clear'})");await c.until("QingchiScene.inspect().map==='clear'");a.deepEqual(await stable(),initial);
const origin=await c.ev('performance.timeOrigin');await c.rpc.send('Page.reload');await c.until(`performance.timeOrigin>${origin}&&window.QingchiLife?.inspect().ready&&window.QingchiScene?.active()`);a.deepEqual(await stable(),initial);mark('all-maps-seasons-and-reload-preserve-data');
fs.writeFileSync(path.join(c.out,'report.json'),JSON.stringify({result:'PASS',executable:c.exec,scope:weatherOnly?'Supplement: actual body.dataset and Environment weather match six requested rain/snow cases; 18 rendered fish per case.':'Delivery app: 12 map-season DAY combinations plus six rain/snow combinations, decoded-image and data checks. Night/sunset excluded by user scope. Screenshots require separate visual review; no assertion of aesthetic parity.',checks,matrix},null,2));
}catch(e){console.error(e.stack);if(c){await c.shot('failure').catch(()=>{});fs.writeFileSync(path.join(c.out,'failure.json'),JSON.stringify({error:e.stack,checks},null,2));}process.exitCode=1;}finally{await c?.close();}})();
