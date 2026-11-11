from pathlib import Path
import subprocess,json,time,sys,hashlib
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';version='0.9.0-beta.14';suite=e/'candidate14-suite-tail';suite.mkdir(exist_ok=True)
node=lambda s,*args:['node',str(r/'scripts'/s),*args]
native=lambda label,profile,*args:[sys.executable,str(r/'scripts/run_native_case_v9.py'),version,label,profile,*args]
plan=[
 ('gameplay',node('verify_release14_gameplay.cjs'),'candidate14-gameplay-native'),
 ('gameplay-reopen',node('verify_release14_gameplay.cjs','--v6-reopen'),'candidate14-gameplay-reopen'),
 ('motion',['env','QINGCHI_MOTION_VERSION=0.9.0-beta.14','QINGCHI_MOTION_LABEL=candidate14-motion-final',*node('record_candidate5_animals.cjs')],'candidate14-motion-final')]

records=[]
for key,cmd,where in plan:
 dest=suite/(key+'.json');report=e/where/'report.json'
 if dest.exists():
  old=json.loads(dest.read_text())
  if old.get('accepted') and report.exists() and hashlib.sha256(report.read_bytes()).hexdigest()==old['report_sha256']:
   records.append(old);print('RETAIN',key,flush=True);continue
  raise SystemExit('Unfinished/failed identity '+key+' requires explicit repair, not blind restart')
 print('START',key,flush=True)
 if key=='tools-reopen':time.sleep(4)
 with (suite/(key+'.stdout')).open('w') as so,(suite/(key+'.stderr')).open('w') as se:
  q=subprocess.run(cmd,cwd=r,stdout=so,stderr=se)
 rec={'case':key,'command':cmd,'exit':q.returncode,'report':str(report),'accepted':False,'stdout':str(suite/(key+'.stdout')),'stderr':str(suite/(key+'.stderr'))}
 try:
  d=json.loads(report.read_text());assert q.returncode==0;assert d['result']=='PASS';assert d['checks'] and all(x.get('passed') is True for x in d['checks']);rec.update(accepted=True,checks=len(d['checks']),report_sha256=hashlib.sha256(report.read_bytes()).hexdigest())
 except Exception as ex:rec['error']=str(ex)
 dest.write_text(json.dumps(rec,ensure_ascii=False,indent=2));records.append(rec);(suite/'progress.json').write_text(json.dumps(records,ensure_ascii=False,indent=2));print('RESULT',key,rec['accepted'],rec.get('checks'),flush=True)
 if not rec['accepted']:raise SystemExit(1)
(suite/'report.json').write_text(json.dumps({'result':'PASS','scope':'Selected packaged beta14 regressions; local wheel is NOT external/global. Injected fullscreen is NOT actual OS fullscreen. Day only per confirmed scope; screenshots require visual review.','cases':records,'total_checks':sum(x['checks'] for x in records)},ensure_ascii=False,indent=2));print('RELEASE14_TAIL_PASS',sum(x['checks'] for x in records),flush=True)
