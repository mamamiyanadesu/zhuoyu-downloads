from pathlib import Path
r=Path(__file__).resolve().parent.parent
p=r/'app/penglai/src/fishing-world.js';s=p.read_text()
s=s.replace("asset('shore.glb')","asset('shore-hd.glb')").replace("shore.name='blender-authored-nearshore'","shore.name='blender-authored-hd-nearshore'")
s=s.replace('const counts=o=>', '''// World-space micro-relief adds stone grain without increasing every boulder's triangles.
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
 const counts=o=>''')
s=s.replace('const api={focus,overview,','const api={setQuality,focus,overview,')
s=s.replace('inspect:()=>({site,phase,view,','inspect:()=>({quality,renderSize:{width:renderer.domElement.width,height:renderer.domElement.height},drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,shoreAsset:"shore-hd.glb",site,phase,view,')
s=s.replace("if(/pine jade|reed|petal|leaf/i.test(o.material.name))o.material.side=THREE.DoubleSide;", "if(/pine jade|reed|petal|leaf/i.test(o.material.name)){o.material.side=THREE.DoubleSide;if(/pine jade/.test(o.material.name))o.material.color.multiplyScalar(1.12);}")
s=s.replace('reflection.resize(innerWidth,innerHeight);});','reflection.resize(innerWidth*(quality===\'hd\'?1.3:1),innerHeight*(quality===\'hd\'?1.3:1));});')
p.write_text(s)
# Fresh version gets an independent profile; copy valid v6 once, never write v6.
p=r/'desktop/main.cjs';s=p.read_text().replace('Trial-v6','Trial-v7').replace('runtime-profile-v6','runtime-profile-v7').replace("清池 0.6","清池 0.7")
s=s.replace("'Qingchi-Trial-v5'","'Qingchi-Trial-v6'").replace("next+'.from-v5'","next+'.from-v6'").replace("v5 migration skipped:","v6 migration skipped:")
s=s.replace(" if(process.argv.includes('--verify-v6'))", " if(process.argv.includes('--verify-v7')){require('./verify-v7.cjs')({app,win,native,root});return;}\n if(process.argv.includes('--verify-v6'))")
s=s.replace("app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});", "app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();else if(win){win.show();if(win.isMinimized())win.restore();win.focus();}});")
p.write_text(s)
p=r/'package.json';import json;d=json.loads(p.read_text());d['version']='0.7.0';p.write_text(json.dumps(d,ensure_ascii=False,indent=2))
