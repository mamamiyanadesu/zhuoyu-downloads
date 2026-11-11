from pathlib import Path
import subprocess,json,hashlib,difflib,shutil
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';b=tx/'v2-feature-baseline';e=r/'evidence/v3';roles=json.loads((tx/'roles.json').read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();runs=[]
def run(label,args):
 q=subprocess.run(args,capture_output=True,text=True);rec=dict(label=label,command=args,stdout=q.stdout,stderr=q.stderr,exit=q.returncode);runs.append(rec);print(label,q.stdout.strip(),q.stderr.strip(),'exit',q.returncode);assert q.returncode==0;return q.stdout
pristine=tx/'BASELINE.js';modified=Path(roles['MODIFIED_FILE']);raw=modified.read_bytes();restore=tx/'rollback-copy.js';restore.write_bytes(raw)
run('ROLLBACK_EXEC',['sh',roles['ROLLBACK'],str(restore)]);assert sha(restore)==sha(pristine)
for probe in ['engine-probe.cjs','visual-probe.cjs','feature-probe.cjs']:
 for label,file in [('BASELINE',pristine),('MODIFIED',modified),('ROLLBACK',restore)]:run(label+' '+probe,['node',str(r/'tests'/probe),str(file)])
modified.write_bytes(raw)
Path(roles['DIFF_FILE']).write_text(''.join(difflib.unified_diff(pristine.read_text().splitlines(True),modified.read_text().splitlines(True),fromfile='BASELINE.js',tofile='pond.js')))
patchcopy=tx/'patch-check.js';patchcopy.write_bytes(pristine.read_bytes());run('PATCH_RECONSTRUCTION',['patch',str(patchcopy),roles['DIFF_FILE']]);assert patchcopy.read_bytes()==raw
# Preserve every original v2 byte, then test full feature rollback on a clearly marked copy.
manifest=json.loads((b/'manifest.json').read_text());assert all(sha(b/name)==digest for name,digest in manifest.items())
copy=tx/'feature-rollback-copy';copy.mkdir(exist_ok=True)
for folder in ['app','desktop']:shutil.copytree(r/folder,copy/folder,dirs_exist_ok=True)
for name in ['package.json','package-lock.json']:shutil.copy2(r/name,copy/name)
(copy/'.qingchi-rollback-copy').touch();run('FEATURE_ROOT_ROLLBACK',['sh',roles['ROLLBACK'],'--feature-root',str(copy)])
for folder in ['app','desktop']:
 actual={str(p.relative_to(copy)):sha(p) for p in (copy/folder).rglob('*') if p.is_file()}
 expected={str(p.relative_to(b)):sha(p) for p in (b/folder).rglob('*') if p.is_file()};assert actual==expected
for label,file in [('V2_BASELINE',b/'app/vendor/pond.js'),('V3_MODIFIED',modified),('V2_ROLLBACK',copy/'app/vendor/pond.js')]:run(label,['node',str(r/'tests/feature-probe.cjs'),str(file)])
# Supplemental text patch covers all new/changed application and native modules.
patch='';names=set()
for base in [b,r]:
 for folder in ['app','desktop']:
  for file in (base/folder).rglob('*'):
   if file.is_file() and file.suffix in ['.html','.css','.js','.cjs']:names.add(str(file.relative_to(base)))
for name in sorted(names):
 old=(b/name).read_text() if (b/name).exists() else '';new=(r/name).read_text() if (r/name).exists() else ''
 patch+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/'+name if old else '/dev/null',tofile='b/'+name if new else '/dev/null'))
(tx/'FEATURE_SUPPLEMENT.patch').write_text(patch);run('FEATURE_PATCH_REAPPLY',['patch','-p1','-d',str(copy),'-i',str(tx/'FEATURE_SUPPLEMENT.patch')]);assert all(sha(copy/name)==sha(r/name) for name in names)
unit=run('UNIT_TESTS',['node','--test',str(r/'tests/core.test.cjs'),str(r/'tests/life.test.cjs')]);(e/'unit-tests-final.txt').write_text(unit)
for folder in ['app','desktop','tests']:
 for p in (r/folder).rglob('*'):
  if p.suffix in ['.js','.cjs']:run('SYNTAX '+str(p.relative_to(r)),['node','--check',str(p)])
for name in ['native-4','final2-reopen','final2-fresh']:
 data=json.loads((e/name/'report.json').read_text());assert data['result']=='PASS'
 if name!='native-4':assert data['bundled'] is True
app=r/'releases/清池试用版-0.3.0-mac-arm64.app';run('FINAL_CODESIGN',['codesign','--verify','--deep','--strict',str(app)])
for folder in ['app','desktop']:
 for p in (r/folder).rglob('*'):
  if p.is_file():assert sha(p)==sha(app/'Contents/Resources/app'/p.relative_to(r))
feature={'changed_symbols':['Koi.applyDefinition','QingchiPond.setCatalog','QingchiPond.ranking','QingchiLifeCore.dispatch','QingchiLifeCore.fishingStep','QingchiApp.startCustom','FileStore.write','desktop native wallpaper IPC'],'runs':runs,'native_reports':{},'modified_sha256':sha(modified),'restored_sha256':sha(restore),'pristine_sha256':sha(pristine),'v2_baseline_manifest_unchanged':True,'feature_patch':str(tx/'FEATURE_SUPPLEMENT.patch'),'feature_rollback':'ROLLBACK.sh --feature-root COPY (requires .qingchi-rollback-copy marker)','source_manifest':{},'errors_and_corrections':[
 {'layer':'fresh-profile test expectation','exit':1,'stderr':(e/'final-fresh.stderr').read_text(),'correction':'assert missing-previous-backup guard first, then create second valid save before recovery'},
 {'layer':'shell test wrapper','exit':1,'error':'zsh read-only variable status','correction':'used result variable; tests passed'},
 {'layer':'sandbox GUI launch','exit':134,'stderr':(e/'native-1.stderr').read_text(),'correction':'approved native GUI launch with task-scoped test profile'},
 {'layer':'test harness serialization','exit':1,'stderr':(e/'native-2.stderr').read_text(),'correction':'void return after test-only confirm override'},
 {'layer':'automated drag input','exit':1,'stderr':(e/'native-3.stderr').read_text(),'correction':'mouseMove includes leftButtonDown and frame-spaced events; 17 stroke points persisted'},
 {'layer':'desktop positioning','exit':1,'stderr':(e/'bundle-reopen.stderr').read_text(),'correction':'enableLargerThanScreen; position while movable before freezing; final bundle observed exact display bounds'}],
 'limitations':['Mac Apple Silicon only','No real weather, payment, activation, cloud sync, autostart','System notification appearance not guaranteed; in-app minute reminder and restart verified','Only single physical display tested; real sleep and Spaces not tested','Desktop renderer and bounds verified; desktop icon click-through still not physically tested','Native test harness auto-accepts confirm dialogs only in test mode']}
for name in ['native-4','final2-reopen','final2-fresh']:
 feature['native_reports'][name]={'report':json.loads((e/name/'report.json').read_text()),'stdout':(e/(name+'.stdout')).read_text(),'stderr':(e/(name+'.stderr')).read_text(),'exit':0}
for folder in ['app','desktop']:
 for p in sorted((r/folder).rglob('*')):
  if p.is_file():feature['source_manifest'][str(p)]=sha(p)
v=json.loads(Path(roles['VERIFICATION']).read_text());v['features_v3']=feature;Path(roles['VERIFICATION']).write_text(json.dumps(v,ensure_ascii=False,indent=2))
assert modified.read_bytes()==raw
for role,file in roles.items():p=Path(file);data=p.read_bytes();assert data;print(role,p,'bytes',len(data),'sha256',sha(p))
print('FINAL_FEATURE_TRANSACTION_PASS')
