from pathlib import Path
import hashlib,json,shutil
r=Path(__file__).resolve().parent.parent;old=r/'variants/spring-summer-04';new=r/'variants/ink-summer-05';assert not new.exists();new.mkdir();
for top in ['source','web-preview']:shutil.copytree(old/top,new/top)
m={str(p.relative_to(old)):hashlib.sha256(p.read_bytes()).hexdigest()for top in ['source','web-preview']for p in (old/top).rglob('*')if p.is_file()};(new/'baseline-manifest.json').write_text(json.dumps(m,indent=2));assert all((old/n).stat().st_ino!=(new/n).stat().st_ino for n in m)
a=new/'source/app';im=Path('/Users/mac/.codex/generated_images/01a1aebb-1865-7633-9309-074b603925d0/exec-6a94b819-40d9-4127-a6fe-8b1ddd6fe6db.png');shutil.copy2(im,a/'assets/clear-pond-clean-v5.png')
p=a/'vendor/pond.js';s=p.read_text().replace("fishArt: 'polished'","fishArt: 'ink'");s=s.replace('    draw(ctx) {\n        if(config.fishArt', '    drawPolished(ctx) {\n        if(config.fishArt',1)
ink='''    draw(ctx) {
        if(config.fishArt==='ink')return this.drawInk(ctx);
        if(config.fishArt==='original')return this.drawLegacy(ctx);
        return this.drawPolished(ctx);
    }
    drawInk(ctx) {
        const size=config.fishSize*this.visualScale,head=this.segments[0];
        const angle=Math.atan2(head.y-this.segments[2].y,head.x-this.segments[2].x);
        const points=this.segments.map((p,i)=>{const prev=this.segments[Math.max(0,i-1)],next=this.segments[Math.min(11,i+1)],a=Math.atan2(prev.y-next.y,prev.x-next.x),w=[3.8,6.2,7.4,7.2,6.5,5.5,4.3,3.2,2.3,1.6,1,.6][i]*size*(this.bodyWidth||1);return{x:p.x,y:p.y,nx:-Math.sin(a)*w,ny:Math.cos(a)*w,a,w};});
        const seed=this.artSeed??(this.artSeed=(head.x*.037+head.y*.061)%19),red=this.custom?this.custom.accent:(Math.sin(seed*7)>0.30?'153,60,43':'32,57,52');
        const pigment=red.startsWith('#')?'44,64,56':red;
        const outline=points.map(p=>({x:p.x+p.nx,y:p.y+p.ny})).concat([...points].reverse().map(p=>({x:p.x-p.nx,y:p.y-p.ny})));
        const path=()=>{ctx.beginPath();const last=outline.at(-1);ctx.moveTo((last.x+outline[0].x)/2,(last.y+outline[0].y)/2);outline.forEach((p,i)=>{const n=outline[(i+1)%outline.length];ctx.quadraticCurveTo(p.x,p.y,(p.x+n.x)/2,(p.y+n.y)/2);});ctx.closePath();};
        ctx.save();
        // Dilute brush-load fins; each curved strand follows the same live spine.
        for(const side of [-1,1]){const p=points[3];ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a+side*Math.sin(this.swimCycle*.8)*.12);ctx.scale(size,size*side*(this.custom?.fin||1));
          ctx.beginPath();ctx.moveTo(2,3);ctx.bezierCurveTo(-2,8,-6,15,-14,17);ctx.quadraticCurveTo(-10,9,-5,4);ctx.closePath();let wash=ctx.createLinearGradient(0,3,-14,17);wash.addColorStop(0,'rgba(44,69,62,.26)');wash.addColorStop(.6,'rgba(68,91,78,.13)');wash.addColorStop(1,'rgba(97,118,94,0)');ctx.fillStyle=wash;ctx.fill();
          for(let j=0;j<4;j++){ctx.beginPath();ctx.moveTo(-j,5);ctx.quadraticCurveTo(-3-j*1.5,10,-10-j,14+j*.7);ctx.strokeStyle=`rgba(43,64,57,${.13-j*.022})`;ctx.lineWidth=.48;ctx.stroke();}ctx.restore();}
        const tail=points[11],prior=points[10],flex=Math.sin(this.swimCycle)*2;
        ctx.save();ctx.translate(tail.x,tail.y);ctx.rotate(Math.atan2(tail.y-prior.y,tail.x-prior.x));ctx.scale(size*(this.custom?.tail||1),size*(this.custom?.tail||1));
        for(const side of [-1,1]){ctx.beginPath();ctx.moveTo(-2,0);ctx.bezierCurveTo(6,side*2,13,side*9+flex,23,side*12+flex);ctx.bezierCurveTo(17,side*3,9,side*.6,-2,0);let wash=ctx.createLinearGradient(0,0,23,0);wash.addColorStop(0,'rgba(27,51,46,.43)');wash.addColorStop(.42,'rgba(52,78,65,.19)');wash.addColorStop(1,'rgba(81,103,82,0)');ctx.fillStyle=wash;ctx.fill();for(let j=0;j<3;j++){ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(9,side*(1+j),20-j,side*(6+j*2)+flex);ctx.strokeStyle=`rgba(35,59,51,${.15-j*.035})`;ctx.lineWidth=.5;ctx.stroke();}}ctx.restore();
        // No porcelain gloss, dark outline or displaced drop shadow: translucent wash and feathered pigment.
        path();ctx.fillStyle='rgba(226,231,207,.68)';ctx.fill();ctx.save();ctx.clip();
        for(let i=0;i<10;i++){const p=points[i],w=p.w;let wash=ctx.createRadialGradient(p.x-p.nx*.25,p.y-p.ny*.25,.1,p.x,p.y,w*1.5);wash.addColorStop(0,`rgba(${pigment},${.20+.11*Math.sin(i*.7+seed)**2})`);wash.addColorStop(.5,`rgba(${pigment},.12)`);wash.addColorStop(1,`rgba(${pigment},0)`);ctx.fillStyle=wash;ctx.beginPath();ctx.arc(p.x,p.y,w*1.55,0,Math.PI*2);ctx.fill();}
        // Loaded ink dabs bleed outward; irregular pigment is anchored to the body, never screen noise.
        for(const i of [1,3,6,8]){const p=points[i];ctx.save();ctx.translate(p.x+p.nx*Math.sin(seed+i)*.25,p.y+p.ny*Math.sin(seed+i)*.25);ctx.rotate(p.a);ctx.scale(size,size);const radius=i===1?4:5.6;let g=ctx.createRadialGradient(0,0,.1,0,0,radius);g.addColorStop(0,`rgba(${pigment},.65)`);g.addColorStop(.32,`rgba(${pigment},.46)`);g.addColorStop(.74,`rgba(${pigment},.17)`);g.addColorStop(1,`rgba(${pigment},0)`);ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,0,radius*1.3,radius*.85,.3*Math.sin(i+seed),0,Math.PI*2);ctx.fill();ctx.restore();}
        for(let j=0;j<3;j++){ctx.beginPath();points.slice(1,11).forEach((p,i)=>{const side=-.35+j*.23+.05*Math.sin(i*1.2+seed);i?ctx.lineTo(p.x+p.nx*side,p.y+p.ny*side):ctx.moveTo(p.x+p.nx*side,p.y+p.ny*side);});ctx.strokeStyle=`rgba(${pigment},${.13-j*.025})`;ctx.lineWidth=(.7-j*.15)*size;ctx.stroke();}
        if(this.custom?.strokes?.length){ctx.save();ctx.translate(head.x,head.y);ctx.rotate(angle);ctx.scale(size,size);for(const st of this.custom.strokes){ctx.strokeStyle=st.color;ctx.fillStyle=st.color;ctx.lineWidth=st.size*22;ctx.lineCap='round';ctx.beginPath();st.points.forEach((p,i)=>i?ctx.lineTo(-21+p[0]*31,p[1]*12):ctx.moveTo(-21+p[0]*31,p[1]*12));if(st.points.length===1){const p=st.points[0];ctx.arc(-21+p[0]*31,p[1]*12,st.size*11,0,Math.PI*2);ctx.fill();}else ctx.stroke();}ctx.restore();}ctx.restore();
        ctx.save();ctx.translate(head.x,head.y);ctx.rotate(angle);for(const side of [-1,1]){ctx.beginPath();ctx.arc(.7*size,side*2.7*size,.62*size,0,Math.PI*2);ctx.fillStyle='rgba(19,39,34,.85)';ctx.fill();ctx.beginPath();ctx.moveTo(2*size,side*1.7*size);ctx.quadraticCurveTo(5*size,side*2.8*size,6*size,side*4.6*size);ctx.strokeStyle='rgba(36,57,47,.25)';ctx.lineWidth=.45*size;ctx.stroke();}ctx.restore();ctx.restore();
    }
'''
s=s.replace('    drawPolished(ctx) {',ink+'    drawPolished(ctx) {',1).replace('["original","polished"].includes(values.fishArt)','["original","polished","ink"].includes(values.fishArt)');p.write_text(s)
for name in ['scene-manifest.js','spring-summer-preview.js']:
 p=a/name;p.write_text(p.read_text().replace('assets/clear-pond-v2.png','assets/clear-pond-clean-v5.png'))
p=a/'spring-summer-preview.js';s=p.read_text().replace("select.append(new Option('新版 · 体积与鳍尾细化','polished'),new Option('原版 · 对照','original'))","select.append(new Option('水墨 · 淡墨与朱红','ink'),new Option('上一版 · 体积与鳍尾','polished'),new Option('原版 · 对照','original'))");p.write_text(s)
p=a/'scene-water.js';s=p.read_text();needle=' void main(){vec2 p=uv;';assert needle in s
s=s.replace(needle,''' float leafWake(vec2 st,vec2 center,float radius,float phase){
 vec2 d=(st-center)*vec2(1.5,1.);float dist=length(d),angle=atan(d.y,d.x);float age=fract(clock*.12+phase);
 float ring=exp(-pow((dist-(radius+age*.10))/.0017,2.));
 float broken=smoothstep(-.65,.45,sin(angle*3.+clock*.16+phase*9.)+sin(angle*7.-clock*.11)*.38);
 return ring*sin(age*3.14159265)*broken;
 }
'''+needle,1)
s=s.replace('*(seasonMode<.5?1.:.22)','*(seasonMode<.5?1.:.90)')
needle=' // Sparse broad-angle surface glints'
s=s.replace(needle,''' if(seasonMode>.5&&seasonMode<1.5){
 // Source UV origin is lower left. Rings travel outwards then decay; none are baked into the bed.
 float wakes=leafWake(st,vec2(.081,.246),.100,.0)+leafWake(st,vec2(.081,.246),.100,.5);
 wakes+=leafWake(st,vec2(.169,.151),.054,.27)*.7;
 color+=vec3(.060,.074,.057)*wakes;
 }
'''+needle,1)
s=s.replace('causticWaveComponents:7','causticWaveComponents:7,summerRipples:\'time-driven expanding broken arcs\',summerBed:\'clean-v5-no-baked-rings\'');p.write_text(s)
p=new/'web-preview/serve.py';p.write_text(p.read_text().replace('8799','8800'))
p=new/'web-preview/preview-bootstrap.js';p.write_text(p.read_text().replace('春夏鱼体预览04','水墨鱼与夏水预览05').replace("season:'spring'","season:'summer'"))
print('INK5_CREATED',new,'BASELINE',len(m),'IMAGE_SHA',hashlib.sha256(im.read_bytes()).hexdigest())
