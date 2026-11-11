from pathlib import Path
from PIL import Image,ImageDraw
import json,bisect
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/'candidate6-motion-review';out.mkdir(exist_ok=True)
inputs={'beta5':e/'candidate5-motion-native/lotus-invited-full-cycle/capture.json','beta6':e/'candidate6-motion-native2/lotus-invited-full-cycle/capture.json'};records=[]
for label,p in inputs.items():
 c=json.loads(p.read_text());inv=next(m['invited'] for m in c['markers'] if m['kind']=='invited');spec=next(v for v in inv if v['type']=='turtle');track=[];chosen=None;prev=None
 for t in c['trace']:
  v=next((v for v in t['habitat']['simulation']['visitors'] if v['id']==spec['id']),None)
  if not v:continue
  track.append((t,v));delta=abs((v['angle']-prev[1]['angle']+540)%360-180) if prev else 0
  if chosen is None and v['phase']=='moving' and ((label=='beta5' and delta>90) or (label=='beta6' and 3<delta<30)):chosen=(t,v,delta)
  prev=t,v
 assert chosen,label+' turn event';wall=chosen[0]['wallMs'];ts=[f['timestamp']*1000 for f in c['frames']];start=max(0,bisect.bisect_left(ts,c['startedWall']+wall-250));selected=c['frames'][start:start+24];sheet=Image.new('RGB',(8*144,3*164),'#f8f4e9');draw=ImageDraw.Draw(sheet);entries=[];traceMs=[t['wallMs'] for t,v in track]
 for i,f in enumerate(selected):
  ms=f['timestamp']*1000-c['startedWall'];k=min(len(track)-1,bisect.bisect_left(traceMs,ms));t,v=track[k];im=Image.open(Path(c['dir'])/f['file']);w,h=im.size;x=v['x']*w;y=(v['y']-v.get('hop',0))*h;box=(round(x-64),round(y-64),round(x+64),round(y+64));crop=im.crop(box);xx=i%8*144;yy=i//8*164;sheet.paste(crop,(xx+8,yy+28));draw.text((xx+5,yy+3),f'{label} {ms/1000:.3f}s',fill='#24382e');draw.text((xx+5,yy+15),f'angle {v["angle"]:.1f}',fill='#24382e');entries.append({'file':str(Path(c['dir'])/f['file']),'timestamp':f['timestamp'],'crop':box,'nearest_trace_angle':v['angle'],'nearest_trace_wallMs':t['wallMs']})
 target=out/(label+'-turtle-turn-24frames.jpg');sheet.save(target,quality=95);records.append({'version':label,'sheet':str(target),'selected_event':{'wallMs':wall,'angleDeltaFromPreviousSample':chosen[2]},'frames':entries})
(out/'turn-comparison-samples.json').write_text(json.dumps(records,indent=2));print(json.dumps([{'version':x['version'],'event':x['selected_event'],'frames':len(x['frames'])} for x in records],indent=2))
