import bpy,math,json
from mathutils import Vector
from pathlib import Path
R=Path(__file__).resolve().parents[2];A=R/'app/assets/firstperson'
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
s=bpy.context.scene;s.render.engine='CYCLES';s.cycles.samples=24;s.cycles.use_denoising=True;s.render.resolution_x=640;s.render.resolution_y=320;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';s.render.film_transparent=True
s.world.color=(.25,.25,.25);s.view_settings.view_transform='AgX';s.view_settings.look='AgX - Medium High Contrast'
bpy.ops.object.camera_add(location=(1.0,-2.7,1.05));cam=bpy.context.object;cam.rotation_euler=(Vector((-.04,0,0))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=1.45;s.camera=cam
for name,pos,power,size in [('key',(-1,-2,3),220,3),('rim',(1,1,2),280,2),('fill',(0,-1,-.5),35,2)]:
 bpy.ops.object.light_add(type='AREA',location=pos);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(-o.location).to_track_quat('-Z','Y').to_euler()
def rgb(h):
 v=[int(h[i:i+2],16)/255 for i in [1,3,5]];return tuple(c/12.92 if c<=.04045 else ((c+.055)/1.055)**2.4 for c in v)+(1,)
for spec in json.loads((R/'art/v5/fish-species.json').read_text()):
 before=set(bpy.context.scene.objects);bpy.ops.import_scene.gltf(filepath=str(A/('fish-'+spec.get('form','koi')+'.glb')));obs=list(set(bpy.context.scene.objects)-before)
 for o in obs:
  if o.type=='MESH':
   for m in o.data.materials:
    if 'FishPearl' in m.name or 'FinPearl' in m.name:
     c=rgb(spec['color'] if 'FishPearl' in m.name else spec['accent']);m.diffuse_color=c;bsdf=m.node_tree.nodes.get('Principled BSDF');inp=bsdf.inputs['Base Color'];inp.default_value=c
     if inp.is_linked:
      old=inp.links[0].from_socket;mix=m.node_tree.nodes.new('ShaderNodeMixRGB');mix.blend_type='MULTIPLY';mix.inputs[0].default_value=1;mix.inputs[2].default_value=c;m.node_tree.links.new(old,mix.inputs[1]);m.node_tree.links.new(mix.outputs[0],inp)
 s.render.filepath=str(A/('fish-card-'+spec['id']+'.png'));bpy.ops.render.render(write_still=True)
 for o in obs:bpy.data.objects.remove(o,do_unlink=True)
print('FISH_CARDS_RENDERED',len(json.loads((R/'art/v5/fish-species.json').read_text())))
