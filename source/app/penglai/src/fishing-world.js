import * as THREE from 'three';
import { GLTFLoader } from '../vendor/three/addons/loaders/GLTFLoader.js';
import { createReflection } from './lib/reflection.js';
import { createStudioFish, poseStudioFish, FISH_SPECS, STUDIO_IDS } from './fish-look.js';

// A separately authored nearshore stage. The original island stays intact in overview
// and its original geometry is reused as the distant Penglai silhouette.
export function fishingWorld({scene,camera,renderer,controls,island,layers}) {
 const lake={x:0,y:0,z:-8,r:13}, near=new THREE.Scene();
 near.background=new THREE.Color('#d5e4d6');near.fog=new THREE.Fog('#d5e4d6',48,175);near.environment=scene.environment;near.environmentIntensity=.72;
 const eye=new THREE.PerspectiveCamera(56,innerWidth/innerHeight,.04,300);eye.position.set(0,1.62,3.05);
 let view='overview',site='lotus',phase='idle',weather='clear',time=0,yaw=0,pitch=-.075,drag=null,dragDistance=0,castAt=-100,hookAt=-100,assetsReady=false,assetError='',frames=0,prize=null,night=false,reelProgress=0,reeling=false,landingFish=null;
 const aim=new THREE.Vector3(0,.035,-7.2),loader=new GLTFLoader(),templates={},swimmers=[],assetCounts={};
 const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.72,...extra});
 const key=new THREE.DirectionalLight('#ffe0a8',3.15);key.position.set(-14,22,10);key.castShadow=true;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:.5,far:70});key.shadow.bias=-.00025;key.shadow.normalBias=.035;key.target.position.set(0,.4,-6);near.add(key,key.target);
 const hemi=new THREE.HemisphereLight('#d7f0e4','#7a6848',1.5);near.add(hemi);const fill=new THREE.DirectionalLight('#8eb8c2',.72);fill.position.set(12,7,-6);near.add(fill);
 const rim=new THREE.DirectionalLight('#ffd2a2',.55);rim.position.set(5,6,-16);near.add(rim);
 const sunDir=new THREE.Vector3();
 const skyU={uNight:{value:0},uWeather:{value:0},uTime:{value:0}};
 const sky=new THREE.Mesh(new THREE.SphereGeometry(220,48,24),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:skyU,vertexShader:`varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vDir;uniform float uNight,uWeather,uTime;void main(){vec3 d=normalize(vDir);float h=clamp(d.y,0.,1.);vec3 sky=mix(vec3(.93,.84,.70),vec3(.40,.68,.70),smoothstep(0.,.62,h));vec3 sunDir=normalize(vec3(-.42,.5,-.7));float glow=pow(max(dot(d,sunDir),0.),7.);float sun=pow(max(dot(d,sunDir),0.),160.);sky+=vec3(1.,.72,.38)*glow*.42;sky+=vec3(1.,.92,.75)*sun;float cloud=sin(d.x*3.2+d.z*1.7+uTime*.02)*sin(d.z*4.1-d.x*1.4+1.7);cloud=smoothstep(.1,.78,cloud);float band=smoothstep(.015,.1,d.y)*(1.-smoothstep(.42,.85,d.y));sky=mix(sky,vec3(.97,.95,.90),cloud*band*.62);sky=mix(sky,vec3(.50,.60,.58),uWeather*.32);vec3 night=vec3(.025,.06,.11)+vec3(.04,.07,.11)*h;gl_FragColor=vec4(mix(sky,night,uNight),1.);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>}`}));sky.renderOrder=-10;near.add(sky);
 // Exact upstream land/architecture/flora, viewed from a new shoreline as distant scenery.
 const distant=new THREE.Group();distant.name='preserved-penglai-distant';
 for(const name of ['island','flora','architecture']){const src=layers?.get(name);if(src){const c=src.clone(true);c.traverse(o=>{if(o.isMesh){o.castShadow=false;o.receiveShadow=false;if(o.name==='rocks'||Number.isFinite(o.userData.y0))o.visible=false;}});distant.add(c);}}
 distant.scale.setScalar(4.5);distant.position.set(-8,-5.8,-64);distant.rotation.y=-.3;near.add(distant);
 // Muted distant mountain silhouettes behind the preserved island, not foreground low-poly props.
 function ridge(z,height,color,seed){const vs=[],idx=[];for(let i=0;i<=80;i++){const x=(i/80-.5)*180;const y=height*(.25+.45*Math.pow(Math.sin(i*.09+seed),2)+.3*Math.pow(Math.sin(i*.21+seed),4));vs.push(x,-4,z,x,y,z);if(i<80){const a=i*2;idx.push(a,a+1,a+2,a+1,a+3,a+2);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vs,3));g.setIndex(idx);g.computeVertexNormals();const m=new THREE.Mesh(g,new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide}));near.add(m);}
 ridge(-115,26,'#90b8ab',2);ridge(-92,18,'#76a89d',5);
 const bedU={uNight:{value:0}};
 const bed=new THREE.Mesh(new THREE.PlaneGeometry(110,110),new THREE.ShaderMaterial({uniforms:bedU,vertexShader:`
#include <common>
#include <clipping_planes_pars_vertex>
varying vec3 vP;
void main(){
#include <begin_vertex>
#include <project_vertex>
#include <clipping_planes_vertex>
vP=(modelMatrix*vec4(transformed,1.)).xyz;
}`,fragmentShader:`
#include <common>
#include <clipping_planes_pars_fragment>
varying vec3 vP;
uniform float uNight;
void main(){
#include <clipping_planes_fragment>
vec2 q=vP.xz;
float rip=sin(q.x*1.5)*sin(q.y*1.25);
float grain=fract(sin(dot(q,vec2(127.1,311.7)))*43758.5);
float deep=smoothstep(2.,-16.,q.y);
vec3 col=mix(vec3(.64,.56,.40),vec3(.08,.24,.23),deep);
col*=.9+rip*.06+grain*.05;
col*=mix(1.,.34,uNight);
gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));bed.rotation.x=-Math.PI/2;bed.position.set(0,-.45,-24);bed.receiveShadow=true;near.add(bed);
 const reflection=createReflection({scene:near,planeY:0,scale:.55});reflection.resize(innerWidth,innerHeight);reflection.install(renderer);
 const waterU={uTime:{value:0},uReflection:{value:reflection.target.texture},uMatrix:{value:reflection.textureMatrix},uEye:{value:eye.position},uAim:{value:aim.clone()},uRipple:{value:0},uNight:{value:0},uWeather:{value:0},uSite:{value:0}};
 const water=new THREE.Mesh(new THREE.PlaneGeometry(100,100,120,120),new THREE.ShaderMaterial({uniforms:waterU,transparent:true,depthWrite:false,side:THREE.DoubleSide,vertexShader:`uniform float uTime;uniform mat4 uMatrix;varying vec3 vP;varying vec4 vR;void main(){vec3 p=position;p.z+=sin(p.x*.42+uTime*.32)*.028+cos(p.y*.33-uTime*.22)*.022+sin((p.x+p.y)*.9+uTime*.5)*.008;vec4 w=modelMatrix*vec4(p,1.);vP=w.xyz;vR=uMatrix*w;gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`uniform float uTime,uRipple,uNight,uWeather,uSite;uniform vec3 uEye,uAim;uniform sampler2D uReflection;varying vec3 vP;varying vec4 vR;float hash(vec2 p){p=fract(p*vec2(.1031,.1030));p+=dot(p,p.yx+33.33);return fract((p.x+p.y)*p.x);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}void main(){vec2 q=vP.xz;float n1=noise(q*.32+vec2(uTime*.05,-uTime*.03));float n2=noise(q*1.15-vec2(uTime*.07,uTime*.04));float dist=distance(q,uAim.xz);float rip=sin(dist*13.-uTime*3.4)*exp(-dist*1.25)*uRipple;vec3 n=normalize(vec3((n1-.5)*.16+rip*.1,1.,(n2-.5)*.14+rip*.08));vec3 e=normalize(uEye-vP);float fres=pow(1.-max(dot(n,e),0.),2.35);vec2 uv=vR.xy/vR.w+n.xz*.028;vec3 reflected=texture2D(uReflection,clamp(uv,.003,.997)).rgb;float lane=smoothstep(15.,2.8,length(q-vec2(0.,-7.)));float shore=smoothstep(-3.2,2.4,q.y);vec3 deep=vec3(.035,.20,.23),midc=vec3(.07,.45,.41),shallow=vec3(.48,.78,.64);if(uSite>1.5){deep=vec3(.07,.14,.26);midc=vec3(.16,.30,.40);shallow=vec3(.58,.64,.58);}else if(uSite>.5){deep=vec3(.02,.14,.20);midc=vec3(.04,.36,.40);shallow=vec3(.36,.70,.66);}vec3 jade=mix(deep,midc,smoothstep(-20.,-3.5,q.y));jade=mix(jade,shallow,shore*.7);jade+=vec3(.12,.18,.1)*n1*.16;float glitter=pow(max(sin(q.x*2.2+n2*5.+uTime*.55)*cos(q.y*1.7-uTime*.35),0.),16.);float sun=pow(max(dot(reflect(-normalize(vec3(-.45,1.,.32)),n),e),0.),80.);vec3 c=mix(jade,reflected*vec3(.84,.91,.86),clamp(.16+fres*.58,.1,.74));c+=vec3(1.,.86,.55)*glitter*(1.-uNight)*.28;c+=vec3(1.,.9,.64)*sun*.42;float foam=smoothstep(.64,.9,noise(q*2.8+vec2(0.,uTime*.12)))*shore;foam+=smoothstep(.4,1.,rip)*.7;c=mix(c,vec3(.94,.97,.92),clamp(foam,0.,.6));c*=mix(1.,.4,uNight);c=mix(c,vec3(.42,.52,.54),uWeather*.16);float alpha=mix(.9,.58,lane*(1.-shore*.25));alpha=mix(alpha,.82,uNight*.45);gl_FragColor=vec4(c,alpha);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>}`}));water.rotation.x=-Math.PI/2;water.position.z=-22;water.renderOrder=3;near.add(water);reflection.exclude(water);
 const ring=new THREE.Mesh(new THREE.RingGeometry(.18,.195,64),new THREE.MeshBasicMaterial({color:'#e6e3b0',transparent:true,opacity:.6,side:THREE.DoubleSide,depthWrite:false}));ring.rotation.x=-Math.PI/2;ring.position.copy(aim);ring.position.y=.045;ring.renderOrder=5;near.add(ring);reflection.exclude(ring);
 const bobber=new THREE.Group();bobber.name='lacquer-float';
 const lathe=[];for(let i=0;i<=22;i++){const t=i/22,y=-.09+t*.2,bell=Math.sin(Math.PI*Math.pow(t,.82));lathe.push(new THREE.Vector2(Math.max(.004,.007+bell*.032),y));}
 bobber.add(new THREE.Mesh(new THREE.LatheGeometry(lathe,28),new THREE.MeshPhysicalMaterial({color:'#9c2f28',roughness:.18,metalness:.06,clearcoat:.9,clearcoatRoughness:.16})));
 const stripe=new THREE.Mesh(new THREE.CylinderGeometry(.036,.036,.026,24),new THREE.MeshPhysicalMaterial({color:'#f6e6c4',roughness:.32,clearcoat:.55}));stripe.position.y=.028;bobber.add(stripe);
 const antenna=new THREE.Mesh(new THREE.CylinderGeometry(.003,.0065,.15,10),mat('#e6c56a',{roughness:.38}));antenna.position.y=.145;bobber.add(antenna);
 const bulb=new THREE.Mesh(new THREE.SphereGeometry(.011,14,10),mat('#f7f3e6',{roughness:.3}));bulb.position.y=.22;bobber.add(bulb);bobber.visible=false;near.add(bobber);
 const rodPivot=new THREE.Group();rodPivot.name='first-person-rod-only-rig';rodPivot.scale.setScalar(.86);rodPivot.position.set(.12,-.05,-.08);eye.add(rodPivot);near.add(eye);reflection.exclude(rodPivot);
 const tipRing=new THREE.Mesh(new THREE.TorusGeometry(.014,.0032,8,18),new THREE.MeshStandardMaterial({color:'#e0b85a',metalness:.72,roughness:.28}));tipRing.position.set(.40,.38,-3);tipRing.rotation.y=Math.PI/2;tipRing.name='RodTipRing';rodPivot.add(tipRing);
 const lineN=40,linePos=new Float32Array(lineN*2*3),lineGeo=new THREE.BufferGeometry();lineGeo.setAttribute('position',new THREE.BufferAttribute(linePos,3));const lineIdx=[];for(let i=0;i<lineN-1;i++){const a=i*2;lineIdx.push(a,a+1,a+2,a+1,a+3,a+2);}lineGeo.setIndex(lineIdx);
 const line=new THREE.Mesh(lineGeo,new THREE.MeshBasicMaterial({color:'#f4e7c4',transparent:true,opacity:.9,side:THREE.DoubleSide,depthWrite:false}));line.visible=false;line.renderOrder=6;line.frustumCulled=false;near.add(line);reflection.exclude(line);
 const _cam=new THREE.Vector3(),_p=new THREE.Vector3(),_side=new THREE.Vector3(),_dir=new THREE.Vector3(),_to=new THREE.Vector3();
 const fishGroup=new THREE.Group();fishGroup.name='submerged-fish';near.add(fishGroup);
 const rainG=new THREE.BufferGeometry(),ra=new Float32Array(800*3);for(let i=0;i<800;i++){ra[i*3]=(Math.random()-.5)*28;ra[i*3+1]=Math.random()*10;ra[i*3+2]=-Math.random()*32;}rainG.setAttribute('position',new THREE.BufferAttribute(ra,3));const rain=new THREE.Points(rainG,new THREE.PointsMaterial({color:'#dbe8dd',size:.035,transparent:true,opacity:.55,depthWrite:false}));rain.visible=false;near.add(rain);reflection.exclude(rain);
 // Gold dust/petals provide subtle depth rather than heavy full-screen effects.
 const pg=new THREE.BufferGeometry(),pa=new Float32Array(70*3);for(let i=0;i<70;i++){pa[i*3]=(Math.random()-.5)*22;pa[i*3+1]=Math.random()*5;pa[i*3+2]=-Math.random()*25;}pg.setAttribute('position',new THREE.BufferAttribute(pa,3));const petals=new THREE.Points(pg,new THREE.PointsMaterial({color:'#efe0b3',size:.025,transparent:true,opacity:.55,depthWrite:false}));near.add(petals);reflection.exclude(petals);

 const rockMaterial=new THREE.MeshStandardMaterial({color:'#61786a',roughness:.93});
 rockMaterial.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vStonePos; varying vec3 vStoneNormal;').replace('#include <begin_vertex>','#include <begin_vertex>\nvStonePos=(modelMatrix*vec4(position,1.)).xyz;vStoneNormal=normalize(mat3(modelMatrix)*normal);');shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
 varying vec3 vStonePos; varying vec3 vStoneNormal;
 float rockHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float rockNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(rockHash(i),rockHash(i+vec3(1,0,0)),f.x),mix(rockHash(i+vec3(0,1,0)),rockHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(rockHash(i+vec3(0,0,1)),rockHash(i+vec3(1,0,1)),f.x),mix(rockHash(i+vec3(0,1,1)),rockHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 `).replace('#include <color_fragment>',`#include <color_fragment>
 float patches=rockNoise(vStonePos*2.5)*.65+rockNoise(vStonePos*9.)*.35;
 float grain=rockNoise(vStonePos*55.);
 float mossMask=smoothstep(.37,.73,patches)*smoothstep(.10,.72,vStoneNormal.y);
 diffuseColor.rgb=mix(vec3(.22,.26,.23),vec3(.55,.50,.40),patches);
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.20,.36,.16),mossMask*.82);
 diffuseColor.rgb*=.90+grain*.16;
 `);};
 // World-space micro-relief adds stone grain without increasing every boulder's triangles.
 const stoneCompile=rockMaterial.onBeforeCompile;
 rockMaterial.onBeforeCompile=shader=>{stoneCompile(shader);shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
 float rockHeight=(rockNoise(vStonePos*24.)*.7+rockNoise(vStonePos*75.)*.3)*.012;
 vec3 sx=dFdx(-vViewPosition),sy=dFdy(-vViewPosition);vec3 rx=cross(sy,normal),ry=cross(normal,sx);float determinant=dot(sx,rx);
 vec3 grainGradient=sign(determinant)*(dFdx(rockHeight)*rx+dFdy(rockHeight)*ry);
 normal=normalize(abs(determinant)*normal-grainGradient);
 `).replace('diffuseColor.rgb*=.90+grain*.16;',`diffuseColor.rgb*=.90+grain*.16;
 float wet=1.-smoothstep(.01,.32,vStonePos.y);diffuseColor.rgb*=1.-wet*.22;`);};
 rockMaterial.customProgramCacheKey=()=> 'qingchi-v7-stone-grain';
 let quality=localStorage.getItem('qingchi.quality.v7')||'hd';
 function setQuality(mode){quality=mode==='eco'?'eco':'hd';localStorage.setItem('qingchi.quality.v7',quality);renderer.setPixelRatio(Math.min(devicePixelRatio||1,quality==='hd'?1.75:1));renderer.setSize(innerWidth,innerHeight,false);reflection.resize(innerWidth*(quality==='hd'?1.3:1),innerHeight*(quality==='hd'?1.3:1));}
 setQuality(quality);
 const counts=o=>{let meshes=0,vertices=0;o.traverse(n=>{if(n.isMesh){meshes++;vertices+=n.geometry.attributes.position.count;n.castShadow=true;n.receiveShadow=true;}});return {meshes,vertices};};
 async function asset(name){const url=new URL('./assets/firstperson/'+name,location.href).href;const data=await new Promise((resolve,reject)=>{const xhr=new XMLHttpRequest();xhr.open('GET',url);xhr.responseType='arraybuffer';xhr.onload=()=>xhr.response?.byteLength?resolve(xhr.response):reject(Error('Empty model: '+name));xhr.onerror=()=>reject(Error('Local model load failed: '+name));xhr.send();});return (await loader.parseAsync(data,'')).scene;}
 function tintMaterial(material,hex){if(material.color?.set)material.color.set(hex);if(material.uniforms?.uColor)material.uniforms.uColor.value.set(hex);}
 function prepareFish(model,spec){const m=model.clone(true);const phase=Math.random()*Math.PI*2;m.userData.phase=phase;m.userData.studio=!!model.userData?.studio;m.userData.swimRate=model.userData?.swimRate||1;m.traverse(o=>{if(!o.isMesh)return;o.material=o.material.clone();if(o.material.uniforms)o.material.userData.swimUniforms=o.material.uniforms;if(o.material.uniforms?.uPhase)o.material.uniforms.uPhase.value=phase;const authored=o.material.userData?.authored;const name=o.material.name||'';if(!authored&&!spec.scientific&&/FishPearl/.test(name))tintMaterial(o.material,spec.color||'#c4a663');if(!authored&&!spec.scientific&&/FinPearl/.test(name))tintMaterial(o.material,spec.accent||'#d9c78b');o.castShadow=false;o.receiveShadow=true;});return m;}
 const SCHOOL={
  lotus:[['goldfish',.95,-5.0,2.05,.085],['guppy',.72,-4.35,1.15,.13],['neon',.58,-6.1,1.7,.16],['neon',.52,-6.7,1.25,.15],['zebra',.6,-7.5,1.9,.12],['crucian',.82,-8.3,2.35,.09],['carp',1.05,-9.2,2.7,.075]],
  falls:[['angelfish',.92,-6.0,1.7,.08],['goldfish',.8,-4.8,2.15,.09],['zebra',.56,-7.2,1.35,.14],['perch',.72,-8.1,2.0,.1],['koi',1.02,-9.5,2.55,.07],['mandarin',.86,-7.6,2.7,.085],['ivory',.68,-5.5,1.2,.11]],
  moon:[['betta',.88,-4.7,1.35,.09],['neon',.54,-5.8,1.75,.16],['guppy',.66,-6.3,1.05,.13],['catfish',.95,-8.6,2.25,.08],['eel',.9,-7.15,1.55,.12],['dawn',.74,-9.3,2.45,.085],['crucian',.7,-6.6,2.3,.1]],
 };
 let studioReady=false,stockedSite=null;
 function clearSchool(){for(const f of swimmers){fishGroup.remove(f);f.traverse(o=>{if(o.isMesh?.material?.dispose)o.material.dispose();});}swimmers.length=0;}
 function stockSchool(){if(!studioReady||(stockedSite===site&&swimmers.length))return;clearSchool();const list=SCHOOL[site]||SCHOOL.lotus;list.forEach((row,i)=>{const [id,scale,z,radius,speed]=row;const spec=FISH_SPECS[id]||{color:'#c4a663',accent:'#d9c78b',form:'koi'};const src=templates[id]||templates[spec.form||'koi'];if(!src)return;const f=prepareFish(src,spec);f.scale.setScalar(scale);f.userData.swimRate=(id==='neon'||id==='guppy')?1.6:(id==='eel')?1.3:(id==='goldfish'||id==='koi'||id==='carp')?0.72:1;f.userData.motion={z,radius,speed,phase:i*1.37+.4,wander:Math.max(.7,radius*.48)};f.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(f.getObjectByName('FishBody')||f);f.userData.motion.baseY=-box.max.y+.02;fishGroup.add(f);swimmers.push(f);});stockedSite=site;}
 Promise.all([asset('shore-hd.glb'),asset('rod-hand.glb'),...['koi','round','slim','long','goldfish','guppy','neon','zebra','betta','angelfish'].map(x=>asset('fish-'+x+'.glb'))]).then(([shore,rod,...fish])=>{shore.name='blender-authored-hd-nearshore';assetCounts.shore=counts(shore);shore.traverse(o=>{if(o.isMesh){if(/stone|moss/i.test(o.material.name))o.material=rockMaterial;if(/pine jade|reed|petal|leaf/i.test(o.material.name)){o.material.side=THREE.DoubleSide;if(/pine jade/.test(o.material.name))o.material.color.multiplyScalar(1.12);}}});near.add(shore);assetCounts.rod=counts(rod);rod.traverse(o=>{if(o.isMesh){o.castShadow=false;o.receiveShadow=false;if(/Warm hand|woven sleeve|silk cuff/i.test(o.material?.name))o.visible=false;}});rod.traverse(o=>{if(!o.isMesh||!o.material||o.material===rockMaterial)return;const n=o.material.name||'';if(/bamboo|Honey/i.test(n)){o.material.color.set('#c9923e');o.material.roughness=.4;}if(/brass|Brushed/i.test(n)){o.material.color.set('#e2b15a');o.material.metalness=.75;o.material.roughness=.3;}if(/Linen|linen/i.test(n))o.material.color.set('#f0e2c2');});rodPivot.add(rod);['koi','round','slim','long','goldfish','guppy','neon','zebra','betta','angelfish'].forEach((f,i)=>{assetCounts[f]=counts(fish[i]);});for(const id of STUDIO_IDS)templates[id]=createStudioFish(id);studioReady=true;stockSchool();assetsReady=true;}).catch(e=>{assetError=e.message;console.error('Nearshore asset load failed',e);});
 function syncCamera(){eye.rotation.set(pitch,yaw,0,'YXZ');eye.updateMatrixWorld(true);}
 function focus(id){site=id;view='fishing';document.body.classList.add('first-person');controls.enabled=false;yaw=id==='falls'?-.13:id==='moon'?.12:0;pitch=-.075;eye.position.set(id==='falls'?.6:id==='moon'?-.55:0,1.62,3.05);aim.set(id==='falls'?1.8:id==='moon'?-2.2:0,.035,id==='falls'?-10:id==='moon'?-6.4:-7.2);waterU.uSite.value=id==='falls'?1:id==='moon'?2:0;syncCamera();phase='idle';bobber.visible=false;line.visible=false;stockSchool();}
 function overview(){view='overview';document.body.classList.remove('first-person');controls.enabled=true;controls.autoRotate=false;controls.target.set(0,-.18,0);camera.position.set(15,15,15);camera.zoom=1.1;camera.updateProjectionMatrix();controls.update();}
 const canvas=renderer.domElement;
 canvas.addEventListener('pointerdown',e=>{if(view!=='fishing'||e.button!==0)return;drag={x:e.clientX,y:e.clientY};dragDistance=0;canvas.setPointerCapture(e.pointerId);});
 canvas.addEventListener('pointermove',e=>{if(!drag||view!=='fishing')return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;dragDistance+=Math.abs(dx)+Math.abs(dy);yaw=THREE.MathUtils.clamp(yaw-dx*.0022,-.65,.65);pitch=THREE.MathUtils.clamp(pitch-dy*.0017,-.44,.22);drag={x:e.clientX,y:e.clientY};syncCamera();});
 canvas.addEventListener('pointerup',()=>{drag=null;});canvas.addEventListener('pointercancel',()=>{drag=null;});
 canvas.addEventListener('wheel',e=>{if(view!=='fishing')return;e.preventDefault();eye.fov=THREE.MathUtils.clamp(eye.fov+Math.sign(e.deltaY)*1.5,43,67);eye.updateProjectionMatrix();},{passive:false});
 addEventListener('blur',()=>{drag=null;});addEventListener('keydown',e=>{if(view==='fishing'&&e.code==='KeyR'&&!e.target.closest('input,textarea')&&!document.querySelector('dialog[open]')){yaw=0;pitch=-.075;eye.fov=56;eye.updateProjectionMatrix();syncCamera();}});
 addEventListener('resize',()=>{eye.aspect=innerWidth/innerHeight;eye.updateProjectionMatrix();reflection.resize(innerWidth*(quality==='hd'?1.3:1),innerHeight*(quality==='hd'?1.3:1));});
 function pick(x,y){if(view!=='fishing'||dragDistance>6){dragDistance=0;return null;}const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2(x/innerWidth*2-1,-y/innerHeight*2+1),eye);const v=new THREE.Vector3();if(!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),-.035),v))return null;if(v.z>-.5||Math.hypot(v.x-lake.x,v.z-lake.z)>lake.r)return null;aim.copy(v);return {x:v.x,z:v.z};}
 const disposePrize=()=>{if(!prize)return;near.remove(prize);prize.traverse(o=>{if(o.isMesh)o.material.dispose();});prize=null;};
 const api={setQuality,focus,overview,cast:()=>{reelProgress=0;if(landingFish){near.remove(landingFish);landingFish=null;}castAt=time;phase='waiting';bobber.visible=true;line.visible=true;},setReel:(p,active)=>{reelProgress=Math.max(0,Math.min(1,p||0));reeling=active;},setPhase:p=>{phase=p;if(p==='tug'){hookAt=time;if(!landingFish&&templates.koi){landingFish=prepareFish(templates.koi,{color:'#c8b789',accent:'#e8dcc3'});landingFish.scale.setScalar(.8);near.add(landingFish);}}if(!['tug','caught'].includes(p)&&landingFish){near.remove(landingFish);landingFish=null;}if(['idle','failed'].includes(p)){bobber.visible=false;line.visible=false;}},setWeather:v=>{weather=v;rain.visible=v==='rain'||v==='snow';rain.material.size=v==='snow'?.065:.035;},pick,
  prize:spec=>{if(landingFish){near.remove(landingFish);landingFish=null;}disposePrize();if(templates[spec.id]||templates[spec.form||'koi']){prize=prepareFish(templates[spec.id]||templates[spec.form||'koi'],spec);const showcase=spec.id==='angelfish'?1.02:spec.id==='betta'?1.12:(['guppy','neon','zebra','eel'].includes(spec.id)?1.65:1.28);prize.scale.setScalar(showcase);near.add(prize);}phase='caught';},clearPrize:disposePrize,
  projectAim:()=>{const v=aim.clone().project(eye);return {x:(v.x+1)/2*innerWidth,y:(1-v.y)/2*innerHeight};},
  inspect:()=>({quality,renderSize:{width:renderer.domElement.width,height:renderer.domElement.height},drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,shoreAsset:"shore-hd.glb",site,phase,view,cameraType:view==='fishing'?'PerspectiveCamera':'OrthographicCamera',eye:eye.position.toArray(),yaw,pitch,fov:eye.fov,weather,lake:{...lake},aim:{x:aim.x,z:aim.z},assetsReady,assetError,assetCounts,fishMeshes:swimmers.length,frames,exposure:renderer.toneMappingExposure,firstPerson:view==='fishing',rodOnly:true,visibleHandMeshes:(()=>{let n=0;rodPivot.traverse(o=>{if(o.isMesh&&o.visible&&/Warm hand|woven sleeve|silk cuff/i.test(o.material?.name))n++;});return n;})(),reelProgress,landingDistance:landingFish?eye.position.distanceTo(landingFish.position):null,distantOriginalLayers:distant.children.length})};
 window.QingchiWorld=Object.freeze(api);overview();
 return {isActive:()=>view==='fishing',update(t,dt,pal){time=t;night=(pal?.nightFactor||0)>.5;skyU.uTime.value=t;skyU.uNight.value=night?.85:0;skyU.uWeather.value=weather==='rain'?1:weather==='cloudy'?.5:0;waterU.uTime.value=t;waterU.uRipple.value=['waiting','bite','tug'].includes(phase)?(phase==='tug'?1:phase==='bite'?.8:.18):Math.max(0,1-(t-castAt)/2);waterU.uNight.value=night?.7:0;waterU.uWeather.value=skyU.uWeather.value;bedU.uNight.value=waterU.uNight.value;key.intensity=night?.42:weather==='rain'?1.55:weather==='cloudy'?2.25:3.15;hemi.intensity=night?.55:1.45;rim.intensity=night?.08:.55;fill.intensity=night?.25:.72;near.fog.color.set(night?'#1c333c':'#d5e4d6');near.background.copy(near.fog.color);sunDir.set(-14,night?8:22,10).normalize();ring.position.copy(aim);ring.scale.setScalar(1+.06*Math.sin(t*2));ring.visible=view==='fishing'&&['idle','failed'].includes(phase);syncCamera();
  // Rod and actual glTF hand move in camera space, line starts at its transformed tip.
  rodPivot.rotation.x=phase==='tug'?.035+Math.sin(t*(reeling?12:3))*(reeling?.05:.01):phase==='bite'?Math.sin(t*10)*.012:Math.sin(t*.7)*.004;
  if(t-castAt<.75)rodPivot.rotation.x=-.25*Math.sin((t-castAt)/.75*Math.PI);if(t-hookAt<.4)rodPivot.rotation.x=.20*Math.sin((t-hookAt)/.4*Math.PI);
  eye.updateMatrixWorld(true);const tip=new THREE.Vector3(.40,.38,-3.0);rodPivot.localToWorld(tip);bobber.position.copy(aim);bobber.position.y=.015+(phase==='bite'?Math.sin(t*15)*.06:Math.sin(t*2.8)*.009);bobber.rotation.z=Math.sin(t*2)*.045;if(phase==='tug'){const landing=new THREE.Vector3(-.35,-1.1,-1.6);eye.localToWorld(landing);bobber.position.lerp(landing,reelProgress);bobber.position.y=.035+Math.sin(t*9)*.025;if(landingFish){landingFish.position.copy(bobber.position);landingFish.position.y=-.05+Math.sin(t*9)*.05;landingFish.rotation.set(0,yaw+Math.PI/2+Math.sin(t*8)*.2,Math.sin(t*7)*.12);}}
  if(t-castAt<.75){const q=(t-castAt)/.75;bobber.position.copy(tip).lerp(aim,q);bobber.position.y+=Math.sin(q*Math.PI)*1.5;}
  waterU.uAim.value.copy(bobber.visible?bobber.position:aim);eye.getWorldPosition(_cam);_dir.copy(bobber.position).sub(tip);if(_dir.lengthSq()<1e-6)_dir.set(0,0,-1);else _dir.normalize();const lp=line.geometry.attributes.position;for(let i=0;i<lineN;i++){const q=i/(lineN-1);_p.copy(tip).lerp(bobber.position,q);_p.y-=Math.sin(q*Math.PI)*(phase==='tug'?.07:.32);_to.copy(_cam).sub(_p);_side.crossVectors(_dir,_to);if(_side.lengthSq()<1e-8)_side.set(1,0,0);else _side.normalize();const w=.0042*(.6+.4*Math.sin(q*Math.PI));lp.setXYZ(i*2,_p.x+_side.x*w,_p.y+_side.y*w,_p.z+_side.z*w);lp.setXYZ(i*2+1,_p.x-_side.x*w,_p.y-_side.y*w,_p.z-_side.z*w);}lp.needsUpdate=true;
  const animateFish=(f)=>f.userData.studio?poseStudioFish(f,t,sunDir):f.traverse(o=>{if(o.name?.startsWith('TailFin')&&!o.name.includes('Ray'))o.rotation.y=Math.sin(t*4)*.1;});
  swimmers.forEach((f,i)=>{const s=f.userData.motion||{speed:.12,radius:1.6,z:-6-i,wander:1,phase:i,baseY:-.2};const a=t*s.speed+s.phase;const vx=Math.cos(a)*s.radius,vz=-Math.sin(a)*s.wander;f.position.set(Math.sin(a)*s.radius,(s.baseY??-.2)+Math.sin(t*.8+i)*.012,s.z+Math.cos(a)*s.wander);f.rotation.y=Math.atan2(-vz,vx);f.rotation.z=Math.sin(t*1.2+i)*.045;animateFish(f);});if(landingFish)animateFish(landingFish);if(prize)animateFish(prize);
  if(prize){const pos=new THREE.Vector3(-.15,-.08,-2.55);eye.localToWorld(pos);prize.position.copy(pos);prize.position.y+=Math.sin(t*2)*.02;prize.rotation.set(.16,yaw+.35,Math.sin(t*1.2)*.05);}
  if(rain.visible){const a=rainG.attributes.position;for(let i=0;i<a.count;i++){let y=a.getY(i)-dt*(weather==='snow'?.4:7);if(y<0)y=10;a.setY(i,y);}a.needsUpdate=true;}
  const pta=pg.attributes.position;for(let i=0;i<pta.count;i++){let x=pta.getX(i)+dt*.06;if(x>11)x=-11;pta.setX(i,x);}pta.needsUpdate=true;
 },render(){if(view!=='fishing')return false;renderer.toneMappingExposure=night?.85:1.05;if(frames%3===0)reflection.render(renderer,eye);renderer.render(near,eye);frames++;return true;}};
}
