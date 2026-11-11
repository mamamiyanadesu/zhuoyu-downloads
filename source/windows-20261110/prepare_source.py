from pathlib import Path
import shutil,hashlib,json,tarfile,re
r=Path(__file__).resolve().parent;project=r.parent;original=project/'variants/occlusion-clean-16/source';target=r/'source';assert not target.exists()
def manifest(p):return {str(x.relative_to(p)):hashlib.sha256(x.read_bytes()).hexdigest() for x in p.rglob('*') if x.is_file()}
assert not any(p.is_symlink() for p in original.rglob('*'))
(r/'evidence/parent-manifest.json').write_text(json.dumps(manifest(original),indent=2))
shutil.copytree(original,target,ignore=shutil.ignore_patterns('.DS_Store'))
with tarfile.open(r/'evidence/baseline-source.tar.gz','w:gz') as z:z.add(target,arcname='source')
(r/'evidence/baseline-manifest.json').write_text(json.dumps(manifest(target),indent=2))
# Main entry remains the same source, with Windows-specific profile and identity.
p=target/'desktop/main.cjs';s=p.read_text();s=s.replace("const springSample=true;", "const springSample=false;")
a=s.index("app.setPath('userData'");b=s.index("\n",a);s=s[:a]+"app.setPath('userData',process.env.QINGCHI_PROFILE||path.join(app.getPath('appData'),'Zhuoyu-Windows-Preview-1'));\nif(process.platform==='win32')app.setAppUserModelId('local.zhuoyu.preview');"+s[b:]
s=s.replace("app.name='清池试用版'", "app.name='桌鱼'").replace("title:springSample?'春池 · 桃花壁纸样板01':clearSample?'清池 · 白天样板01':'清池 0.9 候选 · 池塘生活试用版'", "title:'桌鱼 · Windows 测试版'")
s=re.sub(r" if\(bundled&&!clearSample&&!springSample&&!process.env.QINGCHI_PROFILE\).*?\n",'',s)
s=s.replace("native=require('./native.cjs')", "require('./windows-profile.cjs').ensure(path.join(app.getPath('userData'),'qingchi-save.json'));\n native=require('./native.cjs')")
s=s.replace(" if(process.argv.includes('--verify-candidate-v9'))", " if(process.argv.includes('--verify-zhuoyu')){require('./verify-zhuoyu.cjs')({app,win,native,root});return;}\n if(process.argv.includes('--verify-candidate-v9'))")
s=s.replace("label:'清池'","label:'桌鱼'");p.write_text(s)
# Only create an initial save; never reset existing gardens, fish or notes.
(target/'desktop/windows-profile.cjs').write_text("""'use strict';const fs=require('node:fs'),{FileStore}=require('./store.cjs');exports.ensure=file=>{if(fs.existsSync(file))return {created:false};const store=new FileStore(file),s=store.snapshot().state;s.components.settings.fishCount=24;s.components.settings.quietView=true;s.life.env={...s.life.env,season:'summer',light:'day',weather:'clear'};s.life.habitats.active='clear';store.write(s);return {created:true};};\n""")
# Fold the accepted spring/summer13 + autumn14 rendering into one seasonal engine.
a=target/'app'
p=a/'scene-manifest.js';s=p.read_text().replace("['spring','autumn'].includes(s)","s==='autumn'");p.write_text(s)
p=a/'scene-art.js';s=p.read_text().replace("const count=season==='spring'?64:44", "const count=season==='spring'?18:44")
s=s.replace("ctx.scale(pose.widthScale*(season==='spring'?.55:.64),season==='spring'?.55:.64)","ctx.scale(pose.widthScale*(season==='spring'?1:.64),season==='spring'?1:.64)")
s="Object.defineProperty(window,'Reference14',{get:()=>window.QingchiScene?.inspect().map==='clear'&&window.QingchiScene?.inspect().season==='autumn'});\n"+s;p.write_text(s)
ours=(a/'scene-water-ours.js').read_text();ref=(a/'scene-water.js').read_text()
a0=ref.index(' // REFERENCE14_BROAD_LIGHT:');b0=ref.index('  vec3 normal=',a0);autumn=ref[a0:b0]
start=ours.index(' color*=.97+min(.13,');end=ours.index(' vec3 normal=',start)
old=ours[start:end];needle=' }else color+=vec3(.12,.17,.16)*caustic*.26;';assert needle in old
old=old.replace(needle,' }else {\n'+autumn+'\n }')
ours=ours[:start]+old+ours[end:];ours=ours.replace("causticModel:['spring','summer'].includes(season)?'refracted-ray-density-v2':'legacy'","causticModel:['spring','summer'].includes(season)?'refracted-ray-density-v2':'analytic-broad-light-v14'")
(a/'scene-water.js').write_text(ours)
p=a/'reference-details.js';s=p.read_text().replace("sg.clearRect(0,0,w,h);const x=", "sg.clearRect(0,0,w,h);if(!window.Reference14){state={time:t,frames,active:false};return;}const x=");p.write_text(s)
# Preserve all existing app features, replace only sample-only season menu.
for name in ['index.html','wallpaper.html']:
 p=a/name;s=p.read_text();s=s.replace('<script defer src="spring-summer-preview.js"></script>','')
 if 'bed-detail-core.js' not in s:s=s.replace('</head>','<script defer src="bed-detail-core.js"></script><script defer src="reference-details.js"></script></head>')
 if name=='index.html':s=s.replace('</head>','<script defer src="windows-ui.js"></script></head>')
 s=s.replace('清池 · 桌面小憩','桌鱼 · Windows 测试版').replace('清池桌面观赏','桌鱼桌面观赏').replace('清池首页','桌鱼首页').replace('<span>清池<small>QINGCHI / 08</small></span>','<span>桌鱼<small>WINDOWS / PREVIEW 1</small></span>').replace('Mac · 蓬莱临水 0.9 候选','Windows x64 · 测试版1');p.write_text(s)
(a/'windows-ui.js').write_text("""(()=>{'use strict';document.title='桌鱼 · Windows 测试版';const h=window.qingchiDesktop;if(h?.platform!=='win32')return;const version=document.querySelector('.version');if(version)version.textContent='Windows x64 · 待真机验收';})();\n""")
p=target/'package.json';m=json.loads(p.read_text());m.update(name='zhuoyu-windows-preview',productName='桌鱼',version='0.9.0-win.1',description='桌鱼 Windows x64 测试版',qingchiPackaged=True,dependencies={'koffi':'3.3.7'});p.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
print('SOURCE_COPY',target);print('PARENT_UNCHANGED',manifest(original)==json.loads((r/'evidence/parent-manifest.json').read_text()))
