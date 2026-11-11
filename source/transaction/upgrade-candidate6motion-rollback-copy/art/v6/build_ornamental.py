import bpy,math,json
from mathutils import Vector
from pathlib import Path
R=Path(__file__).resolve().parents[2];A=R/'app/assets/firstperson';specs=json.loads((R/'art/v6/ornamental.json').read_text())
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
s=bpy.context.scene;s.render.engine='CYCLES';s.cycles.samples=20;s.cycles.use_denoising=True;s.render.resolution_x=640;s.render.resolution_y=320;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';s.render.film_transparent=True;s.world.color=(.3,.3,.3);s.view_settings.view_transform='AgX'
bpy.ops.object.camera_add(location=(.4,-2.7,1.05));cam=bpy.context.object;cam.rotation_euler=(Vector((-.08,0,0))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=1.65;s.camera=cam
for pos,power in [((-1,-2,3),240),((1,1,2),260),((0,-1,-.5),45)]:
 bpy.ops.object.light_add(type='AREA',location=pos);o=bpy.context.object;o.data.energy=power;o.data.size=3;o.rotation_euler=(-o.location).to_track_quat('-Z','Y').to_euler()
def rgb(h):
 v=[int(h[i:i+2],16)/255 for i in (1,3,5)];return tuple(c/12.92 if c<=.04045 else ((c+.055)/1.055)**2.4 for c in v)+(1,)
for spec in specs:
 cam.data.ortho_scale=2.2 if spec['id']=='angelfish' else 1.65
 before=set(s.objects);bpy.ops.import_scene.gltf(filepath=str(A/('fish-'+spec['form']+'.glb')));obs=list(set(s.objects)-before)
 for o in obs:
  if o.type!='MESH':continue
  bpy.context.view_layer.objects.active=o;o.select_set(True)
  # Existing mesh is authored X forward, Y height, Z thickness after glTF import transforms.
  # Transform vertices in world space for identifiable body/fan proportions, preserving eyes.
  for v in o.data.vertices:
   w=o.matrix_world@v.co
   if spec['id']=='angelfish':w.z*=1.65;w.y*=.7
   if spec['id']=='goldfish':w.z*=1.12;w.y*=1.12
   if w.x<-.43:
    factor=spec['tail'];w.z*=factor;w.y*=factor
   elif spec['id']=='betta' and w.z<-.06:w.z*=1.4
   v.co=o.matrix_world.inverted()@w
  for m in o.data.materials:
   if not ('FishPearl' in m.name or 'FinPearl' in m.name):continue
   body='FishPearl' in m.name;base=rgb(spec['color'] if body else spec['accent']);bs=m.node_tree.nodes.get('Principled BSDF');inp=bs.inputs['Base Color']
   for link in list(inp.links):m.node_tree.links.remove(link)
   m.diffuse_color=base;inp.default_value=base
   if body:
    # UV-space pattern baked to an embedded image, shared by glTF and card render.
    im=bpy.data.images.new(spec['id']+'_pattern',width=256,height=128);pix=[];accent=rgb(spec['accent'])
    for y in range(128):
     v=y/128
     for x in range(256):
      u=x/256;stripe=False
      if spec['id']=='zebra':stripe=math.sin(v*math.tau*5)>.1
      if spec['id']=='neon':stripe=(.18<v<.29 or .68<v<.79) or (u<.48 and (.29<v<.45 or .79<v<.95))
      if spec['id']=='angelfish':stripe=math.sin(u*math.tau*4)>.65
      c=accent if stripe else base;scale=.86+.14*math.cos(v*math.tau)**2;pix.extend([c[0]*scale,c[1]*scale,c[2]*scale,1])
    im.pixels=pix;im.pack();t=m.node_tree.nodes.new('ShaderNodeTexImage');t.image=im;m.node_tree.links.new(t.outputs['Color'],inp)
 bpy.ops.object.select_all(action='DESELECT')
 for o in obs:o.select_set(True)
 bpy.ops.export_scene.gltf(filepath=str(A/('fish-'+spec['id']+'.glb')),export_format='GLB',use_selection=True,export_apply=True)
 s.render.filepath=str(A/('fish-card-'+spec['id']+'.png'));bpy.ops.render.render(write_still=True)
 for o in obs:bpy.data.objects.remove(o,do_unlink=True)
print('ORNAMENTAL_ASSETS_PASS',len(specs))
