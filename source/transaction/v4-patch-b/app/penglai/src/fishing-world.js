import * as THREE from 'three';
export function fishingWorld({scene,camera,renderer,controls,island}){
 const lake=island.lake,group=new THREE.Group();group.name='qingchi-fishing';scene.add(group);
 const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.6,...extra});
 const points={lotus:[lake.x+.18,lake.z+.38],falls:[lake.x-.46,lake.z-.25],moon:[lake.x+.45,lake.z-.28]};
 let site='lotus',phase='idle',weather='clear',now=0,aim=new THREE.Vector3(lake.x,lake.y+.04,lake.z),view='overview';
 const ring=new THREE.Mesh(new THREE.RingGeometry(.09,.105,48),new THREE.MeshBasicMaterial({color:'#c6edca',transparent:true,opacity:.7,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.copy(aim);group.add(ring);
 const bobber=new THREE.Group();const body=new THREE.Mesh(new THREE.CapsuleGeometry(.018,.065,4,8),mat('#d67e57'));bobber.add(body);const stripe=new THREE.Mesh(new THREE.CylinderGeometry(.019,.019,.025,10),mat('#fff6cd'));stripe.position.y=.02;bobber.add(stripe);bobber.visible=false;group.add(bobber);
 const rodGeo=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(),new THREE.Vector3()]);const rod=new THREE.Line(rodGeo,new THREE.LineBasicMaterial({color:'#6d5140'}));group.add(rod);
 const lineGeo=new THREE.BufferGeometry().setFromPoints(Array.from({length:25},()=>new THREE.Vector3()));const line=new THREE.Line(lineGeo,new THREE.LineBasicMaterial({color:'#ece3bc',transparent:true,opacity:.8}));group.add(line);line.visible=false;
 const floats=[];const colors=['#c2caac','#c89159','#829d9d','#617d70','#b7b0a1','#c6a474'];
 function makeFish(color,i=0,form='koi'){
  const g=new THREE.Group(),round=form==='round'?1.4:form==='long'?.55:form==='slim'?.75:1;
  const body=new THREE.Mesh(new THREE.SphereGeometry(1,14,8),mat(color));body.scale.set(.08,.025*round,.031*round);g.add(body);
  const tail=new THREE.Mesh(new THREE.ConeGeometry(.035,.07,3),mat('#d3dcc7'));tail.rotation.z=Math.PI/2;tail.position.x=-.1;g.add(tail);
  const fin=new THREE.Mesh(new THREE.SphereGeometry(1,8,5),mat('#d6dfc8'));fin.scale.set(.027,.005,.065);fin.position.x=.01;g.add(fin);
  for(const z of [-.018,.018]){const eye=new THREE.Mesh(new THREE.SphereGeometry(.006,6,5),mat('#263c38'));eye.position.set(.058,.016,z);g.add(eye);}
  g.userData={tail,i};return g;
 }
 for(let i=0;i<14;i++){const f=makeFish(colors[i%colors.length],i);group.add(f);floats.push(f);}
 let prize=null,castAt=-100;
 const drops=new THREE.BufferGeometry(),arr=new Float32Array(360*3);for(let i=0;i<360;i++){arr[i*3]=(Math.random()-.5)*6+lake.x;arr[i*3+1]=lake.y+Math.random()*5;arr[i*3+2]=(Math.random()-.5)*6+lake.z;}drops.setAttribute('position',new THREE.BufferAttribute(arr,3));const rain=new THREE.Points(drops,new THREE.PointsMaterial({color:'#d7edf0',size:.022,transparent:true,opacity:.65}));rain.visible=false;group.add(rain);
 function focus(id){site=id;view='fishing';const [x,z]=points[id];aim.set(x,lake.y+.04,z);const angle=id==='falls'?2.5:id==='moon'?.2:1.2;controls.autoRotate=false;controls.minZoom=.8;controls.maxZoom=7;controls.target.set(lake.x,lake.y-.05,lake.z);camera.position.set(lake.x+Math.cos(angle)*7,lake.y+5.3,lake.z+Math.sin(angle)*7);camera.zoom=4.3;camera.updateProjectionMatrix();controls.update();rod.visible=true;}
 function overview(){view='overview';controls.target.set(0,-.18,0);camera.position.set(15,15,15);camera.zoom=1.1;camera.updateProjectionMatrix();controls.autoRotate=false;controls.update();rod.visible=false;}
 function cast(){castAt=now;phase='waiting';bobber.visible=true;line.visible=true;}
 function landedPoint(x,y){const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2(x/innerWidth*2-1,-y/innerHeight*2+1),camera);const v=new THREE.Vector3();if(!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),-lake.y-.04),v))return null;if(Math.hypot(v.x-lake.x,v.z-lake.z)>lake.r*.85)return null;aim.copy(v);return {x:v.x,z:v.z};}
 window.QingchiWorld=Object.freeze({focus,overview,cast,setPhase:p=>{phase=p;if(['idle','failed'].includes(p)){bobber.visible=false;line.visible=false;}},setWeather:v=>{weather=v;rain.visible=v==='rain'||v==='snow';rain.material.size=v==='snow'?.045:.022;},pick:landedPoint,
  prize:spec=>{if(prize){group.remove(prize);prize.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});}prize=makeFish(spec.color,0,spec.form);prize.scale.setScalar(3);group.add(prize);phase='caught';},
  clearPrize:()=>{if(prize){group.remove(prize);prize.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});prize=null;}},
  projectAim:()=>{const v=aim.clone().project(camera);return {x:(v.x+1)/2*innerWidth,y:(1-v.y)/2*innerHeight};},
  inspect:()=>({site,phase,view,weather,lake:{...lake},aim:{x:aim.x,z:aim.z},exposure:renderer.toneMappingExposure,fishMeshes:floats.length,frames:window.__frames})});
 overview();
 return {update(t,dt){now=t;renderer.toneMappingExposure*=weather==='cloudy'?.85:weather==='rain'?.72:weather==='snow'?.95:1;ring.position.copy(aim);ring.scale.setScalar(1+.08*Math.sin(t*2));ring.visible=view==='fishing';const bank=new THREE.Vector3(lake.x+.91,lake.y+.1,lake.z+.7),tip=bank.clone().add(new THREE.Vector3(-.18,.65,-.18));rod.geometry.setFromPoints([bank,tip]);
  const bob=phase==='bite'?Math.sin(t*18)*.055:Math.sin(t*3)*.009;bobber.position.copy(aim);bobber.position.y+=bob;if(now-castAt<.7){const q=(now-castAt)/.7;bobber.position.copy(bank).lerp(aim,q);bobber.position.y+=Math.sin(q*Math.PI)*.8;}bobber.rotation.z=Math.sin(t*4)*.1;
  const a=line.geometry.attributes.position;for(let i=0;i<25;i++){const q=i/24,v=tip.clone().lerp(bobber.position,q);v.y-=Math.sin(q*Math.PI)*.13;a.setXYZ(i,v.x,v.y,v.z);}a.needsUpdate=true;
  floats.forEach((f,i)=>{const angle=t*(.12+(i%3)*.05)+i*2.4,r=.16+(i%5)*.14;f.position.set(lake.x+Math.cos(angle)*r,lake.y+.018,lake.z+Math.sin(angle)*r*.8);f.rotation.y=-angle-Math.PI/2;f.userData.tail.rotation.z=Math.PI/2+Math.sin(t*7+i)*.3;});
  if(prize){prize.position.copy(aim);prize.position.y+=.35+Math.sin(t*2)*.06;prize.rotation.y=t*.5;}
  if(rain.visible){const a=drops.attributes.position;for(let i=0;i<a.count;i++){let y=a.getY(i)-dt*(weather==='snow'?.3:2.5);if(y<lake.y)y=lake.y+5;a.setY(i,y);}a.needsUpdate=true;}
 }};
}
