from pathlib import Path
import subprocess,json,time,sys,hashlib
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';version='0.9.0-beta.14';suite=e/'candidate14-suite';suite.mkdir(exist_ok=True)
node=lambda s,*args:['node',str(r/'scripts'/s),*args]
native=lambda label,profile,*args:[sys.executable,str(r/'scripts/run_native_case_v9.py'),version,label,profile,*args]
plan=[
 ('day-matrix',node('verify_release14_day_matrix.cjs'),'candidate14-day-matrix2'),
 ('regression',node('verify_release14_regression.cjs'),'candidate14-regression/native'),
 ('regression-reopen',node('verify_release14_regression.cjs','--v9-reopen'),'candidate14-regression/reopen'),
 ('features',node('verify_release14_features.cjs'),'candidate14-features-native'),
 ('features-reopen',node('verify_release14_features.cjs','--reopen'),'candidate14-features-reopen'),
 ('quiet',native('candidate14-quiet-native','candidate14-quiet-profile','--verify-candidate-v9'),'candidate14-quiet-native'),
 ('quiet-reopen',native('candidate14-quiet-reopen','candidate14-quiet-profile','--verify-candidate-v9','--candidate-reopen'),'candidate14-quiet-reopen'),
 ('tools-seed',native('candidate14-tools-seed','candidate14-tools-profile','--verify-tools-restart-v9','--tools-seed'),'candidate14-tools-seed'),
 ('tools-reopen',native('candidate14-tools-reopen','candidate14-tools-profile','--verify-tools-restart-v9'),'candidate14-tools-reopen'),
 ('animals',native('candidate14-animals-native','candidate14-animals-profile','--verify-animals-v9'),'candidate14-animals-native'),
 ('wheel-local',native('candidate14-wheel-local','candidate14-wheel-local-profile','--verify-wheel-v9','--wheel-local-only'),'candidate14-wheel-local')]
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
(suite/'report.json').write_text(json.dumps({'result':'PASS','scope':'Selected packaged beta14 regressions; local wheel is NOT external/global. Injected fullscreen is NOT actual OS fullscreen. Day only per confirmed scope; screenshots require visual review.','cases':records,'total_checks':sum(x['checks'] for x in records)},ensure_ascii=False,indent=2));print('RELEASE14_SUITE_PASS',sum(x['checks'] for x in records),flush=True)
