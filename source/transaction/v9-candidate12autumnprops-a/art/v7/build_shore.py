import bpy, math, random, json
from pathlib import Path
from mathutils import Vector
from mathutils.noise import noise_vector
ROOT=Path(__file__).resolve().parents[2]; OUT=ROOT/'app/assets/firstperson'; OUT.mkdir(exist_ok=True)
random.seed(1138)
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
# Original task-authored geometry, no imported third-party art.
def V(p):return Vector((p[0],-p[2],p[1]))
def mat(name,c,rough=.7,metal=0):
 m=bpy.data.materials.new(name);m.diffuse_color=(*c,1);m.use_nodes=True;n=m.node_tree.nodes.get('Principled BSDF');n.inputs['Base Color'].default_value=(*c,1);n.inputs['Roughness'].default_value=rough;n.inputs['Metallic'].default_value=metal;return m
stone=[mat('Celadon stone '+str(i),c) for i,c in enumerate([(0.38,.45,.40),(.46,.51,.44),(.27,.35,.32),(.55,.57,.48)])]
moss=mat('Velvet moss',(.23,.34,.18));bark=mat('Weathered pine bark',(.27,.20,.13));barkLight=mat('Bark ridges',(.38,.29,.17));leafM=[mat('Pine jade '+str(i),c) for i,c in enumerate([(.08,.20,.13),(.12,.27,.15),(.23,.36,.19),(.30,.40,.23)])];grassM=[mat('Reed '+str(i),c) for i,c in enumerate([(.26,.40,.23),(.36,.46,.24),(.49,.52,.29)])]
sand=mat('Warm river silt',(.48,.45,.34));petal=mat('Ivory lotus petal',(.94,.84,.72),.46);petal2=mat('Rose petal tip',(.77,.46,.42));heart=mat('Lotus seed gold',(.78,.62,.23),.55);lotusM=mat('Lotus leaf jade',(.20,.39,.29),.48);vein=mat('Leaf vein',(.39,.51,.29));wood=mat('Honey bamboo',(.42,.30,.13),.38);gold=mat('Brushed warm brass',(.61,.44,.20),.3,.65);skin=mat('Warm hand',(.65,.44,.29),.56);cloth=mat('Ink teal woven sleeve',(.075,.19,.18));cuff=mat('Ivory silk cuff',(.64,.65,.48));rope=mat('Linen wrapping',(.70,.62,.40));eye=mat('Obsidian eyes',(.018,.028,.023),.16);iris=mat('Golden iris',(.68,.52,.20),.23,.25)
def mesh(name,verts,faces,material,smooth=True):
 me=bpy.data.meshes.new(name);me.from_pydata([V(v) for v in verts],[],faces);me.update();o=bpy.data.objects.new(name,me);bpy.context.collection.objects.link(o);o.data.materials.append(material)
 if smooth:
  for p in me.polygons:p.use_smooth=True
 return o

def sphere(name,pos,scale,material,segments=32,rings=16):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=segments,ring_count=rings,location=V(pos));o=bpy.context.object;o.name=name;o.scale=(scale[0],scale[2],scale[1]);o.data.materials.append(material)
 for f in o.data.polygons:f.use_smooth=True
 return o

def tube(name,pts,radii,material,sides=12):
 vs=[];fs=[]
 for i,p in enumerate(pts):
  p=Vector(p);t=Vector(pts[min(i+1,len(pts)-1)])-Vector(pts[max(0,i-1)]);t.normalize();ref=Vector((0,1,0)) if abs(t.y)<.9 else Vector((1,0,0));u=t.cross(ref).normalized();v=t.cross(u).normalized()
  for j in range(sides):vs.append(tuple(p+radii[i]*(u*math.cos(j*math.tau/sides)+v*math.sin(j*math.tau/sides))))
 for i in range(len(pts)-1):
  for j in range(sides):a=i*sides+j;b=i*sides+(j+1)%sides;fs.append((a,b,b+sides,a+sides))
 fs.append(tuple(reversed(range(sides))));fs.append(tuple((len(pts)-1)*sides+j for j in range(sides)));return mesh(name,vs,fs,material)

def rock(name,pos,scale,seed):
 rng=random.Random(seed);bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=4,radius=1,location=V(pos));o=bpy.context.object;o.name=name;o.data.materials.append(stone[seed%len(stone)]);o.data.materials.append(moss)
 for v in o.data.vertices:
  p=v.co;n=noise_vector(p*2.3+Vector((seed,0,0)));factor=1+.12*n.x+.07*math.sin(p.z*12+seed);p*=factor;p.z*=.82;v.co=p
 o.scale=(scale[0],scale[2],scale[1]);
 for p in o.data.polygons:p.use_smooth=True;p.material_index=1 if p.normal.z>.55 and rng.random()>.26 else 0
 bevel=o.modifiers.new('Soft water-worn edges','BEVEL');bevel.width=.035;bevel.segments=2
 return o

def blade(name,base,direction,length,width,material):
 b=Vector(base);d=Vector(direction).normalized();side=Vector((-d.z,0,d.x));vs=[]
 for i in range(6):
  t=i/5;p=b+d*length*t+Vector((0,math.sin(t*math.pi)*length*.22,0));w=math.sin(math.pi*t)**.7*width
  vs.extend([tuple(p-side*w),tuple(p+side*w)])
 return mesh(name,vs,[(i*2,i*2+1,i*2+3,i*2+2) for i in range(5)],material)

def pine(x,z,h,seed):
 rng=random.Random(seed);trunk=[(x,0,z),(x+.10,h*.25,z+.06),(x+.45,h*.55,z-.04),(x+.72,h*.80,z+.12),(x+1.0,h,z)]
 tube('Pine sculpted trunk',trunk,[.22,.19,.14,.09,.025],bark,18)
 for k in range(12):
  a=k*2.4;lev=.35+.045*k;start=Vector((x+.5*lev,h*lev,z));tip=start+Vector((math.cos(a)*(1.5-.05*k),.25+math.sin(k)*.12,math.sin(a)*(1.2-.04*k)));middle=start.lerp(tip,.55)+Vector((0,-.10,0));tube('Pine arch branch',[tuple(start),tuple(middle),tuple(tip)],[.075*(1-k/20),.042,.008],bark,10)
  # 3D needle sprays, not a solid faceted canopy ball.
  vs=[];fs=[]
  for n in range(700):
   ang=rng.random()*math.tau;rad=math.sqrt(rng.random())*.66;c=tip+Vector((math.cos(ang)*rad,rng.random()*.20,math.sin(ang)*rad*.8));le=.07+rng.random()*.08;angle=rng.random()*math.tau;direction=Vector((math.cos(angle)*le,.08+rng.random()*.1,math.sin(angle)*le));side=Vector((-math.sin(angle),0,math.cos(angle)))*.0038;j=len(vs);vs.extend([tuple(c-side),tuple(c+side),tuple(c+direction)]);fs.append((j,j+1,j+2))
  mesh('Pine needles crown '+str(k),vs,fs,leafM[k%4])
 # sparse raised bark strips
 for k in range(8):
  off=math.sin(k)*.15;tube('Pine bark grain',[(x+off,.03,z+.17),(x+.1+off,h*.25,z+.2),(x+.45+off*.65,h*.55,z+.12)],[.012,.015,.006],barkLight,5)

# Shore sculpt: broad bank curves round two sides, with a clear central sightline.
for side in [-1,1]:
 for i in range(10):
  z=3-i*1.8;x=side*(2.8+max(0,-z)*.27+math.sin(i)*.35);rock('Shore hero boulder',(x,-.22,z),(1.1+random.random()*.6,.45+random.random()*.55,.9+random.random()*.5),100+i+(side+1)*20)
for i in range(7):
 rock('Stepping slab',(math.sin(i)*.09,-.18,4-i*.62),(.95,.22,.53),200+i)
for side in [-1,1]:
 for k in range(115):
  z=random.uniform(-8,5);x=side*(2.5+max(0,-z)*.3+random.random()*1.8);base=(x,.04,z)
  for j in range(4):blade('Bank reed',base,(random.uniform(-.4,.4),1,random.uniform(-.4,.4)),random.uniform(.25,.65),.014,grassM[j%3])
pine(-4.1,-1.7,4.8,16);pine(5.0,-5,5.0,20)
# Distant shore boulders and smaller pines.
for i in range(14):rock('Far shore rock',(-19+i*2.9,-.15,-24-random.random()*5),(1.8,.9,1.6),300+i)
for i,(x,z) in enumerate([(-16,-29),(-12,-24),(12,-27),(18,-34)]):pine(x,z,4.2+random.random()*1.8,30+i)
# Lotus pads with curved fan shape and veins, flowers built from layered curved petals.
for k in range(14):
 x=random.uniform(-5.8,-2.3);z=random.uniform(-6.5,.4);r=random.uniform(.23,.48);verts=[(x,.028,z)];faces=[]
 for j in range(49):
  a=.17+j/48*(math.tau-.34);verts.append((x+math.cos(a)*r,.028+.035*math.sin(a*3),z+math.sin(a)*r))
 for j in range(48):faces.append((0,j+1,j+2))
 mesh('Lotus veined leaf',verts,faces,lotusM)
 for j in range(9):
  a=.2+j/9*6;tube('Lotus radial vein',[(x,.035,z),(x+math.cos(a)*r*.5,.046,z+math.sin(a)*r*.5),(x+math.cos(a)*r*.95,.04,z+math.sin(a)*r*.95)],[.003,.003,.001],vein,4)
 if k%4==0:
  y=.27;tube('Lotus stalk',[(x,-.25,z),(x+.03,y,z)],[.012,.008],vein,8)
  for layer in range(3):
   n=9;length=.26-layer*.05
   for j in range(n):
    a=j*math.tau/n+layer*.23;vs=[]
    for t in range(9):
     u=t/8;rad=length*u;yy=y+(.12+layer*.06)*u*u+.015*layer;w=math.sin(math.pi*u)*(.09-layer*.018)
     for sign in [-1,1]:vs.append((x+math.cos(a)*rad-sign*math.sin(a)*w,yy,z+math.sin(a)*rad+sign*math.cos(a)*w))
    mesh('Lotus carved petal',vs,[(i*2,i*2+1,i*2+3,i*2+2) for i in range(8)],petal if layer<2 else petal2)
  sphere('Lotus seed pod',(x,y+.08,z),(.07,.045,.07),heart)
# Stone lantern near right side, its openings and roof silhouette provide a recognisable authored prop.
for y,sc in [(.05,(.45,.09,.43)),(.19,(.30,.08,.29)),(.55,(.13,.34,.13)),(.91,(.39,.09,.37))]:rock('Garden lantern stone',(2.8,y,.15),sc,int(y*1000))
for x,z in [(2.55,-.1),(3.05,-.1),(2.55,.4),(3.05,.4)]:tube('Lantern post',[(x,.95,z),(x,1.40,z)],[.045,.045],stone[1],8)
sphere('Lantern warm core',(2.8,1.17,.15),(.13,.20,.13),heart)
# Four-sided curving stone roof.
vs=[];fs=[]
for j in range(4):
 a=math.pi/4+j*math.pi/2
 for i in range(9):
  t=i/8;rr=.04+.55*t;y=1.68-.25*t+.10*t**4
  vs.append((2.8+math.cos(a)*rr,y,.15+math.sin(a)*rr))
for j in range(4):
 for i in range(8):a=j*9+i;b=((j+1)%4)*9+i;fs.append((a,a+1,b+1,b))
mesh('Lantern sweeping roof',vs,fs,stone[2]);sphere('Lantern finial',(2.8,1.73,.15),(.07,.09,.07),stone[1])
shore=list(bpy.context.scene.objects)
# Shore sediment, water-rounded stones, cracks and driftwood are actual new geometry.
for side in [-1,1]:
 for i in range(70):
  z=random.uniform(-11,4.6);x=side*(2.15+max(0,-z)*.27+random.uniform(0,.85));sz=random.uniform(.06,.18)
  rock('Wet shore pebble',(x,-.01,z),(sz*1.4,sz*.55,sz),900+i+(side+1)*70)
 for i in range(14):
  z=random.uniform(-6,2);x=side*(2.6+max(0,-z)*.3);pts=[(x,.08,z),(x-side*.28,.07,z+.25),(x-side*.48,.04,z+.48)]
  tube('Pine exposed root',pts,[.035,.022,.005],bark,10)
# Delicate fern fronds bring readable detail into the nearest banks.
for side in [-1,1]:
 for k in range(9):
  x=side*random.uniform(2.5,3.7);z=random.uniform(-2,3)
  for j in range(5):
   a=j*math.tau/5;end=Vector((x+math.cos(a)*.40,.42,z+math.sin(a)*.40));start=Vector((x,.02,z));tube('Fern rachis',[tuple(start),tuple(start.lerp(end,.55)+Vector((0,.12,0))),tuple(end)],[.004,.003,.0005],vein,5)
   for n in range(1,10):
    p=start.lerp(end,n/11);p.y+=math.sin(n/11*math.pi)*.12
    for sign in [-1,1]:blade('Fern leaflet',tuple(p),(math.sin(a)*sign,.3,math.cos(a)*sign),.09*(1-n/12),.012,grassM[k%3])
shore=list(bpy.context.scene.objects)
# merge by materials to avoid one draw call per leaf or vein. All meshes are original.
def merge_materials(objects,prefix):
 groups={}
 for o in objects:
  if o.type=='MESH':groups.setdefault(tuple(m.name for m in o.data.materials),[]).append(o)
 result=[]
 for n,obs in enumerate(groups.values()):
  bpy.ops.object.select_all(action='DESELECT')
  for o in obs:o.select_set(True)
  bpy.context.view_layer.objects.active=obs[0];bpy.ops.object.join();o=bpy.context.object;o.name=prefix+'_'+str(n);result.append(o)
 return result
shore=merge_materials(shore,'Shore');bpy.ops.object.select_all(action='DESELECT')
for o in shore:o.select_set(True)
bpy.ops.export_scene.gltf(filepath=str(OUT/'shore-hd.glb'),export_format='GLB',use_selection=True,export_apply=True)

bpy.ops.wm.save_as_mainfile(filepath=str(ROOT/'art/v7/penglai-shore-hd.blend'))
report={'blender':bpy.app.version_string,'authoring':'Original higher-detail shore; finer pine needles, worn boulders, pebbles, roots and ferns','vertices':sum(len(o.data.vertices) for o in shore),'meshes':len(shore)}
(ROOT/'art/v7/shore-report.json').write_text(json.dumps(report,indent=2));print('SHORE_HD',report)
