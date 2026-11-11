/* Original articulated vector animals. No reference-package images or code.
 * Local geometry faces north. Every limb/wing rotates at its own pivot;
 * body translation is supplied by the independent habitat simulation. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QingchiAnimalArt=api;})(globalThis,()=>{
'use strict';const TAU=Math.PI*2,clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function pose(type,v,time,reduced=false){const moving=['moving','arriving','leaving','reacting'].includes(v.phase),t=reduced?0:time,pace=moving?1:.16,reaction=(v.reaction||0)>0,flight=['arriving','leaving'].includes(v.phase)||reaction;
 const p={type,phase:v.phase,time:t,moving,reaction,lift:0,legs:[],wings:[],neck:0,body:0,flight};
 if(type==='turtle'){p.legs=[0,1,2,3].map((_,i)=>Math.sin(t*3.1+(i%2)*Math.PI+(i>1?1.2:0))*.36*pace);p.neck=reaction?-.12:Math.sin(t*.7)*.025;}
 if(type==='frog'){const q=v.phase==='moving'?Math.sin((v.progress||0)*Math.PI):0;p.legs=[-.35-q*.9,.35+q*.9,.3+q*1.0,-.3-q*1.0];p.body=1-q*.12;p.neck=reaction?.08:Math.sin(t*1.4)*.02;}
 if(type==='butterfly'){const flap=moving?5:1.1;p.wings=[.18+.82*Math.abs(Math.sin(t*flap)),.18+.82*Math.abs(Math.sin(t*flap+.06))];p.lift=moving?2+Math.sin(t*2)*1.2:0;}
 if(type==='dragonfly'){p.wings=[Math.sin(t*(moving?32:2))*.19,Math.sin(t*(moving?32:2)+.8)*.19];p.lift=moving?1.5+Math.sin(t*3)*.4:0;}
 if(type==='egret'){p.legs=[Math.sin(t*4.2)*.48*pace,Math.sin(t*4.2+Math.PI)*.48*pace];p.wings=flight?[.35+.8*Math.sin(t*6),-.35-.8*Math.sin(t*6)]:[.08+Math.sin(t*.8)*.025,-.08-Math.sin(t*.8)*.025];p.neck=reaction?.23:Math.sin(t*.9)*.045;p.lift=flight?3+Math.abs(Math.sin(t*3))*3:0;}
 if(type==='crab'){p.legs=Array.from({length:8},(_,i)=>Math.sin(t*7+(i%2)*Math.PI+(i>3?Math.PI:0))*.27*pace);p.wings=[reaction?.8:.15+Math.sin(t*.8)*.06,reaction?-.8:-.15-Math.sin(t*.8)*.06];}
 return p;
}
function draw(g,type,p){g.clearRect(0,0,128,128);g.save();g.translate(64,66-p.lift);g.lineJoin='round';g.lineCap='round';
 const oval=(x,y,rx,ry,color,stroke)=>{g.beginPath();g.ellipse(x,y,rx,ry,0,0,TAU);g.fillStyle=color;g.fill();if(stroke){g.strokeStyle=stroke;g.lineWidth=.75;g.stroke();}};
 const line=(pts,color,width=1)=>{g.beginPath();pts.forEach((q,i)=>i?g.lineTo(...q):g.moveTo(...q));g.strokeStyle=color;g.lineWidth=width;g.stroke();};
 const grad=(x,y,r,light,dark)=>{const z=g.createRadialGradient(x-r*.3,y-r*.5,1,x,y,r);z.addColorStop(0,light);z.addColorStop(1,dark);return z;};
 const joint=(x,y,angle,fn)=>{g.save();g.translate(x,y);g.rotate(angle);fn();g.restore();};
 const poly=(pts,color,stroke)=>{g.beginPath();pts.forEach((q,i)=>i?g.lineTo(...q):g.moveTo(...q));g.closePath();g.fillStyle=color;g.fill();if(stroke){g.strokeStyle=stroke;g.lineWidth=.7;g.stroke();}};
 if(type==='turtle'){
  for(let i=0;i<4;i++){const side=i%2?1:-1; joint(side*16,i<2?-13:16,p.legs[i],()=>{oval(side*8,4,12,5,grad(side*8,4,13,'#9da976','#4c624a'),'#4b5c42');for(let j=0;j<3;j++)line([[side*14,2+j*2],[side*20,1+j*2]],'#c8c6a0',.7);});}
  poly([[-3,25],[0,38],[4,25]],'#61704c');joint(0,-24,p.neck,()=>{oval(0,-9,7,12,grad(0,-9,14,'#abb181','#5c7453'),'#526646');oval(-4,-13,1.5,2,'#25372a');oval(4,-13,1.5,2,'#25372a');line([[-4,-4],[3,-5]],'#d0cd9a',.8);});
  oval(0,0,22,29,grad(-4,-7,39,'#a7b18a','#485e42'),'#334d37');oval(0,0,18,25,'#72855b','#a9b68a');
  for(let y=-19;y<=19;y+=12){const xx=y===-19||y===17?7:9;poly([[-xx,y-4],[0,y-8],[xx,y-4],[xx,y+3],[0,y+8],[-xx,y+3]],grad(-2,y,15,'#91a16d','#697e52'),'#435e41');}line([[-16,-18],[-12,-9],[-16,2],[-12,15],[-7,24]],'#cad0a3',.8);
 }else if(type==='frog'){
  for(const side of [-1,1]){const i=side<0?0:1;joint(side*13,13,p.legs[i],()=>{oval(side*6,1,9,13,grad(0,0,22,'#9eaa63','#507348'));line([[side*9,8],[side*16,17],[side*10,25]],'#6e874e',5);for(let j=0;j<3;j++)line([[side*10,25],[side*(6+j*5),29+j%2*2]],'#84965b',2);});joint(side*12,-9,p.legs[i+2],()=>{line([[0,0],[side*8,10],[side*14,12]],'#7d9358',4);for(let j=0;j<3;j++)line([[side*14,12],[side*(14+j*2),17-j*3]],'#9daa6b',1.7);});}
  oval(0,4,16,23*(p.body||1),grad(-3,-4,30,'#a7b979','#4d754b'),'#527347');oval(0,-15,17,12,grad(-4,-17,25,'#b2bd7b','#659255'));for(const side of [-1,1]){oval(side*11,-22,6,6,'#a5b873','#5a794d');oval(side*11,-23,3.5,3.6,'#d5cc86');oval(side*11,-23,1.7,3,'#263b2a');oval(side*12,-24,1,1,'#f3f0c8');}line([[-11,-10],[0,-8],[11,-10]],'#537146',1);for(let i=0;i<9;i++)oval((i%3-1)*7,Math.floor(i/3)*9-3,2,3,'#577b4a66');
 }else if(type==='butterfly'){
  for(const side of [-1,1]){const f=p.wings[side<0?0:1];joint(side*2,-4,side*.10,()=>{g.scale(f,1);const top=grad(side*18,-15,34,'#dbb46f','#805b43');g.beginPath();g.moveTo(0,-12);g.bezierCurveTo(side*25,-43,side*46,-28,side*38,-6);g.bezierCurveTo(side*24,4,side*6,3,0,-2);g.closePath();g.fillStyle=top;g.fill();g.strokeStyle='#493c2c';g.lineWidth=2;g.stroke();g.beginPath();g.moveTo(side*3,-1);g.bezierCurveTo(side*42,1,side*31,32,side*13,25);g.bezierCurveTo(side*5,21,0,9,side*3,-1);g.fillStyle=grad(side*13,12,28,'#e0c78a','#8b6449');g.fill();g.stroke();for(let j=0;j<5;j++)line([[side*3,-6],[side*(19+j*4),-28+j*5]],'#73584199',.7);for(let j=0;j<5;j++)oval(side*(24+Math.sin(j)*9),-26+j*6,1.8,2.1,'#efe2b0');oval(side*19,16,5,6,'#574d3d');oval(side*19,16,2.6,3.3,'#b9c1a2');});}
  oval(0,2,2.7,18,'#514b35');oval(0,-16,4,4,'#554d35');for(const side of [-1,1])line([[side*2,-17],[side*6,-25],[side*9,-27]],'#544b35',1);
 }else if(type==='dragonfly'){
  for(const side of [-1,1])for(let k=0;k<2;k++)joint(side*3,-7+k*10,side*(k?-.1:.05)+p.wings[k],()=>{g.beginPath();g.moveTo(0,0);g.bezierCurveTo(side*16,-11,side*46,-13,side*44,-3);g.bezierCurveTo(side*32,8,side*11,7,0,0);g.fillStyle='#d3e9de99';g.fill();g.strokeStyle='#628a7e';g.lineWidth=.6;g.stroke();line([[0,0],[side*39,-4]],'#76a295',.6);for(let j=1;j<8;j++)line([[side*j*5,0],[side*j*5,-6]],'#94b4a699',.45);});
  for(let i=0;i<9;i++)oval(0,5+i*3,2.6-i*.17,2.5, i%2?'#a3b2a0':'#587568');for(const side of [-1,1])for(let i=0;i<3;i++)line([[side*2,-6+i*4],[side*8,-2+i*5],[side*10,2+i*5]],'#4a6051',.75);oval(0,-5,4,9,grad(-2,-8,14,'#b7c7a4','#4f7061'));oval(-3,-16,3.5,3.8,'#668d77');oval(3,-16,3.5,3.8,'#668d77');oval(-4,-17,1,1,'#cfe6c5');
 }else if(type==='egret'){
  for(const side of [-1,1])joint(side*5,13,p.legs[side<0?0:1],()=>{line([[0,0],[side*2,19],[side*4,33]],'#737758',2);for(let j=-1;j<=1;j++)line([[side*4,33],[side*4+j*5,39-Math.abs(j)*2]],'#858263',1.2);});
  poly([[-8,18],[0,32],[8,18]],'#dce4d7','#b5c8bd');oval(0,0,12,24,grad(-5,-7,31,'#ffffec','#bacfc4'),'#a2b9b0');
  for(const side of [-1,1])joint(side*7,-10,p.wings[side<0?0:1],()=>{const reach=p.flight?35:10;g.beginPath();g.moveTo(0,-3);g.bezierCurveTo(side*reach,-5,side*(reach+3),15,side*8,27);g.quadraticCurveTo(side*2,13,0,-3);g.fillStyle=grad(side*8,3,38,'#fcfff0','#b8cec1');g.fill();g.strokeStyle='#adc3b9';g.lineWidth=.7;g.stroke();for(let i=0;i<7;i++)line([[side*3,i*3],[side*(reach*(1-i*.09)),8+i*2.8]],'#aebfb7',.6);});
  joint(0,-17,p.neck,()=>{g.beginPath();g.moveTo(1,9);g.bezierCurveTo(-14,-2,-8,-14,0,-19);g.bezierCurveTo(5,-22,4,-29,0,-31);g.strokeStyle='#a8bdb2';g.lineWidth=8;g.stroke();g.strokeStyle='#eff3e7';g.lineWidth=6;g.stroke();oval(0,-31,5.5,7,'#f5f4e3','#b2c4b7');poly([[-2,-36],[0,-51],[3,-36]],'#bda35d','#887c4c');oval(-3,-32,1.3,1.4,'#344d3a');line([[1,-25],[7,-15]],'#e7eee1',1.2);});
 }else if(type==='crab'){
  for(const side of [-1,1])for(let j=0;j<4;j++){const i=j+(side>0?4:0);joint(side*14,-5+j*6,p.legs[i],()=>{line([[0,0],[side*(13-j),-4+j*3],[side*(21-j*2),7+j*4]],'#7a674a',3.4);line([[side*(21-j*2),7+j*4],[side*(25-j*2),14+j*3]],'#a28c64',1.8);});}
  for(const side of [-1,1])joint(side*12,-10,p.wings[side<0?0:1],()=>{line([[0,0],[side*10,-8],[side*12,-20]],'#a18b60',5);oval(side*13,-22,6,9,grad(side*12,-24,12,'#d0b27b','#856e4c'));poly([[side*9,-25],[side*9,-37],[side*13,-30]],'#c6ab75');poly([[side*16,-25],[side*20,-35],[side*16,-29]],'#a98a5c');});
  oval(0,1,20,15,grad(-6,-5,29,'#bda879','#766c50'),'#635d44');for(let i=0;i<13;i++)oval(Math.sin(i*4)*15,Math.cos(i*2)*8,1.1,1,'#dac69a88');for(const side of [-1,1]){line([[side*7,-10],[side*9,-18]],'#8c7c53',2);oval(side*9,-19,2.7,2.6,'#324936');oval(side*10,-20,.8,.8,'#d4d9b8');}
 }
 g.restore();
}
return Object.freeze({pose,draw});});
