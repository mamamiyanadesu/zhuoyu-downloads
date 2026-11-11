import bpy,math,random,json,os
from pathlib import Path
from mathutils import Vector
R=Path(__file__).resolve().parents[2]
src=(R/'art/v7/build_garden.py').read_text().split('clear()\n# Water-worn')[0].replace("'art/v7'","'art/v8'")
src=src.replace("sc.camera=cam", "sc.camera=cam\n if name=='egret':\n  center=sum(coords,Vector())/len(coords);cam.location=center+V((2.5,3,-5));cam.rotation_euler=(center-cam.location).to_track_quat('-Z','Y').to_euler();inv=cam.rotation_euler.to_quaternion().inverted();proj=[inv@(p-center) for p in coords];cam.data.ortho_scale=max(max(p.x for p in proj)-min(p.x for p in proj),max(p.y for p in proj)-min(p.y for p in proj))*1.35")
exec(compile(src,str(R/'art/v7/build_garden.py'),'exec'))
clear()
# Original frog: crouching hind legs, spread toes, raised eyes and dorsolateral folds.
green=mat('Frog jade skin',(.21,.39,.10),.38);light=mat('Frog cream throat',(.67,.70,.34),.55);stripe=mat('Frog golden folds',(.60,.57,.19));black=mat('Wet black pupils',(.009,.014,.008),.12);golden=mat('Golden iris',(.65,.49,.12),.3)
sphere('Frog body',(0,.19,.08),(.28,.19,.34),green,48,24)
sphere('Frog throat',(0,.11,-.22),(.23,.10,.17),light,40,20)
sphere('Broad frog head',(0,.24,-.22),(.29,.16,.23),green,48,24)
for side in [-1,1]:
 sphere('Raised eye mound',(side*.185,.365,-.29),(.105,.105,.095),green)
 sphere('Golden eye',(side*.19,.40,-.35),(.065,.065,.035),golden)
 sphere('Horizontal pupil',(side*.19,.40,-.38),(.043,.025,.013),black)
 sphere('Catch light',(side*.175,.423,-.39),(.012,.012,.008),light,16,8)
 sphere('Powerful folded thigh',(side*.30,.13,.26),(.18,.14,.26),green)
 tube('Folded hind leg',[(side*.31,.12,.42),(side*.48,.05,.18),(side*.36,.025,.50)],[.10,.075,.035],green,16)
 tube('Front arm',[(side*.19,.20,-.12),(side*.33,.07,-.23),(side*.31,.02,-.48)],[.055,.04,.025],green)
 for i in range(3):
  tube('Front splayed toe',[(side*.31,.02,-.45),(side*(.28+i*.055),.005,-.57-i*.015)],[.015,.006],light,8)
  tube('Hind webbed toe',[(side*.36,.025,.48),(side*(.31+i*.055),.005,.64+i*.02)],[.018,.007],green,8)
 tube('Dorsolateral ridge',[(side*.13,.37,-.22),(side*.16,.36,.04),(side*.17,.29,.30)],[.012,.013,.005],stripe,8)
for i in range(24):
 x=random.uniform(-.18,.18);z=random.uniform(-.06,.30);sphere('Skin spot',(x,.37-abs(z)*.18,z),(.018,.004,.025),green,12,8)
export('frog');clear()
# Swallowtail-inspired decorative butterfly, no species/biological accuracy claim.
brown=mat('Butterfly dark edges',(.055,.07,.04),.6);amber=mat('Butterfly warm yellow',(.92,.62,.11),.5);blue=mat('Butterfly blue accents',(.18,.49,.50),.45);cream=mat('Butterfly cream spots',(.96,.90,.57),.5)
sphere('Butterfly thorax',(0,.08,0),(.035,.04,.09),brown);sphere('Butterfly abdomen',(0,.07,.15),(.024,.03,.15),brown);sphere('Butterfly head',(0,.08,-.10),(.037,.035,.035),brown)
for side in [-1,1]:
 for hind in [False,True]:
  pts=[(.025,0),(.12,-.36),(.45,-.44),(.54,-.25),(.45,-.06),(.22,.08)] if not hind else [(.02,.05),(.25,-.03),(.45,.14),(.30,.33),(.20,.30),(.16,.43),(.10,.25)]
  center=(side*.18,.09,.12 if hind else -.14);vs=[center]+[(side*x,.09,z) for x,z in pts];mesh('Wing dark border',vs,[(0,i+1,(i+1)%len(pts)+1) for i in range(len(pts))],brown,False)
  inset=[(center[0]+(side*x-center[0])*.86,.094,center[2]+(z-center[2])*.86) for x,z in pts];mesh('Golden wing panels',[center]+inset,[(0,i+1,(i+1)%len(pts)+1) for i in range(len(pts))],amber,False)
  for x,z in pts[1:-1]:tube('Wing vein',[(side*.025,.10,.04),(side*x*.9,.10,z*.9)],[.003,.002],brown,5)
 for i in range(5):sphere('Wing spots',(side*(.23+i*.048),.102,-.28+i*.035),(.017,.003,.025),cream,16,8)
 for i in range(3):sphere('Blue hind spots',(side*(.20+i*.05),.104,.21-i*.035),(.027,.003,.016),blue,16,8)
 tube('Antenna',[(side*.014,.09,-.12),(side*.05,.10,-.21),(side*.09,.10,-.24)],[.004,.003,.001],brown,8)
export('butterfly');clear()
# Egret with slender legs, folded wings and a curved S-neck.
white=mat('Egret warm ivory',(.91,.92,.85),.58);shade=mat('Egret feather shadow',(.69,.75,.70));beak=mat('Egret ochre beak',(.72,.49,.10),.45);leg=mat('Egret dark legs',(.09,.12,.09));eye=mat('Egret eye',(.01,.016,.01),.15)
sphere('Egret torso',(0,.65,.04),(.18,.22,.38),white,48,24)
for side in [-1,1]:
 sphere('Folded wing',(side*.13,.69,.08),(.085,.15,.30),white,40,20)
 for i in range(7):tube('Layered feather',[(side*.17,.73-i*.018,-.06+i*.015),(side*.16,.64-i*.015,.30+i*.015)],[.025,.002],white,10)
 tube('Wading leg',[(side*.08,.55,.08),(side*.09,.29,.12),(side*.10,.04,.04)],[.018,.011,.009],leg,10)
 for j in [-1,0,1]:tube('Spread wading toe',[(side*.10,.04,.04),(side*.10+j*.05,.015,-.09)],[.009,.003],leg,8)
tube('S curved neck',[(0,.74,-.17),(0,.87,-.27),(0,1.02,-.10),(0,1.24,-.20),(0,1.28,-.32)],[.075,.065,.055,.042,.04],white,20)
sphere('Egret head',(0,1.28,-.35),(.075,.075,.12),white,40,20);tube('Long pointed beak',[(0,1.27,-.42),(0,1.26,-.65)],[.032,.001],beak,16)
for side in [-1,1]:sphere('Egret eye',(side*.067,1.31,-.38),(.012,.014,.014),eye,16,10)
for i in range(4):tube('Fine tail feather',[(0,.75,.30),((i-1.5)*.025,.68,.48)],[.025,.001],white,10)
export('egret');clear()
# Small shore crab: flattened carapace, four pairs of articulated walking legs, two claws.
rust=mat('Crab red ochre shell',(.48,.20,.09),.45);orange=mat('Crab shell highlights',(.66,.35,.15),.45);dark=mat('Crab eyes',(.015,.02,.012),.16);tip=mat('Crab claw tips',(.88,.69,.40))
sphere('Flattened carapace',(0,.12,0),(.28,.105,.23),rust,48,24)
for side in [-1,1]:
 for i in range(4):
  z=-.12+i*.095;endz=z+(i-1.5)*.10
  tube('Segmented walking leg',[(side*.20,.11,z),(side*.40,.07,endz),(side*.49,.015,endz+.07)],[.027,.023,.003],orange,10)
 tube('Claw arm',[(side*.18,.12,-.17),(side*.34,.16,-.28),(side*.29,.17,-.42)],[.05,.045,.035],rust,12)
 sphere('Claw palm',(side*.28,.17,-.43),(.075,.06,.08),orange)
 for j in [-1,1]:tube('Open pincer',[(side*.28+j*.04,.17,-.46),(side*.28+j*.055,.17,-.54),(side*.28+j*.018,.17,-.59)],[.028,.017,.002],tip,10)
 tube('Eye stalk',[(side*.11,.17,-.17),(side*.13,.25,-.23)],[.016,.012],orange,10);sphere('Stalk eye',(side*.13,.25,-.23),(.022,.023,.022),dark,20,12)
for i in range(30):
 x=random.uniform(-.20,.20);z=random.uniform(-.15,.15);sphere('Shell stipple',(x,.218-abs(x)*.1,z),(.008,.004,.008),orange,12,8)
export('crab')
p=OUT/'manifest.json';m=json.loads(p.read_text());m['items']=['rock','turtle','dragonfly','lotus','reeds','lantern','frog','butterfly','egret','crab'];m['additional_original_source']='art/v8/build_animals.py';p.write_text(json.dumps(m,indent=2))
