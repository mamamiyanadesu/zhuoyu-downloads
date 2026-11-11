from pathlib import Path
import os,sys,json,subprocess,time
r=Path(__file__).resolve().parent.parent
version,label,profile,*flags=sys.argv[1:]
app=r/f'releases/蓬莱临水-{version}-mac-arm64.app/Contents/MacOS/Qingchi'
out=r/'evidence/v9'/label
if out.exists() or Path(str(out)+'.exit').exists():raise SystemExit('Refuse overwrite existing run identity')
out.parent.mkdir(parents=True,exist_ok=True)
env={**os.environ,'QINGCHI_PROFILE':str(r/'evidence/v9'/profile),'QINGCHI_VERIFY_OUT':str(out)}
with Path(str(out)+'.stdout').open('w') as so,Path(str(out)+'.stderr').open('w') as se:
 q=subprocess.run([str(app),*flags],env=env,stdout=so,stderr=se)
Path(str(out)+'.exit').write_text(str(q.returncode)+'\n')
result={'command':[str(app),*flags],'profile':env['QINGCHI_PROFILE'],'exit':q.returncode,'report':str(out/'report.json')}
try:
 report=json.loads((out/'report.json').read_text());assert report.get('result')=='PASS';assert report.get('checks');assert all(x.get('passed') is True for x in report['checks']);assert q.returncode==0
 result.update(accepted=True,checks=len(report['checks']))
except Exception as e:result.update(accepted=False,error=str(e))
Path(str(out)+'.gate.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
print(json.dumps(result,ensure_ascii=False))
raise SystemExit(0 if result['accepted'] else 1)
