from pathlib import Path
import json,hashlib,shutil,re
r=Path(__file__).resolve().parent.parent;old=r/'variants/ink-summer-05';new=r/'variants/clear-water-06';assert not new.exists();new.mkdir()
for top in ['source','web-preview']:shutil.copytree(old/top,new/top)
m={str(p.relative_to(old)):hashlib.sha256(p.read_bytes()).hexdigest()for top in ['source','web-preview']for p in(old/top).rglob('*')if p.is_file()};(new/'baseline-manifest.json').write_text(json.dumps(m,indent=2));assert all((old/n).stat().st_ino!=(new/n).stat().st_ino for n in m)
a=new/'source/app';src=Path('/Users/mac/.codex/generated_images/01a1aebb-1865-7633-9309-074b603925d0')
for fn,dst in [('exec-ff49e458-1c3c-4f64-9292-7a2420c1f39e.png','assets/scenes/spring/peach-clear-v6.png'),('exec-f645a9d1-508d-44d2-908e-95e885742df0.png','assets/clear-pond-depth-v6.png')]:shutil.copy2(src/fn,a/dst)
for name in ['scene-manifest.js','spring-summer-preview.js']:
 p=a/name;s=p.read_text().replace('assets/scenes/spring/peach-master-v2.png','assets/scenes/spring/peach-clear-v6.png').replace('assets/clear-pond-clean-v5.png','assets/clear-pond-depth-v6.png');p.write_text(s)
p=a/'scene-water.js';s=p.read_text();s=s.replace('vec2(.994,-.110)*.045','vec2(.994,-.110)*.022').replace('vec2(-.806,.592)*.038','vec2(-.806,.592)*.020').replace('vec2(.851,-.526)*.028','vec2(.851,-.526)*.012')
s=s.replace('depth,.055);','depth,.015);').replace("vec3(.40,.57,.43),.035)","vec3(.40,.57,.43),.010)")
s=s.replace('float coverage=smoothstep(-.32,.60,lightEnvelope);','float coverage=.42+.58*smoothstep(-.42,.65,lightEnvelope);')
s=s.replace('float beam=1.-exp(-max(0.,energy-2.05)*.48);\n color+=vec3(.165,.190,.135)*beam*coverage*margin*(seasonMode<.5?1.:.90);','''// Broad, soft optical convergence plus a finer warm core; no static light-grid texture.
 float softBeam=1.-exp(-max(0.,energy-1.12)*.34);
 float beam=1.-exp(-max(0.,energy-2.25)*.42);
 color*=.974+.026*clamp(energy/.95,0.,1.);
 color+=vec3(.105,.124,.079)*softBeam*coverage*margin;
 color+=vec3(.170,.180,.122)*beam*coverage*margin;''')
s=s.replace("summerBed:'clean-v5-no-baked-rings'","summerBed:'depth-v6-no-baked-rings',waterLook:'clear-shallow-v6'")
# The accepted expanding leafWake geometry, timing and intensity are untouched.
fn=lambda t:re.search(r' float leafWake\(.*?\n }',t,re.S).group();assert fn(s)==fn(p.read_text());p.write_text(s)
p=a/'scene-art.js';s=p.read_text().replace("map==='clear'&&season!=='spring'?","map==='clear'&&!['spring','summer'].includes(season)?").replace("if(map==='clear'&&season==='spring')base.style.backgroundImage=","if(map==='clear'&&['spring','summer'].includes(season))base.style.backgroundImage=");p.write_text(s)
p=new/'web-preview/serve.py';p.write_text(p.read_text().replace('8800','8801'))
p=new/'web-preview/preview-bootstrap.js';p.write_text(p.read_text().replace('水墨鱼与夏水预览05','春夏清透水色预览06'))
print('CLEAR6_CREATED',new,'BASELINE',len(m));print('PRESERVED_FISH',hashlib.sha256((a/'vendor/pond.js').read_bytes()).hexdigest());print('PRESERVED_LEAFWAKE',hashlib.sha256(fn(s if False else (a/'scene-water.js').read_text()).encode()).hexdigest())
