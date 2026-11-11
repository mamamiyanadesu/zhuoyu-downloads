from pathlib import Path
r=Path(__file__).resolve().parent.parent;a=r/'app'
p=a/'habitat-core.js';s=p.read_text();s=s.replace("opacity:0,angle:0,hop:0,visible:true", "opacity:0,angle:0,hop:0,visible:true,reaction:0,cooldown:0,entry:null,exit:null")
s=s.replace("visitors.push(v);event('arrive',v);return v;", "const entry=destination(v);v.entry={...entry};v.x=entry.x;v.y=entry.y;v.angle=type==='crab'?0:Math.atan2(p.y-entry.y,p.x-entry.x)*180/Math.PI+90;visitors.push(v);event('arrive',v);return v;")
s=s.replace("for(const v of visitors){v.age+=dt;", "for(const v of visitors){v.age+=dt;v.cooldown=Math.max(0,v.cooldown-dt);v.reaction=Math.max(0,v.reaction-dt);")
s=s.replace("if(v.age>v.life-1.8){if(v.phase!=='leaving'){v.phase='leaving';event('leave',v);}continue;}", """if(v.age>v.life-1.8){if(v.phase!=='leaving'){v.phase='leaving';v.exit=destination(v);event('leave',v);}const d=Math.hypot(v.exit.x-v.x,v.exit.y-v.y),t=Math.min(1,dt*species[v.type].speed/Math.max(.001,d));const p={x:v.x+(v.exit.x-v.x)*t,y:v.y+(v.exit.y-v.y)*t};if(segment(v.type,v,p)){v.angle=v.type==='crab'?0:Math.atan2(p.y-v.y,p.x-v.x)*180/Math.PI+90;v.x=p.x;v.y=p.y;}continue;}""")
s=s.replace("if(v.age<1.3)continue;", "if(v.age<1.3){const t=clamp(v.age/1.3,0,1),p={x:v.entry.x+(v.from.x-v.entry.x)*t,y:v.entry.y+(v.from.y-v.entry.y)*t};if(segment(v.type,v,p)){v.x=p.x;v.y=p.y;}continue;}if(v.phase==='reacting'){if(v.reaction>0){v.hop=v.type==='frog'?Math.sin(v.reaction*Math.PI/1.2)*.009:0;continue;}v.phase='waiting';v.wait=.3;event('settled',v);}")
pos=s.index(' function configure(c={})')
s=s[:pos]+''' function react(x,y,{near=false}={}){if(paused||!enabled)return null;const v=visitors.find(v=>v.visible&&v.opacity>.6&&!['arriving','leaving'].includes(v.phase)&&v.cooldown===0&&Math.hypot(x-v.x,y-v.y)<species[v.type].size*(near?1.3:.9));if(!v)return null;v.reaction=1.2;v.cooldown=4;v.phase='reacting';v.from={x:v.x,y:v.y};v.to={...v.from};event(near?'notice':'react',v);return v.id;}
''' +s[pos:]
s=s.replace('return {step,configure,spawn,allowed,segment,inspect:', 'return {step,configure,spawn,react,allowed,segment,inspect:')
p.write_text(s)
# Canvas backed articulated visitors, manual placed objects stay independent.
p=a/'habitat.js';s=p.read_text();start=s.index('function renderVisitors()');end=s.index('function sync(',start)
s=s[:start]+'''function renderVisitors(){const data=sim.inspect(),seen=new Set(),Art=window.QingchiAnimalArt,reduced=!!window.QingchiScene?.inspect().reduced;for(const v of data.visitors){seen.add(v.id);let n=nodes.get(v.id);if(!n){n=document.createElement('canvas');n.width=n.height=128;n.className='visitor visitor-'+v.type;n.setAttribute('aria-label',C.species[v.type].name);n.dataset.visitor=v.type;nodes.set(v.id,n);layer.append(n);}const size=C.species[v.type].size*h*1.35,p=Art.pose(v.type,v,data.time,reduced);Art.draw(n.getContext('2d'),v.type,p);n.style.width=n.style.height=size+'px';n.style.left=v.x*w+'px';n.style.top=(v.y*h-v.hop*h)+'px';n.style.opacity=v.visible?String(Math.max(0,v.opacity)):'0';n.style.transform=`translate(-50%,-50%) rotate(${v.angle}deg)`;n.dataset.phase=v.phase;n.dataset.pose=JSON.stringify({legs:p.legs,wings:p.wings,neck:p.neck,lift:p.lift});}for(const [id,n] of nodes)if(!seen.has(id)){n.remove();nodes.delete(id);}}
''' +s[end:]
# Request events skip controls, placement editor, and pause state.
pos=s.index('function tick(now)')
s=s[:pos]+'''function reactPointer(e,near){if(e.target?.closest?.('[data-widget]')||window.QingchiGarden?.inspect().editing||window.QingchiPond?.inspect().paused||document.querySelector('dialog[open]'))return;const id=sim.react(e.clientX/w,e.clientY/h,{near});if(id&&!near){e.stopPropagation();renderVisitors();}}
addEventListener('click',e=>reactPointer(e,false),true);let hoverAt=0;addEventListener('pointermove',e=>{const now=performance.now();if(now-hoverAt>400){hoverAt=now;reactPointer(e,true);}});
''' +s[pos:]
s=s.replace("surface:idMap.get(active).wave,simulation:","surface:idMap.get(active).wave,articulated:true,simulation:")
s=s.replace("({id,opacity:+n.style.opacity,transform:n.style.transform})", "({id,opacity:+n.style.opacity,transform:n.style.transform,joints:JSON.parse(n.dataset.pose||'{}')})")
# Individual scene visitation without modifying fish/garden saves; map restrictions still enforced.
s=s.replace('sync,currentMap:',"sync,observe(type){if(window.QingchiPond?.inspect().paused||window.QingchiGarden?.inspect().editing)return null;return sim.spawn(type)?.id||null;},currentMap:")
p.write_text(s)
for name in ['index.html','wallpaper.html']:
 p=a/name;s=p.read_text().replace('<script defer src="habitat.js"></script>','<script defer src="animal-art.js"></script><script defer src="habitat.js"></script>');p.write_text(s)
print('articulated geometry, reaction simulation, native canvas integration written')
