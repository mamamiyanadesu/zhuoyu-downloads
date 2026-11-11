from pathlib import Path
import json,hashlib,subprocess,shutil,difflib
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';e=r/'evidence/v6';b=tx/'v5-feedback-baseline';copy=tx/'feedback-rollback-copy';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();roles=json.loads((tx/'roles.json').read_text());v=json.loads(Path(roles['VERIFICATION']).read_text());runs=[]
def run(label,args):
 q=subprocess.run(args,capture_output=True,text=True);record={'label':label,'command':list(map(str,args)),'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode};runs.append(record);print(label,q.stdout.strip(),q.stderr.strip(),'exit',q.returncode);assert q.returncode==0;return q.stdout
assert sha(Path(v['target']))==v['original_sha256']
baseline=json.loads((b/'manifest.json').read_text());assert all(sha(b/k)==h and sha(copy/k)==h for k,h in baseline.items())
mod=Path(roles['MODIFIED_FILE']);raw=mod.read_bytes();restore=tx/'rollback-copy.js';restore.write_bytes(raw);run('ENGINE_ROLLBACK',['sh',roles['ROLLBACK'],str(restore)]);assert sha(restore)==sha(tx/'BASELINE.js')
for label,p in [('BASELINE',tx/'BASELINE.js'),('MODIFIED',mod),('ROLLBACK',restore)]:run(label,['node',str(r/'tests/engine-probe.cjs'),str(p)])
mod.write_bytes(raw);p=Path(roles['DIFF_FILE']);p.write_text(''.join(difflib.unified_diff((tx/'BASELINE.js').read_text().splitlines(True),mod.read_text().splitlines(True),fromfile='BASELINE.js',tofile='pond.js')));check=tx/'patch-check.js';check.write_bytes((tx/'BASELINE.js').read_bytes());run('ENGINE_PATCH_RECONSTRUCT',['patch',str(check),str(p)]);assert sha(check)==sha(mod)
# Reconstruct all runnable source and binary models, not just the original engine role.
old=tx/'v6-patch-a';new=tx/'v6-patch-b';old.mkdir(exist_ok=True);new.mkdir(exist_ok=True)
for name in ['app','desktop','package.json','package-lock.json','THIRD_PARTY.txt']:
 for src,dst in [(b/name,old/name),(r/name,new/name)]:
  if src.is_dir():shutil.copytree(src,dst,dirs_exist_ok=True)
  else:shutil.copy2(src,dst)
q=subprocess.run(['git','diff','--no-index','--binary','--no-renames',str(old),str(new)],capture_output=True,text=True);assert q.returncode==1;patch=q.stdout
for prefix in ['a/','b/']:
 for folder in [old,new]:patch=patch.replace(prefix+str(folder).lstrip('/')+'/',prefix)
p=tx/'FEEDBACK_SUPPLEMENT.patch';p.write_text(patch);run('V6_SUPPLEMENT_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),str(p)])
for f in new.rglob('*'):
 if f.is_file():assert sha(f)==sha(copy/f.relative_to(new)),str(f)
app=r/'releases/蓬莱临水-0.6.0-mac-arm64.app';run('CODESIGN',['codesign','--verify','--deep','--strict',str(app)])
for folder in ['app','desktop']:
 for f in (r/folder).rglob('*'):
  if f.is_file():assert sha(f)==sha(app/'Contents/Resources/app'/f.relative_to(r)),str(f)
# Existing v5 installed application and ZIP are retained byte-for-byte.
m=json.loads((r/'releases/Qingchi-0.5.0-manifest.json').read_text());assert sha(Path(m['zip']))==m['zip_sha256'];assert all(sha(Path(m['app'])/k)==h for k,h in m['app_files'].items())
for rel in ['app/assets/clear-pond-v2.png','app/core.js','desktop/store.cjs','desktop/weather.cjs']:
 assert sha(r/rel)==sha(b/rel)
for label in ['unit-final','package','final-native','final-reopen','water-baseline','water-packaged','water-rollback','blender2']:assert (e/(label+'.exit')).read_text().strip()=='0',label
reports={name:json.loads((e/name/'report.json').read_text()) for name in ['final-native','final-reopen']};assert all(x['result']=='PASS' for x in reports.values());assert reports['final-native']['bundled']
water={k:json.loads((e/name/'result.json').read_text()) for k,name in [('BASELINE','water-baseline'),('MODIFIED','water-packaged'),('ROLLBACK','water-rollback')]}
for key in ['input','leafFoodDelta','leafFishAlpha','dynamicLight','lightChanged']:assert water['BASELINE'][key]==water['ROLLBACK'][key]
assert water['BASELINE']['leafFishAlpha']==255 and water['MODIFIED']['leafFishAlpha']==0;assert water['MODIFIED']['opticsPixels']['changedChannels']>0
fishing={k:json.loads((e/('feedback-'+name+'.json')).read_text()) for k,name in [('BASELINE','baseline'),('MODIFIED','modified'),('ROLLBACK','rollback')]};assert fishing['BASELINE']['stdout']==fishing['ROLLBACK']['stdout'];assert json.loads(fishing['MODIFIED']['stdout'])['phase']=='caught'
captured={name:{'stdout':(e/(name+'.stdout')).read_text(),'stderr':(e/(name+'.stderr')).read_text(),'exit':int((e/(name+'.exit')).read_text())} for name in ['unit-final','package','final-native','final-reopen','water-baseline','water-packaged','water-rollback','blender2']}
for name,record in captured.items():
 record['cwd']=str(r)
 if name.startswith('water-'):
  root={'water-baseline':b,'water-packaged':app/'Contents/Resources/app','water-rollback':copy}[name];record['command']=[str(r/'node_modules/electron/dist/Electron.app/Contents/MacOS/Electron'),str(r/'tests/water-probe.cjs'),str(root),str(e/name)]
 elif name in ['final-native','final-reopen']:record['command']=[str(app/'Contents/MacOS/Qingchi'),'--expedition','--verify-v6']+(['--v6-reopen'] if name=='final-reopen' else []);record['env']={'QINGCHI_PROFILE':str(e/'final-profile'),'QINGCHI_VERIFY_OUT':str(e/name)}
 elif name=='unit-final':record['command']=['npm','test']
 elif name=='package':record['command']=['python3','scripts/package_mac_v6.py']
 else:record['command']=['/Applications/Blender.app/Contents/MacOS/Blender','-b','--python','art/v6/build_ornamental.py']
v['feedback_v6']={'requested_changes':['rod only, no hand','horizontal timed strike','tap or hold space to reel with visible feedback','real ornamental fish','slow water, wakes, feeding ripples','correct lower-left leaf occlusion','subtle animated light and refraction'],'changed_symbols':['fishingSession/fishingStep: bite/tug','species/ornamental/waters','fishingWorld.setReel/visibleHandMeshes','Koi.update/Ripple/emitWave/surfaceAt','LEAF_POLYGONS/leafAt/occludeLeaves','QingchiWaterSurface.render','QingchiEnvironment light/render'],'baseline_manifest':str(b/'manifest.json'),'baseline_94_files_unchanged':True,'rollback_94_files_equal':True,'old_v5_release_unchanged':True,'original_background_unchanged':True,'supplement':str(p),'supplement_sha256':sha(p),'binary_patch_reconstructed_exact':True,'runs':runs,'same_input_fishing':fishing,'same_input_water':water,'reports':reports,'captured_runs':captured,'rollback_run':json.loads((e/'rollback.json').read_text()),'species_sources':str(e/'species-sources.txt'),'failures':[{'source':str(e/'unit.stdout'),'exit':1,'reason':'New cards were not rendered yet and v5 core-byte-equality assertion no longer matched authorized gameplay changes.','correction':'Rendered new cards; retained byte checks for unchanged persistence/core modules; added explicit v5 save compatibility test. Final 63/63.'},{'source':str(e/'native-1/failure.json'),'exit':1,'reason':'Collection click occurred during scene overlay; no dialog opened.','correction':'Native verifier waits until the target button is actually hit-testable.'},{'source':str(e/'native-2/failure.json'),'exit':1,'reason':'Long catalog scroll hid close button.','correction':'Fixed collection layout with independently scrolling card grid and persistent header/tabs; final packaged pass.'}],'limitations':['Stylized game representations, not exact biological models or local wild population','lightweight damped wave/optical effect, not full fluid simulation','test success does not prove enjoyable gameplay','Mac arm64 only; no notarization, Intel or Windows validation'],'visual_review':['native rod-only, strike meter and reel distance verified from screenshots','water-feed screenshot shows concentric rings at fish mouth','new GLB card alpha bounds do not clip fins; six render files checked']}
Path(roles['VERIFICATION']).write_text(json.dumps(v,ensure_ascii=False,indent=2))
for role,file in roles.items():p=Path(file);assert p.read_bytes();print(role,p,'bytes',p.stat().st_size,'sha256',sha(p))
print('V6_TRANSACTION_PASS')
