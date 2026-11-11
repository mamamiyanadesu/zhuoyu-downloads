/* Qingchi 0.6: shallow optical surface. Original background is never modified. */
(() => {
 const host=document.getElementById('wallpaper-canvas');if(!host)return;
 const canvas=document.createElement('canvas');canvas.id='water-surface-canvas';canvas.setAttribute('aria-hidden','true');host.before(canvas);
 const gl=canvas.getContext('webgl',{alpha:true,premultipliedAlpha:false,antialias:false,preserveDrawingBuffer:false});let error='',ready=false,time=0,frames=0,w=1,h=1;
 if(!gl){window[document.body.dataset.sceneIntegrated?'QingchiLegacyWater':'QingchiWaterSurface']=Object.freeze({render(){},inspect:()=>({ready:false,error:'WebGL unavailable; 2D waves retained'})});return;}
 const vs='attribute vec2 p;varying vec2 uv;void main(){uv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
 const fs=`precision highp float;varying vec2 uv;uniform sampler2D bed,mask;uniform vec2 size;uniform float time;uniform vec4 waves[24];
 void main(){vec2 image=vec2(1536.,1024.);float scale=max(size.x/image.x,size.y/image.y);vec2 offset=(size-image*scale)*.5;vec2 q=(uv*size-offset)/scale;vec2 st=q/image;float water=texture2D(mask,st).r;if(water<.5){gl_FragColor=vec4(0.);return;}
 vec2 flow=vec2(sin(q.y*.035+time*.44)+cos(q.x*.018-time*.29),cos(q.x*.03-time*.38)+sin(q.y*.021+time*.26))*.62;
 float crest=0.;for(int i=0;i<24;i++){vec2 delta=q-waves[i].xy;float dist=length(delta);float front=dist-waves[i].z;float envelope=exp(-front*front/150.)*waves[i].w;flow+=normalize(delta+vec2(.001))*cos(front*.28)*envelope*1.8;crest+=sin(front*.28)*envelope;}
 vec2 target=clamp((q+flow)/image,vec2(.001),vec2(.999));if(texture2D(mask,target).r<.5)target=st;
 vec3 color=texture2D(bed,target).rgb;float glow=sin(q.x*.012+q.y*.009+time*.25)*cos(q.y*.015-time*.19);color*=.992+glow*.012;color+=vec3(.014,.019,.010)*max(0.,crest);
 gl_FragColor=vec4(color,1.);}`;
 try{
 const shader=(kind,src)=>{const s=gl.createShader(kind);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;};const p=gl.createProgram();gl.attachShader(p,shader(gl.VERTEX_SHADER,vs));gl.attachShader(p,shader(gl.FRAGMENT_SHADER,fs));gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(p));gl.useProgram(p);
 const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const a=gl.getAttribLocation(p,'p');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
 const uniform=n=>gl.getUniformLocation(p,n),uTime=uniform('time'),uSize=uniform('size'),uWaves=uniform('waves[0]');
 const texture=(unit,source)=>{gl.activeTexture(gl.TEXTURE0+unit);const t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,source);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.uniform1i(uniform(unit?'mask':'bed'),unit);};
 function resize(){w=innerWidth;h=innerHeight;const dpr=Math.min(1.5,devicePixelRatio||1);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);gl.viewport(0,0,canvas.width,canvas.height);gl.uniform2f(uSize,w,h);}addEventListener('resize',resize);resize();
 const im=new Image();im.onload=()=>{texture(0,im);const mask=document.createElement('canvas');mask.width=1536;mask.height=1024;const c=mask.getContext('2d');c.fillStyle='#fff';c.fillRect(0,0,1536,1024);c.fillStyle='#000';c.strokeStyle='#000';c.lineWidth=3;for(const poly of LEAF_POLYGONS){c.beginPath();poly.forEach((q,i)=>i?c.lineTo(...q):c.moveTo(...q));c.closePath();c.fill();c.stroke();}texture(1,mask);ready=true;};im.onerror=()=>{error='Pond source image failed to load';};
 // Start after all deferred scripts have initialized the shared foreground geometry.
 addEventListener('DOMContentLoaded',()=>{im.src='assets/clear-pond-v2.png';});
 window[document.body.dataset.sceneIntegrated?'QingchiLegacyWater':'QingchiWaterSurface']=Object.freeze({render(dt,waves=[]){if(!ready||gl.isContextLost())return;time+=dt;const scale=Math.max(w/1536,h/1024),ox=(w-1536*scale)/2,oy=(h-1024*scale)/2,data=new Float32Array(96);for(let i=0;i<Math.min(24,waves.length);i++){const wave=waves[waves.length-1-i];data.set([(wave.x-ox)/scale,1024-(wave.y-oy)/scale,wave.radius/scale,wave.life*wave.power],i*4);}gl.uniform1f(uTime,time);gl.uniform4fv(uWaves,data);gl.drawArrays(gl.TRIANGLES,0,6);frames++;},inspect:()=>({ready,error,time,frames,model:'advected-background-refraction + damped-wave optics',leafMask:true})});
 }catch(e){error=e.message;console.error(error);canvas.remove();window[document.body.dataset.sceneIntegrated?'QingchiLegacyWater':'QingchiWaterSurface']=Object.freeze({render(){},inspect:()=>({ready:false,error})});}
})();
