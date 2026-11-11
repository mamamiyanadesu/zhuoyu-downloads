from pathlib import Path
import json,hashlib,tarfile,shutil,subprocess,os
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';v=r/'variants/spring-peach-01/source';base=tx/'spring-peach1-baseline';e=r/'evidence/v9';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
bm=json.loads((base/'manifest.json').read_text());assert all(sha(base/n)==h for n,h in bm.items());original=json.loads((r/'variants/spring-peach-01/source-baseline-manifest.json').read_text());assert all(sha(r/n)==h for n,h in original.items())
added=['app/assets/scenes/spring/peach-master-v2.png','desktop/spring-sample-profile.cjs'];modified={n:sha(v/n)for n in [*bm,*added]};rb=tx/'ROLLBACK.sh';prior=tx/'ROLLBACK-before-spring-peach.sh';assert not prior.exists();shutil.copy2(rb,prior)
with tarfile.open(tx/'spring-peach1-baseline.tar.gz','w:gz')as tar:
 for n in bm:tar.add(base/n,arcname=n)
guards=set([*bm,*added])
for n in list(guards):guards.update(str(p)for p in Path(n).parents if str(p)!='.')
branch='''if [ "$#" -eq 2 ] && [ "$1" = "--spring-peach-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] && [ "$TARGET" != "$ROOT/variants/spring-peach-01/source" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in '''+' '.join(sorted(guards))+'''; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/spring-peach1-baseline.tar.gz" -C "$TARGET"
'''+''.join(f' rm -f "$TARGET/{n}"\n'for n in added)+''' printf 'Restored pre-peach-spring source: %s\\n' "$TARGET"
 exit 0
fi
'''
s=rb.read_text();i=s.index('if [ "$#"');rb.write_text(s[:i]+branch+s[i:]);rb.chmod(0o755)
copy=tx/'spring-peach1-rollback-copy';copy.mkdir();(copy/'.qingchi-rollback-copy').touch()
for n in modified:(copy/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(v/n,copy/n)
runs=[]
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True,cwd=r);runs.append({'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode});print(label,q.returncode,q.stdout.strip()[:700]);assert q.returncode==0,q.stderr;return q.stdout
run('SCOPED_ROLLBACK',['sh',rb,'--spring-peach-root',copy]);assert all(sha(copy/n)==h for n,h in bm.items());assert all(not(copy/n).exists()for n in added)
observed={}
for label,p in [('BASELINE',base),('MODIFIED',v),('ROLLBACK',copy)]:observed[label]=json.loads(run(label,['node',r/'tests/spring-peach-probe.cjs',p]))
assert observed['BASELINE']==observed['ROLLBACK'] and observed['BASELINE']!=observed['MODIFIED']
# Run the matching engine input while the separate rollback copy is still pristine.
for label,p in [('CURRENT_BASELINE',base),('SAMPLE_MODIFIED',v),('SAMPLE_ROLLBACK',copy)]:run(label,['node',r/'tests/engine-probe.cjs',p/'app/vendor/pond.js'])
a=tx/'spring-peach1-patch-a';b=tx/'spring-peach1-patch-b';a.mkdir();b.mkdir()
for n in bm:(a/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(base/n,a/n)
for n in modified:(b/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(v/n,b/n)
q=subprocess.run(['git','diff','--no-index','--binary','--no-renames',str(a),str(b)],capture_output=True,text=True);assert q.returncode==1;s=q.stdout
for prefix in ['a/','b/']:
 for folder in [a,b]:s=s.replace(prefix+str(folder).lstrip('/')+'/',prefix)
patch=tx/'SPRING_PEACH_SAMPLE_SUPPLEMENT.patch';patch.write_text(s);run('SCOPED_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert all(sha(copy/n)==h for n,h in modified.items());assert all(sha(v/n)==h for n,h in modified.items());assert all(sha(r/n)==h for n,h in original.items())
native=json.loads((e/'spring-peach1-native/report.json').read_text());assert native['result']=='PASS'
record={'scope':'New independent spring peach wallpaper sample; existing beta15 source and beta14 distribution preserved; no other-season production. Existing4role paths extended,not replaced.','supplemental_modified_file':str(v/'app/vendor/pond.js'),'changed_symbols':['QingchiSceneManifest spring bed/mapPlan/poses/rocks','QingchiScene spring layout/rockHit/occlude','QingchiWaterSurface selected spring engine','QingchiSeasonWater.DISPLAY spring center caustics','leafAt/occludeLeaves spring branch and Koi.update corner steering','isolated springSample userData and initial fixture'],'baseline':bm,'modified':modified,'added_files':added,'source_root_unchanged':True,'restored_hashes_equal':True,'patch_reconstructs':True,'observed':observed,'runs':runs,'patch':str(patch),'native_report':str(e/'spring-peach1-native/report.json'),'native_checks':len(native['checks']),'boundary':'Corner decoration is baked master art with polygon coverage in this representative sample,not independently articulated flowers. Other maps/seasons and longterm stability not accepted; visual approval pending.'}
(e/'spring-peach1-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n')
with(tx/'VERIFICATION.txt').open('a')as f:f.write('\n\nSPRING_PEACH_SAMPLE_TRANSACTION_20261108\n'+json.dumps(record,ensure_ascii=False,indent=2)+'\n')
roles=json.loads((tx/'roles.json').read_text());out=[]
for name,p in roles.items():p=Path(p);raw=p.read_bytes();out.append({'role':name,'path':str(p),'bytes':len(raw),'sha256':sha(p)});print(name,str(p),len(raw),sha(p))
(e/'spring-peach1-roles-reopened.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('SPRING_PEACH_TRANSACTION_PASS')
