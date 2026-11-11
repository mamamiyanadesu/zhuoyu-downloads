(() => {
 const canvas=document.getElementById('environment-canvas');if(!canvas)return;
 const ctx=canvas.getContext('2d');let config={season:'summer',light:'day',weather:'clear'},time=0,w=1,h=1,actual={},lightFrames=0;
 const seeds=Array.from({length:72},(_,i)=>({x:(i*.6180339887)%1,y:(i*.4142135623)%1,r:1+(i%4)}));
 function resize(){w=innerWidth;h=innerHeight;const dpr=Math.min(2,devicePixelRatio||1);canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
 addEventListener('resize',resize);resize();
 function apply(value){config={...config,...value};const date=new Date(),month=date.getMonth()+1,hour=date.getHours();const season=config.season==='auto'?(month>=3&&month<=5?'spring':month<=8&&month>=6?'summer':month>=9&&month<=11?'autumn':'winter'):config.season;
 const light=config.light==='auto'?(hour>=7&&hour<17?'day':hour>=17&&hour<20?'sunset':'night'):config.light;actual={season,light,weather:config.weather};document.body.dataset.season=season;document.body.dataset.light=light;document.body.dataset.weather=config.weather;window.QingchiScene?.setLight(light);window.QingchiScene?.select(season);}
 function light(){
  lightFrames++;const night=actual.light==='night',strength=night?.22:config.weather==='rain'?.38:config.weather==='cloudy'?.56:1;
  // Low-contrast moving light pools and shadows, rather than moving the baked pond photograph.
  for(let i=0;i<4;i++){const x=w*(.14+i*.26)+Math.sin(time*.14+i*1.7)*w*.055,y=h*(.2+(i%2)*.55)+Math.cos(time*.11+i)*h*.045;
   const g=ctx.createRadialGradient(x,y,0,x,y,w*.34);g.addColorStop(0,`rgba(255,249,203,${(.07+.035*Math.sin(time*.27+i))*strength})`);g.addColorStop(1,'rgba(255,249,203,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  }
  const shade=ctx.createRadialGradient(w*(.55+.11*Math.sin(time*.09)),h*.4,10,w*.6,h*.4,w*.65);shade.addColorStop(0,`rgba(36,83,72,${(.025+.022*Math.sin(time*.17))*strength})`);shade.addColorStop(1,'rgba(36,83,72,0)');ctx.fillStyle=shade;ctx.fillRect(0,0,w,h);
  // Advect a shallow caustic lattice with independent phases and fine double highlights.
  ctx.save();ctx.globalAlpha=strength;
  for(let row=0;row<9;row++){ctx.beginPath();for(let x=-40;x<w+40;x+=16){const y=(row+.5)*h/9+Math.sin(x*.012+time*.32+row)*13+Math.cos(x*.006-time*.19)*10;x===-40?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.strokeStyle='rgba(255,254,219,.075)';ctx.lineWidth=2;ctx.stroke();}
  // Soft leaf shadows are tied to the same source-image geometry, shifting only a few pixels.
  const sc=Math.max(w/1536,h/1024),ox=(w-1536*sc)/2,oy=(h-1024*sc)/2;
  for(const [cx,cy,rx,ry] of [[128,764,108,91],[263,869,63,52],[1494,51,110,100]]){const x=ox+cx*sc+5+Math.sin(time*.6)*2,y=oy+cy*sc+9+Math.cos(time*.4)*1.5;ctx.beginPath();ctx.ellipse(x,y,rx*sc,ry*sc,-.12,0,Math.PI*2);ctx.fillStyle='rgba(37,87,62,.045)';ctx.fill();}
  ctx.restore();
 }
 function render(dt){time+=Math.min(dt,.1);ctx.clearRect(0,0,w,h);if(!window.QingchiScene?.active())light();if(config.weather==='cloudy'){for(let i=0;i<4;i++){const x=((i*.28*w+time*5)%(w*1.6))-w*.2;const g=ctx.createRadialGradient(x,h*(.25+(i%2)*.5),10,x,h*.5,w*.38);g.addColorStop(0,'rgba(67,92,91,.12)');g.addColorStop(1,'rgba(67,92,91,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);}return;}const rain=config.weather==='rain',snow=config.weather==='snow';if(!rain&&!snow&&(window.QingchiScene?.active()||!['spring','autumn'].includes(actual.season)))return;
 const count=rain?60:snow?45:16;for(let i=0;i<count;i++){const p=seeds[i],speed=rain?160:snow?20:8;const x=(p.x*w+Math.sin(time*.3+i)*18+time*(rain?-20:4)+w*3)%w,y=(p.y*h+time*speed)%(h+30)-15;
  ctx.beginPath();if(rain){ctx.moveTo(x,y);ctx.lineTo(x-4,y+13);ctx.strokeStyle='rgba(238,252,253,.58)';ctx.lineWidth=.8;ctx.stroke();}
  else if(snow){ctx.arc(x,y,p.r*.7,0,Math.PI*2);ctx.fillStyle='rgba(255,255,250,.8)';ctx.fill();}
  else{ctx.ellipse(x,y,3+p.r,p.r,Math.sin(time*.4+i),0,Math.PI*2);ctx.fillStyle=actual.season==='autumn'?'rgba(167,112,58,.42)':'rgba(236,164,172,.48)';ctx.fill();}
 }}
 window.QingchiEnvironment=Object.freeze({apply,render,inspect:()=>({...actual,time,lightFrames,dynamicLight:true})});apply(config);setInterval(()=>apply(config),30000);
})();
