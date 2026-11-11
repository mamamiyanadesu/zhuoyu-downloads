const {test}=require('node:test'),a=require('node:assert/strict'),C=require('../app/habitat-core.js');
test('visitors use bounded continuous heading rather than instant destination rotation',()=>{
 const sim=C.create({seed:3521,map:'lotus',density:'high'}),old=new Map(),rates={turtle:90,frog:180,egret:120,butterfly:300,dragonfly:360,crab:0};let moved=0;
 for(let i=0;i<3600;i++){sim.step(1/60);for(const v of sim.inspect().visitors){const p=old.get(v.id);if(p){const d=Math.abs(v.angle-p.angle);a.ok(d<=rates[v.type]/60+1e-7,`${v.type} jumped ${d}`);if(Math.hypot(v.x-p.x,v.y-p.y)>1e-6)moved++;a.ok(C.zoneAt('lotus',v.type,v.x,v.y));}old.set(v.id,v);}}
 a.ok(moved>1000,'turning must not permanently freeze travel');a.ok(sim.inspect().events.some(e=>e.kind==='departed'));
});
test('paused turning keeps heading and position fixed; crab remains sideways',()=>{
 const sim=C.create({seed:778,map:'beach',density:'high'});const crab=sim.spawn('crab');a.ok(crab);
 for(let i=0;i<600;i++){sim.step(1/60);const c=sim.inspect().visitors.find(v=>v.id===crab.id);if(c)a.equal(c.angle,0);}
 const before=sim.inspect().visitors;for(let i=0;i<100;i++)sim.step(1/60,{isPaused:true});a.deepEqual(sim.inspect().visitors,before);
});
test('departure reserves travel time after a slow turn rather than fading on the spot',()=>{
 for(const seed of [3,29,3521,816])for(const type of ['turtle','frog','egret']){
  const sim=C.create({seed,map:'lotus',density:'high'}),v=sim.spawn(type);let previous=null,travel=0,departed=false;
  for(let i=0;i<3600;i++){sim.step(1/60);const s=sim.inspect(),q=s.visitors.find(p=>p.id===v.id);if(q?.phase==='leaving'&&previous?.phase==='leaving')travel+=Math.hypot(q.x-previous.x,q.y-previous.y);previous=q;if(s.events.some(e=>e.id===v.id&&e.kind==='departed')){departed=true;break;}}
  a.ok(departed,type+' must not wait forever');a.ok(travel>.001,`${type} seed${seed} must travel during departure`);
 }
});
