from pathlib import Path
r=Path(__file__).resolve().parent.parent;p=r/'variants/spring-peach-02/source/app/scene-water.js';s=p.read_text()
# Original analytic wave optics; only the spring sample opts into ray-density lighting.
insert='''
 const OPTICS=`
 vec2 opticalSlope(vec2 q,float t){
  vec2 g=vec2(0.);
  g+=vec2(.963,.270)*.130*cos(dot(q,vec2(.963,.270))*48.-t*.36+.4);
  g+=vec2(-.370,.929)*.095*cos(dot(q,vec2(-.370,.929))*57.+t*.29+1.7);
  g+=vec2(.689,.725)*.064*cos(dot(q,vec2(.689,.725))*79.-t*.41+2.9);
  g+=vec2(.994,-.110)*.045*cos(dot(q,vec2(.994,-.110))*106.+t*.33+4.1);
  g+=vec2(-.806,.592)*.038*cos(dot(q,vec2(-.806,.592))*91.-t*.27+5.8);
  g+=vec2(.219,.976)*.052*cos(dot(q,vec2(.219,.976))*36.-t*.23+3.3);
  g+=vec2(.851,-.526)*.028*cos(dot(q,vec2(.851,-.526))*131.+t*.45+.9);
  return g;
 }`;
 const RAY_VERTEX=`#version 300 es
 precision highp float;in vec2 p;out vec2 sourcePosition;out vec2 floorPosition;uniform float clock,aspect;
 ${OPTICS}
 void main(){vec2 q=p*vec2(aspect,1.);vec2 slope=opticalSlope(q,clock);
 vec3 ray=refract(normalize(vec3(.08,.12,-1.)),normalize(vec3(-slope,1.)),1./1.333);
 sourcePosition=q;floorPosition=q+ray.xy/(-ray.z)*.32;
 gl_Position=vec4(floorPosition/vec2(aspect,1.)*2.-1.,0.,1.);}`;
 const RAY_FRAGMENT=`#version 300 es
 precision highp float;in vec2 sourcePosition;in vec2 floorPosition;out vec4 result;
 void main(){vec2 a=dFdx(sourcePosition),b=dFdy(sourcePosition),c=dFdx(floorPosition),d=dFdy(floorPosition);
 float before=abs(a.x*b.y-a.y*b.x),after=abs(c.x*d.y-c.y*d.x);
 float irradiance=min(16.,before/max(after,.00000001));result=vec4(vec3(irradiance),1.);}`;
'''
s=s.replace(' const DISPLAY=',insert+' const DISPLAY=',1)
s=s.replace('uniform sampler2D state,bed,rockMask;','uniform sampler2D state,bed,rockMask,causticMap;',1)
s=s.replace(' float ht(vec2 p)', ' ${OPTICS}\n float ht(vec2 p)',1)
old="if(seasonMode<.5){float center=1.-smoothstep(.18,.57,length((p-.5)*vec2(1.22,1.)));float sa=sin(q.x*15.+sin(q.y*10.+clock*.14)*1.5+clock*.13);float sb=sin(q.y*16.+sin(q.x*11.-clock*.11)*1.3-clock*.12);float lace=pow(max(0.,1.-abs(sa+sb)*.85),7.);color+=vec3(.27,.31,.21)*lace*.62*center;}else"
new='''if(seasonMode<.5){
 // Sum refracted ray density, not an isoline of two crossing sine waves.
 // A soft penumbra surrounds short intense folds; wave phases deform them rather than slide a decal.
 vec2 texel=1./vec2(textureSize(causticMap,0));
 float energy=texture(causticMap,p).r*.40;
 energy+=(texture(causticMap,p+vec2(texel.x,0.)).r+texture(causticMap,p-vec2(texel.x,0.)).r+texture(causticMap,p+vec2(0.,texel.y)).r+texture(causticMap,p-vec2(0.,texel.y)).r)*.15;
 float coverage=.60+.40*smoothstep(-.45,.65,sin(q.x*4.3+q.y*2.7)*cos(q.y*5.1-q.x*1.9));
 float margin=smoothstep(0.,.09,min(min(p.x,1.-p.x),min(p.y,1.-p.y)));
 float beam=1.-exp(-max(0.,energy-1.18)*.62);
 color+=vec3(.20,.225,.16)*beam*coverage*margin;
 // Sparse broad-angle surface glints are separate from the light falling on the bed.
 vec3 waterNormal=normalize(vec3(-opticalSlope(q,clock),1.));
 float sparkle=pow(max(0.,dot(waterNormal,normalize(vec3(.20,-.12,1.)))),180.);
 color+=vec3(.024,.030,.024)*sparkle*coverage*margin;
 }else'''
assert old in s;s=s.replace(old,new)
s=s.replace('function program(fragment){','function program(fragment,vertex=V){',1).replace('shader(gl.VERTEX_SHADER,V)','shader(gl.VERTEX_SHADER,vertex)',1)
needle='resources={sim,display,textures,fbos,vao,bed:gl.createTexture(),mask:gl.createTexture()};'
replace='''resources={sim,display,textures,fbos,vao,bed:gl.createTexture(),mask:gl.createTexture()};
 const ray=program(RAY_FRAGMENT,RAY_VERTEX),rayVAO=gl.createVertexArray(),rayBuffer=gl.createBuffer(),vertices=[],NX=288,NY=180;
 for(let y=0;y<NY;y++)for(let x=0;x<NX;x++){const x0=-.06+x/NX*1.12,x1=-.06+(x+1)/NX*1.12,y0=-.06+y/NY*1.12,y1=-.06+(y+1)/NY*1.12;vertices.push(x0,y0,x1,y0,x0,y1,x0,y1,x1,y0,x1,y1);}
 gl.bindVertexArray(rayVAO);gl.bindBuffer(gl.ARRAY_BUFFER,rayBuffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);gl.useProgram(ray);const a=gl.getAttribLocation(ray,'p');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
 const caustic=gl.createTexture(),causticFBO=gl.createFramebuffer();bindTexture(3,caustic);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA16F,1024,640,0,gl.RGBA,gl.HALF_FLOAT,null);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.bindFramebuffer(gl.FRAMEBUFFER,causticFBO);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,caustic,0);if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE)throw Error('Caustic target incomplete');
 Object.assign(resources,{ray,rayVAO,rayBuffer,rayCount:vertices.length/2,caustic,causticFBO});'''
assert needle in s;s=s.replace(needle,replace)
needle=' function render(dt,waves=[])'
replace=''' function renderCaustics(){const p=resources.ray;gl.useProgram(p);gl.bindVertexArray(resources.rayVAO);gl.bindFramebuffer(gl.FRAMEBUFFER,resources.causticFBO);gl.viewport(0,0,1024,640);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.BLEND);gl.blendEquation(gl.FUNC_ADD);gl.blendFunc(gl.ONE,gl.ONE);gl.uniform1f(uniform(p,'clock'),time);gl.uniform1f(uniform(p,'aspect'),w/h);gl.drawArrays(gl.TRIANGLES,0,resources.rayCount);gl.disable(gl.BLEND);}
 function render(dt,waves=[])'''
s=s.replace(needle,replace,1)
s=s.replace("const p=resources.display;gl.useProgram(p);gl.bindFramebuffer", "if(season==='spring')renderCaustics();const p=resources.display;gl.useProgram(p);gl.bindVertexArray(resources.vao);bindTexture(3,resources.caustic);gl.uniform1i(uniform(p,'causticMap'),3);gl.bindFramebuffer",1)
s=s.replace("light,season,leafMask:false", "light,season,leafMask:false,causticModel:season==='spring'?'refracted-ray-density-v2':'legacy',causticResolution:[1024,640],causticWaveComponents:7",1)
p.write_text(s)
print('PATCHED',p)
# Version/profile identity is scoped to the new isolated sample only.
import json
meta=r/'variants/spring-peach-02/source/package.json';j=json.loads(meta.read_text());j['version']='0.9.0-spring-peach.2';meta.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
p=r/'variants/spring-peach-02/source/desktop/main.cjs';s=p.read_text();assert 'Qingchi-Spring-Peach-Sample-01' in s;s=s.replace('Qingchi-Spring-Peach-Sample-01','Qingchi-Spring-Peach-Sample-02');p.write_text(s)
