const C=require(require('node:path').resolve(process.argv[2]||'app/habitat-core.js'));
const dt=1/60,sim=C.create({seed:3521,map:'lotus',density:'high'}),previous=new Map();
let maxDelta=0,jumps=0,moved=0,samples=0;
for(let step=0;step<3600;step++){sim.step(dt);const s=sim.inspect();for(const v of s.visitors){const p=previous.get(v.id);if(p){const d=Math.abs((v.angle-p.angle+540)%360-180);maxDelta=Math.max(maxDelta,d);if(d>90)jumps++;if(Math.hypot(v.x-p.x,v.y-p.y)>1e-6)moved++;samples++;}previous.set(v.id,v);}}
console.log(JSON.stringify({input:'seed3521 lotus high 3600steps dt1/60',maxAngleDeltaDeg:+maxDelta.toFixed(6),angleJumpsOver90:jumps,movingSamples:moved,samples}));
