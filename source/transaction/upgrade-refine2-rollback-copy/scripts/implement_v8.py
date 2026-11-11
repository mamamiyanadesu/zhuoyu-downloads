from pathlib import Path
r=Path(__file__).resolve().parent.parent
p=r/'app/life-core.js';s=p.read_text();s=s.replace("{id:'dragonfly',name:'蜻蜓',kind:'animal'}]","{id:'dragonfly',name:'蜻蜓',kind:'animal'},{id:'frog',name:'青蛙',kind:'animal'},{id:'butterfly',name:'蝴蝶',kind:'animal'},{id:'egret',name:'白鹭',kind:'animal'},{id:'crab',name:'小螃蟹',kind:'animal'}]")
pos=s.index(' const localWeather=')
s=s[:pos]+''' const mapIds=['clear','lotus','beach'];
 const defaultHabitats=()=>({active:'clear',layouts:{clear:defaultGarden(),lotus:[{id:'lotus-reeds',type:'reeds',x:.12,y:.76,scale:1.2,rotation:-12},{id:'lotus-flower',type:'lotus',x:.63,y:.62,scale:1.1,rotation:20}],beach:[{id:'beach-stone',type:'rock',x:.22,y:.80,scale:.9,rotation:12}]},visitors:{enabled:true,density:'medium'}});
 function validateHabitats(v,garden){
  if(v===undefined){const h=defaultHabitats();h.layouts.clear=clone(garden);return h;}
  if(!v||!mapIds.includes(v.active)||!v.layouts||!v.visitors||typeof v.visitors.enabled!=='boolean'||!['low','medium','high'].includes(v.visitors.density))fail('地图或访客设置无效');
  const layouts={};for(const id of mapIds)layouts[id]=validateGarden(v.layouts[id]);
  // garden remains the compatibility view of the active layout; one canonical write path.
  layouts[v.active]=clone(garden);
  return {active:v.active,layouts,visitors:{enabled:v.visitors.enabled,density:v.visitors.density}};
 }
''' +s[pos:]
s=s.replace('garden:defaultGarden(),env:', 'garden:defaultGarden(),habitats:defaultHabitats(),env:')
s=s.replace('  return {schema:3,revision:v.revision,fish,garden:validateGarden(v.garden===undefined?defaultGarden():v.garden),env:', '  const garden=validateGarden(v.garden===undefined?defaultGarden():v.garden),habitats=validateHabitats(v.habitats,garden);\n  return {schema:3,revision:v.revision,fish,garden,habitats,env:')
s=s.replace("  switch(a.type){", """  switch(a.type){
   case 'habitat-switch':{if(!mapIds.includes(a.id))fail('未知地图');s.habitats.layouts[s.habitats.active]=clone(s.garden);s.habitats.active=a.id;s.garden=clone(s.habitats.layouts[a.id]);break;}
   case 'visitor-settings':s.habitats.visitors={...s.habitats.visitors,...a.value};break;""")
s=s.replace('return {gardenItems,','return {mapIds,defaultHabitats,validateHabitats,gardenItems,')
p.write_text(s)
p=r/'app/life-ui.js';s=p.read_text().replace('function sync(){window.QingchiGarden','function sync(){window.QingchiHabitat?.sync(state.habitats);window.QingchiGarden').replace("['garden-add','garden-edit','garden-remove']","['garden-add','garden-edit','garden-remove','habitat-switch','visitor-settings']");p.write_text(s)
p=r/'desktop/native.cjs';s=p.read_text().replace('garden:s.life.garden,','garden:s.life.garden,habitats:s.life.habitats,');p.write_text(s)
p=r/'app/garden.js';s=p.read_text().replace("window.QingchiLifeCore?.gardenItems||[", "window.QingchiLifeCore?.gardenItems||[")
s=s.replace("if(!editing&&v.type==='dragonfly')", "if(!editing&&v.type==='frog'){const hop=Math.max(0,Math.sin(time*1.8));y-=hop*hop*.009;}if(!editing&&v.type==='butterfly'){x+=Math.sin(time)*.016;y+=Math.cos(time*1.3)*.008;}if(!editing&&v.type==='crab'){x+=Math.sin(time*.3)*.01;}if(!editing&&v.type==='egret'){a+=Math.sin(time*.6)*2;}if(!editing&&v.type==='dragonfly')")
p.write_text(s)
for name in ['index.html','wallpaper.html']:
 p=r/'app'/name;s=p.read_text().replace('<script defer src="environment.js">','<script defer src="habitat-core.js"></script><script defer src="environment.js">').replace('<script defer src="garden.js"></script>','<script defer src="garden.js"></script><script defer src="habitat.js"></script>').replace('<link rel="stylesheet" href="garden.css">','<link rel="stylesheet" href="garden.css"><link rel="stylesheet" href="habitat.css">').replace('<div id="garden-layer"','<canvas id="habitat-surface" aria-hidden="true"></canvas><div id="visitor-layer" aria-label="随机小动物"></div><div id="garden-layer"')
 if name=='index.html':
  s=s.replace('<button id="garden-open"','<button id="map-open" class="subtle">切换地图</button><button id="garden-open"').replace('Mac · 蓬莱临水 0.7','Mac · 蓬莱临水 0.8').replace('QINGCHI / 06','QINGCHI / 08')
  s=s.replace('<aside id="garden-panel"','''<dialog id="map-dialog" data-widget aria-labelledby="map-title"><div class="map-heading"><div><span class="eyebrow">HABITATS / 水边来客</span><h2 id="map-title">换一处水边</h2></div><button id="map-close" class="round" aria-label="关闭地图">×</button></div><div id="map-cards"></div><div class="visitor-options"><label><input id="visitors-enabled" type="checkbox" checked> 随机小动物</label><fieldset><legend>来客数量</legend><button data-density="low">清静 · 少</button><button data-density="medium">适中</button><button data-density="high">热闹 · 多</button></fieldset></div><p id="map-save" role="status">各地图分别保存布置，鱼和进度共享。</p><p class="fine">小动物是装饰性访客，不会吃掉收藏的鱼。沙滩浅湾是视觉主题，不是海水饲养指南。</p></dialog>
<aside id="garden-panel"''')
 else:
  s=s.replace('<script defer src="habitat-core.js">','<script defer src="life-core.js"></script><script defer src="habitat-core.js">')
 p.write_text(s)
p=r/'app/wallpaper.js';s=p.read_text().replace('QingchiGarden.sync(s.garden);','QingchiHabitat.sync(s.habitats);QingchiGarden.sync(s.garden);');p.write_text(s)
p=r/'app/vendor/pond.js';s=p.read_text().replace('function leafAt(x,y){','function leafAt(x,y){if(window.QingchiHabitat?.inspect().active!==undefined&&window.QingchiHabitat.inspect().active!==\'clear\')return !window.QingchiHabitat.waterAt(x,y);').replace('function occludeLeaves(){','function occludeLeaves(){if(window.QingchiHabitat?.inspect().active!==undefined&&window.QingchiHabitat.inspect().active!==\'clear\'){window.QingchiHabitat.occludeLand(ctx);return;}').replace("!window.QingchiGarden?.containsPoint(e.clientX,e.clientY)","!window.QingchiGarden?.containsPoint(e.clientX,e.clientY) && !window.QingchiHabitat?.containsVisitor(e.clientX,e.clientY)")
p.write_text(s)
# New version has independent storage and one-time non-destructive migration from 0.7.
p=r/'desktop/main.cjs';s=p.read_text().replace('Qingchi-Trial-v7','Qingchi-Trial-v8').replace('runtime-profile-v7','runtime-profile-v8').replace('清池 0.7','清池 0.8').replace("'Qingchi-Trial-v6'","'Qingchi-Trial-v7'").replace('next+\'.from-v6\'','next+\'.from-v7\'').replace('v6 migration skipped','v7 migration skipped');p.write_text(s)
p=r/'desktop/preload.cjs';p.write_text(p.read_text().replace("version:'0.7.0'","version:'0.8.0'"))
for name in ['package.json','package-lock.json']:
 p=r/name;p.write_text(p.read_text().replace('"version": "0.7.0"','"version": "0.8.0"'))
print('V8 maps state, UI hooks, renderer routing and independent profile applied')
