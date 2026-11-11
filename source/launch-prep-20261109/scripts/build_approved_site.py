from pathlib import Path
import shutil,hashlib,base64,difflib,json
root=Path('/Users/mac/Documents/Codex/learn/qingchi-desktop-20261106/launch-prep-20261109')
src=root/'site/dist'; out=root/'approved-site-v1'; dst=out/'dist'; evidence=out/'evidence'
assert not dst.exists(), 'Refuse overwriting existing candidate'
files={str(p.relative_to(src)):hashlib.sha256(p.read_bytes()).hexdigest() for p in src.rglob('*') if p.is_file()}
assert not any(p.is_symlink() for p in src.rglob('*'))
shutil.copytree(src,dst,copy_function=shutil.copy2)
assert (src/'index.html').stat().st_ino != (dst/'index.html').stat().st_ino
old=(src/'index.html').read_text(); (evidence/'baseline.html').write_bytes((src/'index.html').read_bytes())
asset=Path('/Users/mac/.codex/generated_images/01a1aebb-1865-7633-9309-074b603925d0/exec-f45182ad-14e9-4926-af98-51e99964d621.png')
img='data:image/png;base64,'+base64.b64encode(asset.read_bytes()).decode()
css='''
/* Approved homepage v1. All rules are scoped to the new surface. */
.landing-nav{height:5.67vw;min-height:58px;max-height:70px;padding:0 3.5%;display:flex;align-items:center;justify-content:space-between;background:#fbf9f4;color:#204729}.landing-nav .brand{font-size:26px;letter-spacing:2px;font-weight:600}.landing-nav .links{display:flex;gap:56px;font-size:18px}.landing-hero{height:calc(100svh - 166px);min-height:540px;position:relative;isolation:isolate;color:#204729;overflow:hidden}.landing-art{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-1}.landing-copy{position:absolute;top:22%;left:6.85%;max-width:580px}.landing-copy h1{font-family:'Songti SC','STSong',serif;font-size:clamp(52px,5.35vw,84px);line-height:1.3;font-weight:500;letter-spacing:2px;margin:0 0 24px}.landing-copy p{font-size:clamp(16px,1.65vw,25px);line-height:1.5;margin:0 0 22px}.landing-actions{display:flex;gap:28px;align-items:center}.landing-actions button{border:0;background:#204c2c;color:white;border-radius:40px;font-size:clamp(18px,1.7vw,26px);font-weight:500;padding:14px 48px}.landing-actions small{font-size:clamp(12px,1.35vw,20px)}.landing-strip{height:108px;padding:0 4%;background:#fbf9f4;display:flex;align-items:center;justify-content:center;position:relative;color:#294b30}.landing-strip p{font-size:24px;font-weight:500;letter-spacing:2px;margin:0}.landing-strip a{position:absolute;right:4%;font-size:18px}.experience{border:0;padding:0;width:min(1400px,96vw);max-width:96vw;height:92svh;max-height:92svh;border-radius:16px;background:#f7f8ee;color:#294b30;overflow:hidden}.experience::backdrop{background:#152d24b3}.experience[open]{display:flex;flex-direction:column}.experience-bar{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:12px 20px;flex-wrap:wrap}.experience-bar p{margin:0;font-size:14px}.experience button{border:1px solid #c9d5c4;background:transparent;padding:8px 14px;border-radius:22px}.experience button[aria-pressed=true]{background:#294b30;color:white}.experience iframe{width:100%;flex:1;min-height:0;border:0;background:#e8efdc}.experience .status{margin:0;padding:8px 20px;font-size:12px}.experience-status{color:#586b51}.experience [hidden]{display:none}.landing-nav a:focus-visible,.landing-actions button:focus-visible,.experience button:focus-visible{outline:3px solid #a86b22;outline-offset:4px}
@media(min-width:1600px){.landing-hero{height:calc(100svh - 178px)}}
@media(max-width:760px){.landing-nav{height:64px;padding:0 6%}.landing-nav .brand{font-size:23px}.landing-nav .links{gap:26px;font-size:15px}.landing-hero{height:calc(100svh - 160px);min-height:520px}.landing-art{object-position:42% center}.landing-copy{left:7%;right:7%;top:18%;max-width:none}.landing-copy h1{font-size:clamp(40px,9vw,58px);line-height:1.35;margin-bottom:22px}.landing-copy p{font-size:16px;max-width:320px;line-height:1.75;margin-bottom:24px}.landing-actions{gap:16px;flex-wrap:wrap}.landing-actions button{font-size:18px;padding:13px 30px}.landing-actions small{font-size:12px}.landing-strip{height:96px;flex-direction:column;gap:8px}.landing-strip p{font-size:16px;letter-spacing:.5px}.landing-strip a{position:static;font-size:12px}.experience{height:96svh;max-height:96svh;width:96vw}.experience-bar{padding:10px;gap:8px}.experience-bar p{width:100%;font-size:12px}.experience button{padding:7px 10px;font-size:12px}}
'''
nav='''<nav class="landing-nav" aria-label="主导航"><a class="brand" href="#main">桌鱼</a><div class="links"><a href="#daily">关于</a><a href="support.html">支持</a></div></nav>'''
hero='''<header class="landing-hero"><img class="landing-art" src="'''+img+'''" alt="清浅池水、荷叶与游鱼，首页设计插画" width="1622" height="970"><div class="landing-copy"><h1>忙了一阵，<br>看看鱼吧。</h1><p>在桌面养一池鱼。<br>点点水面喂它们，或者就这么看一会儿。</p><div class="landing-actions"><button id="experience-open" type="button" aria-haspopup="dialog" aria-controls="experience" aria-expanded="false">进去看看</button><small>点击后开启鱼池。</small></div></div></header><div class="landing-strip"><p>看鱼、喂鱼，顺手记点事。</p><a href="#release">Mac 版准备中</a></div>'''
dialog='''<dialog class="experience" id="experience" aria-labelledby="experience-title"><div class="experience-bar"><p id="experience-title">桌鱼网页体验 · 点击空白水面投喂</p><div role="group" aria-label="体验季节"><button data-demo-season="spring" aria-pressed="false">春</button><button data-demo-season="summer" aria-pressed="true">夏</button><button data-demo-season="autumn" aria-pressed="false">秋</button></div><button id="experience-close" type="button" autofocus>关闭鱼池</button></div><iframe id="experience-frame" title="桌鱼实时鱼池" sandbox="allow-scripts allow-same-origin"></iframe><p class="status"><span id="experience-status" role="status">点击后载入鱼池。</span> 网页体验与桌面应用存档隔离，关闭即停止运行。</p></dialog>'''
js='''
(()=>{'use strict';const $=id=>document.getElementById(id),dialog=$('experience'),frame=$('experience-frame'),open=$('experience-open'),status=$('experience-status');let season='summer';
function load(){status.textContent='正在载入鱼池…';frame.src='demo/'+season+'/';}
frame.addEventListener('load',()=>{if(dialog.open&&frame.hasAttribute('src'))status.textContent='鱼池页面已打开。'});
open.addEventListener('click',()=>{dialog.showModal();document.documentElement.style.overflow='hidden';open.setAttribute('aria-expanded','true');load();});
function teardown(){frame.removeAttribute('src');document.documentElement.style.overflow='';open.setAttribute('aria-expanded','false');status.textContent='鱼池已关闭。';open.focus();}
$('experience-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',teardown);dialog.addEventListener('cancel',()=>{dialog.close();});
document.querySelectorAll('[data-demo-season]').forEach(button=>button.addEventListener('click',()=>{season=button.dataset.demoSeason;document.querySelectorAll('[data-demo-season]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));if(dialog.open)load();}));
})();
'''
start=old.index('<nav class="nav">');end=old.index('</nav>',start)+6
new=old[:start]+nav+old[end:]
start=new.index('<header class="hero">');end=new.index('</header>',start)+9
new=new[:start]+hero+new[end:]
new=new.replace('</head>','<style>'+css+'</style></head>').replace('</body>',dialog+'<script id="approved-experience">'+js+'</script></body>').replace('桌鱼 · 产品介绍样稿','桌鱼 · 忙了一阵，看看鱼吧')
(dst/'index.html').write_text(new)
(out/'DIFF_FILE.patch').write_text(''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='index.html',tofile='index.html')))
rb='#!/bin/sh\nset -eu\n[ "$#" -eq 1 ] || { echo "usage: ROLLBACK.sh target-index.html" >&2; exit 2; }\npython3 - "$1" <<\'RESTORE\'\nfrom pathlib import Path\nimport base64,hashlib,sys\ndata=base64.b64decode('+repr(base64.b64encode(old.encode()).decode())+')\np=Path(sys.argv[1]);p.write_bytes(data)\nprint("RESTORED_SHA256="+hashlib.sha256(p.read_bytes()).hexdigest())\nRESTORE\n'
(out/'ROLLBACK.sh').write_text(rb);(out/'ROLLBACK.sh').chmod(0o755)
(evidence/'original-manifest.json').write_text(json.dumps(files,indent=2))
(out/'VERIFICATION.txt').write_text('TARGET='+str(src/'index.html')+'\nMODIFIED_FILE='+str(dst/'index.html')+'\nChanged: header.hero -> header.landing-hero; experience-open, experience-frame.src, dialog close teardown.\nBaseline HTML SHA256='+files['index.html']+'\nOriginal/source and accepted desktop build not modified.\nStatic hero is generated design art; realtime iframe reuses original engine.\n')
for p in [dst/'index.html',out/'DIFF_FILE.patch',out/'VERIFICATION.txt',out/'ROLLBACK.sh']:
 b=p.read_bytes();print(p, len(b),hashlib.sha256(b).hexdigest())
