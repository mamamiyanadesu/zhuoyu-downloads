from pathlib import Path
import shutil,re,json
R=Path('/Users/mac/Documents/Codex/learn/qingchi-desktop-20261106');v=R/'variants/reference-seasons-14';a=v/'source/app';w=v/'web-preview';assets=a/'assets/reference14';assets.mkdir(exist_ok=True)
g=Path('/Users/mac/.codex/generated_images/01a1aebb-1865-7633-9309-074b603925d0')
for s,f in [('spring','exec-09ddd9f7-759c-4671-8343-277c73d9e1d8.png'),('autumn','exec-368b1220-384c-4db3-b067-66674655a426.png')]:shutil.copy2(g/f,assets/(s+'-bed.png'))
# New assets are independently generated, never extracted commercial files.
p=a/'scene-manifest.js';s=p.read_text();s=s.replace("function assetsFor(map,s){","function assetsFor(map,s){if(map==='clear'&&['spring','autumn'].includes(s))return {...assets[s],bed:'assets/reference14/'+s+'-bed.png'};")
s=s.replace("function poses(s,w,h,ratio,time=0,map='lab'){","function poses(s,w,h,ratio,time=0,map='lab'){if(map==='clear'&&['spring','autumn'].includes(s))return [];")
s=s.replace("function rocksFor(map,s){","function rocksFor(map,s){if(map==='clear'&&['spring','autumn'].includes(s))return [[[0,0],[.22,0],[.17,.10],[0,.19]],[[0,.80],[.10,.86],[.17,1],[0,1]],[[.80,1],[.88,.85],[1,.76],[1,1]],[[.90,0],[1,0],[1,.11]]];")
p.write_text(s)
p=a/'scene-art.js';s=p.read_text().replace("season!=='spring'","!['spring','autumn'].includes(season)").replace("season==='spring'","['spring','autumn'].includes(season)")
s=s.replace("const count=['spring','autumn'].includes(season)?18:13;","const count=season==='spring'?64:44;")
s=s.replace("ctx.scale(pose.widthScale,1);ctx.beginPath();","ctx.scale(pose.widthScale*(season==='spring'?.55:.64),season==='spring'?.55:.64);ctx.beginPath();")
s=s.replace("map==='clear'&&!['spring','summer'].includes(season)","map==='clear'&&!['spring','summer','autumn'].includes(season)").replace("map==='clear'&&['spring','summer'].includes(season)","map==='clear'&&['spring','summer','autumn'].includes(season)")
s=s.replace("bounded-local-drift-v13","bounded-local-drift-reference14")
p.write_text(s)
p=a/'scene-integrated.css';p.write_text(p.read_text()+"\nbody[data-scene-map=clear][data-scene-season=autumn] #scene-bed,body[data-scene-map=clear][data-scene-season=autumn] #scene-water{display:block}body[data-scene-map=clear][data-scene-season=autumn] #water-surface-canvas{display:none}\n")
p=a/'scene-water.js';s=p.read_text();s=s.replace("if(season==='spring'||season==='summer')renderCaustics();","if(season==='spring'||season==='summer'||season==='autumn')renderCaustics();")
# Broad, coherent curved light bands, composed independently rather than porting the reference shader.
s=s.replace("vec2 q=p*vec2(size.x/size.y,1.);", "vec2 q=p*vec2(size.x/size.y,1.);")
start=s.index('color*=.97+min(.13,(focus-.75)*.16);');end=s.index(' vec3 normal=',start)
s=s[:start]+'''// REFERENCE14_BROAD_LIGHT: stable large cells drifting together; no rapid small sparkles.
 vec2 adv=q-vec2(-.82,-.57)*clock*.0014;
 vec2 bend=adv+vec2(sin(adv.y*6.4+clock*.012),cos(adv.x*5.6-clock*.010))*.08;
 float u=sin(bend.x*16.5+bend.y*3.1+sin(bend.y*12.1)*1.12);
 float v=sin(bend.y*18.3-bend.x*2.7+cos(bend.x*10.4)*.94);
 float ridge=exp(-pow((u+v*.82)/.095,2.));
 float halo=exp(-pow((u+v*.82)/.25,2.));
 float patch=.32+.68*smoothstep(-.4,.65,sin(adv.x*4.2+adv.y*2.8));
 float margin=smoothstep(0.,.10,min(min(p.x,1.-p.x),min(p.y,1.-p.y)));
 color=texture(bed,clamp(st+slope*.012+drift,.001,.999)).rgb;
 // Cool the warm autumn sand under a very thin transparent water layer.
 if(seasonMode>1.5&&seasonMode<2.5)color=mix(color,vec3(.42,.55,.41),.19);
 color+=vec3(.17,.19,.13)*(ridge*.70+halo*.16)*patch*margin;
 color*=.99+min(.035,(focus-.75)*.07);
 '''+s[end:]
s=s.replace("lightDeformationRate:.62","lightDeformationRate:.012,referenceLight:'broad-coherent-v14'")
p.write_text(s)
# Independent minimal fish drawing sharing our existing movement and feeding system.
p=a/'vendor/pond.js';s=p.read_text().replace("function leafAt(x,y){","function leafAt(x,y){if(window.Reference14&&window.QingchiScene?.active())return window.QingchiScene.containsPoint(x,y);")
s=s.replace("function occludeLeaves(){","function occludeLeaves(){if(window.Reference14){window.QingchiScene?.occlude(ctx);return;}")
s=s.replace("    draw(ctx) {\n        if(config.fishArt", "    draw(ctx) {\n        if(window.Reference14)return this.drawReference14(ctx);\n        if(config.fishArt",1)
pos=s.index('    drawLegacy(ctx) {')
s=s[:pos]+'''    drawReference14(ctx) {
        const size=config.fishSize*this.visualScale*.88,head=this.segments[0],angle=Math.atan2(head.y-this.segments[2].y,head.x-this.segments[2].x);
        const pts=this.segments.map((p,i)=>{const a=this.segments[Math.max(0,i-1)],b=this.segments[Math.min(11,i+1)],t=Math.atan2(a.y-b.y,a.x-b.x),r=[3,5.3,6.4,6.1,5.4,4.4,3.3,2.3,1.4,.9,.6,.3][i]*size;return{x:p.x,y:p.y,nx:-Math.sin(t)*r,ny:Math.cos(t)*r};});
        const outline=pts.map(p=>[p.x+p.nx,p.y+p.ny]).concat([...pts].reverse().map(p=>[p.x-p.nx,p.y-p.ny]));
        const shape=()=>{ctx.beginPath();outline.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();};
        ctx.save();ctx.translate(6*size,9*size);shape();ctx.fillStyle='rgba(35,56,43,.17)';ctx.fill();ctx.restore();
        ctx.save();shape();ctx.fillStyle=this.color;ctx.fill();ctx.clip();ctx.fillStyle=this.custom?this.custom.accent:(this.spotColor==='#222'?'#414b41':'#eee9cf');
        for(const i of [2,5,7]){const p=pts[i];ctx.beginPath();ctx.ellipse(p.x+p.nx*.25,p.y+p.ny*.25,4.2*size,3.2*size,angle+i*.3,0,Math.PI*2);ctx.fill();}ctx.restore();
        const tail=pts[11],ta=Math.atan2(tail.y-pts[9].y,tail.x-pts[9].x);ctx.save();ctx.translate(tail.x,tail.y);ctx.rotate(ta);ctx.fillStyle='rgba(236,233,210,.68)';ctx.beginPath();ctx.moveTo(-2,0);ctx.lineTo(8*size,-5*size);ctx.quadraticCurveTo(5*size,0,8*size,5*size);ctx.closePath();ctx.fill();ctx.restore();
        ctx.save();ctx.translate(head.x,head.y);ctx.rotate(angle);for(const side of [-1,1]){ctx.fillStyle='rgba(231,229,200,.48)';ctx.beginPath();ctx.moveTo(-7*size,side*4*size);ctx.lineTo(-15*size,side*9*size);ctx.lineTo(-13*size,side*3*size);ctx.fill();ctx.fillStyle='#303b30';ctx.beginPath();ctx.arc(0,side*2.4*size,.6*size,0,Math.PI*2);ctx.fill();}ctx.restore();
    }
''' +s[pos:]
s=s.replace("fishArt:config.fishArt, alarmRing","fishArt:window.Reference14?'reference14-flat':config.fishArt, alarmRing")
p.write_text(s)
# deterministic tiny visitors; small scale and layer difference, not the existing large randomized birds.
(a/'reference-details.js').write_text('''(()=>{'use strict';const c=document.createElement('canvas');c.id='reference-details';c.setAttribute('aria-label','水底小龟与小蝴蝶');c.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:2;width:100%;height:100%';document.body.append(c);const g=c.getContext('2d');let t=0,last=0,frames=0;function resize(){const d=Math.min(devicePixelRatio||1,1.5);c.width=innerWidth*d;c.height=innerHeight*d;g.setTransform(d,0,0,d,0,0);}resize();addEventListener('resize',resize);let state={};function tick(now){requestAnimationFrame(tick);if(now-last<33)return;let dt=last?Math.min(.1,(now-last)/1000):0;last=now;if(document.hidden||window.QingchiPond?.inspect().paused)return;t+=dt;frames++;const w=innerWidth,h=innerHeight,s=Math.min(w/1280,h/720);g.clearRect(0,0,w,h);const x=w*(.25+.035*Math.sin(t*.018)),y=h*(.46+.035*Math.sin(t*.023)),a=.2+Math.sin(t*.018)*.12;
g.save();g.translate(x,y);g.rotate(a);g.scale(s,s);g.globalAlpha=.48;g.fillStyle='#26493c';g.beginPath();g.ellipse(3,5,11,8,0,0,Math.PI*2);g.fill();g.fillStyle='#688574';for(const side of [-1,1])for(const off of [-5,5]){g.beginPath();g.ellipse(off,side*(7+Math.sin(t*1.1+off)*1.1),4,2.2,side*.6,0,Math.PI*2);g.fill();}g.beginPath();g.ellipse(12,0,3.5,3,0,0,Math.PI*2);g.fill();g.beginPath();g.ellipse(0,0,10,7.5,0,0,Math.PI*2);g.fillStyle='#55705b';g.fill();g.strokeStyle='rgba(200,212,166,.55)';g.lineWidth=.6;g.beginPath();g.ellipse(0,0,6,5,0,0,Math.PI*2);g.stroke();g.beginPath();g.moveTo(-7,0);g.lineTo(7,0);g.moveTo(0,-6);g.lineTo(0,6);g.stroke();g.restore();
const visible=t%48>8&&t%48<26,bx=w*(.78+.035*Math.sin(t*.27)),by=h*(.19+.025*Math.cos(t*.31));if(visible){g.save();g.translate(bx,by);g.rotate(-.4+Math.sin(t*.3)*.25);g.scale(s,s);g.globalAlpha=Math.min(1,(t%48-8)/2,(26-t%48)/2)*.70;const wing=.28+.72*Math.abs(Math.sin(t*9));g.fillStyle='#ddd7ab';for(const sign of [-1,1]){g.beginPath();g.ellipse(sign*3.2*wing,0,3.7*wing,5.5,sign*.35,0,Math.PI*2);g.fill();}g.fillStyle='#53604a';g.fillRect(-.6,-3,1.2,6);g.restore();}state={time:t,frames,turtle:{x,y,length:27*s,layer:'underwater',opacity:.48},butterfly:{visible,x:bx,y:by,span:14*s,cycle:48}};}requestAnimationFrame(tick);window.ReferenceDetails=Object.freeze({inspect:()=>state});})();''')
# Same core app and functions; only this local preview origin gets its own state.
boot="""(()=>{'use strict';window.Reference14=location.port==='8810';const C=QingchiCore,L=QingchiLifeCore,scene=new URLSearchParams(location.search).get('scene')||'spring';const key=window.Reference14?'reference14':'ours13';if(!localStorage.getItem(C.KEY)){const s=C.initial();s.settings.fishCount=24;s.settings.quietView=true;localStorage.setItem(C.KEY,JSON.stringify(s));}let s=localStorage.getItem(L.KEY)?L.validate(JSON.parse(localStorage.getItem(L.KEY))):L.initial();s.garden=[];s.habitats.layouts.clear=[];s.habitats.active='clear';s.habitats.visitors={enabled:false,density:'low'};s.env={season:['spring','autumn'].includes(scene)?scene:'spring',light:'day',weather:'clear'};localStorage.setItem(L.KEY,JSON.stringify(L.validate(s)));addEventListener('DOMContentLoaded',()=>{document.title=(window.Reference14?'原版效果复刻14':'保留方案13')+' · '+(scene==='autumn'?'秋季':'春季');});})();"""
(w/'preview-bootstrap.js').write_text(boot)
# Same UI with two explicitly requested scenes.
p=a/'spring-summer-preview.js';s=p.read_text().replace("{season:'summer',name:'夏 · 原清池',image:'assets/clear-pond-v2.png',description:'原清池作为夏季底板，保留荷叶、浅石与清透底色。'}","{season:'autumn',name:'秋 · 桂影复刻',image:'assets/reference14/autumn-bed.png',description:'细小桂花、暖沙浅水与克制的水下细节。'}")
s=s.replace('春 · 桃花池','春 · 樱花复刻').replace('assets/scenes/spring/peach-master-v2.png','assets/reference14/spring-bed.png').replace('保留已确认的桃花春景与轻柔水光。','细枝樱花、灰玉浅底与缓慢大片水光。').replace('春与夏，两处水边','春秋复刻 · 对照版').replace('春与夏两张预览 · 秋冬暂不制作','独立复刻切片 · 13版保留').replace('已保存 · 秋冬暂不制作','已保存 · 不修改13版').replace('夏 · 原清池','秋 · 桂影复刻').replace("'summer'","'autumn'")
p.write_text(s)
p=w/'index.html';s=p.read_text().replace('</head>','<script defer src="reference-details.js"></script></head>').replace('当前仅打磨春与夏；秋冬暂不制作。','春秋独立复刻对照；原版代码与美术未直接打包。');p.write_text(s)
# Outer comparison keeps identical 1280x720 viewports, source13 read-only on a separate port.
(w/'compare.html').write_text('''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>春秋双版本动态对照</title><style>*{box-sizing:border-box}body{margin:0;background:#eeeee5;color:#263d33;font:15px system-ui}header{padding:22px 26px;display:flex;gap:16px;align-items:center;flex-wrap:wrap}h1{font-size:22px;margin:0 auto 0 0}button,a{font:inherit;color:inherit}button{border:1px solid #a2ada0;border-radius:22px;background:transparent;padding:8px 20px;cursor:pointer}button[aria-pressed=true]{background:#284d3b;color:#fff}main{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 20px}.card{min-width:0}h2{font-size:17px;margin:8px 0 12px}.framebox{position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:8px;background:#c7d0bf;box-shadow:0 8px 35px #203a3022}iframe{border:0;width:1280px;height:720px;transform-origin:top left;position:absolute;inset:0}p{font-size:13px;line-height:1.65;color:#5b695d}footer{padding:12px 24px}details{margin-top:12px}video{width:min(900px,100%);display:block;background:#111}.ref{display:flex;gap:12px}.ref img{width:48%;object-fit:contain}a{margin-right:18px}@media(max-width:800px){main{grid-template-columns:1fr}}</style><header><h1>同一池水，两种取舍</h1><button id="spring" aria-pressed="true">春季对照</button><button id="autumn" aria-pressed="false">秋季对照</button></header><main><section class="card"><h2 id="left-title">A · 保留版13 / 春 · 桃花池</h2><div class="framebox"><iframe title="保留版动态鱼池" id="ours" src="http://127.0.0.1:8811/?scene=spring"></iframe></div><p id="left-note">我们现有的桃花构图、较细致的鱼、水光。独立对照存档；13版原文件及8809入口不变。</p><a id="left-open" target="_blank" href="http://127.0.0.1:8811/?scene=spring">单独打开保留版 ↗</a></section><section class="card"><h2 id="right-title">B · 原版效果复刻14 / 春 · 樱花</h2><div class="framebox"><iframe title="复刻版动态鱼池" id="replica" src="/?scene=spring"></iframe></div><p>更细小的花枝、浅色斑驳池底、大块慢光、简洁鱼体、微动浮花、小龟与小蝴蝶。独立实现，不是原版程序。</p><a id="right-open" target="_blank" href="/?scene=spring">单独打开复刻版 ↗</a></section></main><footer><p>两侧固定1280×720内部视口后等比缩放；都可点击水面投喂。鱼群随机，不声称同一时刻同一鱼位。对照只保存在本机，不更新已安装应用。声音及Windows桌面集成不在此切片内。</p><details><summary>展开原版参考（来源视频画面，不是复刻效果）</summary><div class="ref"><img src="reference-spring.png" alt="原版春季视频参考"><img src="reference-autumn.png" alt="原版秋季视频参考"></div><p>已有第5集视频约70.2秒为春、71.8秒为秋。字幕可能滞后；以上以画面植物与配色区分。</p></details><p>先看风格、光流速度、花瓣尺度，再决定保留哪些。当前两季均为首个可动切片，尚未通过你的审美验收。</p></footer><script src="compare.js"></script></html>''')
(w/'compare.js').write_text('''(()=>{const $=s=>document.getElementById(s);function size(){document.querySelectorAll('.framebox').forEach(b=>b.firstElementChild.style.transform=`scale(${b.clientWidth/1280})`);}addEventListener('resize',size);size();function select(s){for(const n of ['spring','autumn'])$(n).setAttribute('aria-pressed',String(n===s));const left='http://127.0.0.1:8811/?scene='+s,right='/?scene='+s;$('ours').src=left;$('replica').src=right;$('left-open').href=left;$('right-open').href=right;$('left-title').textContent=s==='spring'?'A · 保留版13 / 春 · 桃花池':'A · 既有秋季草稿 / 未确认美术';$('left-note').textContent=s==='spring'?'我们现有桃花构图、细致鱼体与水光；13版原文件不变。':'这是项目既有秋季草稿，不冒充已确认的春夏13版地图，也未改动它的美术。';$('right-title').textContent=s==='spring'?'B · 原版效果复刻14 / 春 · 樱花':'B · 原版效果复刻14 / 秋 · 桂影';}for(const s of ['spring','autumn'])$(s).onclick=()=>select(s);})();''')
(w/'serve.py').write_text('''from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit,unquote
import threading
root=Path(__file__).resolve().parent
project=root.parents[2]
ours=project/'variants/slow-flow-13'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  name=unquote(urlsplit(path).path).lstrip('/') or 'index.html'
  if name in ['reference-spring.png','reference-autumn.png']:return str(project/'evidence/v9/candidate14-reference-comparison'/name)
  if self.server.server_port==8811:
   if name=='preview-bootstrap.js':return str(root/name)
   base=ours/'web-preview' if name=='index.html' else ours/'source/app'
  else:base=root if name in ['index.html','preview-bootstrap.js','compare.html','compare.js'] else root.parent/'source/app'
  p=(base/name).resolve()
  if p!=base and base not in p.parents:return str(root/'NOT_FOUND')
  return str(p)
 def end_headers(self):
  self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff');super().end_headers()
 def list_directory(self,path):self.send_error(404);return None
servers=[ThreadingHTTPServer(('127.0.0.1',port),Handler) for port in [8810,8811]]
for server in servers:threading.Thread(target=server.serve_forever,daemon=True).start()
print('PREVIEW_READY http://127.0.0.1:8810/compare.html',flush=True)
threading.Event().wait()
''')
(v/'README.txt').write_text('春秋原版效果复刻14 · 独立切片\nhttp://127.0.0.1:8810/compare.html\n原13版文件与8809入口保留不变。复刻14使用独立生成的春/秋底图、独立绘制鱼体与小动物、重写宽幅慢水光。不是原版程序或像素级一致。\n对照页A为原13版春景；秋季A为项目已有秋季草稿，不称已确认。8810和8811是隔离存档。未更新已安装应用。\n')
print('MODIFIED',v)
