from pathlib import Path
import json,hashlib,tarfile,shutil,subprocess
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';base=tx/'winter-beach1-baseline';e=r/'evidence/v9';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();manifest=json.loads((base/'manifest.json').read_text());assert all(sha(base/n)==h for n,h in manifest.items());added='app/assets/scenes/beach/winter/bed-v1.png'
rb=tx/'ROLLBACK.sh';prior=tx/'ROLLBACK-before-winter-beach.sh';assert not prior.exists();shutil.copy2(rb,prior)
with tarfile.open(tx/'winter-beach1-baseline.tar.gz','w:gz') as tar:
 for n in manifest:tar.add(base/n,arcname=n)
branch='''if [ "$#" -eq 2 ] && [ "$1" = "--winter-beach-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app tests app/assets app/assets/scenes app/assets/scenes/beach app/assets/scenes/beach/winter app/assets/scenes/beach/winter/bed-v1.png app/scene-manifest.js app/scene-art.js app/clear-sample-core.js tests/beach-bed.test.cjs tests/scene-seasons.test.cjs package.json package-lock.json THIRD_PARTY.txt 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/winter-beach1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/app/assets/scenes/beach/winter/bed-v1.png"
 printf 'Restored pre-independent-winter-beach source: %s\\n' "$TARGET"
 exit 0
fi
'''
s=rb.read_text();i=s.index('if [ "$#"');rb.write_text(s[:i]+branch+s[i:]);rb.chmod(0o755)
copy=tx/'winter-beach1-rollback-copy';copy.mkdir();(copy/'.qingchi-rollback-copy').touch();modified={n:sha(r/n) for n in [*manifest,added]}
for n in modified:
 (copy/n).parent.mkdir(exist_ok=True,parents=True);shutil.copy2(r/n,copy/n)
runs=[]
def run(label,args,cwd=None):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True,cwd=cwd);entry={'label':label,'command':q.args,'cwd':str(cwd or r),'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode};runs.append(entry);print(json.dumps(entry,ensure_ascii=False));assert q.returncode==0;return q.stdout
run('SCOPED_ROLLBACK',['sh',rb,'--winter-beach-root',copy]);assert all(sha(copy/n)==h for n,h in manifest.items());assert not (copy/added).exists()
for label,p in [('BASELINE',base),('MODIFIED',r),('ROLLBACK',copy)]:
 run(label,['node',r/'tests/winter-beach-probe.cjs',p/'app/scene-manifest.js'])
 run(label+'_GARDEN',['node',r/'tests/beach-art-probe.cjs',p/'app/clear-sample-core.js'])
a=tx/'winter-beach1-patch-a';b=tx/'winter-beach1-patch-b';a.mkdir();b.mkdir()
for n in manifest:
 (a/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(base/n,a/n)
for n in modified:
 (b/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(r/n,b/n)
q=subprocess.run(['git','diff','--no-index','--binary','--no-renames',str(a),str(b)],capture_output=True,text=True);assert q.returncode==1;s=q.stdout
for prefix in ['a/','b/']:
 for d in [a,b]:s=s.replace(prefix+str(d).lstrip('/')+'/',prefix)
patch=tx/'WINTER_BEACH_SUPPLEMENT.patch';patch.write_text(s);run('SCOPED_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert all(sha(copy/n)==h for n,h in modified.items());assert all(sha(r/n)==h for n,h in modified.items())
record={'scope':'winter beach independent original sand bed, existing snow foreground retained and resource/mask routing; clear/lotus/other seasons unchanged','changed_symbols':['SceneManifest.assetsFor','rocksFor','rockAt optional map','mapPlan','SceneManifest.beachBeds winter entry'],'baseline':manifest,'modified':modified,'added_asset_removed_on_rollback':True,'restored_hashes_equal':True,'patch_reconstructs':True,'runs':runs,'patch':str(patch),'native_baseline':str(e/'winter-beach1-baseline-native/report.json'),'native_modified':str(e/'candidate10-winter-beach-native/report.json'),'unit':str(e/'winter-beach1-unit.stdout'),'unit_count':130,'initial_failures':[]}
(e/'winter-beach1-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2));v=tx/'VERIFICATION.txt';data=json.loads(v.read_text());data.setdefault('reference_upgrade_scoped_transactions',{})['winter-beach1']=record;v.write_text(json.dumps(data,ensure_ascii=False,indent=2));print('WINTER_BEACH_TRANSACTION_PASS')
