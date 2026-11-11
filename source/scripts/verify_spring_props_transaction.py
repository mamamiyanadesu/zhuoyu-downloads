from pathlib import Path
import json,hashlib,tarfile,shutil,subprocess
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';base=tx/'spring-props1-baseline';e=r/'evidence/v9';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();manifest=json.loads((base/'manifest.json').read_text());assert all(sha(base/n)==h for n,h in manifest.items())
added=['app/assets/garden-seasonal/spring/lotus-v1.png','app/assets/garden-seasonal/spring/reeds-v1.png','tests/spring-garden.test.cjs']+[str(p.relative_to(r)) for p in (r/'art/spring-garden-01').iterdir() if p.is_file()]
rb=tx/'ROLLBACK.sh';prior=tx/'ROLLBACK-before-spring-props.sh';assert not prior.exists();shutil.copy2(rb,prior)
with tarfile.open(tx/'spring-props1-baseline.tar.gz','w:gz') as t:
 for n in manifest:t.add(base/n,arcname=n)
guards=set([*manifest,*added])
for n in list(guards):guards.update(str(p) for p in Path(n).parents if str(p)!='.')
branch='''if [ "$#" -eq 2 ] && [ "$1" = "--spring-props-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in '''+' '.join(sorted(guards))+'''; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/spring-props1-baseline.tar.gz" -C "$TARGET"
'''+''.join(f' rm -f "$TARGET/{n}"\n' for n in added)+''' printf 'Restored pre-spring-manual-props source: %s\\n' "$TARGET"
 exit 0
fi
'''
s=rb.read_text();i=s.index('if [ "$#"');rb.write_text(s[:i]+branch+s[i:]);rb.chmod(0o755)
copy=tx/'spring-props1-rollback-copy';copy.mkdir();(copy/'.qingchi-rollback-copy').touch();modified={n:sha(r/n) for n in [*manifest,*added]}
for n in modified:(copy/n).parent.mkdir(exist_ok=True,parents=True);shutil.copy2(r/n,copy/n)
runs=[]
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True,cwd=r);d={'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode};runs.append(d);print(label,q.returncode,q.stdout[-180:]);assert q.returncode==0,q.stderr;return q.stdout
run('SCOPED_ROLLBACK',['sh',rb,'--spring-props-root',copy]);assert all(sha(copy/n)==h for n,h in manifest.items());assert all(not (copy/n).exists() for n in added)
observed={}
for label,p in [('BASELINE',base),('MODIFIED',r),('ROLLBACK',copy)]:observed[label]=json.loads(run(label,['node',r/'tests/beach-art-probe.cjs',p/'app/clear-sample-core.js']))
assert observed['BASELINE']==observed['ROLLBACK'];assert observed['BASELINE']!=observed['MODIFIED']
a=tx/'spring-props1-patch-a';b=tx/'spring-props1-patch-b';a.mkdir();b.mkdir()
for n in manifest:(a/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(base/n,a/n)
for n in modified:(b/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(r/n,b/n)
q=subprocess.run(['git','diff','--no-index','--binary','--no-renames',str(a),str(b)],capture_output=True,text=True);assert q.returncode==1;s=q.stdout
for prefix in ['a/','b/']:
 for d in [a,b]:s=s.replace(prefix+str(d).lstrip('/')+'/',prefix)
patch=tx/'SPRING_PROPS_SUPPLEMENT.patch';patch.write_text(s);run('SCOPED_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert all(sha(copy/n)==h for n,h in modified.items());assert all(sha(r/n)==h for n,h in modified.items())
record={'scope':'spring manual lotus/reeds original sprites and existing natural rocks, all3maps; original beds/layouts/animal rendering mode unchanged','changed_symbols':['QingchiClearSampleCore.asset spring branch; bundle consumes it'],'baseline':manifest,'modified':modified,'added_files':added,'added_files_removed_on_rollback':True,'restored_hashes_equal':True,'patch_reconstructs':True,'observed':observed,'runs':runs,'patch':str(patch),'native_baseline':str(e/'spring-props1-baseline-native/report.json'),'native_modified':str(e/'candidate11-spring-props-native2/report.json'),'unit':str(e/'spring-props1-final-unit.stdout'),'unit_count':135,'initial_failures':[{'report':str(e/'candidate11-spring-props-native/failure.json'),'exit':1,'layer':'solid-alpha test input','observed':'first fractional edge sample allowed a drop; precise original click-time hit was not logged','correction':'integer interior sample with 3x3 alpha neighborhood and actual trusted click hit logs; no app payload change','cause':'fractional boundary hypothesis only, not proven'}]}
assert json.load(open(record['native_modified']))['result']=='PASS';(e/'spring-props1-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2));vf=tx/'VERIFICATION.txt';v=json.loads(vf.read_text());v.setdefault('reference_upgrade_scoped_transactions',{})['spring-props1']=record;vf.write_text(json.dumps(v,ensure_ascii=False,indent=2));print('SPRING_PROPS_TRANSACTION_PASS')
