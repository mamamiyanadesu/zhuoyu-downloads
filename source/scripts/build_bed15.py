from pathlib import Path
import shutil,json
R=Path('/Users/mac/Documents/Codex/learn/qingchi-desktop-20261106');v=R/'variants/bed-depth-15';a=v/'source/app';w=v/'web-preview';warm=R/'variants/slow-flow-13/source/app'
# Keep selected spring/summer mechanisms byte-for-byte before adding only bed shading.
for name in ['scene-water','scene-art','scene-manifest','scene-bridge']:
 shutil.copy2(warm/(name+'.js'),a/(name+'-ours.js'))
shutil.copy2(warm/'vendor/pond.js',a/'vendor/pond-ours.js')
core='''(function(root,f){const api=f();if(typeof module==='object'&&module.exports)module.exports=api;else root.BedDetail15=api;})(globalThis,()=>{const clamp=x=>Math.max(0,Math.min(1,x));function smooth(a,b,x){const t=clamp((x-a)/(b-a));return t*t*(3-2*t);}function depth(s,x,y){if(s!=='autumn')return 0;const center=.51+.055*Math.sin(y*4.5+1.2),width=.18+.035*Math.sin(y*7.2);return (1-smooth(width*.35,width*1.6,Math.abs(x-center)))*smooth(.03,.21,y)*(1-smooth(.82,.98,y));}function config(s){return {season:s,stones:s==='autumn'?'existing painted bed':'sparse stable micro-pebbles',depth:s==='autumn'?'central sand shoal':'retain original water color',version:15};}return Object.freeze({depth,config});});'''
(a/'bed-detail-core.js').write_text(core)
glsl='''
 // BED15_DEPTH_DETAIL: source-anchored substrate, never screen-space floating dust.
 float bedHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
 float bedNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(bedHash(i),bedHash(i+vec2(1,0)),f.x),mix(bedHash(i+vec2(0,1)),bedHash(i+vec2(1,1)),f.x),f.y);}
 float shallowArea(vec2 p){float center=.51+.055*sin(p.y*4.5+1.2);float width=.18+.035*sin(p.y*7.2);float irregular=(bedNoise(p*12.)-.5)*.045;return (1.-smoothstep(width*.35,width*1.6,abs(p.x-center)+irregular))*smoothstep(.03,.21,p.y)*(1.-smoothstep(.82,.98,p.y));}
 vec3 bedDetail(vec3 color,vec2 p){
  float grain=bedNoise(p*vec2(830.,560.))-.5;
  float broad=bedNoise(p*vec2(9.,7.))*.65+bedNoise(p*vec2(21.,16.))*.35;
  if(seasonMode>1.5&&seasonMode<2.5){
   float shallow=shallowArea(p);
   vec3 sand=vec3(.72,.70,.48)+(broad-.5)*.052;
   vec3 deeper=color*vec3(.91,.96,.94)+vec3(-.005,.008,.006);
   color=mix(deeper,mix(color,sand,.43),shallow);
   return color+grain*.009;
  }
  // Subtle sediment grain and broken algae patches keep approved spring/summer palette.
  color+=grain*.006;
  float algae=smoothstep(.51,.73,broad)*(1.-smoothstep(.73,.88,broad));
  color=mix(color,color*vec3(.94,.975,.94),algae*.34);
  vec2 grid=vec2(19.,12.),cellId=floor(p*grid),q=fract(p*grid);
  float seed=bedHash(cellId+vec2(4.,8.));
  if(seed>.80){
   vec2 center=vec2(.25+.50*bedHash(cellId+13.),.25+.50*bedHash(cellId+37.));
   float radius=.043+.043*bedHash(cellId+62.);
   vec2 d=(q-center)*vec2(1.,1.23);float dist=length(d);
   float stone=(1.-smoothstep(radius*.72,radius*1.16,dist));
   float shadow=(1.-smoothstep(radius*.8,radius*1.8,length(d-vec2(.025,-.027))));
   color*=1.-shadow*.065;
   vec3 pebble=mix(vec3(.42,.48,.40),vec3(.64,.63,.50),bedHash(cellId+76.));
   pebble+=max(0.,(-d.x+d.y)/radius)*.035;
   color=mix(color,pebble,stone*.38);
  }
  return color;
 }
'''
for name in ['scene-water.js','scene-water-ours.js']:
 p=a/name;s=p.read_text();anchor=' ${OPTICS}\n float ht';assert anchor in s;s=s.replace(anchor,' ${OPTICS}\n'+glsl+'\n float ht',1)
 # Before dry-bank masking, after water/light composition. Mask keeps dry branches untouched.
 s=s.replace(' float opticalCoverage=texture(rockMask,st).r;',' color=bedDetail(color,st+slope*.014+drift);\n float opticalCoverage=texture(rockMask,st).r;')
 s=s.replace("inspect:()=>({ready,error,time,frames,steps,", "inspect:()=>({ready,error,time,frames,steps,bedDetail:'depth-and-substrate-v15',shallowCenter:season==='autumn',")
 p.write_text(s)
boot="""(()=>{'use strict';const season=location.pathname.split('/')[1]||'autumn';window.Reference14=season==='autumn';const C=QingchiCore,L=QingchiLifeCore;if(!localStorage.getItem(C.KEY)){const s=C.initial();s.settings.fishCount=24;s.settings.quietView=true;localStorage.setItem(C.KEY,JSON.stringify(s));}let s=localStorage.getItem(L.KEY)?L.validate(JSON.parse(localStorage.getItem(L.KEY))):L.initial();s.garden=[];s.habitats.layouts.clear=[];s.habitats.active='clear';s.habitats.visitors={enabled:false,density:'low'};s.env={season:['spring','summer','autumn'].includes(season)?season:'autumn',light:'day',weather:'clear'};localStorage.setItem(L.KEY,JSON.stringify(L.validate(s)));addEventListener('DOMContentLoaded',()=>{document.title=(location.port==='8812'?'池底打磨15':'已选基线')+' · '+({spring:'春',summer:'夏',autumn:'秋'}[season]);});})();"""
(w/'preview-bootstrap.js').write_text(boot)
menu="""(()=>{'use strict';const $=id=>document.getElementById(id),names={spring:'春 · 桃花池',summer:'夏 · 原清池',autumn:'秋 · 桂影'},scene=location.pathname.split('/')[1];$('map-title').textContent='已选方案 · 春夏13 / 秋14';$('map-cards').replaceChildren();for(const [key,title] of Object.entries(names)){const b=document.createElement('button');b.className='map-card';b.textContent=title;b.setAttribute('aria-pressed',String(scene===key));b.onclick=()=>location.href='../'+key+'/';$('map-cards').append(b);}function update(){$('map-open').textContent=(names[scene]||names.autumn)+' ▾';$('map-save').textContent=location.port==='8812'?'池底细节打磨 · 旧版保留':'已选方案基线 · 不改原文件';}addEventListener('qingchi-scene-ready',update);update();$('season').replaceChildren(new Option(names[scene],scene));$('season').disabled=true;})();"""
(a/'bed15-menu.js').write_text(menu)
# Each entry chooses the already selected rendering lineage. No season-dependent global rewrite.
html=(R/'variants/reference-seasons-14/web-preview/index.html').read_text().replace('spring-summer-preview.js','bed15-menu.js')
for scene in ['spring','summer','autumn']:
 text=html
 if scene!='autumn':
  for name in ['scene-water','scene-art','scene-manifest','scene-bridge']:text=text.replace('src="'+name+'.js"','src="'+name+'-ours.js"')
  text=text.replace('vendor/pond.js','vendor/pond-ours.js').replace('<script defer src="reference-details.js"></script>','')
 text=text.replace('</head>','<script defer src="bed-detail-core.js"></script></head>')
 (w/(scene+'.html')).write_text(text)
(w/'compare.html').write_text('''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>三季池底细节 · 前后对照15</title><style>*{box-sizing:border-box}body{margin:0;background:#eeeee5;color:#263d33;font:15px system-ui}header{padding:20px 26px;display:flex;gap:12px;align-items:center;flex-wrap:wrap}h1{font-size:22px;margin:0 auto 0 0}button{font:inherit;color:inherit;border:1px solid #a2ada0;border-radius:22px;background:transparent;padding:8px 20px;cursor:pointer}button[aria-pressed=true]{background:#284d3b;color:white}main{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 20px}h2{font-size:17px}.framebox{position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:8px;background:#c7d0bf}iframe{border:0;width:1280px;height:720px;transform-origin:top left;position:absolute;inset:0}p{font-size:13px;line-height:1.7;color:#5b695d}footer{padding:12px 24px}a{color:inherit;margin-right:16px}@media(max-width:800px){main{grid-template-columns:1fr}}</style><header><h1>保留好看的，只补池底层次</h1><button id="autumn" aria-pressed="true">秋 · 中央浅水</button><button id="spring" aria-pressed="false">春 · 池底细节</button><button id="summer" aria-pressed="false">夏 · 池底细节</button></header><main><section><h2 id="before-title">A · 秋季复刻14 / 已选基线</h2><div class="framebox"><iframe title="修改前动态鱼池" id="before" src="http://127.0.0.1:8813/autumn/"></iframe></div><p>春夏读取13版，秋季读取14版；原文件不改，使用独立对照存档。</p><a id="before-open" target="_blank" href="http://127.0.0.1:8813/autumn/">单独打开修改前 ↗</a></section><section><h2 id="after-title">B · 秋季15 / 浅水沙床与周围层次</h2><div class="framebox"><iframe title="修改后动态鱼池" id="after" src="/autumn/"></iframe></div><p id="description">中央浅水沙床以不规则柔边过渡到周围较深水色，不换花枝、鱼、水光和UI。</p><a id="after-open" target="_blank" href="/autumn/">单独打开修改后 ↗</a></section></main><footer><p>两侧均为实时画面，可点击投喂；内部视口同为1280×720。鱼群随机，位置不强行同步。春夏的细节刻意低对比，建议单独打开大图查看；不往水面撒浮动噪点。</p><p>原13、14版保留；未更新已安装应用。池底深浅是视觉层次，不是新增地形碰撞。先看这轮细节强度，再决定是否采用。</p></footer><script src="compare.js"></script></html>''')
(w/'compare.js').write_text('''(()=>{const $=id=>document.getElementById(id);function resize(){document.querySelectorAll('.framebox').forEach(b=>b.querySelector('iframe').style.transform=`scale(${b.clientWidth/1280})`);}addEventListener('resize',resize);resize();const names={spring:'春',summer:'夏',autumn:'秋'};for(const scene of Object.keys(names))$(scene).onclick=()=>{for(const k of Object.keys(names))$(k).setAttribute('aria-pressed',String(k===scene));const before='http://127.0.0.1:8813/'+scene+'/',after='/'+scene+'/';$('before').src=before;$('after').src=after;$('before-open').href=before;$('after-open').href=after;$('before-title').textContent='A · '+names[scene]+'季'+(scene==='autumn'?'复刻14':'13')+' / 已选基线';$('after-title').textContent='B · '+names[scene]+'季15 / '+(scene==='autumn'?'浅水沙床与周围层次':'细砂、碎石和淡藻斑');$('description').textContent=scene==='autumn'?'中央浅水沙床以不规则柔边过渡到周围较深水色，不换花枝、鱼、水光和UI。':'保留原画风与水色，只补疏密有别、固定在水底的低对比细节。';};})();''')
(w/'serve.py').write_text('''from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit,unquote
import threading
root=Path(__file__).resolve().parent;project=root.parents[2];app=root.parent/'source/app';warm=project/'variants/slow-flow-13/source/app';fall=project/'variants/reference-seasons-14/source/app'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  name=unquote(urlsplit(path).path).lstrip('/') or 'compare.html';parts=name.split('/');scene=parts[0] if parts[0] in ['spring','summer','autumn'] else None
  if scene:
   name='/'.join(parts[1:]) or 'index.html'
   if name=='index.html':return str(root/(scene+'.html'))
   if name=='preview-bootstrap.js':return str(root/name)
   if name in ['bed15-menu.js','bed-detail-core.js']:return str(app/name)
   if self.server.server_port==8813:
    base=fall if scene=='autumn' else warm
    name=name.replace('-ours.js','.js')
   else:base=app
  else:base=root if name in ['compare.html','compare.js'] else app
  p=(base/name).resolve()
  if p!=base and base not in p.parents:return str(root/'NOT_FOUND')
  return str(p)
 def end_headers(self):self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff');super().end_headers()
 def list_directory(self,path):self.send_error(404);return None
servers=[ThreadingHTTPServer(('127.0.0.1',port),Handler) for port in [8812,8813]]
for s in servers:threading.Thread(target=s.serve_forever,daemon=True).start()
print('PREVIEW_READY http://127.0.0.1:8812/compare.html',flush=True);threading.Event().wait()
''')
(v/'README.txt').write_text('三季池底细节15\nhttp://127.0.0.1:8812/compare.html\n春夏以13版为基准，仅加低对比池底微细节；秋以14版为基准，仅加中央浅水沙床过渡。美术原图、鱼、UI与光流保留对应基线。8813读取原版本作为对照，原文件不变。修改不是已安装版本更新。\n')
print('BUILT',v)
