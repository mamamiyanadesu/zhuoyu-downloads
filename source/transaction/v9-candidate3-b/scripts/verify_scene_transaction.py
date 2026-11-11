from pathlib import Path
import json,hashlib,subprocess,shutil,difflib,os
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';e=r/'evidence/v9';base=tx/'v8-upgrade-baseline';stage=os.environ.get('QINGCHI_STAGE','summer');assert stage.replace('-','').isalnum();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();roles=json.loads((tx/'roles.json').read_text());runs=[]
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True);runs.append(dict(label=label,command=q.args,stdout=q.stdout,stderr=q.stderr,exit=q.returncode));print(label,q.returncode,q.stdout.strip()[-600:]);assert q.returncode==0,q.stderr;return q.stdout
m=json.loads((base/'manifest.json').read_text());assert all(sha(base/p)==h for p,h in m.items())
copy=tx/f'upgrade-{stage}-rollback-copy';assert not copy.exists();copy.mkdir();(copy/'.qingchi-rollback-copy').touch();names=['app','desktop','art','tests','scripts','package.json','package-lock.json','THIRD_PARTY.txt','蓬莱临水0.9候选说明.txt']
for n in names:
 src=r/n
 if src.is_dir():shutil.copytree(src,copy/n)
 else:shutil.copy2(src,copy/n)
run('UPGRADE_RESTORE',['sh',roles['ROLLBACK'],'--upgrade-root',copy]);assert all(sha(copy/p)==h for p,h in m.items())
for label,file in [('BASELINE',base/'app/vendor/pond.js'),('MODIFIED',Path(roles['MODIFIED_FILE'])),('ROLLBACK',copy/'app/vendor/pond.js')]:run(label,['node',r/'tests/scene-engine-probe.cjs',file])
for label,file in [('QUIET_BASELINE',base/'app/core.js'),('QUIET_MODIFIED',r/'app/core.js'),('QUIET_ROLLBACK',copy/'app/core.js')]:run(label,['node',r/'tests/quiet-engine-probe.cjs',file])
raw=Path(roles['MODIFIED_FILE']).read_bytes();target=tx/'scene-engine-rollback.js';target.write_bytes(raw);run('ORIGINAL_ENGINE_RESTORE',['sh',roles['ROLLBACK'],target]);assert sha(target)==sha(tx/'BASELINE.js')
for label,file in [('ORIGINAL_BASELINE',tx/'BASELINE.js'),('ORIGINAL_MODIFIED',Path(roles['MODIFIED_FILE'])),('ORIGINAL_ROLLBACK',target)]:run(label,['node',r/'tests/engine-probe.cjs',file])
Path(roles['DIFF_FILE']).write_text(''.join(difflib.unified_diff((tx/'BASELINE.js').read_text().splitlines(True),Path(roles['MODIFIED_FILE']).read_text().splitlines(True),fromfile='BASELINE.js',tofile='pond.js')));target.write_bytes((tx/'BASELINE.js').read_bytes());run('ENGINE_PATCH',['patch',target,roles['DIFF_FILE']]);assert sha(target)==sha(Path(roles['MODIFIED_FILE']))
a=tx/f'v9-{stage}-a';b=tx/f'v9-{stage}-b';a.mkdir();b.mkdir()
for n in names:
 for src,dst in [(base/n,a/n),(r/n,b/n)]:
  if not src.exists():continue
  if src.is_dir():shutil.copytree(src,dst)
  else:shutil.copy2(src,dst)
q=subprocess.run(['git','diff','--no-index','--binary','--no-renames',str(a),str(b)],capture_output=True,text=True);assert q.returncode==1;qtext=q.stdout
for prefix in ['a/','b/']:
 for d in [a,b]:qtext=qtext.replace(prefix+str(d).lstrip('/')+'/',prefix)
patch=tx/'REFERENCE_UPGRADE_SUPPLEMENT.patch';patch.write_text(qtext);run('SUPPLEMENT_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert all(sha(f)==sha(copy/f.relative_to(b)) for f in b.rglob('*') if f.is_file())
assert sha(r/'app/assets/clear-pond-v2.png')==sha(base/'app/assets/clear-pond-v2.png');native=json.loads((e/f'{stage}-native/report.json').read_text());assert native['result']=='PASS';assert (e/f'{stage}-unit.exit').read_text().strip()=='0'
record={'scope':f'v9 {stage} selected-runtime checks and source transaction; full upgrade remains incomplete','changed_symbols':['Koi.draw','Koi.update segment spacing','leafAt','occludeLeaves','render','QingchiScene','QingchiSceneCore.loader','QingchiWaterSurface.DISPLAY','QingchiScene.setMap','QingchiScene.layout','QingchiHabitat.blocked','QingchiHabitat.renderVisitors','QingchiHabitatCore.create.react','QingchiAnimalArt.pose/draw','settings.quietView','renderQuiet/immersive','copyV8Save','alarm-tick recovered','native startup/resume alarm recovery'],'snapshot_files':len(m),'baseline_unchanged':True,'rollback_hashes_equal':True,'binary_patch_reconstructs':True,'original_background_unchanged':True,'runs':runs,'native':native,'unit_stdout':(e/f'{stage}-unit.stdout').read_text(),'unit_stderr':(e/f'{stage}-unit.stderr').read_text(),'unit_exit':0,'supplement':str(patch),'supplement_sha256':sha(patch),'not_completed':native.get('not_verified',['full upgrade audit incomplete'])}
vf=Path(roles['VERIFICATION']);v=json.loads(vf.read_text());v.setdefault('reference_upgrade_v9_iterations',{})[stage]=record;v['modified_sha256']=sha(Path(roles['MODIFIED_FILE']));vf.write_text(json.dumps(v,ensure_ascii=False,indent=2));(e/f'{stage}-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2))
for role,p in roles.items():f=Path(p);raw=f.read_bytes();print(role,str(f),len(raw),sha(f))
print(stage.upper()+'_TRANSACTION_PASS')
