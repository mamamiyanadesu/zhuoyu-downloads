from pathlib import Path
import json,hashlib
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/'candidate3-native';out.mkdir(exist_ok=True)
labels=['package3-animals-native','package3-regression/native','package3-regression/reopen','package3-quiet-native','package3-quiet-reopen','package3-integration-native','package3-wheel-native','package3-tools-seed','package3-tools-reopen','package3-gameplay-native','package3-gameplay-reopen','package3-alarm-tail-native']
cases=[];checks=[]
for label in labels:
 p=e/label/'report.json';report=json.loads(p.read_text());assert report['result']=='PASS';assert report['checks'] and all(c['passed'] for c in report['checks']);assert Path(str(e/label)+'.exit').read_text().strip()=='0'
 checks.extend({'case':label,**c} for c in report['checks'])
 if 'retainedChecks' in report:checks.extend({'case':'package3-alarm-native retained successful prefix',**c} for c in report['retainedChecks'])
 gate=Path(str(e/label)+'.gate.json');cases.append({'label':label,'report':str(p),'report_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'run':json.loads(gate.read_text()) if gate.exists() else {'command':['node',str(r/'scripts/verify_alarm_tail_v9.cjs')]},'stdout':Path(str(e/label)+'.stdout').read_text(),'stderr':Path(str(e/label)+'.stderr').read_text(),'exit':0})
not_verified=['actual external global shortcut/Option permission','actual OS fullscreen detection','physical sleep/multiple displays/Spaces/icon click-through','Finder physical dragdrop','full five-video continuous viewing','aesthetic parity and full subjective motion review','current final-package live city-weather regression','Windows/Intel/notarization']
d={'result':'PASS','scope':'67 selected local packaged checks with retained successful alarm prefix, NOT full goal acceptance','goal_complete':False,'bundled':True,'version':'0.9.0-beta.3','checks':checks,'cases':cases,'not_verified':not_verified,'retained_failures':['package-alarm-native etc remain immutable','package3-alarm-native failed number selection after five successful checks; unfinished tail passed separately with native CDP inputs','package2-regression incomplete exit0 rejected; beta3 full native+reopen passes']}
(out/'report.json').write_text(json.dumps(d,ensure_ascii=False,indent=2));print('SELECTED_PACKAGED_CHECKS',len(checks))
p=r/'scripts/verify_scene_transaction.py';s=p.read_text().replace("'scope':f'v9 {stage} development stage, ongoing full upgrade; not final packaged release'","'scope':f'v9 {stage} selected-runtime checks and source transaction; full upgrade remains incomplete'")
s=s.replace("'QingchiAnimalArt.pose/draw']","'QingchiAnimalArt.pose/draw','settings.quietView','renderQuiet/immersive','copyV8Save','alarm-tick recovered','native startup/resume alarm recovery']")
a=s.index("'not_completed':[");b=s.index(']}',a)+1;s=s[:a]+"'not_completed':native.get('not_verified',['full upgrade audit incomplete'])"+s[b:];p.write_text(s)
