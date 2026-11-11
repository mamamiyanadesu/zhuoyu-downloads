from pathlib import Path
r=Path(__file__).resolve().parent.parent
p=r/'app/life-core.js';s=p.read_text()
s=s.replace(" const localWeather=",''' const gardenItems=[{id:'rock',name:'青石',kind:'scenery'},{id:'lotus',name:'荷花',kind:'scenery'},{id:'reeds',name:'芦苇',kind:'scenery'},{id:'lantern',name:'石灯',kind:'scenery'},{id:'turtle',name:'乌龟',kind:'animal'},{id:'dragonfly',name:'蜻蜓',kind:'animal'}];
 const defaultGarden=()=>[{id:'garden-lotus',type:'lotus',x:.18,y:.73,scale:1,rotation:0},{id:'garden-turtle',type:'turtle',x:.56,y:.77,scale:.72,rotation:-25},{id:'garden-reeds',type:'reeds',x:.10,y:.50,scale:.85,rotation:0}];
 function validateGarden(input){
  if(!Array.isArray(input)||input.length>24)fail('最多摆放24个部件');const seen=new Set();
  return input.map(v=>{if(!v||!idOK(v.id)||seen.has(v.id)||!gardenItems.some(i=>i.id===v.type)||!isNum(v.x,.06,.94)||!isNum(v.y,.12,.88)||!isNum(v.scale,.5,1.7)||!isNum(v.rotation,-180,180))fail('部件位置或大小无效');seen.add(v.id);return {id:v.id,type:v.type,x:v.x,y:v.y,scale:v.scale,rotation:v.rotation};});
 const localWeather=''')
s=s.replace('fish:[],env:', 'fish:[],garden:defaultGarden(),env:')
s=s.replace('fish,env:{season:e.season','fish,garden:validateGarden(v.garden===undefined?defaultGarden():v.garden),env:{season:e.season')
s=s.replace("   case 'save-fish':",'''   case 'garden-add':{if(s.garden.length>=24)fail('最多摆放24个部件');s.garden.push({id:a.id,type:a.item,x:.45,y:.56,scale:1,rotation:0});break;}
   case 'garden-edit':{const v=s.garden.find(x=>x.id===a.id);if(!v)fail('部件已不存在');for(const k of ['x','y','scale','rotation'])if(a.value?.[k]!==undefined)v[k]=a.value[k];break;}
   case 'garden-remove':s.garden=s.garden.filter(x=>x.id!==a.id);break;
   case 'save-fish':''')
s=s.replace('return {KEY,MAX_FISH','return {gardenItems,validateGarden,defaultGarden,KEY,MAX_FISH')
p.write_text(s)
p=r/'app/life-ui.js';s=p.read_text().replace("function sync(){window.QingchiPond.setCatalog(state.fish);","function sync(){window.QingchiGarden?.sync(state.garden);window.QingchiPond.setCatalog(state.fish);")
s=s.replace('fish:state.fish,env:state.env,settings:','fish:state.fish,garden:state.garden,env:state.env,settings:')
s=s.replace('timerLabel:()=>state.timerOptions.label,',"gardenAction:a=>{if(!['garden-add','garden-edit','garden-remove'].includes(a.type))return Promise.resolve(null);return change(a);},timerLabel:()=>state.timerOptions.label,")
p.write_text(s)
p=r/'app/index.html';s=p.read_text().replace('<script defer src="life-ui.js">','<script defer src="garden.js"></script><script defer src="life-ui.js">')
s=s.replace('<link rel="stylesheet" href="life.css">','<link rel="stylesheet" href="life.css"><link rel="stylesheet" href="garden.css">')
s=s.replace('<div class="leaves"','<div id="garden-layer" aria-label="鱼池布置"></div>\n<div class="leaves"')
s=s.replace('<div class="pond-tools" data-widget>', '<div class="pond-tools" data-widget><button id="garden-open" class="subtle">布置鱼池</button>')
s=s.replace('<div id="life-toast"', '''<aside id="garden-panel" data-widget hidden aria-label="布置鱼池"><div class="garden-head"><div><h2>布置鱼池</h2><p>选个部件，拖到喜欢的位置</p></div><button id="garden-close" class="primary">完成</button></div><div id="garden-catalog"></div><div class="garden-selected"><label>已放部件<select id="garden-selection" aria-label="选择已放部件"></select></label><p id="garden-count"></p><label>大小<input id="garden-size" type="range" min="50" max="170" value="100"></label><label>方向<input id="garden-rotation" type="range" min="-180" max="180" value="0"></label><div class="garden-arrows"><button data-move="left" aria-label="向左移动">向左</button><button data-move="up" aria-label="向上移动">向上</button><button data-move="down" aria-label="向下移动">向下</button><button data-move="right" aria-label="向右移动">向右</button></div><button id="garden-remove" class="text-button">移除部件</button></div><p id="garden-save" role="status">改动会自动保存</p><p class="fine">最多24个；移除后可重新添加。</p></aside>
<div id="life-toast"''')
p.write_text(s)
p=r/'desktop/native.cjs';s=p.read_text().replace('fish:s.life.fish,env:','fish:s.life.fish,garden:s.life.garden,env:');p.write_text(s)
p=r/'app/wallpaper.html';s=p.read_text().replace('<link rel="stylesheet" href="life.css">','<link rel="stylesheet" href="life.css"><link rel="stylesheet" href="garden.css">').replace('<script defer src="wallpaper.js">','<script defer src="garden.js"></script><script defer src="wallpaper.js">').replace('<canvas id="environment-canvas">','<div id="garden-layer" aria-label="鱼池布置"></div><canvas id="environment-canvas">');p.write_text(s)
p=r/'app/wallpaper.js';s=p.read_text().replace('s=>{QingchiPond','s=>{window.QingchiGarden?.sync(s.garden||[]);QingchiPond');p.write_text(s)
# Object clicks must not also drop food into the pond behind opaque scenery.
p=r/'app/vendor/pond.js';s=p.read_text();print('Click sites',[(i+1,l.strip()) for i,l in enumerate(s.splitlines()) if 'leafAt(' in l or "addEventListener('click'" in l]);p.write_text(s)
