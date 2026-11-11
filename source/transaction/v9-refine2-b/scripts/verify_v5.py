from pathlib import Path
import json, subprocess, hashlib, shutil, difflib
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';e=r/'evidence/v5';b=tx/'v4-firstperson-baseline';copy=tx/'firstperson-rollback-copy';roles=json.loads((tx/'roles.json').read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();runs=[]
def run(label,args,cwd=r):
 q=subprocess.run(args,cwd=cwd,capture_output=True,text=True);runs.append(dict(label=label,command=list(map(str,args)),cwd=str(cwd),stdout=q.stdout,stderr=q.stderr,exit=q.returncode));print(label,q.stdout.strip(),q.stderr.strip(),'exit',q.returncode);assert q.returncode==0;return q.stdout
v=json.loads(Path(roles['VERIFICATION']).read_text());assert sha(Path(v['target']))==v['original_sha256']
manifest=json.loads((b/'manifest.json').read_text());assert all(sha(b/k)==h for k,h in manifest.items());assert all(sha(copy/k)==h for k,h in manifest.items())
unchanged=['app/life-core.js','app/core.js','desktop/store.cjs','desktop/weather.cjs','app/penglai/src/scene/island.js','app/penglai/src/scene/architecture.js','app/penglai/src/scene/flora.js']
for f in unchanged:assert sha(r/f)==sha(b/f),f
mod=Path(roles['MODIFIED_FILE']);raw=mod.read_bytes();pristine=tx/'BASELINE.js';restore=tx/'rollback-copy.js';restore.write_bytes(raw);run('ENGINE_ROLLBACK',['sh',roles['ROLLBACK'],str(restore)]);assert sha(restore)==sha(pristine)
for label,file in [('BASELINE',pristine),('MODIFIED',mod),('ROLLBACK',restore)]:run(label,['node',str(r/'tests/engine-probe.cjs'),str(file)])
mod.write_bytes(raw);Path(roles['DIFF_FILE']).write_text(''.join(difflib.unified_diff(pristine.read_text().splitlines(True),mod.read_text().splitlines(True),fromfile='BASELINE.js',tofile='pond.js')));check=tx/'patch-check.js';check.write_bytes(pristine.read_bytes());run('ENGINE_PATCH',['patch',str(check),roles['DIFF_FILE']]);assert sha(check)==sha(mod)
for label,root in [('V4_BASELINE',b),('V5_MODIFIED',r),('V4_ROLLBACK',copy)]:run(label,['node',str(r/'tests/expedition-probe.cjs'),str(root)])
run('UNIT_TESTS',['npm','test']);app=r/'releases/蓬莱临水-0.5.0-mac-arm64.app';run('CODESIGN',['codesign','--verify','--deep','--strict',str(app)])
for folder in ['app','desktop']:
 for f in (r/folder).rglob('*'):
  if f.is_file():assert sha(f)==sha(app/'Contents/Resources/app'/f.relative_to(r)),str(f)
# Complete binary patch: v4 runnable snapshot -> v5 runnable snapshot.
old=tx/'v5-patch-a';new=tx/'v5-patch-b';old.mkdir(exist_ok=True);new.mkdir(exist_ok=True)
for name in ['app','desktop','package.json','package-lock.json','THIRD_PARTY.txt']:
 for src,dst in [(b/name,old/name),(r/name,new/name)]:
  if src.is_dir():shutil.copytree(src,dst,dirs_exist_ok=True)
  else:shutil.copy2(src,dst)
q=subprocess.run(['git','diff','--no-index','--binary','--no-renames',str(old),str(new)],capture_output=True,text=True);assert q.returncode==1
patch=q.stdout
for prefix in ['a/','b/']:
 for d in [old,new]:patch=patch.replace(prefix+str(d).lstrip('/')+'/',prefix)
p=tx/'FIRSTPERSON_SUPPLEMENT.patch';p.write_text(patch)
run('V5_PATCH_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),str(p)])
for f in new.rglob('*'):
 if f.is_file():assert sha(f)==sha(copy/f.relative_to(new)),str(f)
visual={}
for name in ['baseline','modified','rollback']:
 result=json.loads((e/f'behavior-{name}/result.json').read_text());visual[name]={'command':[str(r/'node_modules/electron/dist/Electron.app/Contents/MacOS/Electron'),str(r/'tests/visual-state-probe.cjs'),str({'baseline':b,'modified':r,'rollback':copy}[name]),str(e/f'behavior-{name}')],'stdout':(e/f'behavior-{name}.stdout').read_text(),'stderr':(e/f'behavior-{name}.stderr').read_text(),'exit':0,'result':result}
assert visual['baseline']['result']==visual['rollback']['result'];assert visual['modified']['result']['firstPerson'];assert not visual['baseline']['result']['firstPerson']
native=json.loads((e/'final-native/report.json').read_text());reopen=json.loads((e/'final-reopen/report.json').read_text());assert native['result']=='PASS' and native['bundled'];assert reopen['result']=='PASS'
assert len([x for x in reopen['checks'] if x['test']=='process-save-reopen' and x['data']['fish']==1 and x['data']['catches']==1])==1
v['firstperson_v5']={'changed_symbols':['fishingWorld.focus/overview/pick','fishingWorld PerspectiveCamera eye and inspect.firstPerson','fishingWorld.prepareFish','main render active camera','Qingchi-Trial-v5 save migration'],'unchanged_hashes':{k:sha(r/k) for k in unchanged},'baseline_manifest':str(b/'manifest.json'),'baseline_and_rollback_hashes_match':True,'binary_patch_reconstructed_exact':True,'supplement_patch':str(p),'supplement_sha256':sha(p),'runs':runs,'same_input_visual':visual,'native':native,'reopen':reopen,'native_command':f'QINGCHI_PROFILE={e}/final-profile QINGCHI_VERIFY_OUT={e}/final-native {app}/Contents/MacOS/Qingchi --expedition --verify-v5','native_stdout':(e/'final-native.stdout').read_text(),'native_stderr':(e/'final-native.stderr').read_text(),'native_exit':0,'reopen_stdout':(e/'final-reopen.stdout').read_text(),'reopen_stderr':(e/'final-reopen.stderr').read_text(),'reopen_exit':0,'rollback_stdout':(e/'rollback.stdout').read_text(),'rollback_stderr':(e/'rollback.stderr').read_text(),'rollback_exit':0,'visual_review':{'image':str(e/'final-native/09-final.png'),'observed':'First-person bamboo rod and hand; green lake reflections; rock shores, pine trees, lotus; retained original island and pagoda in distance. Stylized rather than photorealistic. HUD visible.'},'limitations':['fixed shore positions, not free walking','4 mesh templates for 12 fish entries; not 12 biological reconstructions','3 second foreground performance sample ~26 FPS; not sustained 60 FPS','Mac arm64 only; no Windows/Intel/notarization validation'],'retained_error_evidence':[str(e/'native-1/failure.json'),str(e/'blender-build.stderr')],'error_corrections':['Native first pass dex image readiness assertion failed (0 vs 12); final packaged native pass verified all 12 loaded images.','Initial restricted Blender launch failed; approved launch and asset rebuild completed.']}
Path(roles['VERIFICATION']).write_text(json.dumps(v,ensure_ascii=False,indent=2))
for role,file in roles.items():p=Path(file);assert p.read_bytes();print(role,p,'bytes',p.stat().st_size,'SHA256',sha(p))
print('V5_TRANSACTION_PASS')
