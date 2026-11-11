from pathlib import Path
import json,hashlib,tarfile,shutil,subprocess,difflib
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';base=tx/'visitor-turn1-baseline';e=r/'evidence/v9';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();manifest=json.loads((base/'manifest.json').read_text());assert all(sha(base/n)==h for n,h in manifest.items())
rb=tx/'ROLLBACK.sh';prior=tx/'ROLLBACK-before-visitor-turn.sh';assert not prior.exists();shutil.copy2(rb,prior)
with tarfile.open(tx/'visitor-turn1-baseline.tar.gz','w:gz') as tar:
 for n in manifest:tar.add(base/n,arcname=n)
branch='''if [ "$#" -eq 2 ] && [ "$1" = "--visitor-turn-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app/habitat-core.js package.json package-lock.json 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/visitor-turn1-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pre-continuous-heading source: %s\\n' "$TARGET"
 exit 0
fi
'''
s=rb.read_text();needle='if [ "$#"';i=s.index(needle);rb.write_text(s[:i]+branch+s[i:]);rb.chmod(0o755)
copy=tx/'visitor-turn1-rollback-copy';copy.mkdir();(copy/'.qingchi-rollback-copy').touch();modified={n:sha(r/n) for n in manifest}
for n in manifest:
 (copy/n).parent.mkdir(exist_ok=True,parents=True);shutil.copy2(r/n,copy/n)
runs=[]
def run(label,args,cwd=None):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True,cwd=cwd);entry={'label':label,'command':q.args,'cwd':str(cwd or r),'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode};runs.append(entry);print(json.dumps(entry,ensure_ascii=False));assert q.returncode==0;return q.stdout
run('SCOPED_ROLLBACK',['sh',rb,'--visitor-turn-root',copy]);assert all(sha(copy/n)==h for n,h in manifest.items())
for label,p in [('BASELINE',base),('MODIFIED',r),('ROLLBACK',copy)]:run(label,['node',r/'tests/visitor-turn-probe.cjs',p/'app/habitat-core.js'])
patch=tx/'VISITOR_TURN_SUPPLEMENT.patch';patch.write_text(''.join(''.join(difflib.unified_diff((base/n).read_text().splitlines(True),(r/n).read_text().splitlines(True),fromfile='a/'+n,tofile='b/'+n)) for n in manifest))
run('SCOPED_REAPPLY',['patch','-p1','-i',patch],copy);assert all(sha(copy/n)==h for n,h in modified.items());assert all(sha(r/n)==h for n,h in modified.items())
record={'scope':'Bounded shortest-arc heading before travel, leaving turn does not consume departure movement time; only existing native project touched','changed_symbol':'QingchiHabitatCore.create.turnToward and step moving/leaving branches','baseline':manifest,'modified':modified,'restored_hashes_equal':True,'patch_reconstructs':True,'runs':runs,'patch':str(patch),'unit':str(e/'visitor-turn2-unit.stdout'),'unit_count':121,'initial_expected_failing_test':str(e/'visitor-turn1-test-before.stdout'),'native':'pending candidate6-motion-native'}
(e/'visitor-turn1-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2));v=tx/'VERIFICATION.txt';d=json.loads(v.read_text());d.setdefault('reference_upgrade_scoped_transactions',{})['visitor-turn1']=record;v.write_text(json.dumps(d,ensure_ascii=False,indent=2));print('VISITOR_TURN_TRANSACTION_PASS')
