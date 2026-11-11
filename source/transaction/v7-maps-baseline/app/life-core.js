/* Qingchi 0.3: independently implemented local fish collection and game rules. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QingchiLifeCore=api;})(globalThis,function(){
 'use strict';
 const KEY='qingchi.life.v3',MAX_FISH=24,MAX_BASKET=12,ADULT=1800;
 const clone=x=>JSON.parse(JSON.stringify(x));
 const species=[
  {id:'reed',name:'青玉',color:'#87ad91',accent:'#f4efd9',price:16,rarity:'常见',weight:32},
  {id:'sand',name:'赤砂',color:'#ce8765',accent:'#f8ead4',price:20,rarity:'常见',weight:28},
  {id:'ivory',name:'霜白',color:'#e4dfd1',accent:'#6d8779',price:26,rarity:'少见',weight:18},
  {id:'gold',name:'金穗',color:'#d5b46a',accent:'#fcf2cf',price:34,rarity:'少见',weight:13},
  {id:'ink',name:'墨云',color:'#6b7e7a',accent:'#e1e6da',price:52,rarity:'稀有',weight:7},
  {id:'dawn',name:'霞光',color:'#c08f9a',accent:'#f6e7c7',price:90,rarity:'珍稀',weight:2}
 ];
 const additions=[
 {id:'crucian',name:'银鲫',color:'#bcc8b6',accent:'#6c8479',price:18,rarity:'常见',weight:28,form:'round'},
 {id:'carp',name:'赤尾鲤',color:'#cba25c',accent:'#ad6549',price:30,rarity:'常见',weight:22,form:'koi'},
 {id:'perch',name:'青鲈',color:'#83a593',accent:'#3b6058',price:42,rarity:'少见',weight:16,form:'slim'},
 {id:'catfish',name:'暮色鲶',color:'#6d8293',accent:'#c0ced0',price:58,rarity:'少见',weight:12,form:'long'},
 {id:'mandarin',name:'斑鳜',color:'#a5ad6b',accent:'#4f644f',price:82,rarity:'稀有',weight:6,form:'round'},
 {id:'eel',name:'月纹鳗',color:'#76949a',accent:'#d3e5d6',price:110,rarity:'珍稀',weight:3,form:'long'}];
 species.push(...additions);
 // Real ornamental taxa; habitats, weights and lengths below are game settings.
 const ornamental=[
 {id:'goldfish',name:'金鱼',scientific:'Carassius auratus',color:'#e99b45',accent:'#fff1c5',price:28,rarity:'常见',weight:32,form:'round',fin:1.25,tail:1.4,range:[6,18]},
 {id:'guppy',name:'孔雀鱼',scientific:'Poecilia reticulata',color:'#79b9cd',accent:'#f09755',price:32,rarity:'常见',weight:30,form:'slim',fin:1.2,tail:1.5,range:[2.5,5]},
 {id:'neon',name:'霓虹灯鱼',scientific:'Paracheirodon innesi',color:'#42bfda',accent:'#e35356',price:40,rarity:'少见',weight:23,form:'slim',fin:.7,tail:.8,range:[2,3.5]},
 {id:'zebra',name:'斑马鱼',scientific:'Danio rerio',color:'#779ab5',accent:'#f2d999',price:24,rarity:'常见',weight:30,form:'slim',fin:.8,tail:.9,range:[3,5]},
 {id:'betta',name:'暹罗斗鱼',scientific:'Betta splendens',color:'#496ec9',accent:'#bf577d',price:65,rarity:'稀有',weight:16,form:'koi',fin:1.5,tail:1.5,range:[4,7]},
 {id:'angelfish',name:'神仙鱼',scientific:'Pterophyllum scalare',color:'#d4d9cb',accent:'#48596b',price:78,rarity:'稀有',weight:12,form:'round',fin:1.5,tail:1,range:[6,12]}
 ];species.push(...ornamental);

 const waters=[
 {id:'lotus',name:'镜湖浅湾',tag:'新手水域',hint:'观赏鱼游园：金鱼、孔雀鱼、霓虹灯鱼与斑马鱼。',needs:0,pool:['goldfish','guppy','neon','zebra','reed','sand','crucian','carp','gold'],aim:[.2,.75]},
 {id:'falls',name:'瀑下深潭',tag:'2 次钓获解锁',hint:'这里可以遇见神仙鱼；命中后连按或长按收线。',needs:2,pool:['angelfish','goldfish','zebra','perch','mandarin','ivory','carp','ink'],aim:[.1,.9]},
 {id:'moon',name:'月影竹岸',tag:'5 次钓获解锁',hint:'竹影间可以遇见暹罗斗鱼与霓虹灯鱼。',needs:5,pool:['betta','neon','guppy','catfish','eel','dawn','ink','crucian'],aim:[.3,.8]}];
 const gardenItems=[{id:'rock',name:'青石',kind:'scenery'},{id:'lotus',name:'荷花',kind:'scenery'},{id:'reeds',name:'芦苇',kind:'scenery'},{id:'lantern',name:'石灯',kind:'scenery'},{id:'turtle',name:'乌龟',kind:'animal'},{id:'dragonfly',name:'蜻蜓',kind:'animal'}];
 const defaultGarden=()=>[{id:'garden-lotus',type:'lotus',x:.18,y:.73,scale:1,rotation:0},{id:'garden-turtle',type:'turtle',x:.56,y:.77,scale:.72,rotation:-25},{id:'garden-reeds',type:'reeds',x:.10,y:.50,scale:.85,rotation:0}];
 function validateGarden(input){
  if(!Array.isArray(input)||input.length>24)fail('最多摆放24个部件');const seen=new Set();
  return input.map(v=>{if(!v||!idOK(v.id)||seen.has(v.id)||!gardenItems.some(i=>i.id===v.type)||!isNum(v.x,.06,.94)||!isNum(v.y,.12,.88)||!isNum(v.scale,.5,1.7)||!isNum(v.rotation,-180,180))fail('部件位置或大小无效');seen.add(v.id);return {id:v.id,type:v.type,x:v.x,y:v.y,scale:v.scale,rotation:v.rotation};});
 }
 const localWeather=()=>({enabled:false,location:{label:'杭州 · 临平',latitude:30.42,longitude:120.30}});
 const rods=[{id:'bamboo',name:'竹影竿',price:0,band:.22},{id:'willow',name:'轻韧竿',price:100,band:.28},{id:'tide',name:'观潮竿',price:240,band:.34}];
 const stories=[{id:'leaf',name:'一枚叶脉',text:'叶子已经离开树很久，细细的脉络仍像一张回家的地图。你把它放在池边，风停了一小会儿。'},
 {id:'stone',name:'温润小石',text:'石头没有告诉你它走过多少条河。握在手里，倒像把这个下午留住了。'},
 {id:'bell',name:'无声风铃',text:'捞起时没有声音。晾干以后，第一阵风替它把话说完。'},
 {id:'boat',name:'纸船折痕',text:'纸已经软了，船头仍朝着远处。有些出发，不需要知道终点。'},
 {id:'moon',name:'半片月光',text:'其实只是一块磨圆的瓷片。可你愿意相信，昨夜的月亮曾来这里喝过水。'}];
 const isNum=(n,a,b)=>Number.isFinite(n)&&n>=a&&n<=b;
 const isInt=(n,a,b)=>Number.isInteger(n)&&n>=a&&n<=b;
 const idOK=id=>typeof id==='string'&&/^[a-zA-Z0-9_-]{1,90}$/.test(id)&&!['__proto__','constructor','prototype'].includes(id);
 const colorOK=c=>typeof c==='string'&&/^#[0-9a-fA-F]{6}$/.test(c);
 function fail(message='存档格式不正确，未覆盖原数据。'){throw Error(message);}
 function initial(now=Date.now()){return {schema:3,revision:0,fish:[],garden:defaultGarden(),env:{season:'summer',light:'day',weather:'clear'},wallet:60,rod:'bamboo',owned:['bamboo'],bait:0,basket:[],dex:{},records:{catches:0,biggest:0,income:0},salvage:[],castSeq:0,pending:null,timerOptions:{minutes:15,repeat:false,label:'喝水提醒'},expedition:{water:'lotus',claimed:[]},localWeather:localWeather(),savedAt:now};}
 function appearance(v){
  if(!v||typeof v.name!=='string'||!v.name.trim()||v.name.length>24||!colorOK(v.color)||!colorOK(v.accent)||!isNum(v.fin,.6,1.5)||!isNum(v.tail,.6,1.5)||!Array.isArray(v.strokes)||v.strokes.length>120)fail('鱼的名称、颜色或笔画数据无效。');
  let total=0;const strokes=v.strokes.map(s=>{if(!s||!colorOK(s.color)||!isNum(s.size,.01,.3)||!Array.isArray(s.points)||s.points.length<1||s.points.length>600)fail();total+=s.points.length;if(total>8000)fail('笔画过多，请简化后保存。');return {color:s.color,size:s.size,points:s.points.map(p=>{if(!Array.isArray(p)||p.length!==2||!p.every(n=>isNum(n,-1.5,1.5)))fail();return [p[0],p[1]];})};});
  if(v.form!==undefined&&!['koi','round','long','slim'].includes(v.form))fail();
  return {form:v.form||'koi',name:v.name.trim(),color:v.color,accent:v.accent,fin:v.fin,tail:v.tail,strokes};
 }
 function validate(v){
  if(!v||v.schema!==3||!isInt(v.revision,0,1e12)||!Array.isArray(v.fish)||v.fish.length>MAX_FISH||!Array.isArray(v.basket)||v.basket.length>MAX_BASKET||!Array.isArray(v.owned)||!v.owned.includes('bamboo')||new Set(v.owned).size!==v.owned.length||!v.owned.every(x=>rods.some(r=>r.id===x))||!v.owned.includes(v.rod)||!isInt(v.wallet,0,1e8)||!isInt(v.bait,0,1000)||!isInt(v.castSeq,0,1e9)||!isNum(v.savedAt,0,1e15))fail();
  const ids=new Set();const fish=v.fish.map(f=>{if(!f||!idOK(f.id)||ids.has(f.id)||typeof f.placed!=='boolean'||!isNum(f.growth,0,ADULT)||!isInt(f.fed,0,1e8)||!isNum(f.createdAt,0,1e15)||!isNum(f.bonusAt,0,1e15)||!isNum(f.bonus,0,300)||!['drawn',...species.map(s=>s.id)].includes(f.source))fail();ids.add(f.id);return {id:f.id,...appearance(f),placed:f.placed,growth:f.growth,fed:f.fed,createdAt:f.createdAt,bonusAt:f.bonusAt,bonus:f.bonus,source:f.source};});
  const basket=v.basket.map(f=>{if(!f||!idOK(f.uid)||ids.has(f.uid)||!species.some(s=>s.id===f.species)||!isNum(f.length,1,100)||!isInt(f.value,1,10000)||typeof f.locked!=='boolean'||!isNum(f.at,0,1e15))fail();ids.add(f.uid);return {uid:f.uid,species:f.species,length:f.length,value:f.value,locked:f.locked,at:f.at};});
  const e=v.env;if(!e||!['auto','spring','summer','autumn','winter'].includes(e.season)||!['auto','day','sunset','night'].includes(e.light)||!['clear','cloudy','rain','snow'].includes(e.weather))fail();
  if(!v.dex||typeof v.dex!=='object'||Array.isArray(v.dex))fail();const dex={};for(const s of species){if(v.dex[s.id]!==undefined){if(!isInt(v.dex[s.id],1,1e8))fail();dex[s.id]=v.dex[s.id];}}
  const rec=v.records;if(!rec||!isInt(rec.catches,0,1e8)||!isNum(rec.biggest,0,100)||!isInt(rec.income,0,1e8))fail();
  if(!Array.isArray(v.salvage)||v.salvage.length>stories.length||new Set(v.salvage).size!==v.salvage.length||!v.salvage.every(x=>stories.some(s=>s.id===x)))fail();
  const opt=v.timerOptions;if(!opt||!isInt(opt.minutes,1,120)||typeof opt.repeat!=='boolean'||typeof opt.label!=='string'||!opt.label.trim()||opt.label.length>40)fail();
  const ex=v.expedition||{water:'lotus',claimed:[]};if(!waters.some(w=>w.id===ex.water)||!Array.isArray(ex.claimed)||!ex.claimed.every(x=>['first','three','six','twelve'].includes(x))||new Set(ex.claimed).size!==ex.claimed.length)fail();
  const lw=v.localWeather||localWeather();if(typeof lw.enabled!=='boolean'||!lw.location||typeof lw.location.label!=='string'||lw.location.label.length>80||!isNum(lw.location.latitude,-90,90)||!isNum(lw.location.longitude,-180,180))fail();
  let pending=null;if(v.pending!==null){const p=v.pending;if(!p||!idOK(p.id)||!isNum(p.at,0,1e15)||typeof p.bait!=='boolean'||!rods.some(r=>r.id===p.rod))fail();if(p.water!==undefined&&!waters.some(w=>w.id===p.water))fail();if(p.quality!==undefined&&!isNum(p.quality,0,1))fail();pending={id:p.id,at:p.at,bait:p.bait,rod:p.rod,...(p.water?{water:p.water,quality:p.quality??0,weather:['clear','cloudy','rain','snow'].includes(p.weather)?p.weather:'clear',night:!!p.night}:{})};}
  return {schema:3,revision:v.revision,fish,garden:validateGarden(v.garden===undefined?defaultGarden():v.garden),env:{season:e.season,light:e.light,weather:e.weather},wallet:v.wallet,rod:v.rod,owned:[...v.owned],bait:v.bait,basket,dex,records:{catches:rec.catches,biggest:rec.biggest,income:rec.income},salvage:[...v.salvage],castSeq:v.castSeq,pending,timerOptions:{minutes:opt.minutes,repeat:opt.repeat,label:opt.label.trim()},expedition:{water:ex.water,claimed:[...ex.claimed]},localWeather:{enabled:lw.enabled,location:{label:lw.location.label,latitude:lw.location.latitude,longitude:lw.location.longitude}},savedAt:v.savedAt};
 }
 function newFish(spec,id,now,source='drawn',fry=true){if(!idOK(id))fail('鱼编号无效');return {id,...appearance(spec),placed:true,growth:fry?0:ADULT,fed:0,createdAt:now,bonusAt:now,bonus:0,source};}
 function dispatch(input,a,now=Date.now(),rng=Math.random){
  const s=validate(input);let event=null;
  const fish=()=>{const f=s.fish.find(x=>x.id===a.id);if(!f)fail('这条鱼已不存在');return f;};
  const item=()=>{const f=s.basket.find(x=>x.uid===a.id);if(!f)fail('这条鱼已不在鱼篓');return f;};
  switch(a.type){
   case 'garden-add':{if(s.garden.length>=24)fail('最多摆放24个部件');s.garden.push({id:a.id,type:a.item,x:.45,y:.56,scale:1,rotation:0});break;}
   case 'garden-edit':{const v=s.garden.find(x=>x.id===a.id);if(!v)fail('部件已不存在');for(const k of ['x','y','scale','rotation'])if(a.value?.[k]!==undefined)v[k]=a.value[k];break;}
   case 'garden-remove':s.garden=s.garden.filter(x=>x.id!==a.id);break;
   case 'save-fish':{const look=appearance(a.fish);const f=s.fish.find(x=>x.id===a.id);if(f)Object.assign(f,look);else{if(s.fish.length>=MAX_FISH)fail('我的鱼已满 24 尾，请先整理');if(s.basket.some(x=>x.uid===a.id))fail();s.fish.push(newFish(look,a.id,now,'drawn',a.fry!==false));}break;}
   case 'place-fish':fish().placed=!!a.placed;break;
   case 'delete-fish':fish();s.fish=s.fish.filter(x=>x.id!==a.id);break;
   case 'feed':{const f=fish();if(!f.placed)break;f.fed++;if(now-f.bonusAt>=3600000){f.bonusAt=now;f.bonus=0;}const n=Math.min(45,300-f.bonus,ADULT-f.growth);f.growth+=n;f.bonus+=n;break;}
   case 'grow':{if(!isNum(a.seconds,0,30))fail();for(const f of s.fish)if(f.placed)f.growth=Math.min(ADULT,f.growth+a.seconds);break;}
   case 'environment':s.env={...s.env,...a.value};break;
   case 'timer-options':s.timerOptions={...s.timerOptions,...a.value};break;
   case 'select-water':{const w=waters.find(w=>w.id===a.id);if(!w||s.records.catches<w.needs)fail('此水域尚未解锁');if(s.pending)fail('先收竿再换钓点');s.expedition.water=a.id;break;}
   case 'local-weather':s.localWeather={...s.localWeather,...a.value};break;
   case 'claim-collection':{const goals={first:1,three:3,six:6,twelve:12};if(!goals[a.id]||s.expedition.claimed.includes(a.id)||Object.keys(s.dex).length<goals[a.id])fail('收藏奖励尚未达成或已领取');const reward=goals[a.id]*25;s.wallet+=reward;s.expedition.claimed.push(a.id);event={type:'collection',reward};break;}
   case 'cast':{if(s.pending)fail('请先完成或取消这一竿');if(s.basket.length>=MAX_BASKET)fail('鱼篓已满，请先放入池塘、出售或放流');const use=!!a.bait;if(use&&s.bait<1)fail('没有鱼饵，可先购买或不用饵');if(use)s.bait--;let extra={};if(a.water){const w=waters.find(w=>w.id===a.water);if(!w||s.records.catches<w.needs)fail('钓点尚未解锁');if(!isNum(a.quality,0,1))fail();extra={water:w.id,quality:a.quality,weather:['clear','cloudy','rain','snow'].includes(a.weather)?a.weather:'clear',night:!!a.night};}s.castSeq++;s.pending={id:'cast-'+s.castSeq,at:now,bait:use,rod:s.rod,...extra};event={type:'cast',...s.pending};break;}
   case 'cancel-cast':s.pending=null;break;
   case 'catch':{if(!s.pending||s.pending.id!==a.id)fail('这一竿已结算，不能重复领取');if(s.basket.length>=MAX_BASKET)fail('鱼篓已满，暂不能领取');const pick=()=>Math.max(0,Math.min(.999999,Number(rng())||0));const pool=s.pending.water?waters.find(w=>w.id===s.pending.water).pool:species.slice(0,6).map(x=>x.id);const weights=species.map(x=>pool.includes(x.id)?x.weight*(s.pending.bait&&['稀有','珍稀'].includes(x.rarity)?2:1)*(s.pending.night&&['eel','catfish'].includes(x.id)?2:1)*(s.pending.weather==='rain'&&['perch','carp'].includes(x.id)?1.5:1)*(['稀有','珍稀'].includes(x.rarity)?1+(s.pending.quality||0):1):0);let roll=pick()*weights.reduce((a,b)=>a+b,0),chosen=species[0];for(let i=0;i<species.length;i++){roll-=weights[i];if(roll<0){chosen=species[i];break;}}
    const range=chosen.range||[12,46],length=Math.round((range[0]+pick()*(range[1]-range[0]))*10)/10,value=Math.round(chosen.price*(.7+length/45));const f={uid:'catch-'+s.castSeq,species:chosen.id,length,value,locked:false,at:now};s.basket.unshift(f);s.dex[chosen.id]=(s.dex[chosen.id]||0)+1;s.records.catches++;s.records.biggest=Math.max(s.records.biggest,length);s.pending=null;
    let find=null;if(s.records.catches%4===0&&s.salvage.length<stories.length){find=stories.find(x=>!s.salvage.includes(x.id));s.salvage.push(find.id);}event={type:'catch',fish:f,species:chosen,salvage:find};break;}
   case 'lock':item().locked=!!a.locked;break;
   case 'sell':{const f=item();if(f.locked)fail('已锁定，请先解锁');s.wallet+=f.value;s.records.income+=f.value;s.basket=s.basket.filter(x=>x.uid!==f.uid);event={type:'sold',value:f.value};break;}
   case 'release':{const f=item();if(f.locked)fail('已锁定，请先解锁');s.basket=s.basket.filter(x=>x.uid!==f.uid);break;}
   case 'adopt':{const f=item();if(f.locked)fail('已锁定，请先解锁');if(s.fish.length>=MAX_FISH)fail('我的鱼已满');const kind=species.find(x=>x.id===f.species),id='pond-'+f.uid;if(s.fish.some(x=>x.id===id))fail('已经入池');s.fish.push(newFish({name:kind.name+' '+(s.fish.length+1),color:kind.color,accent:kind.accent,form:kind.form||'koi',fin:kind.fin||1,tail:kind.tail||1,strokes:[]},id,now,kind.id,true));s.basket=s.basket.filter(x=>x.uid!==f.uid);event={type:'adopted',id};break;}
   case 'buy-rod':{const rod=rods.find(x=>x.id===a.id);if(!rod)fail('未知装备');if(s.owned.includes(a.id)){s.rod=a.id;break;}if(s.wallet<rod.price)fail('鱼币不足');s.wallet-=rod.price;s.owned.push(a.id);s.rod=a.id;break;}
   case 'buy-bait':if(s.wallet<20)fail('鱼币不足');if(s.bait>990)fail('鱼饵已满');s.wallet-=20;s.bait+=10;break;
   default:fail('未知操作');
  }
  s.savedAt=now;return {state:validate(s),event};
 }
 function fishingSession(pending,now=Date.now(),seed=Math.random()){
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
 return {gardenItems,validateGarden,defaultGarden,KEY,MAX_FISH,MAX_BASKET,ADULT,species,ornamental,waters,rods,stories,clone,appearance,initial,validate,newFish,dispatch,fishingSession,fishingStep};
});
