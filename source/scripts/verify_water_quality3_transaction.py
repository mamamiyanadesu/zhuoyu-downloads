from pathlib import Path
import json,hashlib,shutil,subprocess,difflib,tarfile
r=Path(__file__).resolve().parent.parent;old=r/'variants/spring-peach-02';new=r/'variants/spring-peach-03';tx=r/'transaction';e=r/'evidence/v9';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();m=json.loads((new/'baseline-manifest.json').read_text());assert all(sha(old/n)==h for n,h in m.items());changed=[n for n,h in m.items()if sha(new/n)!=h];print('CHANGED',changed)
base=tx/'water-quality3-baseline';base.mkdir();copy=tx/'water-quality3-rollback-copy';copy.mkdir();(copy/'.qingchi-quality-copy').touch()
for n in changed:
 for dst,src in [(base,old),(copy,new)]: (dst/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(src/n,dst/n)
# Probe uses only the changed core/shader/index files; no game assets or personal data required.
patch=tx/'WATER_QUALITY3_SUPPLEMENT.patch';patch.write_text(''.join(''.join(difflib.unified_diff((old/n).read_text().splitlines(True),(new/n).read_text().splitlines(True),fromfile='a/'+n,tofile='b/'+n))for n in changed))
archive=tx/'water-quality3-baseline.tar.gz'
with tarfile.open(archive,'w:gz')as t:
 for n in changed:t.add(base/n,arcname=n)
rb=tx/'ROLLBACK.sh';shutil.copy2(rb,tx/'ROLLBACK-before-water-quality3.sh');branch='''if [ "$#" -eq 2 ] && [ "$1" = "--water-quality-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-quality-copy" ] || { echo "Marked separate quality copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
'''
guards=set(changed)
for n in changed:guards.update(str(p)for p in Path(n).parents if str(p)!='.')
branch+=' for name in '+' '.join(sorted(guards))+'''; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
 tar -xzf "$DIR/water-quality3-baseline.tar.gz" -C "$TARGET"
 printf 'Restored fixed-low water preview: %s\\n' "$TARGET"
 exit 0
fi
'''
s=rb.read_text();i=s.index('if [ "$#"');rb.write_text(s[:i]+branch+s[i:]);rb.chmod(0o755);runs=[]
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True);runs.append({'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode});print(label,q.returncode,q.stdout.strip());assert q.returncode==0,q.stderr;return q.stdout
probe=r/'tests/water-quality3-probe.cjs';a=run('BASELINE',['node',probe,old]);b=run('MODIFIED',['node',probe,new]);run('ROLLBACK_COMMAND',['sh',rb,'--water-quality-root',copy]);c=run('ROLLBACK',['node',probe,copy]);assert a==c and a!=b;assert all(sha(copy/n)==m[n]for n in changed);run('REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert all(sha(copy/n)==sha(new/n)for n in changed)
for n in changed:shutil.copy2(copy/n,new/n)
run('ROLLBACK_SYNTAX',['sh','-n',rb]);record={'target':str(old),'modified':str(new),'changed_fields':['settings.waterQuality','QingchiSeasonWater.setQuality','QUALITY.low/high','water-quality select'],'changed_files':changed,'baseline_hashes':{n:m[n]for n in changed},'modified_hashes':{n:sha(new/n)for n in changed},'original_unchanged':True,'restored_hashes_match':True,'patch_reconstructs':True,'reapplied_goal':True,'runs':runs,'patch':str(patch),'unit_boundary':'GL mocked. Actual browser GPU/UI checks recorded separately. Higher workload not measured as hardware GPU percent.'};(e/'water-quality3-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n');(tx/'VERIFICATION.txt').open('a').write('\nWATER_QUALITY3_TRANSACTION\n'+json.dumps(record,ensure_ascii=False,indent=2)+'\n')
for name,p in json.loads((tx/'roles.json').read_text()).items():print(name,p,len(Path(p).read_bytes()),sha(Path(p)))
