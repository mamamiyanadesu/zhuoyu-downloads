from pathlib import Path
import subprocess,json,sys,hashlib
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/'candidate10-suite-tail';out.mkdir(exist_ok=True)
native=lambda label,profile,*args:[sys.executable,str(r/'scripts/run_native_case_v9.py'),'0.9.0-beta.10',label,profile,*args]
plan=[('features-reopen',['node',str(r/'scripts/verify_release10_features.cjs'),'--reopen'],'candidate10-features-reopen'),
('gameplay-unfinished-tail',['node',str(r/'scripts/verify_release10_gameplay_tail.cjs')],'candidate10-gameplay-tail'),
('gameplay-reopen',native('candidate10-gameplay-reopen','candidate10-gameplay-profile','--verify-v6','--v6-reopen','--expedition'),'candidate10-gameplay-reopen'),
('animals',native('candidate10-animals-native','candidate10-animals-profile','--verify-animals-v9'),'candidate10-animals-native'),
('wheel-local',native('candidate10-wheel-local','candidate10-wheel-local-profile','--verify-wheel-v9','--wheel-local-only'),'candidate10-wheel-local')]
records=[]
for key,cmd,where in plan:
 dest=out/(key+'.json');report=e/where/'report.json'
 if dest.exists():
  old=json.loads(dest.read_text())
  if old.get('accepted') and report.exists() and hashlib.sha256(report.read_bytes()).hexdigest()==old['report_sha256']:
   records.append(old);print('RETAIN',key,flush=True);continue
  raise SystemExit('Failed identity requires repair: '+key)
 print('START',key,flush=True)
 with (out/(key+'.stdout')).open('w') as so,(out/(key+'.stderr')).open('w') as se:q=subprocess.run(cmd,cwd=r,stdout=so,stderr=se)
 rec={'case':key,'command':cmd,'exit':q.returncode,'report':str(report),'accepted':False,'stdout':str(out/(key+'.stdout')),'stderr':str(out/(key+'.stderr'))}
 try:
  d=json.loads(report.read_text());assert q.returncode==0;assert d['result']=='PASS';assert d['checks'] and all(x.get('passed') is True for x in d['checks']);rec.update(accepted=True,checks=len(d['checks']),report_sha256=hashlib.sha256(report.read_bytes()).hexdigest())
 except Exception as ex:rec['error']=str(ex)
 dest.write_text(json.dumps(rec,ensure_ascii=False,indent=2));records.append(rec);(out/'progress.json').write_text(json.dumps(records,ensure_ascii=False,indent=2));print('RESULT',key,rec['accepted'],rec.get('checks'),flush=True)
 if not rec['accepted']:raise SystemExit(1)
(out/'report.json').write_text(json.dumps({'result':'PASS','scope':'Packaged native regressions; wheel local preview is NOT external global activation. Gameplay earlier missing --expedition entry retained.','cases':records,'total_checks':sum(x['checks'] for x in records)},ensure_ascii=False,indent=2))
print('RELEASE10_TAIL_PASS',sum(x['checks'] for x in records),flush=True)
