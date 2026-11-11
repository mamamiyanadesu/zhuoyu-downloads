from pathlib import Path
import json,math,sys
p=Path(sys.argv[1]);rows=json.loads((p/'body-trace.json').read_text());samples=[];prior={}
wrap=lambda x:math.atan2(math.sin(x),math.cos(x))
for j,row in enumerate(rows):
 for i,f in enumerate(row['fish']):
  pts=f['segments'];ds=[math.hypot(a['x']-b['x'],a['y']-b['y'])for a,b in zip(pts,pts[1:])];angs=[math.atan2(a['y']-b['y'],a['x']-b['x'])for a,b in zip(pts,pts[1:])];bends=[abs(wrap(a-b))for a,b in zip(angs,angs[1:])];length=sum(ds);ext=math.hypot(pts[0]['x']-pts[-1]['x'],pts[0]['y']-pts[-1]['y'])/length if length else 0
  heading=math.atan2(pts[0]['y']-pts[2]['y'],pts[0]['x']-pts[2]['x']);velocity=math.atan2(f['vy'],f['vx']);dt=(row['time']-prior[i]['time'])/1000 if i in prior else 0
  yaw=abs(wrap(velocity-prior[i]['heading']))/dt if dt>0 else 0;prior[i]={'time':row['time'],'heading':velocity}
  samples.append({'headingError':abs(wrap(heading-velocity)),'velocityYawRate':yaw,'sample':j,'fish':i,'time':row['time'],'extension':ext,'totalCurvature':sum(bends),'maxJoint':max(bends),'minSpacing':min(ds),'maxSpacing':max(ds),'x':f['x'],'y':f['y']})
def stats(key):
 x=sorted(s[key]for s in samples);return{'min':x[0],'p05':x[int(len(x)*.05)],'median':x[len(x)//2],'p95':x[int(len(x)*.95)],'max':x[-1]}
out={'samples':len(samples),'captureRows':len(rows),'stats':{k:stats(k)for k in ['extension','totalCurvature','maxJoint','minSpacing','maxSpacing','headingError','velocityYawRate']},'extension_under_point65':sum(s['extension']<.65 for s in samples),'joints_over_point5rad':sum(s['maxJoint']>.5 for s in samples),'heading_over90':sum(s['headingError']>math.pi/2 for s in samples),'worstFold':min(samples,key=lambda s:s['extension']),'scope':'read-only sampled actual fish skeleton, approx20Hz; not frame-time or aesthetic acceptance'}
(p/'body-analysis.json').write_text(json.dumps(out,indent=2));print(json.dumps(out,indent=2))
