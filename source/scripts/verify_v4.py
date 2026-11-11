from pathlib import Path
import json,subprocess,hashlib,difflib,shutil
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';e=r/'evidence/v4';b=tx/'v3-expedition-baseline';roles=json.loads((tx/'roles.json').read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();runs=[]
def run(label,args):
 q=subprocess.run(args,capture_output=True,text=True);runs.append({'label':label,'command':args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode});print(label,q.stdout.strip(),q.stderr.strip(),'exit',q.returncode);assert q.returncode==0;return q.stdout
v=json.loads(Path(roles['VERIFICATION']).read_text());assert sha(Path(v['target']))==v['original_sha256'];mod=Path(roles['MODIFIED_FILE']);raw=mod.read_bytes();pristine=tx/'BASELINE.js';restore=tx/'rollback-copy.js';restore.write_bytes(raw);run('ROLLBACK_EXEC',['sh',roles['ROLLBACK'],str(restore)]);assert sha(restore)==sha(pristine)
for label,file in [('BASELINE',pristine),('MODIFIED',mod),('ROLLBACK',restore)]:run(label,['node',str(r/'tests/engine-probe.cjs'),str(file)])
mod.write_bytes(raw);Path(roles['DIFF_FILE']).write_text(''.join(difflib.unified_diff(pristine.read_text().splitlines(True),mod.read_text().splitlines(True),fromfile='BASELINE.js',tofile='pond.js')));check=tx/'patch-check.js';check.write_bytes(pristine.read_bytes());run('PATCH_RECONSTRUCTION',['patch',str(check),roles['DIFF_FILE']]);assert sha(check)==sha(mod)
copy=tx/'expedition-rollback-copy';copy.mkdir(exist_ok=True)
for name in ['app','desktop']:shutil.copytree(r/name,copy/name,dirs_exist_ok=True)
(copy/'.qingchi-rollback-copy').touch();run('V3_ROLLBACK_EXEC',['sh',roles['ROLLBACK'],'--expedition-root',str(copy)])
manifest=json.loads((b/'manifest.json').read_text());assert all(sha(b/k)==h for k,h in manifest.items());assert all(sha(copy/k)==h for k,h in manifest.items())
for label,base in [('V3_BASELINE',b),('V4_MODIFIED',r),('V3_ROLLBACK',copy)]:run(label,['node',str(r/'tests/expedition-probe.cjs'),str(base)])
run('UNIT_TESTS',['node','--test',str(r/'tests/core.test.cjs'),str(r/'tests/life.test.cjs'),str(r/'tests/expedition.test.cjs')])
app=r/'releases/清池蓬莱版-0.4.0-mac-arm64.app';run('CODESIGN',['codesign','--verify','--deep','--strict',str(app)])
for folder in ['app','desktop']:
 for f in (r/folder).rglob('*'):
  if f.is_file():assert sha(f)==sha(app/'Contents/Resources/app'/f.relative_to(r))
native=json.loads((e/'final-native-3/report.json').read_text());assert native['result']=='PASS' and native['bundled']
# Root supplemental diff is executable by git apply after stripping the staging prefixes.
old=tx/'v4-patch-a';new=tx/'v4-patch-b';old.mkdir(exist_ok=True);new.mkdir(exist_ok=True)
for name in ['app','desktop']:
 shutil.copytree(b/name,old/name,dirs_exist_ok=True);shutil.copytree(r/name,new/name,dirs_exist_ok=True)
q=subprocess.run(['git','diff','--no-index','--binary','--no-renames',str(old),str(new)],capture_output=True,text=True);assert q.returncode==1
patch=q.stdout.replace('a/'+str(old).lstrip('/')+'/', 'a/').replace('b/'+str(new).lstrip('/')+'/', 'b/').replace('a/'+str(new).lstrip('/')+'/', 'a/').replace('b/'+str(old).lstrip('/')+'/', 'b/')
(tx/'EXPEDITION_SUPPLEMENT.patch').write_text(patch);run('V4_SUPPLEMENT_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),str(tx/'EXPEDITION_SUPPLEMENT.patch')])
for folder in ['app','desktop']:
 for f in (r/folder).rglob('*'):
  if f.is_file():assert sha(f)==sha(copy/f.relative_to(r))
input_report=json.loads((e/'native-input-2/report.json').read_text());assert input_report['result']=='PASS' and input_report['bundled']
fresh_report=json.loads((e/'final-fresh/report.json').read_text());assert fresh_report['result']=='PASS' and fresh_report['bundled']
v['expedition_v4']={'changed_symbols':['Koi.applyDefinition bodyWidth','QingchiLifeCore.waters','QingchiLifeCore.dispatch cast/catch/adopt/claim-collection','QingchiExpedition','fishingWorld','createWeather.current'],'runs':runs,'native':native,'native_keyboard_mouse':input_report,'native_keyboard_mouse_stdout':(e/'native-input-2.stdout').read_text(),'native_keyboard_mouse_stderr':(e/'native-input-2.stderr').read_text(),'native_keyboard_mouse_exit':0,'fresh_profile':fresh_report,'fresh_stdout':(e/'final-fresh.stdout').read_text(),'fresh_stderr':(e/'final-fresh.stderr').read_text(),'fresh_exit':0,'native_stdout':(e/'final-native-3.stdout').read_text(),'native_stderr':(e/'final-native-3.stderr').read_text(),'native_exit':0,'original_unchanged':True,'baseline_manifest':str(b/'manifest.json'),'restored_hash':sha(restore),'modified_hash':sha(mod),'supplement_patch':str(tx/'EXPEDITION_SUPPLEMENT.patch'),'live_weather':json.loads((e/'weather-live.json').read_text()),'limitations':['fixed lake-side spots, not free walking','automated controller checks do not prove enjoyable gameplay','no device GPS read; user provided district','multi-display, sleep, Spaces, Intel, Windows 0.4 and notarization unverified'],'errors':[{'layer':'native mouse test readiness','exit':1,'error':'site still null on immediate assertion after click','correction':'await initial weather redraw; move/down/up with event timing; assert resulting site. Native keyboard and mouse then passed.'},{'layer':'native test focus','exit':1,'error':'controller charge/tug cancelled when window lost focus','evidence':['final-native/failure.json','final-native-2/failure.json'],'correction':'focus before charge, assert charge active, keep controller input synchronized; bundled 3 catches passed'},{'layer':'sandbox GUI','exit':134,'error':'app could not launch in restricted GUI context','correction':'approved native launch'},{'layer':'sandbox network','exit':1,'error':'Operation not permitted','correction':'approved request for user-provided city'},{'layer':'weather module syntax','exit':1,'error':'missing ) after argument list','correction':'closed HTTPS response callback; syntax/unit/live API passed'}]};Path(roles['VERIFICATION']).write_text(json.dumps(v,ensure_ascii=False,indent=2))
for role,file in roles.items():p=Path(file);assert p.read_bytes();print(role,p,sha(p))
print('V4_TRANSACTION_PASS')
