from pathlib import Path
p=Path(__file__).resolve().parent.parent/'app/vendor/pond.js';s=p.read_text();s=s.replace('let causticTime = 0;','''let causticTime = 0;
let waterTime=0;
const waterEvents={wake:0,feed:0,drop:0};
const MAX_WAVES=160;
function currentAt(x,y){return {x:1.8+Math.sin(y*.006+waterTime*.18)*1.0,y:Math.sin(x*.005-waterTime*.12)*.9};}
function emitWave(x,y,power,kind='drop',angle=0){if(ripples.length>=MAX_WAVES)ripples.shift();ripples.push(new Ripple(x,y,power,kind,angle));if(kind in waterEvents)waterEvents[kind]++;}
// Damped travelling-wave superposition used for small surface refraction of swimmers.
function surfaceAt(x,y){let height=0;for(const w of ripples){const d=Math.hypot(x-w.x,y-w.y),front=d-w.radius;const envelope=Math.exp(-front*front/240)*w.life*w.power;height+=Math.sin(front*.22)*envelope;}return height;}
''')
s=s.replace('ripples.push(new Ripple(mouse.x, mouse.y, 0.5 * config.rippleStrength));',"emitWave(mouse.x,mouse.y,.35*config.rippleStrength,'drop');")
s=s.replace('ripples.push(new Ripple(e.clientX, e.clientY, 1.5 * config.rippleStrength));',"emitWave(e.clientX,e.clientY,1.1*config.rippleStrength,'drop');")
a=s.index('class Ripple {');b=s.index('\nclass Food',a)
s=s[:a]+'''class Ripple {
    constructor(x,y,power,kind='drop',angle=0){this.x=x;this.y=y;this.power=power;this.kind=kind;this.angle=angle;this.radius=2;this.life=1;this.age=0;this.duration=kind==='wake'?2.6:kind==='feed'?4.3:3.8;}
    update(dt){this.age+=dt;this.life=Math.max(0,1-this.age/this.duration);this.radius+=dt*(this.kind==='wake'?19:36);const c=currentAt(this.x,this.y);this.x+=c.x*dt;this.y+=c.y*dt;}
    draw(ctx){ctx.save();ctx.translate(this.x,this.y);ctx.rotate(this.angle);ctx.lineWidth=.65+this.life*.7;
      const alpha=this.life*this.life*this.power*(this.kind==='wake'?.19:.30);
      for(let i=0;i<(this.kind==='feed'?3:2);i++){const radius=this.radius-i*9;if(radius<=0)continue;ctx.beginPath();
       if(this.kind==='wake'){ctx.moveTo(-radius*.85,-radius*.55);ctx.quadraticCurveTo(-radius*.22,-radius*.15,0,0);ctx.quadraticCurveTo(-radius*.22,radius*.15,-radius*.85,radius*.55);}
       else ctx.ellipse(0,0,radius,radius*.78,0,0,Math.PI*2);
       ctx.strokeStyle=`rgba(246,255,239,${alpha*(1-i*.22)})`;ctx.stroke();
       if(this.kind!=='wake'){ctx.beginPath();ctx.ellipse(0,1.7,radius+2,(radius+2)*.78,0,0,Math.PI*2);ctx.strokeStyle=`rgba(53,117,102,${alpha*.5})`;ctx.stroke();}
      }ctx.restore();}
}
''' + s[b:]
s=s.replace('this.life -= 1 * dtMult;','this.life -= 1 * dtMult;const flow=currentAt(this.x,this.y);this.x+=flow.x*dt;this.y+=flow.y*dt;')
s=s.replace('this.foodEaten = 0; this.custom', 'this.wakeClock=Math.random()*.4;this.foodEaten = 0; this.custom')
s=s.replace('ripples.push(new Ripple(this.x, this.y, 0.8 * config.rippleStrength));',"emitWave(this.x,this.y,1.25*config.rippleStrength,'feed');")
s=s.replace('this.y += this.vy * dtMult;', '''this.y += this.vy * dtMult;
        this.wakeClock+=dt;
        if(cSpeed>.08 && this.wakeClock>.45){this.wakeClock=0;const angle=Math.atan2(this.vy,this.vx);emitWave(this.x-Math.cos(angle)*25*this.visualScale,this.y-Math.sin(angle)*25*this.visualScale,Math.min(.8,.24+cSpeed*.28)*config.rippleStrength,'wake',angle);}
''')
s=s.replace('window.QingchiEnvironment?.render(dt);','window.QingchiEnvironment?.render(dt);waterTime+=dt;')
s=s.replace('if (config.enableCaustics) drawCaustics(dt);', 'if (config.enableCaustics) drawCaustics(dt);drawFlow();')
s=s.replace('fish.draw(ctx);', '''ctx.save();const refraction=surfaceAt(fish.x,fish.y);ctx.translate(refraction*1.1,refraction*.55);fish.draw(ctx);ctx.restore();''')
pos=s.index('let pondPaused = false;');s=s[:pos]+'''function drawFlow(){
 ctx.save();ctx.lineWidth=1.2;
 for(let k=0;k<13;k++){const y=(k+.5)*height/13;const drift=waterTime*5;ctx.beginPath();
  for(let x=-30;x<=width+30;x+=22){const yy=y+Math.sin(x*.008-waterTime*.24+k)*9+Math.cos(x*.003+waterTime*.12)*5; x===-30?ctx.moveTo(x,yy):ctx.lineTo(x,yy);}
  ctx.strokeStyle=`rgba(228,251,226,${.025+.016*Math.sin(k+waterTime*.3)**2})`;ctx.stroke();
  for(let j=0;j<4;j++){const x=((j*.25+k*.071)*width+drift)%(width+60)-30;const yy=y+Math.sin(x*.008-waterTime*.24+k)*9;ctx.beginPath();ctx.moveTo(x,yy);ctx.quadraticCurveTo(x+13,yy-2,x+29,yy);ctx.strokeStyle='rgba(244,255,234,.12)';ctx.stroke();}
 }ctx.restore();
}

''' +s[pos:]
s=s.replace('paused: pondPaused, frames:',"water:{model:'damped-travelling-waves',time:waterTime,events:{...waterEvents},active: ripples.length,max:MAX_WAVES,sample:surfaceAt(width*.5,height*.5)},paused: pondPaused, frames:")
p.write_text(s)
