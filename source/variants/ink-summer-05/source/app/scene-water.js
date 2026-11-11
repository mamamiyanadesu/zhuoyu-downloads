/* Original WebGL2 finite-difference shallow water. No new runtime dependency.
 * Algorithm: bounded height/velocity on a ping-pong grid; refract the separate bed.
 * General WebGL framebuffer rules: Khronos WebGL2 + EXT_color_buffer_float.
 */
(()=>{'use strict';const canvas=document.getElementById('scene-water');if(!canvas)return;let gl,ready=false,error='',lastBed=null,lastMask=null,light='day',season='summer',time=0,frames=0,steps=0,w=innerWidth,h=innerHeight,acc=0,front=0,resources=null,drops=[];const SW=256,SH=144,seen=new WeakSet();
 const QUALITY={low:{width:1024,height:640,nx:288,ny:180,dpr:1.5},high:{width:2048,height:1280,nx:576,ny:360,dpr:2}};let quality='low',qualityNotice='';
 const V=`#version 300 es
 precision highp float;in vec2 p;out vec2 uv;void main(){uv=p*.5+.5;gl_Position=vec4(p,0,1);}`;
 const SIM=`#version 300 es
 precision highp float;in vec2 uv;out vec4 result;uniform sampler2D state;uniform vec2 cell;uniform float clock,initial;uniform vec4 drop;
 void main(){vec2 p=clamp(uv,cell,1.-cell);vec4 old=texture(state,p);float h=old.r,v=old.g;
 float lap=texture(state,p+vec2(cell.x,0)).r+texture(state,p-vec2(cell.x,0)).r+texture(state,p+vec2(0,cell.y)).r+texture(state,p-vec2(0,cell.y)).r-4.*h;
 v=(v+lap*.24)*.987;float edge=smoothstep(.0,.045,min(min(p.x,1.-p.x),min(p.y,1.-p.y)));v*=.95+.05*edge;h=(h+v)*.999;
 if(initial>.5){h=.045*sin(p.x*39.+p.y*23.)+.026*sin(p.x*13.-p.y*31.)+.018*cos(p.x*61.+p.y*17.);v=0.;}
 float d=length((p-drop.xy)*vec2(1.77778,1.));h+=exp(-d*d/max(.00001,drop.z*drop.z))*drop.w;
 h+=.000045*sin(p.x*41.+p.y*22.+clock*.7)+.000035*cos(p.x*19.-p.y*37.-clock*.53);
 result=vec4(clamp(h,-.7,.7),clamp(v,-.3,.3),0.,1.);}`;

 const OPTICS=`
 vec2 opticalSlope(vec2 q,float t){
  q=q*1.35+vec2(sin(q.y*5.7+t*.08),cos(q.x*4.9-t*.06))*.075;
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
 sourcePosition=q;floorPosition=q+ray.xy/(-ray.z)*.26;
 gl_Position=vec4(floorPosition/vec2(aspect,1.)*2.-1.,0.,1.);}`;
 const RAY_FRAGMENT=`#version 300 es
 precision highp float;in vec2 sourcePosition;in vec2 floorPosition;out vec4 result;
 void main(){vec2 a=dFdx(sourcePosition),b=dFdy(sourcePosition),c=dFdx(floorPosition),d=dFdy(floorPosition);
 float before=abs(a.x*b.y-a.y*b.x),after=abs(c.x*d.y-c.y*d.x);
 float irradiance=min(16.,before/max(after,.00000001));result=vec4(vec3(irradiance),1.);}`;
 const DISPLAY=`#version 300 es
 precision highp float;in vec2 uv;out vec4 result;uniform sampler2D state,bed,rockMask,causticMap;uniform vec2 cell,size,imageSize;uniform float clock,lightMode,seasonMode;
 ${OPTICS}
 float ht(vec2 p){return texture(state,clamp(p,cell,1.-cell)).r;}
 float leafWake(vec2 st,vec2 center,float radius,float phase){
 vec2 d=(st-center)*vec2(1.5,1.);float dist=length(d),angle=atan(d.y,d.x);float age=fract(clock*.12+phase);
 float ring=exp(-pow((dist-(radius+age*.10))/.0017,2.));
 float broken=smoothstep(-.65,.45,sin(angle*3.+clock*.16+phase*9.)+sin(angle*7.-clock*.11)*.38);
 return ring*sin(age*3.14159265)*broken;
 }
 void main(){vec2 p=uv;float h0=ht(p),l=ht(p-vec2(cell.x,0)),r=ht(p+vec2(cell.x,0)),b=ht(p-vec2(0,cell.y)),t=ht(p+vec2(0,cell.y));vec2 slope=vec2(r-l,t-b);
 float scale=max(size.x/imageSize.x,size.y/imageSize.y);vec2 offset=(size-imageSize*scale)*.5;vec2 st=(uv*size-offset)/(imageSize*scale);
 vec2 drift=vec2(sin(p.y*31.+clock*.19)+cos(p.x*23.-clock*.22),cos(p.x*37.-clock*.17)+sin(p.y*19.+clock*.13))*.00045;
 vec3 color=texture(bed,clamp(st+slope*.014+drift,.001,.999)).rgb;
 vec3 tint=vec3(.66,.94,1.02);vec3 depth=vec3(.15,.39,.38);
 if(seasonMode<.5){tint=vec3(.82,.98,1.03);depth=vec3(.22,.40,.38);}
 if(seasonMode>1.5&&seasonMode<2.5){tint=vec3(.93,1.02,.90);depth=vec3(.30,.38,.26);}
 if(seasonMode>2.5){tint=vec3(.76,.96,1.13);depth=vec3(.16,.32,.42);}
 color=mix(color*tint,depth,.21);if(seasonMode<.5)color=mix(texture(bed,clamp(st+slope*.014+drift,.001,.999)).rgb,depth,.055);
 if(seasonMode>.5&&seasonMode<1.5)color=mix(texture(bed,clamp(st+slope*.014+drift,.001,.999)).rgb,vec3(.40,.57,.43),.035);
 // Local convergence from second height derivatives supplies wave-linked illumination.
 float xx=(l+r-2.*h0),yy=(b+t-2.*h0);float focus=clamp(1./max(.55,abs((1.-xx*9.)*(1.-yy*9.))),.75,1.65);
 // Low-amplitude superposed directional wave crests keep calm water visually alive.
 vec2 q=p*vec2(size.x/size.y,1.);float a=sin(q.x*26.+sin(q.y*15.+clock*.18)*1.8+clock*.22);float c=sin(q.y*28.+sin(q.x*19.-clock*.12)*1.6-clock*.19);float caustic=pow(max(0.,1.-abs(a+c)*.8),10.);
 color*=.97+min(.13,(focus-.75)*.16);if(seasonMode<1.5){
 // Sum refracted ray density, not an isoline of two crossing sine waves.
 // A soft penumbra surrounds short intense folds; wave phases deform them rather than slide a decal.
 vec2 texel=1./vec2(1024.,640.); // Keep optical softness constant across quality tiers.
 float energy=texture(causticMap,p).r*.40;
 energy+=(texture(causticMap,p+vec2(texel.x,0.)).r+texture(causticMap,p-vec2(texel.x,0.)).r+texture(causticMap,p+vec2(0.,texel.y)).r+texture(causticMap,p-vec2(0.,texel.y)).r)*.15;
 float lightEnvelope=sin(q.x*15.3+sin(q.y*8.1)+clock*.085)*cos(q.y*11.7-q.x*3.2-clock*.061);
 float coverage=smoothstep(-.32,.60,lightEnvelope);
 float margin=smoothstep(0.,.09,min(min(p.x,1.-p.x),min(p.y,1.-p.y)));
 float beam=1.-exp(-max(0.,energy-2.05)*.48);
 color+=vec3(.165,.190,.135)*beam*coverage*margin*(seasonMode<.5?1.:.90);
 if(seasonMode>.5&&seasonMode<1.5){
 // Source UV origin is lower left. Rings travel outwards then decay; none are baked into the bed.
 float wakes=leafWake(st,vec2(.081,.246),.100,.0)+leafWake(st,vec2(.081,.246),.100,.5);
 wakes+=leafWake(st,vec2(.169,.151),.054,.27)*.7;
 color+=vec3(.060,.074,.057)*wakes;
 }
 // Sparse broad-angle surface glints are separate from the light falling on the bed.
 vec3 waterNormal=normalize(vec3(-opticalSlope(q,clock),1.));
 float sparkle=pow(max(0.,dot(waterNormal,normalize(vec3(.20,-.12,1.)))),180.);
 color+=vec3(.024,.030,.024)*sparkle*coverage*margin;
 }else color+=vec3(.12,.17,.16)*caustic*.26;
 vec3 normal=normalize(vec3(-slope.x*4.,-slope.y*4.,1.));float gleam=pow(max(0.,dot(normal,normalize(vec3(.13,.2,1.)))),90.);color+=vec3(.01,.017,.013)*gleam;
 float vignette=smoothstep(.85,.10,length(p-.5));color*=.95+.05*vignette;
 if(lightMode>.5&&lightMode<1.5)color=color*vec3(1.06,.92,.76)+vec3(.024,.007,0.);if(lightMode>1.5)color=color*vec3(.28,.43,.57)+vec3(.005,.015,.025);
 if(texture(rockMask,st).r<.5){color=texture(bed,st).rgb;if(lightMode>.5&&lightMode<1.5)color*=vec3(1.06,.92,.76);if(lightMode>1.5)color*=vec3(.28,.43,.57);}
 result=vec4(color,1.);}`;
 function program(fragment,vertex=V){const shader=(type,code)=>{const s=gl.createShader(type);gl.shaderSource(s,code);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;};const p=gl.createProgram();gl.attachShader(p,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(p,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(p));return p;}
 function resize(){w=innerWidth;h=innerHeight;const d=Math.min(QUALITY[quality].dpr,devicePixelRatio||1);canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);}addEventListener('resize',resize);resize();
 function bindTexture(unit,texture){gl.activeTexture(gl.TEXTURE0+unit);gl.bindTexture(gl.TEXTURE_2D,texture);}
 function setup(){try{gl=canvas.getContext('webgl2',{alpha:false,antialias:false,depth:false,stencil:false,preserveDrawingBuffer:false});if(!gl||!gl.getExtension('EXT_color_buffer_float'))throw Error('GPU float targets unavailable; static bed and existing 2D ripples retained');const sim=program(SIM),display=program(DISPLAY),buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const vao=gl.createVertexArray();gl.bindVertexArray(vao);for(const p of [sim,display]){gl.useProgram(p);const a=gl.getAttribLocation(p,'p');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);}
 const textures=[],fbos=[];for(let i=0;i<2;i++){const tex=gl.createTexture();bindTexture(0,tex);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,SW,SH,0,gl.RGBA,gl.FLOAT,new Float32Array(SW*SH*4));gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);const fbo=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,tex,0);if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE)throw Error('Water framebuffer incomplete');textures.push(tex);fbos.push(fbo);}
 resources={sim,display,textures,fbos,vao,bed:gl.createTexture(),mask:gl.createTexture()};
 const ray=program(RAY_FRAGMENT,RAY_VERTEX);Object.assign(resources,{ray},makeRayTargets(ray,quality));const white=document.createElement('canvas');white.width=white.height=1;white.getContext('2d').fillStyle='#fff';white.getContext('2d').fillRect(0,0,1,1);setMask(lastMask||white);front=0;step(true);gl.bindFramebuffer(gl.FRAMEBUFFER,null);error='';if(lastBed)setBed(lastBed);}catch(e){error=String(e.message||e);ready=false;canvas.style.visibility='hidden';}}
 function makeRayTargets(ray,level){const spec=QUALITY[level],NX=spec.nx,NY=spec.ny,vertices=new Float32Array(NX*NY*12);let k=0;
 for(let y=0;y<NY;y++)for(let x=0;x<NX;x++){const x0=-.06+x/NX*1.12,x1=-.06+(x+1)/NX*1.12,y0=-.06+y/NY*1.12,y1=-.06+(y+1)/NY*1.12;vertices.set([x0,y0,x1,y0,x0,y1,x0,y1,x1,y0,x1,y1],k);k+=12;}
 const target={rayVAO:gl.createVertexArray(),rayBuffer:gl.createBuffer(),caustic:gl.createTexture(),causticFBO:gl.createFramebuffer(),rayCount:vertices.length/2};
 try{gl.bindVertexArray(target.rayVAO);gl.bindBuffer(gl.ARRAY_BUFFER,target.rayBuffer);gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);gl.useProgram(ray);const a=gl.getAttribLocation(ray,'p');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
 bindTexture(3,target.caustic);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA16F,spec.width,spec.height,0,gl.RGBA,gl.HALF_FLOAT,null);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.bindFramebuffer(gl.FRAMEBUFFER,target.causticFBO);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,target.caustic,0);if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE)throw Error('Water quality target unavailable');return target;
 }catch(e){releaseRayTargets(target);throw e;}}
 function releaseRayTargets(target){if(!target)return;gl.deleteVertexArray(target.rayVAO);gl.deleteBuffer(target.rayBuffer);gl.deleteTexture(target.caustic);gl.deleteFramebuffer(target.causticFBO);}
 function setQuality(value){if(!Object.hasOwn(QUALITY,value))return{ok:false,quality,error:'Unknown water quality'};if(value===quality)return{ok:true,quality};if(!resources||gl.isContextLost())return{ok:false,quality,error:'Water renderer is not ready'};
 try{const next=makeRayTargets(resources.ray,value),old={...resources};Object.assign(resources,next);quality=value;qualityNotice='';releaseRayTargets(old);resize();if(ready)render(0);return{ok:true,quality};}catch(e){qualityNotice='无法启用该画质，已保留原档位：'+String(e.message||e);return{ok:false,quality,error:qualityNotice};}}
 function uniform(p,name){return gl.getUniformLocation(p,name);}
 function step(initial=false){const p=resources.sim;gl.useProgram(p);gl.bindVertexArray(resources.vao);gl.bindFramebuffer(gl.FRAMEBUFFER,resources.fbos[1-front]);gl.viewport(0,0,SW,SH);bindTexture(0,resources.textures[front]);gl.uniform1i(uniform(p,'state'),0);gl.uniform2f(uniform(p,'cell'),1/SW,1/SH);gl.uniform1f(uniform(p,'clock'),time);gl.uniform1f(uniform(p,'initial'),initial?1:0);gl.uniform4fv(uniform(p,'drop'),drops.shift()||[0,0,1,0]);gl.drawArrays(gl.TRIANGLES,0,6);front=1-front;steps++;}
 function setBed(im){lastBed=im;if(!resources||gl.isContextLost())return;bindTexture(1,resources.bed);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,im);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);ready=true;canvas.style.visibility='visible';}
 function setMask(im){lastMask=im;if(!resources||gl.isContextLost())return;bindTexture(2,resources.mask);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,im);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);}
 function renderCaustics(){const p=resources.ray;gl.useProgram(p);gl.bindVertexArray(resources.rayVAO);gl.bindFramebuffer(gl.FRAMEBUFFER,resources.causticFBO);gl.viewport(0,0,QUALITY[quality].width,QUALITY[quality].height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.BLEND);gl.blendEquation(gl.FUNC_ADD);gl.blendFunc(gl.ONE,gl.ONE);gl.uniform1f(uniform(p,'clock'),time);gl.uniform1f(uniform(p,'aspect'),w/h);gl.drawArrays(gl.TRIANGLES,0,resources.rayCount);gl.disable(gl.BLEND);}
 function render(dt,waves=[]){if(!ready||gl.isContextLost())return;const delta=Math.min(.1,Math.max(0,dt));time+=delta;for(const wave of waves){if(seen.has(wave))continue;seen.add(wave);drops.push([wave.x/w,1-wave.y/h,.009,Math.min(.16,.06*(wave.power||1))]);}drops=drops.slice(-16);acc+=delta;let n=0;while(acc>=1/60&&n++<6){step();acc-=1/60;}if(season==='spring'||season==='summer')renderCaustics();const p=resources.display;gl.useProgram(p);gl.bindVertexArray(resources.vao);bindTexture(3,resources.caustic);gl.uniform1i(uniform(p,'causticMap'),3);gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.viewport(0,0,canvas.width,canvas.height);bindTexture(0,resources.textures[front]);bindTexture(1,resources.bed);bindTexture(2,resources.mask);gl.uniform1i(uniform(p,'rockMask'),2);gl.uniform1i(uniform(p,'state'),0);gl.uniform1i(uniform(p,'bed'),1);gl.uniform2f(uniform(p,'cell'),1/SW,1/SH);gl.uniform2f(uniform(p,'size'),w,h);gl.uniform2f(uniform(p,'imageSize'),lastBed.width,lastBed.height);gl.uniform1f(uniform(p,'clock'),time);gl.uniform1f(uniform(p,'seasonMode'),['spring','summer','autumn','winter'].indexOf(season));gl.uniform1f(uniform(p,'lightMode'),light==='night'?2:light==='sunset'?1:0);gl.drawArrays(gl.TRIANGLES,0,6);frames++;}
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();ready=false;error='GPU context lost; static bed retained';canvas.style.visibility='hidden';});canvas.addEventListener('webglcontextrestored',()=>{resources=null;acc=0;setup();});
 window[document.body.dataset.sceneIntegrated?'QingchiSeasonWater':'QingchiWaterSurface']=Object.freeze({render,setBed,setMask,setQuality,setSeason:v=>{season=v;},setLight:v=>{light=v;},inspect:()=>({ready,error,time,frames,steps,grid:[SW,SH],model:'finite-difference height-field + bed refraction + approximate caustics',light,season,leafMask:false,causticModel:['spring','summer'].includes(season)?'refracted-ray-density-v2':'legacy',quality,qualityNotice,causticResolution:[QUALITY[quality].width,QUALITY[quality].height],causticMesh:[QUALITY[quality].nx,QUALITY[quality].ny],outputSize:[canvas.width,canvas.height],causticWaveComponents:7,summerRipples:'time-driven expanding broken arcs',summerBed:'clean-v5-no-baked-rings'})});setup();
})();
