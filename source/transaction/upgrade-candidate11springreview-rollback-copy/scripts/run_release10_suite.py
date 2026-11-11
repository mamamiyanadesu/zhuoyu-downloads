from pathlib import Path
import subprocess,json,time,sys,hashlib
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';version='0.9.0-beta.10';suite=e/'candidate10-suite';suite.mkdir(exist_ok=True)
node=lambda s,*args:['node',str(r/'scripts'/s),*args]
native=lambda label,profile,*args:[sys.executable,str(r/'scripts/run_native_case_v9.py'),version,label,profile,*args]
plan=[
 ('day-matrix',node('verify_release10_day_matrix.cjs'),'candidate10-day-matrix'),
 ('regression',node('verify_release10_regression.cjs'),'candidate10-regression/native'),
 ('regression-reopen',node('verify_release10_regression.cjs','--v9-reopen'),'candidate10-regression/reopen'),
 ('alarm',node('verify_release10_alarm.cjs'),'candidate10-alarm-native'),
 ('quiet',native('candidate10-quiet-native','candidate10-quiet-profile','--verify-candidate-v9'),'candidate10-quiet-native'),
 ('quiet-reopen',native('candidate10-quiet-reopen','candidate10-quiet-profile','--verify-candidate-v9','--candidate-reopen'),'candidate10-quiet-reopen'),
 ('tools-seed',native('candidate10-tools-seed','candidate10-tools-profile','--verify-tools-restart-v9','--tools-seed'),'candidate10-tools-seed'),
 ('tools-reopen',native('candidate10-tools-reopen','candidate10-tools-profile','--verify-tools-restart-v9'),'candidate10-tools-reopen'),
 ('gameplay',native('candidate10-gameplay-native','candidate10-gameplay-profile','--verify-v6'),'candidate10-gameplay-native'),
 ('gameplay-reopen',native('candidate10-gameplay-reopen','candidate10-gameplay-profile','--verify-v6','--v6-reopen'),'candidate10-gameplay-reopen'),
 ('animals',native('candidate10-animals-native','candidate10-animals-profile','--verify-animals-v9'),'candidate10-animals-native'),
 ('wheel-local',native('candidate10-wheel-local','candidate10-wheel-local-profile','--verify-wheel-v9','--wheel-local-only'),'candidate10-wheel-local')]
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
(suite/'report.json').write_text(json.dumps({'result':'PASS','scope':'Selected packaged beta10 regressions; local wheel is NOT external/global. Injected fullscreen is NOT actual OS fullscreen. Day only per confirmed scope; screenshots require visual review.','cases':records,'total_checks':sum(x['checks'] for x in records)},ensure_ascii=False,indent=2));print('RELEASE10_SUITE_PASS',sum(x['checks'] for x in records),flush=True)
