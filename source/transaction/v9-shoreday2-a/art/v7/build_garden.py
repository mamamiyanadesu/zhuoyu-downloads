import bpy, math, random, json, os
from pathlib import Path
from mathutils import Vector
R=Path(__file__).resolve().parents[2];OUT=R/'app/assets/garden';OUT.mkdir(exist_ok=True)
# Reuse task-authored mesh helpers, without executing or overwriting prior assets.
src=(R/'art/v5/build_assets.py').read_text().split('# Shore sculpt:')[0]
exec(compile(src,str(R/'art/v5/build_assets.py'),'exec'))
OUT=R/'app/assets/garden';random.seed(7207)
def clear():
 bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def export(name):
 if os.getenv('GARDEN_ONLY') and name not in os.getenv('GARDEN_ONLY').split(','):return
 objs=[o for o in bpy.context.scene.objects if o.type=='MESH']
 bpy.ops.object.select_all(action='DESELECT')
 for o in objs:o.select_set(True)
 bpy.ops.export_scene.gltf(filepath=str(OUT/(name+'.glb')),export_format='GLB',use_selection=True,export_apply=True)
 # A photographed view of actual 3D geometry, not a painted stand-in.
 sc=bpy.context.scene;sc.render.engine='CYCLES';sc.cycles.samples=24;sc.cycles.use_denoising=True
 sc.render.resolution_x=sc.render.resolution_y=768;sc.render.resolution_percentage=100;sc.render.film_transparent=True;sc.render.image_settings.file_format='PNG';sc.render.image_settings.color_mode='RGBA'
 sc.world.color=(.32,.32,.32)
 bpy.ops.object.camera_add(location=V((0,5.7,2.8)));cam=bpy.context.object;cam.rotation_euler=(V((0,.2,0))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO'
 coords=[o.matrix_world@Vector(c) for o in objs for c in o.bound_box];span=max(max(p[i] for p in coords)-min(p[i] for p in coords) for i in range(3));cam.data.ortho_scale=max(1.1,span*1.28);sc.camera=cam
 for pos,power,size in [((-3,6,3),650,5),((4,3,-2),180,4)]:
  bpy.ops.object.light_add(type='AREA',location=V(pos));o=bpy.context.object;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(-o.location).to_track_quat('-Z','Y').to_euler()
 sc.view_settings.view_transform='AgX';sc.render.filepath=str(OUT/(name+'.png'));bpy.ops.render.render(write_still=True)
 bpy.ops.wm.save_as_mainfile(filepath=str(R/'art/v7'/('garden-'+name+'.blend')))
 print('GARDEN_ASSET',name,len(objs),flush=True)
clear()
# Water-worn stone cluster with fine moss and small pebbles.
for i,(p,sc) in enumerate([((0,.12,0),(.72,.35,.55)),((.48,.02,.30),(.40,.20,.32)),((-.52,-.02,.20),(.32,.18,.25))]):rock('Mossy pebble '+str(i),p,sc,700+i)
export('rock');clear()
# A realistic silhouette: shell, head, eyes, legs, tapered tail and raised shell scutes.
shell=mat('Turtle olive shell',(.16,.23,.10),.5);rim=mat('Turtle shell rim',(.38,.36,.19));tskin=mat('Turtle skin',(.22,.30,.16));stripe=mat('Turtle pale stripes',(.61,.61,.35));dark=mat('Dark seam',(.08,.12,.05));black=mat('Eye black',(.008,.014,.008),.15)
sphere('Shell base',(0,.13,0),(.46,.23,.60),shell,48,24)
for k in range(13):
 a=k*math.tau/13;sphere('Marginal shell scute',(math.cos(a)*.40,.12,math.sin(a)*.53),(.10,.07,.115),rim,24,12)
for z in [-.32,0,.32]:
 for x in [-.20,.20]:sphere('Raised carapace scute',(x,.27-abs(z)*.10,z),(.18,.035,.20),shell,24,12)
for z in [-.27,.02,.29]:sphere('Vertebral scute',(0,.33-abs(z)*.12,z),(.14,.025,.18),shell,24,12)
sphere('Turtle neck',(0,.12,-.60),(.12,.10,.20),tskin);sphere('Turtle head',(0,.15,-.79),(.14,.12,.17),tskin)
for side in [-1,1]:
 sphere('Turtle eye',(side*.111,.21,-.85),(.027,.027,.027),black,20,12)
 tube('Head yellow stripe',[(side*.08,.25,-.88),(side*.07,.25,-.75),(side*.06,.19,-.58)],[.009,.010,.007],stripe,6)
 for z in [-.30,.34]:
  tube('Webbed leg',[(side*.3,.08,z),(side*.52,.01,z+.12),(side*.58,-.025,z+.23)],[.095,.075,.035],tskin,12)
  for j in [-1,0,1]:tube('Claw',[(side*.56+j*.025,-.02,z+.21),(side*.64+j*.025,-.04,z+.28)],[.008,.002],rim,6)
tube('Turtle tail',[(0,.02,.52),(0,-.03,.73),(.04,-.04,.84)],[.055,.025,.001],tskin,10)
export('turtle');clear()
# Four veined wings, segmented abdomen and compound eyes.
dbody=mat('Dragonfly teal',(.025,.28,.30),.3,.25);wing=mat('Dragonfly translucent pearl',(.73,.85,.79),.25);wvein=mat('Wing veins',(.26,.45,.42));
sphere('Thorax',(0,.13,0),(.075,.07,.12),dbody);sphere('Head',(0,.13,-.14),(.09,.065,.065),dbody)
for side in [-1,1]:sphere('Compound eye',(side*.05,.16,-.16),(.052,.045,.05),black,24,16)
for i in range(10):sphere('Abdomen segment '+str(i),(0,.12,.12+i*.06),(.04-i*.0028,.035-i*.002,.045),dbody,20,12)
for side in [-1,1]:
 for z in [-.015,.11]:
  wy=.14 if z<0 else .175;a=Vector((0,wy,z));b=Vector((side*.56,wy,z-.13));verts=[tuple(a)];
  for i in range(41):
   t=i/40*math.tau;p=a.lerp(b,(1-math.cos(t))*.5);p.z+=math.sin(t)*.085;verts.append(tuple(p))
  mesh('Veined wing',verts,[(0,i+1,i+2) for i in range(40)],wing)
  tube('Wing leading vein',[tuple(a),tuple(a.lerp(b,.6)+Vector((0,0,-.06))),tuple(b)],[.004,.003,.001],wvein,5)
  for j in range(1,8):
   p=a.lerp(b,j/8);tube('Cross wing vein',[tuple(p+Vector((0,0,-.07))),tuple(p+Vector((0,0,.06)))],[.0015,.001],wvein,4)
export('dragonfly');clear()
# Floating lotus with three dimensional leaf veins and petal layers.
for x,z,r in [(-.25,.15,.42),(.25,-.15,.48)]:
 vs=[(x,0,z)]+[(x+math.cos(.16+i/64*5.96)*r,.015*math.sin(i*.4),z+math.sin(.16+i/64*5.96)*r) for i in range(65)]
 mesh('Notched lotus leaf',vs,[(0,i+1,i+2) for i in range(64)],lotusM)
 for i in range(12):
  a=.2+i*5.9/12;tube('Leaf vein',[(x,.018,z),(x+math.cos(a)*r*.92,.023,z+math.sin(a)*r*.92)],[.003,.001],vein,5)
for layer in range(4):
 for j in range(10):
  a=j*math.tau/10+layer*.23;vs=[]
  for i in range(13):
   t=i/12;rad=t*(.34-layer*.05);w=math.sin(t*math.pi)*(.10-layer*.012)
   for side in [-1,1]:vs.append((math.cos(a)*rad+side*math.sin(a)*w,.05+layer*.025+t*t*(.12+layer*.06),math.sin(a)*rad-side*math.cos(a)*w))
  mesh('Lotus petal',vs,[(i*2,i*2+1,i*2+3,i*2+2) for i in range(12)],petal if layer%2 else petal2)
sphere('Lotus center',(0,.18,0),(.065,.04,.065),heart);export('lotus');clear()
# Reed island, with sediment mound and seed heads.
rock('Reed base',(0,-.04,0),(.35,.10,.27),755)
for i in range(28):
 p=(random.uniform(-.22,.22),0,random.uniform(-.18,.18));h=random.uniform(.5,1.1)
 blade('Curved reed',p,(random.uniform(-.3,.3),1,random.uniform(-.3,.3)),h,.018,grassM[i%3])
 if i%6==0:
  tip=(p[0]+.05,h*.85,p[2]);tube('Cattail stalk',[p,tip],[.008,.004],vein,8);sphere('Cattail seed',tip,(.025,.11,.025),bark,20,12)
export('reeds');clear()
# A small square stone lantern with open windows and ridged roof.
for y,sc in [(0,(.33,.08,.32)),(.16,(.18,.11,.18)),(.39,(.075,.17,.075)),(.58,(.25,.065,.24))]:rock('Lantern stone',(0,y,0),sc,800+int(y*100))
for x,z in [(-.17,-.17),(.17,-.17),(-.17,.17),(.17,.17)]:tube('Lantern window pillar',[(x,.60,z),(x,.94,z)],[.028,.028],stone[1],12)
sphere('Lantern glow',(0,.75,0),(.075,.11,.075),heart)
vs=[];faces=[]
for j in range(4):
 a=math.pi/4+j*math.pi/2
 for i in range(13):
  t=i/12;rr=.025+.40*t;vs.append((math.cos(a)*rr,1.13-.22*t+.08*t**4,math.sin(a)*rr))
for j in range(4):
 for i in range(12):a=j*13+i;b=((j+1)%4)*13+i;faces.append((a,a+1,b+1,b))
mesh('Lantern curved roof',vs,faces,stone[1]);sphere('Roof crown',(0,1.16,0),(.05,.06,.05),stone[2]);export('lantern')
(OUT/'manifest.json').write_text(json.dumps({'authoring':'Original Blender geometry and renders; no external art','blender':bpy.app.version_string,'items':['rock','turtle','dragonfly','lotus','reeds','lantern'],'sprite_size':768},indent=2))
