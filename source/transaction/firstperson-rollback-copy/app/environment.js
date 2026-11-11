(() => {
 const canvas=document.getElementById('environment-canvas');if(!canvas)return;
 const ctx=canvas.getContext('2d');let config={season:'summer',light:'day',weather:'clear'},time=0,w=1,h=1,actual={};
 const seeds=Array.from({length:72},(_,i)=>({x:(i*.6180339887)%1,y:(i*.4142135623)%1,r:1+(i%4)}));
 function resize(){w=innerWidth;h=innerHeight;const dpr=Math.min(2,devicePixelRatio||1);canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
 addEventListener('resize',resize);resize();
 function apply(value){config={...config,...value};const date=new Date(),month=date.getMonth()+1,hour=date.getHours();const season=config.season==='auto'?(month>=3&&month<=5?'spring':month<=8&&month>=6?'summer':month>=9&&month<=11?'autumn':'winter'):config.season;
 const light=config.light==='auto'?(hour>=7&&hour<17?'day':hour>=17&&hour<20?'sunset':'night'):config.light;actual={season,light,weather:config.weather};document.body.dataset.season=season;document.body.dataset.light=light;document.body.dataset.weather=config.weather;}
 function render(dt){time+=Math.min(dt,.1);ctx.clearRect(0,0,w,h);if(config.weather==='cloudy'){for(let i=0;i<4;i++){const x=((i*.28*w+time*5)%(w*1.6))-w*.2;const g=ctx.createRadialGradient(x,h*(.25+(i%2)*.5),10,x,h*.5,w*.38);g.addColorStop(0,'rgba(67,92,91,.12)');g.addColorStop(1,'rgba(67,92,91,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);}return;}const rain=config.weather==='rain',snow=config.weather==='snow';if(!rain&&!snow&&!['spring','autumn'].includes(actual.season))return;
 const count=rain?60:snow?45:16;for(let i=0;i<count;i++){const p=seeds[i],speed=rain?160:snow?20:8;const x=(p.x*w+Math.sin(time*.3+i)*18+time*(rain?-20:4)+w*3)%w,y=(p.y*h+time*speed)%(h+30)-15;
  ctx.beginPath();if(rain){ctx.moveTo(x,y);ctx.lineTo(x-4,y+13);ctx.strokeStyle='rgba(238,252,253,.58)';ctx.lineWidth=.8;ctx.stroke();}
  else if(snow){ctx.arc(x,y,p.r*.7,0,Math.PI*2);ctx.fillStyle='rgba(255,255,250,.8)';ctx.fill();}
  else{ctx.ellipse(x,y,3+p.r,p.r,Math.sin(time*.4+i),0,Math.PI*2);ctx.fillStyle=actual.season==='autumn'?'rgba(167,112,58,.42)':'rgba(236,164,172,.48)';ctx.fill();}
 }}
 window.QingchiEnvironment=Object.freeze({apply,render,inspect:()=>({...actual})});apply(config);setInterval(()=>apply(config),30000);
})();
