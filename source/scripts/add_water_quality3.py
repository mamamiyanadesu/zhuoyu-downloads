from pathlib import Path
import shutil,json,hashlib
r=Path(__file__).resolve().parent.parent;old=r/'variants/spring-peach-02';new=r/'variants/spring-peach-03';new.mkdir(exist_ok=True);shutil.copytree(old/'source',new/'source',dirs_exist_ok=True);shutil.copytree(old/'web-preview',new/'web-preview',dirs_exist_ok=True);v=new/'source/app'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();manifest={str(p.relative_to(old)):sha(p)for p in old.rglob('*')if p.is_file() and p.relative_to(old).parts[0] in ['source','web-preview']};(new/'baseline-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
for name in manifest:assert (old/name).stat().st_ino!=(new/name).stat().st_ino
p=v/'scene-water.js';s=p.read_text();s=s.replace(' const V='," const QUALITY={low:{width:1024,height:640,nx:288,ny:180,dpr:1.5},high:{width:2048,height:1280,nx:576,ny:360,dpr:2}};let quality='low',qualityNotice='';\n const V=",1)
s=s.replace('const d=Math.min(1.5,devicePixelRatio||1)','const d=Math.min(QUALITY[quality].dpr,devicePixelRatio||1)',1)
s=s.replace('vec2 texel=1./vec2(textureSize(causticMap,0));','vec2 texel=1./vec2(1024.,640.); // Keep optical softness constant across quality tiers.',1)
a=s.index(' const ray=program(RAY_FRAGMENT,RAY_VERTEX)');b=s.index("const white=document.createElement('canvas')",a)
s=s[:a]+" const ray=program(RAY_FRAGMENT,RAY_VERTEX);Object.assign(resources,{ray},makeRayTargets(ray,quality));"+s[b:]
pos=s.index(' function uniform(p,name)')
methods=''' function makeRayTargets(ray,level){const spec=QUALITY[level],NX=spec.nx,NY=spec.ny,vertices=new Float32Array(NX*NY*12);let k=0;
 for(let y=0;y<NY;y++)for(let x=0;x<NX;x++){const x0=-.06+x/NX*1.12,x1=-.06+(x+1)/NX*1.12,y0=-.06+y/NY*1.12,y1=-.06+(y+1)/NY*1.12;vertices.set([x0,y0,x1,y0,x0,y1,x0,y1,x1,y0,x1,y1],k);k+=12;}
 const target={rayVAO:gl.createVertexArray(),rayBuffer:gl.createBuffer(),caustic:gl.createTexture(),causticFBO:gl.createFramebuffer(),rayCount:vertices.length/2};
 try{gl.bindVertexArray(target.rayVAO);gl.bindBuffer(gl.ARRAY_BUFFER,target.rayBuffer);gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);gl.useProgram(ray);const a=gl.getAttribLocation(ray,'p');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
 bindTexture(3,target.caustic);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA16F,spec.width,spec.height,0,gl.RGBA,gl.HALF_FLOAT,null);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.bindFramebuffer(gl.FRAMEBUFFER,target.causticFBO);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,target.caustic,0);if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE)throw Error('Water quality target unavailable');return target;
 }catch(e){releaseRayTargets(target);throw e;}}
 function releaseRayTargets(target){if(!target)return;gl.deleteVertexArray(target.rayVAO);gl.deleteBuffer(target.rayBuffer);gl.deleteTexture(target.caustic);gl.deleteFramebuffer(target.causticFBO);}
 function setQuality(value){if(!Object.hasOwn(QUALITY,value))return{ok:false,quality,error:'Unknown water quality'};if(value===quality)return{ok:true,quality};if(!resources||gl.isContextLost())return{ok:false,quality,error:'Water renderer is not ready'};
 try{const next=makeRayTargets(resources.ray,value),old={...resources};Object.assign(resources,next);quality=value;qualityNotice='';releaseRayTargets(old);resize();if(ready)render(0);return{ok:true,quality};}catch(e){qualityNotice='无法启用该画质，已保留原档位：'+String(e.message||e);return{ok:false,quality,error:qualityNotice};}}
'''
s=s[:pos]+methods+s[pos:];s=s.replace('gl.viewport(0,0,1024,640)','gl.viewport(0,0,QUALITY[quality].width,QUALITY[quality].height)')
s=s.replace('Object.freeze({render,setBed,setMask,','Object.freeze({render,setBed,setMask,setQuality,',1)
s=s.replace('causticResolution:[1024,640],causticWaveComponents:7','quality,qualityNotice,causticResolution:[QUALITY[quality].width,QUALITY[quality].height],causticMesh:[QUALITY[quality].nx,QUALITY[quality].ny],outputSize:[canvas.width,canvas.height],causticWaveComponents:7')
p.write_text(s)
p=v/'scene-bridge.js';s=p.read_text().replace('Object.freeze({render','Object.freeze({setQuality:value=>window.QingchiSeasonWater?.setQuality(value),render');p.write_text(s)
p=v/'core.js';s=p.read_text().replace('caustics:true,mode:','caustics:true,waterQuality:\'low\',mode:').replace('const s=v.settings,t=v.timer;','const s=v.settings,t=v.timer;\n    if(s && s.waterQuality!==undefined && ![\'low\',\'high\'].includes(s.waterQuality)) fail();').replace('caustics:s.caustics,mode:','caustics:s.caustics,waterQuality:s.waterQuality??\'low\',mode:');p.write_text(s)
p=v/'app.js';s=p.read_text();needle=" function applySettings(){";s=s.replace(needle,""" function applyWaterQuality(){const requested=state.settings.waterQuality||'low',result=window.QingchiWaterSurface?.setQuality(requested);$('water-quality').value=result?.quality||requested;$('water-quality-status').textContent=result?.ok===false?result.error:requested==='high'?'高质量：更细的水光边缘，GPU 工作量和耗电更高。':'低功耗：保留当前效果，适合长时间观赏。';}
 function applySettings(){applyWaterQuality();""",1)
s=s.replace(" $('caustics').onchange=", " $('water-quality').onchange=()=>{const requested=$('water-quality').value,result=window.QingchiWaterSurface?.setQuality(requested);if(result?.ok){mutate(s=>s.settings.waterQuality=requested);}applyWaterQuality();};\n $('caustics').onchange=",1);p.write_text(s)
option=''' <label class="setting-row">水光画质 <select id="water-quality" aria-describedby="water-quality-status"><option value="low">低功耗 · 当前效果</option><option value="high">高质量 · 更高 GPU 开销</option></select></label>
 <p id="water-quality-status" class="fine" role="status">低功耗：保留当前效果，适合长时间观赏。</p>
'''
for p in [v/'index.html',new/'web-preview/index.html']:
 s=p.read_text();needle=' <label class="setting-row">水面光影';assert needle in s;s=s.replace(needle,option+needle,1);p.write_text(s)
p=new/'web-preview/preview-bootstrap.js';p.write_text(p.read_text().replace('水光预览02','水光画质预览03'))
p=new/'web-preview/serve.py';p.write_text(p.read_text().replace('8797','8798'))
print('QUALITY_CANDIDATE',new)
