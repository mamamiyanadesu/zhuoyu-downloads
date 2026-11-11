from pathlib import Path
import json
r=Path(__file__).resolve().parent.parent
# Source-pixel silhouettes traced against the actual unmodified 1536x1024 background.
polys=[[[20,741],[32,709],[53,687],[82,673],[113,666],[149,666],[181,675],[205,694],[223,719],[232,750],[227,781],[212,811],[188,835],[161,850],[131,857],[103,854],[75,846],[128,772],[46,827],[31,806],[22,780]],[[197,865],[204,840],[223,821],[250,813],[277,817],[302,830],[318,851],[323,873],[312,896],[292,910],[273,917],[263,871],[257,919],[234,917],[211,906],[198,889]],[[1383,0],[1536,0],[1536,163],[1502,160],[1470,150],[1438,133],[1415,110],[1399,82],[1389,50]]]
(r/'art/v6/leaf-silhouettes.json').write_text(json.dumps({'source':'app/assets/clear-pond-v2.png','sourceSize':[1536,1024],'polygons':polys},indent=2))
p=r/'app/vendor/pond.js';s=p.read_text();pos=s.index('const FOOD_DETECT_RADIUS_SQ')
s=s[:pos]+'''// Foreground geometry uses original image coordinates, matching CSS center/cover at every viewport.
const LEAF_POLYGONS='''+json.dumps(polys)+''';
function imageTransform(){const scale=Math.max(width/1536,height/1024);return {scale,x:(width-1536*scale)/2,y:(height-1024*scale)/2};}
function inPolygon(x,y,poly){let inside=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
function leafAt(x,y){const t=imageTransform();return LEAF_POLYGONS.some(p=>inPolygon((x-t.x)/t.scale,(y-t.y)/t.scale,p));}
function occludeLeaves(){ctx.save();ctx.globalCompositeOperation='destination-out';ctx.fillStyle='#000';const t=imageTransform();ctx.translate(t.x,t.y);ctx.scale(t.scale,t.scale);for(const poly of LEAF_POLYGONS){ctx.beginPath();poly.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();ctx.fill();ctx.lineWidth=1.5;ctx.strokeStyle='#000';ctx.stroke();}ctx.restore();}
''' +s[pos:]
s=s.replace("config.enableFeeding && !e.target?.closest?.('[data-widget]');", "config.enableFeeding && !e.target?.closest?.('[data-widget]') && !leafAt(e.clientX,e.clientY);")
s=s.replace('if (this.y > height - margin) ay -= turn;', '''if (this.y > height - margin) ay -= turn;
        // Steer gently before entering floating leaves; residual body/tail is occluded, never painted on top.
        const look=28+30*config.fishSize;if(leafAt(this.x+this.vx*look,this.y+this.vy*look)){
          const t=imageTransform();for(const poly of LEAF_POLYGONS){const cx=poly.reduce((n,p)=>n+p[0],0)/poly.length*t.scale+t.x,cy=poly.reduce((n,p)=>n+p[1],0)/poly.length*t.scale+t.y;const dx=this.x-cx,dy=this.y-cy,d=Math.hypot(dx,dy)||1;if(d<180*t.scale){ax+=dx/d*.12;ay+=dy/d*.12;}}
        }''')
s=s.replace('if (ripples[i].life <= 0) ripples.splice(i, 1);\n    }\n}', 'if (ripples[i].life <= 0) ripples.splice(i, 1);\n    }\n    occludeLeaves();\n}')
s=s.replace("water:{model:","foreground:{mode:'source-aligned-canvas-occlusion',polygons:LEAF_POLYGONS.length,transform:imageTransform()},water:{model:")
s=s.replace('ranking() { return', "surfaceAt(x,y){return {leaf:leafAt(x,y),wave:surfaceAt(x,y),current:currentAt(x,y)};},\n ranking() { return")
p.write_text(s)
# Old approximate ellipse mask had the small leaf ~27 source pixels too far left.
p=r/'app/style.css';s=p.read_text();s=s.replace('#wallpaper-canvas{mask-image:url("assets/leaf-occlusion.svg");mask-size:cover;mask-position:center;mask-repeat:no-repeat}', '#wallpaper-canvas{mask-image:none} /* precise foreground clipping is rendered by pond.js */');p.write_text(s)
# Light is rendered on environment canvas, moving in time even in clear summer weather.
p=r/'app/environment.js';s=p.read_text();s=s.replace('actual={};','actual={},lightFrames=0;')
pos=s.index(' function render(dt)');s=s[:pos]+''' function light(){
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
''' +s[pos:]
s=s.replace("ctx.clearRect(0,0,w,h);if(config.weather", "ctx.clearRect(0,0,w,h);light();if(config.weather")
s=s.replace('inspect:()=>({...actual})','inspect:()=>({...actual,time,lightFrames,dynamicLight:true})');p.write_text(s)
