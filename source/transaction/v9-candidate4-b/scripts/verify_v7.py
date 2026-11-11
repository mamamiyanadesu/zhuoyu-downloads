from pathlib import Path
import json,hashlib,subprocess,shutil,difflib,zipfile
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';e=r/'evidence/v7';b=tx/'v6-garden-baseline';copy=tx/'garden-rollback-copy';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();roles=json.loads((tx/'roles.json').read_text());vf=Path(roles['VERIFICATION']);v=json.loads(vf.read_text());runs=[]
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True);rec={'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode};runs.append(rec);print(label,q.stdout.strip(),q.stderr.strip(),'exit',q.returncode);assert q.returncode==0;return q.stdout
base=json.loads((b/'manifest.json').read_text());assert all(sha(b/k)==sha(copy/k)==h for k,h in base.items());assert sha(Path(v['target']))==v['original_sha256']
mod=Path(roles['MODIFIED_FILE']);raw=mod.read_bytes();restore=tx/'rollback-copy-v7.js';restore.write_bytes(raw);run('ENGINE_ROLLBACK',['sh',roles['ROLLBACK'],restore]);assert sha(restore)==sha(tx/'BASELINE.js')
for label,p in [('BASELINE',tx/'BASELINE.js'),('MODIFIED',mod),('ROLLBACK',restore)]:run(label,['node',r/'tests/engine-probe.cjs',p])
mod.write_bytes(raw);p=Path(roles['DIFF_FILE']);p.write_text(''.join(difflib.unified_diff((tx/'BASELINE.js').read_text().splitlines(True),mod.read_text().splitlines(True),fromfile='BASELINE.js',tofile='pond.js')));check=tx/'patch-check-v7.js';check.write_bytes((tx/'BASELINE.js').read_bytes());run('ENGINE_PATCH_RECONSTRUCT',['patch',check,p]);assert sha(check)==sha(mod)
old=tx/'v7-patch-a';new=tx/'v7-patch-b';old.mkdir(exist_ok=True);new.mkdir(exist_ok=True)
for name in ['app','desktop','package.json','package-lock.json','THIRD_PARTY.txt']:
 for src,dst in [(b/name,old/name),(r/name,new/name)]:
  if src.is_dir():shutil.copytree(src,dst,dirs_exist_ok=True)
  else:shutil.copy2(src,dst)
q=subprocess.run(['git','diff','--no-index','--binary','--no-renames',str(old),str(new)],capture_output=True,text=True);assert q.returncode==1;patch=q.stdout
for prefix in ['a/','b/']:
 for folder in [old,new]:patch=patch.replace(prefix+str(folder).lstrip('/')+'/',prefix)
p=tx/'GARDEN_SUPPLEMENT.patch';p.write_text(patch);run('V7_SUPPLEMENT_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),p]);assert all(sha(f)==sha(copy/f.relative_to(new)) for f in new.rglob('*') if f.is_file())
app=r/'releases/蓬莱临水-0.7.0-mac-arm64.app';run('CODESIGN',['codesign','--verify','--deep','--strict',app])
for name in ['app','desktop']:
 for f in (r/name).rglob('*'):
  if f.is_file():assert sha(f)==sha(app/'Contents/Resources/app'/f.relative_to(r)),str(f)
m=json.loads((r/'releases/Qingchi-0.6.0-manifest.json').read_text());assert sha(Path(m['zip']))==m['zip_sha256'];assert all(sha(Path(m['app'])/k)==h for k,h in m['app_files'].items())
for rel in ['app/assets/clear-pond-v2.png','app/core.js','desktop/store.cjs','desktop/weather.cjs','app/penglai/src/scene/island.js','app/penglai/src/scene/architecture.js']:assert sha(r/rel)==sha(b/rel),rel
reports={k:json.loads((e/k/'report.json').read_text()) for k in ['final-native','final-reopen','gameplay','gameplay-reopen']};assert all(x['result']=='PASS' and x['bundled'] for x in reports.values())
labels=['unit','baseline','modified-final','rollback','final-native','final-reopen','gameplay','gameplay-reopen'];captured={}
for name in labels:
 assert (e/(name+'.exit')).read_text().strip()=='0',name
 captured[name]={'stdout':(e/(name+'.stdout')).read_text(),'stderr':(e/(name+'.stderr')).read_text(),'exit':0}
comparison={k:json.loads((e/name/'report.json').read_text()) for k,name in [('BASELINE','baseline'),('MODIFIED','modified-final'),('ROLLBACK','rollback')]}
for key in ['input','gardenAvailable','gardenBefore','gardenAfter','world']:assert comparison['BASELINE'][key]==comparison['ROLLBACK'][key],key
assert comparison['BASELINE']['gardenAvailable']==False and comparison['MODIFIED']['gardenAvailable']==True
assert comparison['MODIFIED']['gardenAfter']==4 and comparison['MODIFIED']['world']['shoreAsset']=='shore-hd.glb'
for report in comparison.values():assert report['errors']==[]
v['garden_v7']={'requested':['pond scenery/animals/customizable parts','higher-detail 3D fishing shore','short UI copy and stable action positions'],'changed_symbols':['QingchiLifeCore.garden/validateGarden/dispatch garden-*','QingchiGarden.sync/containsPoint/pose','isPondInput garden occlusion guard','fishingWorld.setQuality/shore-hd/rockMaterial','native.publish garden payload','main activate shows existing window','index/expedition interface layout and copy'],'baseline_manifest':str(b/'manifest.json'),'baseline_108_files_unchanged':True,'rollback_108_files_equal':True,'original_target_hash_unchanged':True,'old_v6_release_unchanged':True,'original_pond_background_unchanged':True,'binary_patch_reconstructed_exact':True,'supplement':str(p),'supplement_sha256':sha(p),'runs':runs,'same_input_comparison':comparison,'reports':reports,'captured_runs':captured,'rollback':json.loads((e/'rollback.json').read_text()),'assets':{'catalog':json.loads((r/'app/assets/garden/manifest.json').read_text()),'shore':json.loads((r/'art/v7/shore-report.json').read_text())},'failures':[{'source':str(e/'art.stderr'),'status':'sandbox process crash','correction':'Authorized task-local Blender builder completed outside sandbox.'},{'source':str(e/'initial-errors.json'),'status':'syntax error','correction':'Closed validateGarden function, syntax check and 68 unit tests pass.'},{'source':str(r/'scripts/interface_v7.py'),'status':'initial Python UTF8 parser error on long source line, exit 1','correction':'Added explicit UTF8 header and split mapping entries; compile and execution pass.'},{'source':str(e/'unit-first.stdout'),'exit':1,'correction':'Migration test now verifies unchanged old fields plus the intentional new garden defaults; final 68 pass.'},{'source':str(e/'native-1/failure.json'),'exit':1,'correction':'Pixel hit probe had rounded an edge point outside the opaque region; test now uses an interior region with a 5px margin.'},{'source':str(e/'native-2/failure.json'),'exit':1,'correction':'Native popup-select key automation timed out. Replaced new quality select with clearer visible HD/Eco segmented buttons; native clicks pass.'}],'limitations':['2D pond with original Blender-rendered transparent props; not a fully orbitable 3D pond','animal movement is lightweight decorative animation, not full behavior simulation','six supplied parts, not arbitrary imported models or asset uploads','nearshore rebuilt/refined; existing far island retained; stylized rather than photorealistic','foreground performance sample is short, not sustained 60FPS','Mac arm64 only; no notarization or Intel/Windows/multidisplay validation'],'visual_review':{'home':str(e/'final-native/01-home.png'),'arranger':str(e/'final-native/02-arrangement.png'),'editor':str(e/'final-native/04-fish-editor.png'),'hd_shore':str(e/'final-native/05-hd-fishing.png'),'compact':str(e/'final-native/07-compact.png'),'observed':'Stable top navigation; left-side life menus; native manipulation controls; fine stone surface and pine needles; no hands; clear action button at bottom. PNGs reopened and visually inspected.'}}
v['modified_sha256']=sha(mod);vf.write_text(json.dumps(v,ensure_ascii=False,indent=2))
for role,p in roles.items():f=Path(p);data=f.read_bytes();print(role,str(f),len(data),sha(f))
print('V7_TRANSACTION_PASS',len(base),'baseline files; four roles reopened; full patch exact')
