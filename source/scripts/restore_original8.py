from pathlib import Path
import hashlib,json,shutil,re
r=Path(__file__).resolve().parent.parent;old=r/'variants/pale-water-07';new=r/'variants/original-look-08';reference=r/'variants/spring-summer-04';assert not new.exists();new.mkdir()
for top in ['source','web-preview']:shutil.copytree(old/top,new/top)
m={str(p.relative_to(old)):hashlib.sha256(p.read_bytes()).hexdigest()for top in ['source','web-preview']for p in(old/top).rglob('*')if p.is_file()};(new/'baseline-manifest.json').write_text(json.dumps(m,indent=2));assert all((old/n).stat().st_ino!=(new/n).stat().st_ino for n in m)
a=new/'source/app';p=a/'vendor/pond.js';s=p.read_text().replace("fishArt: 'ink'","fishArt: 'original'").replace('["original","polished","ink"].includes(values.fishArt)','["original"].includes(values.fishArt)');p.write_text(s)
# Restore exact pre-ink asset identities, not generated pale/clean replacements.
p=a/'scene-manifest.js';s=p.read_text().replace('assets/scenes/spring/peach-clear-v6.png','assets/scenes/spring/peach-master-v2.png').replace("bed:'assets/clear-pond-depth-v6.png'","bed:'assets/clear-pond-v2.png',ringClean:'assets/clear-pond-clean-v5.png'");p.write_text(s)
p=a/'spring-summer-preview.js';s=p.read_text().replace('assets/scenes/spring/peach-clear-v6.png','assets/scenes/spring/peach-master-v2.png').replace('assets/clear-pond-depth-v6.png','assets/clear-pond-v2.png');start=s.index(" const label=document.createElement('label')");s=s[:start]+" // Original full-color koi is now the sole preview style; rejected ink option removed.\n})();\n";p.write_text(s)
p=a/'scene-art.js';s=p.read_text().replace('?.setBed(res.bed);','?.setBed(res.bed);(window.QingchiSeasonWater||window.QingchiWaterSurface)?.setRingClean?.(res.ringClean||null);',1);p.write_text(s)
# Use the actual04 water appearance as baseline; retain05's accepted leaf-wave mechanism.
s=(reference/'source/app/scene-water.js').read_text();last=(old/'source/app/scene-water.js').read_text();wake=re.search(r' float leafWake\(.*?\n }',last,re.S).group();s=s.replace('lastBed=null,lastMask=null','lastBed=null,lastMask=null,lastRingClean=null',1)
s=s.replace('state,bed,rockMask,causticMap;','state,bed,rockMask,causticMap,ringClean;').replace('clock,lightMode,seasonMode;','clock,lightMode,seasonMode,ringCleanEnabled;')
helper='''
 float localRingArea(vec2 uv,vec2 center,float inner,float outer){float d=length((uv-center)*vec2(1.5,1.));return smoothstep(inner,inner+.007,d)*(1.-smoothstep(outer-.010,outer,d));}
 vec3 summerBedAt(vec2 uv){uv=clamp(uv,.001,.999);vec3 original=texture(bed,uv).rgb;
  if(seasonMode<.5||seasonMode>1.5||ringCleanEnabled<.5)return original;
  // Local annuli only; original color and artwork outside these small leaf-edge bands is untouched.
  float local=max(localRingArea(uv,vec2(.081,.246),.091,.142),localRingArea(uv,vec2(.169,.151),.050,.083));
  vec3 clean=texture(ringClean,uv).rgb*1.015+vec3(.005,.005,.003);
  return mix(original,clean,local);
 }
'''
s=s.replace(' void main(){vec2 p=uv;',wake+helper+' void main(){vec2 p=uv;',1)
s=s.replace('vec3 color=texture(bed,clamp(st+slope*.014+drift,.001,.999)).rgb;','vec3 color=summerBedAt(st+slope*.014+drift);',1).replace('color=mix(texture(bed,clamp(st+slope*.014+drift,.001,.999)).rgb,vec3(.40,.57,.43),.035);','color=mix(summerBedAt(st+slope*.014+drift),vec3(.40,.57,.43),.035);',1)
wakes=re.search(r' if\(seasonMode>\.5&&seasonMode<1\.5\)\{\n // Source UV.*?\n }',last,re.S).group();s=s.replace(' // Sparse broad-angle surface glints',wakes+'\n // Sparse broad-angle surface glints',1)
s=s.replace('mask:gl.createTexture()','mask:gl.createTexture(),ringClean:gl.createTexture()',1)
s=s.replace('setMask(lastMask||white);','setMask(lastMask||white);setRingClean(lastRingClean);',1)
api=''' function setRingClean(im){lastRingClean=im;if(!resources||gl.isContextLost())return;bindTexture(4,resources.ringClean);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);if(im)gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,im);else gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([255,255,255,255]));gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);}
'''
s=s.replace(' function renderCaustics()',api+' function renderCaustics()',1)
s=s.replace("gl.uniform1i(uniform(p,'bed'),1);","gl.uniform1i(uniform(p,'bed'),1);bindTexture(4,resources.ringClean);gl.uniform1i(uniform(p,'ringClean'),4);gl.uniform1f(uniform(p,'ringCleanEnabled'),lastRingClean?1:0);",1)
s=s.replace('Object.freeze({render,setBed,setMask,','Object.freeze({render,setBed,setRingClean,setMask,',1).replace("causticWaveComponents:7","causticWaveComponents:7,waterLook:'original-color-v8',localizedRingCleanup:!!lastRingClean,summerRipples:'time-driven expanding broken arcs'",1)
# Keep soft optical shore transition, not the failed gray material.
previous="if(texture(rockMask,st).r<.5){color=texture(bed,st).rgb;if(lightMode>.5&&lightMode<1.5)color*=vec3(1.06,.92,.76);if(lightMode>1.5)color*=vec3(.28,.43,.57);}"
mask=re.search(r'float opticalCoverage=.*?\n result=',last,re.S).group().rsplit('\n result=',1)[0];s=s.replace(previous,mask,1)
assert wake in s and 'paleBottom' not in s and 'bottomDetail' not in s;(a/'scene-water.js').write_text(s)
p=new/'web-preview/serve.py';p.write_text(p.read_text().replace('8802','8803'))
p=new/'web-preview/preview-bootstrap.js';p.write_text(p.read_text().replace('浅绿透底预览07','原色锦鲤回归预览08'))
print('ORIGINAL8_CREATED',new,'BASELINE',len(m),'NO_NEW_GENERATED_ASSET',True)
