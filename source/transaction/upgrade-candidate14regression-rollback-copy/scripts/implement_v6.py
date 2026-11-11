from pathlib import Path
r=Path(__file__).resolve().parent.parent
p=r/'app/life-core.js';s=p.read_text();s=s.replace("species.push(...additions);",'''species.push(...additions);
 // Real ornamental taxa; habitats, weights and lengths below are game settings.
 const ornamental=[
 {id:'goldfish',name:'金鱼',scientific:'Carassius auratus',color:'#e99b45',accent:'#fff1c5',price:28,rarity:'常见',weight:32,form:'round',fin:1.25,tail:1.4,range:[6,18]},
 {id:'guppy',name:'孔雀鱼',scientific:'Poecilia reticulata',color:'#79b9cd',accent:'#f09755',price:32,rarity:'常见',weight:30,form:'slim',fin:1.2,tail:1.5,range:[2.5,5]},
 {id:'neon',name:'霓虹灯鱼',scientific:'Paracheirodon innesi',color:'#42bfda',accent:'#e35356',price:40,rarity:'少见',weight:23,form:'slim',fin:.7,tail:.8,range:[2,3.5]},
 {id:'zebra',name:'斑马鱼',scientific:'Danio rerio',color:'#779ab5',accent:'#f2d999',price:24,rarity:'常见',weight:30,form:'slim',fin:.8,tail:.9,range:[3,5]},
 {id:'betta',name:'暹罗斗鱼',scientific:'Betta splendens',color:'#496ec9',accent:'#bf577d',price:65,rarity:'稀有',weight:16,form:'koi',fin:1.5,tail:1.5,range:[4,7]},
 {id:'angelfish',name:'神仙鱼',scientific:'Pterophyllum scalare',color:'#d4d9cb',accent:'#48596b',price:78,rarity:'稀有',weight:12,form:'round',fin:1.5,tail:1,range:[6,12]}
 ];species.push(...ornamental);
''');s=s.replace("pool:['reed','sand','crucian','carp','gold']","pool:['goldfish','guppy','neon','zebra','reed','sand','crucian','carp','gold']");s=s.replace("pool:['perch','mandarin','ivory','carp','ink']","pool:['angelfish','goldfish','zebra','perch','mandarin','ivory','carp','ink']");s=s.replace("pool:['catfish','eel','dawn','ink','crucian']","pool:['betta','neon','guppy','catfish','eel','dawn','ink','crucian']");s=s.replace('浅水草间，鲫与锦鲤常来觅食。','观赏鱼游园：金鱼、孔雀鱼、霓虹灯鱼与斑马鱼。').replace('急流带来青鲈与斑鳜；拉扯更快，要及时放线。','这里可以遇见神仙鱼；命中后连按或长按收线。').replace('暮色鲶与月纹鳗出没；夜间相遇权重更高。','竹影间可以遇见暹罗斗鱼与霓虹灯鱼。');s=s.replace('isNum(f.length,5,100)','isNum(f.length,1,100)');s=s.replace('const length=Math.round((12+pick()*34)*10)/10','const range=chosen.range||[12,46],length=Math.round((range[0]+pick()*(range[1]-range[0]))*10)/10');s=s.replace("fin:1,tail:1,strokes:[]},id,now,kind.id,true)","fin:kind.fin||1,tail:kind.tail||1,strokes:[]},id,now,kind.id,true)")
start=s.index(' function fishingSession(');end=s.index(' return {KEY',start)
s=s[:start]+''' function fishingSession(pending,now=Date.now(),seed=Math.random()){
  const readyAt=now+2400+seed*1400;
  return {id:pending.id,phase:'waiting',readyAt,expiresAt:readyAt+14000,phaseAt:now,lastAt:now,tension:.5,progress:0,target:.5,band:Math.min(.44,(rods.find(r=>r.id===pending.rod)||rods[0]).band+.08),seed,reason:'',water:pending.water||'lotus',misses:0,lastHook:-1e9,lastTap:-1e9,feedback:'',feedbackUntil:0,distance:8.6};
 }
 function fishingStep(input,action,now=Date.now()){
  const s={...input},dt=Math.min(.12,Math.max(0,(now-s.lastAt)/1000));s.lastAt=now;
  if(['caught','failed'].includes(s.phase))return s;
  if(action==='cancel'){s.phase='failed';s.reason='已收竿，使用过的鱼饵不返还';return s;}
  if(s.phase==='waiting'&&now>=s.readyAt){s.phase='bite';s.phaseAt=s.readyAt;}
  if(s.phase==='bite'){
   s.tension=.5+Math.sin((now-s.readyAt)*Math.PI*2/2800)*.46;
   if(now>s.expiresAt){s.phase='failed';s.reason='鱼已游远：下次在游标进入绿色区时按空格';}
   else if(action==='hook'&&now-s.lastHook>=450){
    s.lastHook=now;
    if(Math.abs(s.tension-s.target)<=s.band/2){s.phase='tug';s.phaseAt=now;s.lastAt=now;s.grade=Math.abs(s.tension-.5)<s.band*.18?'精准命中':'成功咬钩';s.progress=s.grade==='精准命中'?.12:.05;s.feedback=s.grade+'！现在连按或长按空格收线';s.feedbackUntil=now+1800;}
    else {s.misses++;s.feedback='偏了一点，等游标回来再按（'+s.misses+'/3）';s.feedbackUntil=now+1000;if(s.misses>=3){s.phase='failed';s.reason='三次未命中，再抛一竿试试';}}
   }
  }else if(s.phase==='tug'){
   // Relaxed landing: holding and deliberate repeated presses both progress; releasing does not snap the line.
   if(action==='hold')s.progress+=dt*.145;
   if(action==='tap'&&now-s.lastTap>=90){s.progress+=.045;s.lastTap=now;s.feedback='收线 +';s.feedbackUntil=now+220;}
   s.progress=Math.min(1,s.progress);s.distance=.6+8*(1-s.progress);
   if(s.progress>=1){s.phase='caught';s.feedback='到岸了！';s.feedbackUntil=now+1800;}
  }
  return s;
 }
''' +s[end:];s=s.replace('ADULT,species,waters','ADULT,species,ornamental,waters');p.write_text(s)
# Hud: timing line on bite, distance/progress only on reel.
p=r/'app/expedition.js';s=p.read_text();s=s.replace("w.id==='lotus'?'浅水 · 鲫 / 鲤 / 锦鲤':w.id==='falls'?'急流 · 鲈 / 鳜 / 墨锦':'夜钓 · 鲶 / 鳗 / 霞锦'","w.id==='lotus'?'观赏鱼 · 金鱼 / 孔雀 / 灯鱼':w.id==='falls'?'深潭 · 神仙鱼 / 斑马鱼':'竹岸 · 斗鱼 / 霓虹灯鱼'")
s=s.replace("bite:'咬钩了，提竿！',tug:'收线与放线，跟住绿区'","bite:'看准绿区，按空格！',tug:'把鱼，慢慢拉到岸边'")
s=s.replace("waiting:'看着真实场景中的鱼漂；跳动时按下提竿。',bite:'现在点击“提竿”，或按一下空格。',tug:'按住按钮 / 空格收线，松开放线；游标留在绿色区。'","waiting:'鱼漂跳动后会出现横向判定线，先看游标再按空格。',bite:'游标左右移动：进入绿色区按空格。中央金线为精准命中；可尝试三次。',tug:'连按或长按空格 / 下方按钮收线，鱼会逐渐靠近；松手可休息，不会断线。'")
s=s.replace("bite:'提竿',tug:'按住收线 / 松开放线'","bite:'按空格 · 命中绿区',tug:'连按 / 长按 · 收线'")
s=s.replace("$('tension-ui').hidden=phase!=='tug';", "$('tension-ui').hidden=!['bite','tug'].includes(phase);$('tension-track').hidden=phase!=='bite';$('fish-progress').hidden=phase!=='tug';$('reel-label').hidden=phase!=='tug';$('reel-label').textContent=phase==='tug'?`距岸 ${session.distance.toFixed(1)} 米 · 收线 ${Math.round(session.progress*100)}%`:'';$('timing-feedback').textContent=session?.feedbackUntil>Date.now()?session.feedback:'';$('timing-feedback').dataset.grade=session?.grade||'';")
s=s.replace("session=L.fishingStep(session,'hook');QingchiWorld.setPhase('tug');render();return;", "session=L.fishingStep(session,'hook');QingchiWorld.setPhase(session.phase);QingchiWorld.setReel?.(session.progress,false);if(session.phase==='tug')toast(session.grade+'！连按或长按空格收线');render();return;")
s=s.replace("if(phase==='tug'){held=true;return;}","if(phase==='tug'){session=L.fishingStep(session,'tap');held=true;QingchiWorld.setReel?.(session.progress,true);render();return;}")
# Only timer commits terminal transitions, including terminal states caused by keypress.
s=s.replace("if(!session||busy||!['waiting','bite','tug'].includes(session.phase))return;", "if(!session||busy||session.settled||!['waiting','bite','tug','caught','failed'].includes(session.phase))return;")
s=s.replace("if(was!==session.phase)QingchiWorld.setPhase(session.phase);render();", "if(was!==session.phase)QingchiWorld.setPhase(session.phase);QingchiWorld.setReel?.(session.progress,held);render();")
s=s.replace("if(['caught','failed'].includes(session.phase)){held=false;", "if(['caught','failed'].includes(session.phase)){session.settled=true;held=false;")
s=s.replace("s.name:'未发现 · '+s.rarity,habitat+'\\n'+(n?'累计钓获 '+n+' 次':'钓获后点亮，图鉴为游戏设定而非生物学资料')", "s.name:(s.scientific?s.name+' · 未发现':'未发现 · '+s.rarity),(s.scientific?s.scientific+'\\n':'虚构配色 / 游戏鱼种\\n')+habitat+'\\n'+(n?'累计钓获 '+n+' 次':'钓获后点亮')+(s.scientific?'\\n真实观赏鱼；模型、钓点、体长和混养为游戏简化，并非当地野生分布或饲养建议':'')")
s=s.replace("'绿区容错 '+Math.round(rod.band*100)","'命中区宽度 '+Math.round((rod.band+.08)*100)")
p.write_text(s)
p=r/'app/expedition.html';s=p.read_text().replace('class="tension-track"','id="tension-track" class="tension-track"').replace('<progress id="fish-progress"','<p id="reel-label" class="reel-label"></p><progress id="fish-progress"');s=s.replace('<div class="cast-row">','<p id="timing-feedback" class="timing-feedback" role="status"></p><div class="cast-row">');p.write_text(s)
p=r/'app/expedition.css';s=p.read_text()+'''\n/* 0.6: readable precision strike + relaxed retrieve. */
#tension-track{height:26px;margin:10px 0 16px;border:1px solid #c5d9bf;background:rgba(14,39,33,.7);position:relative;overflow:visible}
#tension-band{background:rgba(127,209,143,.82);height:100%;top:0}
#tension-band:after{content:"";position:absolute;left:50%;height:100%;width:3px;background:#ffe9a4}
#tension-pointer{width:4px;height:36px;top:-5px;background:#fff9dd;box-shadow:0 0 8px #fff8d5;transition:none}
.reel-label{font-size:16px;color:#f4e9c1;margin:6px 0}.tug-progress{height:16px;width:100%;accent-color:#bddc9a}
.timing-feedback{min-height:22px;font-size:15px;color:#ffe9a4;margin:4px 0 8px}.collection-item p{white-space:pre-line}
[hidden]{display:none!important}
''';p.write_text(s)
# Rod only: visibility based on exact material names, original asset retained.
p=r/'app/penglai/src/fishing-world.js';s=p.read_text();s=s.replace("night=false;","night=false,reelProgress=0,reeling=false,landingFish=null;")
s=s.replace("rodPivot.name='first-person-hand-rig'","rodPivot.name='first-person-rod-only-rig'")
s=s.replace("if(o.name==='rocks'||Number.isFinite(o.userData.y0))o.visible=false;}});rodPivot.add(rod);","if(/Warm hand|woven sleeve|silk cuff/i.test(o.material?.name))o.visible=false;}});rodPivot.add(rod);")
s=s.replace("cast:()=>{castAt=time;phase='waiting';", "cast:()=>{reelProgress=0;if(landingFish){near.remove(landingFish);landingFish=null;}castAt=time;phase='waiting';")
s=s.replace("setPhase:p=>{phase=p;if(p==='tug')hookAt=time;", "setReel:(p,active)=>{reelProgress=Math.max(0,Math.min(1,p||0));reeling=active;},setPhase:p=>{phase=p;if(p==='tug'){hookAt=time;if(!landingFish&&templates.koi){landingFish=prepareFish(templates.koi,{color:'#c8b789',accent:'#e8dcc3'});landingFish.scale.setScalar(.8);near.add(landingFish);}}if(!['tug','caught'].includes(p)&&landingFish){near.remove(landingFish);landingFish=null;}")
s=s.replace("prize:spec=>{disposePrize();", "prize:spec=>{if(landingFish){near.remove(landingFish);landingFish=null;}disposePrize();")
s=s.replace("firstPerson:view==='fishing',distantOriginalLayers", "firstPerson:view==='fishing',rodOnly:true,visibleHandMeshes:(()=>{let n=0;rodPivot.traverse(o=>{if(o.isMesh&&o.visible&&/Warm hand|woven sleeve|silk cuff/i.test(o.material?.name))n++;});return n;})(),reelProgress,landingDistance:landingFish?eye.position.distanceTo(landingFish.position):null,distantOriginalLayers")
s=s.replace("phase==='tug'?.035+Math.sin(t*6)*.028", "phase==='tug'?.035+Math.sin(t*(reeling?12:3))*(reeling?.05:.01)")
s=s.replace("bobber.rotation.z=Math.sin(t*2)*.045;", "bobber.rotation.z=Math.sin(t*2)*.045;if(phase==='tug'){const landing=new THREE.Vector3(-.35,-1.1,-1.6);eye.localToWorld(landing);bobber.position.lerp(landing,reelProgress);bobber.position.y=.035+Math.sin(t*9)*.025;if(landingFish){landingFish.position.copy(bobber.position);landingFish.position.y=-.05+Math.sin(t*9)*.05;landingFish.rotation.set(0,yaw+Math.PI/2+Math.sin(t*8)*.2,Math.sin(t*7)*.12);}}")
p.write_text(s)
