from pathlib import Path
from PIL import Image,ImageDraw
import json,bisect,sys
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/('candidate6-motion-review' if '--beta6' in sys.argv else 'candidate5-motion-review')
sources=[e/'candidate5-motion-native/lotus-invited-full-cycle/capture.json',e/'candidate5-motion-native-resume1/beach-invited-full-cycle/capture.json']
if '--beta6' in sys.argv:sources=[e/'candidate6-motion-native2'/name/'capture.json' for name in ['lotus-invited-full-cycle','beach-invited-full-cycle']]
records=[]
for source in sources:
 if not source.exists():continue
 c=json.loads(source.read_text());fs=c['frames'];ts=[f['timestamp']*1000 for f in fs];inv=next(m['invited'] for m in c['markers'] if m['kind']=='invited')
 for spec in inv:
  history=[]
  for tr in c['trace']:
   v=next((v for v in tr['habitat']['simulation']['visitors'] if v['id']==spec['id']),None)
   if v:history.append((tr,v))
  chosen=[]
  for phase in ['reacting','waiting','moving','leaving']:
   eligible=[t for t in history if t[1]['phase']==phase]
   for fract in [.15,.5,.85]:
    if eligible:chosen.append(eligible[min(len(eligible)-1,int((len(eligible)-1)*fract))])
  chosen=sorted(chosen,key=lambda q:q[0]['wallMs']);sheet=Image.new('RGB',(800,600),'#f5f3e9');draw=ImageDraw.Draw(sheet);entries=[]
  for j,(tr,v) in enumerate(chosen):
   target=c['startedWall']+tr['wallMs'];k=bisect.bisect_left(ts,target);k=min(len(ts)-1,k)
   if k and abs(ts[k-1]-target)<abs(ts[k]-target):k-=1
   im=Image.open(Path(c['dir'])/fs[k]['file']);w,h=im.size;x=v['x']*w;y=(v['y']-v.get('hop',0))*h
   box=(round(x-84),round(y-84),round(x+84),round(y+84));crop=im.crop(box);px=(j%4)*200;py=(j//4)*200;sheet.paste(crop,(px+16,py+24));draw.text((px+5,py+4),f"{spec['type']} {tr['wallMs']/1000:.2f}s {v['phase']}",fill='#20382e')
   entries.append({'frame':str(Path(c['dir'])/fs[k]['file']),'timestamp':fs[k]['timestamp'],'wallMs':tr['wallMs'],'phase':v['phase'],'position':{'x':v['x'],'y':v['y']},'crop':box,'capture_trace_offset_ms':ts[k]-target})
  p=out/(spec['type']+'-motion-sheet.jpg');sheet.save(p,quality=95);records.append({'species':spec['type'],'visitor':spec['id'],'sheet':str(p),'entries':entries})
(out/'sample-index.json').write_text(json.dumps(records,indent=2))
print(json.dumps({'species':len(records),'tiles':sum(len(x['entries']) for x in records),'sheets':[x['sheet'] for x in records]},indent=2))
