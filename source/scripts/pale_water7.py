from pathlib import Path
import json,hashlib,shutil,re
r=Path(__file__).resolve().parent.parent;old=r/'variants/clear-water-06';new=r/'variants/pale-water-07';assert not new.exists();new.mkdir()
for top in ['source','web-preview']:shutil.copytree(old/top,new/top)
m={str(p.relative_to(old)):hashlib.sha256(p.read_bytes()).hexdigest()for top in ['source','web-preview']for p in(old/top).rglob('*')if p.is_file()};(new/'baseline-manifest.json').write_text(json.dumps(m,indent=2));assert all((old/n).stat().st_ino!=(new/n).stat().st_ino for n in m)
p=new/'source/app/scene-water.js';before=p.read_text();s=before;mark=' // Local convergence from second height derivatives supplies wave-linked illumination.';assert mark in s
s=s.replace(mark,''' // Pale shallow material: reduce pigment saturation, reveal existing submerged sand detail.
 // Color changes apply below the later stone/leaf mask; no wash over flowers or foliage.
 if(seasonMode<1.5){
   vec2 bedUV=clamp(st+slope*.014+drift,.001,.999),grainTexel=vec2(2.5)/imageSize;
   vec3 baseSample=texture(bed,bedUV).rgb;
   vec3 localAverage=(texture(bed,bedUV+vec2(grainTexel.x,0.)).rgb+texture(bed,bedUV-vec2(grainTexel.x,0.)).rgb+texture(bed,bedUV+vec2(0.,grainTexel.y)).rgb+texture(bed,bedUV-vec2(0.,grainTexel.y)).rgb)*.25;
   vec3 bottomDetail=baseSample+(baseSample-localAverage)*.85;
   float bottomLuma=dot(bottomDetail,vec3(.2126,.7152,.0722));
   vec3 paleBottom=mix(vec3(bottomLuma),bottomDetail,.58);
   color=mix(paleBottom,vec3(.945,.965,.905),seasonMode<.5?.34:.24);
 }
'''+mark,1)
s=s.replace('color+=vec3(.105,.124,.079)*softBeam*coverage*margin;','color+=vec3(.055,.064,.046)*softBeam*coverage*margin;').replace('color+=vec3(.170,.180,.122)*beam*coverage*margin;','color+=vec3(.130,.145,.108)*beam*coverage*margin;').replace("waterLook:'clear-shallow-v6'","waterLook:'pale-clear-bottom-v7'")
fn=lambda text:re.search(r' float leafWake\(.*?\n }',text,re.S).group();assert fn(before)==fn(s);p.write_text(s)
p=new/'web-preview/serve.py';p.write_text(p.read_text().replace('8801','8802'))
p=new/'web-preview/preview-bootstrap.js';p.write_text(p.read_text().replace('春夏清透水色预览06','浅绿透底预览07'))
print('PALE7_CREATED',new,'BASELINE',len(m));print('LEAF_WAVE_UNCHANGED',hashlib.sha256(fn(s).encode()).hexdigest());print('ASSETS_AND_FISH_UNCHANGED',all((new/n).read_bytes()==(old/n).read_bytes()for n in m if '/assets/'in n or n.endswith('/vendor/pond.js')))
