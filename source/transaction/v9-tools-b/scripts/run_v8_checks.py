from pathlib import Path
import subprocess,os,shutil,json
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v8';tx=r/'transaction';exe=r/'releases/蓬莱临水-0.8.0-mac-arm64.app/Contents/MacOS/Qingchi'
def run(label,args,profile=None):
 if (e/(label+'.exit')).exists() and (e/(label+'.exit')).read_text().strip()=='0' and (e/label/'report.json').exists():print('REUSE',label,flush=True);return
 env=os.environ.copy();env['QINGCHI_VERIFY_OUT']=str(e/label)
 if profile:env['QINGCHI_PROFILE']=str(e/profile)
 (e/(label+'.command.json')).write_text(json.dumps({'args':list(map(str,args)),'QINGCHI_PROFILE':env.get('QINGCHI_PROFILE'),'QINGCHI_VERIFY_OUT':env['QINGCHI_VERIFY_OUT']},indent=2))
 print('START',label,flush=True)
 with (e/(label+'.stdout')).open('w') as out,(e/(label+'.stderr')).open('w') as err:q=subprocess.run(list(map(str,args)),env=env,stdout=out,stderr=err,timeout=330)
 (e/(label+'.exit')).write_text(str(q.returncode));print('EXIT',label,q.returncode,flush=True)
 if q.returncode:print((e/(label+'.stderr')).read_text(),flush=True);raise SystemExit(q.returncode)
run('native',[exe,'--verify-v8'],'native-profile')
run('reopen',[exe,'--verify-v8','--v8-reopen'],'native-profile')
run('gameplay',[exe,'--expedition','--verify-v6'],'gameplay-profile')
run('gameplay-reopen',[exe,'--expedition','--verify-v6','--v6-reopen'],'gameplay-profile')
electron=r/'node_modules/electron/dist/Electron.app/Contents/MacOS/Electron';probe=r/'tests/habitat-state-probe.cjs'
run('baseline',[electron,probe,tx/'v7-maps-baseline',e/'baseline'])
run('modified',[electron,probe,r,e/'modified'])
copy=tx/'habitats-rollback-copy'
if not copy.exists():
 copy.mkdir()
 for n in ['app','desktop','package.json','package-lock.json','THIRD_PARTY.txt']:
  if (r/n).is_dir():shutil.copytree(r/n,copy/n)
  else:shutil.copy2(r/n,copy/n)
 (copy/'.qingchi-rollback-copy').write_text('separate verification copy')
 q=subprocess.run(['sh',str(tx/'ROLLBACK.sh'),'--habitats-root',str(copy)],capture_output=True,text=True)
 (e/'rollback-command.json').write_text(json.dumps({'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode},indent=2));assert q.returncode==0
run('rollback',[electron,probe,copy,e/'rollback'])
print('V8_ALL_RUNTIME_CHECKS_PASS',flush=True)
