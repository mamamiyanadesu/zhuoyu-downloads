from pathlib import Path
r=Path(__file__).resolve().parent.parent;a=r/'app'
p=a/'scene-manifest.js';s=p.read_text();s=s.replace('return Object.freeze({seasons,names,assets,resolveSeason,poses});', '''// Polygons traced in normalized SOURCE image coordinates, not viewport coordinates.
const rocks={
 spring:[[[0,0],[.14,0],[.17,.08],[.12,.18],[.07,.23],[0,.22]],[[1,.65],[.94,.69],[.91,.81],[.82,.89],[.68,.94],[.67,1],[1,1]]],
 summer:[[[0,0],[.19,0],[.18,.10],[.12,.18],[.06,.22],[0,.20]],[[.95,0],[1,0],[1,.22],[.93,.15],[.91,.07]],[[0,.81],[.08,.82],[.16,.91],[.18,1],[0,1]],[[1,.81],[1,1],[.72,1],[.76,.94],[.85,.93],[.86,.86],[.92,.82]]],
 autumn:[[[.40,0],[1,0],[1,.47],[.94,.41],[.87,.37],[.83,.28],[.75,.26],[.69,.17],[.57,.11],[.53,.04]],[[0,.65],[.05,.68],[.08,.76],[.12,.79],[.14,.88],[.27,.96],[.32,1],[0,1]]],
 winter:[[[.69,0],[1,0],[1,.29],[.95,.28],[.88,.24],[.80,.18],[.75,.11]],[[0,.66],[.06,.69],[.13,.77],[.20,.87],[.23,.96],[.32,1],[0,1]]]
};
function pointIn(poly,x,y){let hit=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit;}
function rockAt(s,x,y){return (rocks[s]||[]).some(p=>pointIn(p,x,y));}
function mapPlan(map,s){if(!['clear','lotus','beach','lab'].includes(map))throw Error('Unknown scene map');if(!seasons.includes(s))throw Error('Unknown season');return{map,season:s,original:map==='clear',bed:map==='clear'?'assets/clear-pond-v2.png':assets[s].bed,foreground:assets[s].foreground,shore:map==='lotus'?'ellipse':map==='beach'?'tideline':'full'};}
return Object.freeze({seasons,names,assets,resolveSeason,poses,rocks,pointIn,rockAt,mapPlan});''');p.write_text(s)
p=a/'scene-art.js';s=p.read_text();s=s.replace("season='summer',requested='summer',reduced=false", "season='summer',requested='summer',reduced=false,map=document.body.dataset.sceneIntegrated?'clear':'lab',wantedMap=map,pendingKey='',pending=null")
s=s.replace("const manager=C.loader(load,(key,res)=>{", "const manager=C.loader(load,(key,res)=>{const [nextMap,nextSeason]=key.split(':');")
s=s.replace("window.QingchiWaterSurface?.setBed(res.bed);window.QingchiWaterSurface?.setSeason(key);art=res;pixels=nextPixels;season=key;bed.style.backgroundImage=`url(\"${M.assets[key].bed}\")`;active=true;document.body.dataset.sceneSeason=key;draw();dispatchEvent(new CustomEvent('qingchi-scene-ready',{detail:{season:key}}));", """window.QingchiSeasonWater?.setBed(res.bed);(window.QingchiSeasonWater||window.QingchiWaterSurface)?.setSeason(nextSeason);art=res;pixels=nextPixels;season=nextSeason;map=nextMap;bed.style.backgroundImage=`url("${M.assets[season].bed}")`;active=true;document.body.dataset.sceneSeason=season;document.body.dataset.sceneMap=map;layout();draw();dispatchEvent(new CustomEvent('qingchi-scene-ready',{detail:{season,map}}));""")
# Standalone lab also uses setBed.
s=s.replace('window.QingchiSeasonWater?.setBed(res.bed);','(window.QingchiSeasonWater||window.QingchiWaterSurface)?.setBed(res.bed);')
s=s.replace('ctx.setTransform(dpr,0,0,dpr,0,0);draw();','ctx.setTransform(dpr,0,0,dpr,0,0);layout();draw();')
pos=s.index(' function poses()')
s=s[:pos]+''' function layout(){if(!active)return;let clip='none';if(map==='lotus')clip='ellipse(46% 42% at 50% 48%)';if(map==='beach'){const pts=['0% 0%','100% 0%'];for(let i=100;i>=0;i--)pts.push(i+'% '+(window.QingchiHabitatCore.shore(i/100)*100)+'%');clip='polygon('+pts.join(',')+')';}bed.style.clipPath=clip;const water=document.getElementById('scene-water');if(water)water.style.clipPath=clip;
  const mask=document.createElement('canvas');mask.width=art.bed.width;mask.height=art.bed.height;const g=mask.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,mask.width,mask.height);g.fillStyle='#000';for(const poly of M.rocks[season]){g.beginPath();poly.forEach((p,i)=>i?g.lineTo(p[0]*mask.width,p[1]*mask.height):g.moveTo(p[0]*mask.width,p[1]*mask.height));g.closePath();g.fill();}(window.QingchiSeasonWater||window.QingchiWaterSurface)?.setMask?.(mask);
 }
 function sourcePoint(x,y){const t=C.cover(art.bed.width,art.bed.height,w,h);return{x:(x-t.x)/t.width,y:(y-t.y)/t.height};}
 function rockHit(x,y){if(!active||map==='clear')return false;const p=sourcePoint(x,y);return M.rockAt(season,p.x,p.y);}
 function rockPath(g){const t=C.cover(art.bed.width,art.bed.height,w,h);for(const poly of M.rocks[season]){g.beginPath();poly.forEach((p,i)=>i?g.lineTo(t.x+p[0]*t.width,t.y+p[1]*t.height):g.moveTo(t.x+p[0]*t.width,t.y+p[1]*t.height));g.closePath();g.fill();}}
''' + s[pos:]
s=s.replace('return active&&pixels&&poses().some', 'return rockHit(x,y)||(active&&pixels&&poses().some').replace('q.u,q.v);});}', 'q.u,q.v);}));}')
s=s.replace("async function select(value){const resolved=M.resolveSeason(value);requested=value;return manager.request(resolved,M.assets[resolved]);}", """function select(value){const resolved=M.resolveSeason(value),key=wantedMap+':'+resolved;requested=value;if(key===pendingKey&&pending)return pending;if(active&&map===wantedMap&&season===resolved&&!pending)return Promise.resolve(true);pendingKey=key;const job=manager.request(key,M.assets[resolved]);pending=job;job.finally(()=>{if(pending===job){pending=null;pendingKey='';}});return job;}""")
s=s.replace("for(const p of poses())stamp(g,p,false);g.restore();", "for(const p of poses())stamp(g,p,false);if(map!=='clear'){g.fillStyle='#000';rockPath(g);}g.restore();")
s=s.replace('window.QingchiWaterSurface?.setLight(light);','(window.QingchiSeasonWater||window.QingchiWaterSurface)?.setLight(light);')
s=s.replace('select,reload:',"select,setMap(value){M.mapPlan(value,season);wantedMap=value;return select(requested);},reload:")
s=s.replace('({active,season,requested,light,reduced,time,frames,error:', '({active,map,wantedMap,season,requested,light,reduced,time,frames,rockPolygons:M.rocks[season],error:')
p.write_text(s)
# Rename legacy and new surfaces only for integrated document, retaining lab API.
p=a/'water-surface.js';s=p.read_text().replace('window.QingchiWaterSurface=',"window[document.body.dataset.sceneIntegrated?'QingchiLegacyWater':'QingchiWaterSurface']=");p.write_text(s)
p=a/'scene-water.js';s=p.read_text();s=s.replace('uniform sampler2D state,bed;', 'uniform sampler2D state,bed,rockMask;')
s=s.replace('result=vec4(color,1.);}`;', "if(texture(rockMask,st).r<.5){color=texture(bed,st).rgb;if(lightMode>.5&&lightMode<1.5)color*=vec3(1.06,.92,.76);if(lightMode>1.5)color*=vec3(.28,.43,.57);}\n result=vec4(color,1.);}`;")
s=s.replace('bed:gl.createTexture()', 'bed:gl.createTexture(),mask:gl.createTexture()')
s=s.replace("front=0;step(true);", "const white=document.createElement('canvas');white.width=white.height=1;white.getContext('2d').fillStyle='#fff';white.getContext('2d').fillRect(0,0,1,1);setMask(white);front=0;step(true);")
s=s.replace(' function render(dt,waves=[])', " function setMask(im){if(!resources||gl.isContextLost())return;bindTexture(2,resources.mask);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,im);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);}\n function render(dt,waves=[])")
s=s.replace("bindTexture(1,resources.bed);gl.uniform1i(uniform(p,'state')", "bindTexture(1,resources.bed);bindTexture(2,resources.mask);gl.uniform1i(uniform(p,'rockMask'),2);gl.uniform1i(uniform(p,'state')")
s=s.replace('window.QingchiWaterSurface=Object.freeze({render,setBed,',"window[document.body.dataset.sceneIntegrated?'QingchiSeasonWater':'QingchiWaterSurface']=Object.freeze({render,setBed,setMask,")
p.write_text(s)
# Original map and seasonal renderers share one stable public bridge; no double simulation.
(a/'scene-bridge.js').write_text('''(()=>{'use strict';if(!document.body.dataset.sceneIntegrated)return;const selected=()=>window.QingchiScene?.inspect().map==='clear'?window.QingchiLegacyWater:window.QingchiSeasonWater;
window.QingchiWaterSurface=Object.freeze({render(dt,waves){selected()?.render(window.QingchiScene?.inspect().reduced?0:dt,waves);},inspect(){return{...selected()?.inspect(),map:window.QingchiScene?.inspect().map,integrated:true};}});
})();
''')
# Setup HTML in order, not importing experiment-only controls or CSS.
for name in ['index.html','wallpaper.html']:
 p=a/name;s=p.read_text().replace('<body>','<body data-scene-integrated="true">');s=s.replace('<script defer src="environment.js"></script>', '<script defer src="scene-core.js"></script><script defer src="scene-manifest.js"></script><script defer src="scene-water.js"></script><script defer src="scene-art.js"></script><script defer src="scene-bridge.js"></script><script defer src="environment.js"></script>');s=s.replace('<link rel="stylesheet" href="habitat.css">','<link rel="stylesheet" href="habitat.css"><link rel="stylesheet" href="scene-integrated.css">');s=s.replace('<canvas id="wallpaper-canvas"','<div id="scene-bed" aria-hidden="true"></div><canvas id="scene-water" aria-hidden="true"></canvas><canvas id="scene-foreground" aria-hidden="true"></canvas><canvas id="wallpaper-canvas"');s=s.replace('本版季节由调色和动态粒子组成，仍使用清浅池底素材；不是四套全新摄影场景。','四季采用独立原创池底与透明前景。荷塘与浅湾保留各自岸线；原清池保留原底图，叠加对应季节前景。切换期间保持上一幅完整画面。');p.write_text(s)
(a/'scene-integrated.css').write_text('''/* Main/wallpaper scene layers only; never imports laboratory UI rules. */
#scene-bed,#scene-water,#scene-foreground{position:fixed;inset:0;width:100%;height:100%;pointer-events:none}#scene-bed{z-index:0;background-position:center;background-size:cover}#scene-water{z-index:0}#scene-foreground{z-index:2}body[data-scene-map=clear] #scene-bed,body[data-scene-map=clear] #scene-water{display:none}body:not([data-scene-map]) #scene-bed,body:not([data-scene-map]) #scene-water{display:none}body:not([data-scene-map=clear]) #water-surface-canvas{display:none}body[data-scene-integrated] #wallpaper-canvas{opacity:1}body[data-scene-integrated] #habitat-surface{display:none}body[data-scene-integrated] #scene-foreground,body[data-scene-integrated] #wallpaper-canvas{filter:brightness(var(--scene-light,1)) saturate(var(--scene-sat,1))}body[data-light=sunset]{--scene-light:.92;--scene-sat:.9}body[data-light=night]{--scene-light:.52;--scene-sat:.65}body[data-scene-integrated] #scene-bed{filter:brightness(var(--scene-light,1))}body[data-scene-integrated] #visitor-layer,body[data-scene-integrated] #garden-layer{z-index:2}body[data-scene-integrated] .pond-bed{z-index:0}
''')
# Environment synchronizes authoritative season; retains weather, removes duplicate caustics and particles.
p=a/'environment.js';s=p.read_text().replace("document.body.dataset.weather=config.weather;}","document.body.dataset.weather=config.weather;window.QingchiScene?.setLight(light);window.QingchiScene?.select(season);}")
s=s.replace('light();if(config.weather', "if(!window.QingchiScene?.active())light();if(config.weather")
s=s.replace("if(!rain&&!snow&&!['spring','autumn'].includes(actual.season))return;", "if(!rain&&!snow&&(window.QingchiScene?.active()||!['spring','autumn'].includes(actual.season)))return;")
p.write_text(s)
# Atomic map commit, including base shore, simulation geometry and button state.
p=a/'habitat.js';s=p.read_text().replace("preview='clear'", "preview='clear',requestedValue=null")
s=s.replace('function sync(value){if(!value)return;', "function sync(value,committed=false){if(!value)return;requestedValue=value;if(window.QingchiScene&&!committed){window.QingchiScene.setMap(value.active||'clear').then(ok=>{if(!ok&&$('map-save'))$('map-save').textContent='地图素材未载入，保留上一幅画面；请重试';});if(window.QingchiScene.inspect().map!==(value.active||'clear'))return;}")
s=s.replace('async function change(a)', "addEventListener('qingchi-scene-ready',e=>{if(requestedValue&&e.detail.map===(requestedValue.active||'clear'))sync(requestedValue,true);});\nasync function change(a)")
s=s.replace("if(active==='clear'&&window.QingchiPond?.surfaceAt(x*w,y*h).leaf)","if(window.QingchiPond?.surfaceAt(x*w,y*h).leaf)")
p.write_text(s)
# Compose blockers rather than returning early on the first optional renderer.
p=a/'vendor/pond.js';s=p.read_text().replace("if(window.QingchiScene?.active())return window.QingchiScene.containsPoint(x,y);", "if(window.QingchiScene?.active()&&window.QingchiScene.containsPoint(x,y))return true;")
s=s.replace("if(window.QingchiScene?.active()){window.QingchiScene.occlude(ctx);return;}","if(window.QingchiScene?.active())window.QingchiScene.occlude(ctx);")
# Lab has no original photographic leaves. Integrated clear map keeps original leaf blockers.
s=s.replace("const t=imageTransform();return LEAF_POLYGONS", "if(window.QingchiScene?.active()&&!window.QingchiHabitat)return false;const t=imageTransform();return LEAF_POLYGONS")
s=s.replace("ctx.save();ctx.globalCompositeOperation='destination-out';ctx.fillStyle='#000';const t=imageTransform();", "if(window.QingchiScene?.active()&&!window.QingchiHabitat)return;ctx.save();ctx.globalCompositeOperation='destination-out';ctx.fillStyle='#000';const t=imageTransform();")
p.write_text(s)
print('integrated main/wallpaper scene sources written; original background retained')
