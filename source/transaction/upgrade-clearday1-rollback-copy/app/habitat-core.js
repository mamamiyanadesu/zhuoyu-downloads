/* Original deterministic habitat/visitor simulation; pure module shared by tests and renderer. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QingchiHabitatCore=api;})(globalThis,()=>{
'use strict';
const maps=[
 {id:'clear',name:'原清池',tag:'清浅石底 · 竹影微波',description:'保留原来的池底与叶影，清透水中缓慢游鱼。',image:'assets/clear-pond-v2.png',animals:['turtle','frog','butterfly','dragonfly','egret'],stones:[],waterOpacity:.22,wave:'ripple'},
 {id:'lotus',name:'荷塘',tag:'泥沙池底 · 荷叶涟漪',description:'弧形草岸围住碧绿浅塘，细泥纹理间点缀睡莲与芦苇。',image:'assets/maps/lotus.svg',animals:['turtle','frog','butterfly','dragonfly','egret'],stones:[[.09,.49,.035],[.83,.78,.044],[.14,.76,.033]],waterOpacity:.43,wave:'rings'},
 {id:'beach',name:'沙滩浅湾',tag:'细沙波纹 · 轻柔潮线',description:'浅色沙床逐渐没入青蓝水湾，潮线沿着弯曲岸边缓慢推移。',image:'assets/maps/beach.svg',animals:['crab','egret','butterfly','turtle','dragonfly'],stones:[[.14,.76,.04],[.88,.70,.045],[.78,.88,.025]],waterOpacity:.16,wave:'shore'}
];
const species={turtle:{name:'小乌龟',size:.065,speed:.018,zone:'water'},frog:{name:'青蛙',size:.052,speed:.035,zone:'edge'},butterfly:{name:'蝴蝶',size:.052,speed:.055,zone:'plants'},dragonfly:{name:'蜻蜓',size:.052,speed:.065,zone:'air'},egret:{name:'白鹭',size:.10,speed:.014,zone:'shallow'},crab:{name:'小螃蟹',size:.055,speed:.027,zone:'sand'}};
const limits={low:2,medium:4,high:7},clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function seeded(seed){let n=seed>>>0;return()=>{n+=0x6D2B79F5;let x=n;x=Math.imul(x^x>>>15,x|1);x^=x+Math.imul(x^x>>>7,x|61);return((x^x>>>14)>>>0)/4294967296;};}
function shore(x){return .71+.055*Math.sin(x*7.4)-.025*Math.cos(x*15);}
function waterAt(id,x,y){if(id==='lotus')return ((x-.50)/.46)**2+((y-.48)/.42)**2<1;if(id==='beach')return y<shore(x);return x>.045&&x<.955&&y>.10&&y<.91;}
function zoneAt(id,type,x,y){if(x<.055||x>.945||y<.13||y>.89)return false;const zone=species[type].zone,w=waterAt(id,x,y);if(id==='lotus'){const d=((x-.5)/.46)**2+((y-.48)/.42)**2;if(zone==='water')return d<.90;if(zone==='edge')return d>.42&&d<.95;if(zone==='shallow')return d>.34&&d<.91;if(zone==='plants')return d>.25&&d<1.12;if(zone==='sand')return false;return d<1.05;}
if(id==='beach'){const d=y-shore(x);if(zone==='water')return d<-.05;if(zone==='sand')return d>.035&&d<.17;if(zone==='shallow')return d>-.13&&d<-.025;if(zone==='plants')return d>.03&&d<.17;return d<.1;}
if(zone==='sand')return false;if(zone==='edge'||zone==='shallow')return y>.60&&y<.82;if(zone==='plants')return y>.32&&y<.82;return w;}
function create({seed=Math.floor(Math.random()*4294967296),map='clear',density='medium',enabled=true}={}){
 let rng=seeded(seed),active=map,visitors=[],time=0,next=0,seq=0,blocked=()=>false,paused=false;const events=[];
 const event=(kind,v)=>{events.push({kind,type:v?.type,id:v?.id,time:+time.toFixed(3),map:active});if(events.length>400)events.shift();};
 function allowed(type,x,y){const size=species[type].size*.85,m=maps.find(m=>m.id===active);if(!zoneAt(active,type,x,y)||m.stones.some(([a,b,r])=>Math.hypot(a-x,b-y)<r+size)||blocked(x,y,size,type))return false;return x>size&&x<1-size&&y>size&&y<1-size;}
 function point(type){for(let i=0;i<600;i++){const x=.06+rng()*.88,y=.15+rng()*.73;if(allowed(type,x,y))return{x,y};}return null;}
 function segment(type,a,b){const dist=Math.hypot(b.x-a.x,b.y-a.y),count=Math.max(2,Math.ceil(dist/.005));for(let i=0;i<=count;i++){const t=i/count;if(!allowed(type,a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t))return false;}return true;}
 function destination(v){for(let i=0;i<80;i++){const angle=rng()*Math.PI*2,d=.025+rng()*.10,p={x:v.x+Math.cos(angle)*d,y:v.y+Math.sin(angle)*d*(v.type==='crab'?.12:1)};if(segment(v.type,v,p))return p;}return{x:v.x,y:v.y};}
 function spawn(type){if(visitors.length>=limits[density]||!enabled)return null;const list=maps.find(m=>m.id===active).animals;type=type||list[Math.floor(rng()*list.length)];if(!list.includes(type))return null;const p=point(type);if(!p)return null;const v={id:'visitor-'+(++seq),type,...p,from:{...p},to:{...p},age:0,life:22+rng()*23,phase:'arriving',progress:0,wait:.5+rng()*2,opacity:0,angle:0,hop:0,visible:true,reaction:0,cooldown:0,entry:null,exit:null};const entry=destination(v);v.entry={...entry};v.x=entry.x;v.y=entry.y;v.angle=type==='crab'?0:Math.atan2(p.y-entry.y,p.x-entry.x)*180/Math.PI+90;visitors.push(v);event('arrive',v);return v;}
 function step(dt,{isPaused=false,isEditing=false}={}){
  paused=!!(isPaused||isEditing);if(paused||!enabled)return;dt=clamp(dt,0,.1);time+=dt;next-=dt;
  if(next<=0&&visitors.length<limits[density]){spawn();next=1.5+rng()*3;}
  for(const v of visitors){v.age+=dt;v.cooldown=Math.max(0,v.cooldown-dt);v.reaction=Math.max(0,v.reaction-dt);v.visible=allowed(v.type,v.x,v.y);v.opacity=Math.min(1,v.age/1.3,(v.life-v.age)/1.8);v.hop=0;
   if(v.age>v.life-1.8){if(v.phase!=='leaving'){v.phase='leaving';v.exit=destination(v);event('leave',v);}const d=Math.hypot(v.exit.x-v.x,v.exit.y-v.y),t=Math.min(1,dt*species[v.type].speed/Math.max(.001,d));const p={x:v.x+(v.exit.x-v.x)*t,y:v.y+(v.exit.y-v.y)*t};if(segment(v.type,v,p)){v.angle=v.type==='crab'?0:Math.atan2(p.y-v.y,p.x-v.x)*180/Math.PI+90;v.x=p.x;v.y=p.y;}continue;}
   if(v.age<1.3){const t=clamp(v.age/1.3,0,1),p={x:v.entry.x+(v.from.x-v.entry.x)*t,y:v.entry.y+(v.from.y-v.entry.y)*t};if(segment(v.type,v,p)){v.x=p.x;v.y=p.y;}continue;}if(v.phase==='reacting'){if(v.reaction>0){v.hop=v.type==='frog'?Math.sin(v.reaction*Math.PI/1.2)*.009:0;continue;}v.phase='waiting';v.wait=.3;event('settled',v);}
   if(!v.visible){v.phase='waiting';v.wait=.4;v.from={x:v.x,y:v.y};v.to={...v.from};continue;}
   if(v.phase==='arriving'){v.phase='waiting';event('linger',v);}
   if(v.phase==='waiting'){v.wait-=dt;if(v.wait>0)continue;v.from={x:v.x,y:v.y};v.to=destination(v);v.progress=0;v.phase='moving';v.angle=v.type==='crab'?0:Math.atan2(v.to.y-v.y,v.to.x-v.x)*180/Math.PI+90;event('move',v);}
   if(v.phase==='moving'){
    const d=Math.hypot(v.to.x-v.from.x,v.to.y-v.from.y);v.progress=Math.min(1,v.progress+dt*species[v.type].speed/Math.max(.001,d));let t=v.progress;
    if(v.type==='frog'){t=t*t*(3-2*t);v.hop=Math.sin(t*Math.PI)*.010;}
    const nx=v.from.x+(v.to.x-v.from.x)*t,ny=v.from.y+(v.to.y-v.from.y)*t;
    if(!segment(v.type,v,{x:nx,y:ny})){v.phase='waiting';v.wait=.4;continue;}
    v.x=nx;v.y=ny;if(v.progress>=1){v.phase='waiting';v.wait=(v.type==='butterfly'||v.type==='dragonfly')?.25:1+rng()*4;event('linger',v);}
   }
  }
  visitors=visitors.filter(v=>{if(v.age>=v.life){event('departed',v);return false;}return true;});
 }
 function react(x,y,{near=false}={}){if(paused||!enabled)return null;const v=visitors.find(v=>v.visible&&v.opacity>.6&&!['arriving','leaving'].includes(v.phase)&&v.cooldown===0&&Math.hypot(x-v.x,y-v.y)<species[v.type].size*(near?1.3:.9));if(!v)return null;v.reaction=1.2;v.cooldown=4;v.phase='reacting';v.from={x:v.x,y:v.y};v.to={...v.from};event(near?'notice':'react',v);return v.id;}
 function configure(c={}){if(c.map!==undefined&&c.map!==active){if(!maps.some(m=>m.id===c.map))throw Error('Unknown map');active=c.map;visitors=[];next=0;event('map');}if(c.density!==undefined){if(!(c.density in limits))throw Error('Unknown density');density=c.density;visitors=visitors.slice(0,limits[density]);}if(c.enabled!==undefined){enabled=!!c.enabled;if(!enabled)visitors=[];}if(c.blocked)blocked=c.blocked;}
 return {step,configure,spawn,react,allowed,segment,inspect:()=>({seed,map:active,density,enabled,limit:limits[density],time,paused,visitors:visitors.map(v=>({...v,from:{...v.from},to:{...v.to}})),events:[...events]})};
}
return {maps,species,limits,seeded,shore,waterAt,zoneAt,create};});
