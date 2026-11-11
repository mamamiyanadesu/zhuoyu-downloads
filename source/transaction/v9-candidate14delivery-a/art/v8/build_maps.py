from pathlib import Path
import math,random,json
r=Path(__file__).resolve().parents[2];out=r/'app/assets/maps';out.mkdir(exist_ok=True)
W,H=1536,1024
for kind in ['lotus','beach']:
 rng=random.Random(808 if kind=='lotus' else 809);parts=[]
 def add(s):parts.append(s)
 def ellipse(x,y,rx,ry,fill,extra=''):add(f'<ellipse cx="{x:.2f}" cy="{y:.2f}" rx="{rx:.2f}" ry="{ry:.2f}" fill="{fill}" {extra}/>')
 add(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" preserveAspectRatio="none"><defs><radialGradient id="water"><stop stop-color="{("#6dafa0" if kind=="lotus" else "#91d5cf")}"/><stop offset="1" stop-color="{("#b1c5a0" if kind=="lotus" else "#c3e3cf")}"/></radialGradient><filter id="shadow" x="-.6" y="-.6" width="2.2" height="2.2"><feGaussianBlur stdDeviation="5"/></filter><linearGradient id="bank" x2="0.3" y2="1"><stop stop-color="{("#b0ba85" if kind=="lotus" else "#e9d9b6")}"/><stop offset="1" stop-color="{("#748b66" if kind=="lotus" else "#cdbb94")}"/></linearGradient>')
 water='<ellipse cx="768" cy="491.52" rx="706.56" ry="430.08"/>' if kind=='lotus' else '<path d="M0 0H1536V'+str(H*(.71+.055*math.sin(7.4)-.025*math.cos(15)))+' '+ ' '.join(f'L{x/100*W:.2f},{(.71+.055*math.sin(x/100*7.4)-.025*math.cos(x/100*15))*H:.2f}' for x in range(100,-1,-1))+'Z"/>'
 add('<clipPath id="waterclip">'+water+'</clipPath></defs><rect width="1536" height="1024" fill="url(#bank)"/>')
 # Fine original ground grain, no borrowed image textures.
 for i in range(3600):
  x=rng.uniform(0,W);y=rng.uniform(0,H);c=rng.choice(['#f2e4bd','#c1ad87','#8e9c70'] if kind=='lotus' else ['#f7ebcf','#c2ac83','#d8c49c']);ellipse(x,y,rng.uniform(.3,1.5),rng.uniform(.2,.6),c,'opacity=".45"')
 add('<g clip-path="url(#waterclip)"><rect width="1536" height="1024" fill="url(#water)"/>')
 # Variable silt / sand-bed contours remain visible through the water tint.
 for i in range(110):
  y=i*11;x=rng.uniform(-150,100);points=' '.join(f'{x+j*35:.1f},{y+math.sin(j*.28+i*.12)*(9 if kind=="lotus" else 15):.1f}' for j in range(50));add(f'<polyline points="{points}" fill="none" stroke="{("#517c65" if kind=="lotus" else "#7cb4a3")}" stroke-width="{rng.uniform(.5,2):.2f}" opacity=".13"/>')
 for i in range(850):
  x=rng.uniform(0,W);y=rng.uniform(0,H);ellipse(x,y,rng.uniform(.6,3.4),rng.uniform(.3,1.2),rng.choice(['#5d8e79','#dbd9ae','#a6ba92']),'opacity=".25"')
 add('</g>')
 if kind=='lotus':
  add('<ellipse cx="768" cy="491.52" rx="706.56" ry="430.08" fill="none" stroke="#dde1b4" stroke-width="5" opacity=".65"/>')
  for cx,cy in [(205,160),(1340,280),(260,800)]:
   for j in range(13):
    x=cx+rng.uniform(-75,75);y=cy+rng.uniform(-50,50);rr=rng.uniform(18,43);ellipse(x+5,y+7,rr,rr*.63,'#355f46','opacity=".18" filter="url(#shadow)"');ellipse(x,y,rr,rr*.66,rng.choice(['#618f57','#7da567','#8aac6e']),f'transform="rotate({rng.uniform(-30,30):.1f} {x} {y})"');add(f'<path d="M{x} {y}l{rr*.85} -4" stroke="#b7c480" stroke-width="1"/>')
   for j in range(3):
    x=cx+rng.uniform(-40,40);y=cy+rng.uniform(-30,30)
    for a in range(8):ellipse(x+math.cos(a*math.pi/4)*10,y+math.sin(a*math.pi/4)*6,10,4,'#eee2d3',f'transform="rotate({a*45} {x} {y})"')
    ellipse(x,y,5,3,'#caac55')
 else:
  for off,opacity in [(0,.7),(9,.35),(20,.16)]:
   points=' '.join(f'{x/100*W:.2f},{(.71+.055*math.sin(x/100*7.4)-.025*math.cos(x/100*15))*H-off:.2f}' for x in range(101));add(f'<polyline points="{points}" fill="none" stroke="#faf5df" stroke-width="{3 if off==0 else 2}" opacity="{opacity}"/>')
  for j in range(30):
   x=rng.uniform(70,1450);y=rng.uniform(850,990);ellipse(x,y,5,3,'#efe6cf');add(f'<path d="M{x-3} {y+1}l3 -4 3 4" fill="none" stroke="#bda98c" stroke-width=".6"/>')
 stones=[(.09,.49,.035),(.83,.78,.044),(.14,.76,.033)] if kind=='lotus' else [(.14,.76,.04),(.88,.70,.045),(.78,.88,.025)]
 for x,y,rad in stones:
  x*=W;y*=H;rad*=H;ellipse(x+10,y+12,rad*1.45,rad*.8,'#344d42','opacity=".2" filter="url(#shadow)"')
  for j in range(4):
   xx=x+rng.uniform(-rad*.7,rad*.7);yy=y+rng.uniform(-rad*.4,rad*.4);rr=rad*rng.uniform(.5,.9);ellipse(xx,yy,rr*1.2,rr*.64,rng.choice(['#7c8c77','#93a18a','#acb3a0']));ellipse(xx-rr*.1,yy-rr*.12,rr*.8,rr*.36,'#c9cdaf','opacity=".35"')
 # Grass and reeds on land, planted at edges rather than inside open water.
 for i in range(170):
  x=rng.uniform(0,W);y=rng.uniform(0,H)
  waterok=((x/W-.5)/.46)**2+((y/H-.48)/.42)**2<1.05 if kind=='lotus' else y/H<.83
  if waterok:continue
  h=rng.uniform(10,45)
  for a in [-.5,-.2,.2,.5]:add(f'<path d="M{x:.1f} {y:.1f}q{a*h:.1f} {-h*.6:.1f} {a*h*1.8:.1f} {-h:.1f}" fill="none" stroke="{rng.choice(["#6a8550","#92a368","#bac18b"])}" stroke-width="{rng.uniform(1,2.7):.1f}"/>')
 add('</svg>');(out/(kind+'.svg')).write_text(''.join(parts))
(out/'manifest.json').write_text(json.dumps({'author':'Original procedural SVG by task','source':'art/v8/build_maps.py','maps':['lotus','beach'],'coordinates':'normalized viewport; identical geometry to habitat-core.js','no_external_assets':True},indent=2))
print('Original maps generated')
