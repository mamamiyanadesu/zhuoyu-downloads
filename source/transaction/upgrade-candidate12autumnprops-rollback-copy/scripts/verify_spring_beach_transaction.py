from pathlib import Path
import json,hashlib,tarfile,shutil,subprocess
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';base=tx/'spring-beach1-baseline';e=r/'evidence/v9';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();manifest=json.loads((base/'manifest.json').read_text());assert all(sha(base/n)==h for n,h in manifest.items());added='app/assets/scenes/beach/spring/bed-v1.png'
rb=tx/'ROLLBACK.sh';prior=tx/'ROLLBACK-before-spring-beach.sh';assert not prior.exists();shutil.copy2(rb,prior)
with tarfile.open(tx/'spring-beach1-baseline.tar.gz','w:gz') as tar:
 for n in manifest:tar.add(base/n,arcname=n)
branch='''if [ "$#" -eq 2 ] && [ "$1" = "--spring-beach-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app tests app/assets app/assets/scenes app/assets/scenes/beach app/assets/scenes/beach/spring app/assets/scenes/beach/spring/bed-v1.png app/scene-manifest.js app/scene-art.js app/clear-sample-core.js tests/beach-bed.test.cjs tests/scene-seasons.test.cjs package.json package-lock.json THIRD_PARTY.txt 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/spring-beach1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/app/assets/scenes/beach/spring/bed-v1.png"
 printf 'Restored pre-independent-spring-beach source: %s\\n' "$TARGET"
 exit 0
fi
'''
s=rb.read_text();i=s.index('if [ "$#"');rb.write_text(s[:i]+branch+s[i:]);rb.chmod(0o755)
copy=tx/'spring-beach1-rollback-copy';copy.mkdir();(copy/'.qingchi-rollback-copy').touch();modified={n:sha(r/n) for n in [*manifest,added]}
for n in modified:
 (copy/n).parent.mkdir(exist_ok=True,parents=True);shutil.copy2(r/n,copy/n)
runs=[]
def run(label,args,cwd=None):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True,cwd=cwd);entry={'label':label,'command':q.args,'cwd':str(cwd or r),'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode};runs.append(entry);print(json.dumps(entry,ensure_ascii=False));assert q.returncode==0;return q.stdout
run('SCOPED_ROLLBACK',['sh',rb,'--spring-beach-root',copy]);assert all(sha(copy/n)==h for n,h in manifest.items());assert not (copy/added).exists()
for label,p in [('BASELINE',base),('MODIFIED',r),('ROLLBACK',copy)]:
 run(label,['node',r/'tests/spring-beach-probe.cjs',p/'app/scene-manifest.js'])
 run(label+'_GARDEN',['node',r/'tests/beach-art-probe.cjs',p/'app/clear-sample-core.js'])
a=tx/'spring-beach1-patch-a';b=tx/'spring-beach1-patch-b';a.mkdir();b.mkdir()
for n in manifest:
 (a/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(base/n,a/n)
for n in modified:
 (b/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(r/n,b/n)
q=subprocess.run(['git','diff','--no-index','--binary','--no-renames',str(a),str(b)],capture_output=True,text=True);assert q.returncode==1;s=q.stdout
for prefix in ['a/','b/']:
 for d in [a,b]:s=s.replace(prefix+str(d).lstrip('/')+'/',prefix)
patch=tx/'SPRING_BEACH_SUPPLEMENT.patch';patch.write_text(s);run('SCOPED_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert all(sha(copy/n)==h for n,h in modified.items());assert all(sha(r/n)==h for n,h in modified.items())
record={'scope':'spring beach independent original sand bed, scoped natural rock and resource/mask routing; clear/lotus/other seasons unchanged','changed_symbols':['SceneManifest.assetsFor','rocksFor','rockAt optional map','mapPlan','poses summer-beach branch','QingchiClearSampleCore.asset spring beach rock branch'],'baseline':manifest,'modified':modified,'added_asset_removed_on_rollback':True,'restored_hashes_equal':True,'patch_reconstructs':True,'runs':runs,'patch':str(patch),'native_baseline':str(e/'spring-beach1-baseline-native/report.json'),'native_modified':str(e/'candidate8-spring-beach-native/report.json'),'unit':str(e/'spring-beach2-unit.stdout'),'unit_count':128,'initial_failures':['source native sandbox launch: no local debug endpoint, exit1; retried with GUI permission and fresh identity, PASS exit0']}
(e/'spring-beach1-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2));v=tx/'VERIFICATION.txt';data=json.loads(v.read_text());data.setdefault('reference_upgrade_scoped_transactions',{})['spring-beach1']=record;v.write_text(json.dumps(data,ensure_ascii=False,indent=2));print('SPRING_BEACH_TRANSACTION_PASS')
