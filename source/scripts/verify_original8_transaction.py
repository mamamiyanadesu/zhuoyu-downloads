from pathlib import Path
import json,hashlib,shutil,subprocess,difflib,tarfile
r=Path(__file__).resolve().parent.parent;old=r/'variants/pale-water-07';new=r/'variants/original-look-08';tx=r/'transaction';e=r/'evidence/v9';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
m=json.loads((new/'baseline-manifest.json').read_text());assert all(sha(old/n)==h for n,h in m.items())
allnew={str(p.relative_to(new))for top in ['source','web-preview']for p in (new/top).rglob('*')if p.is_file()};added=sorted(allnew-set(m));changed=sorted(n for n,h in m.items()if sha(new/n)!=h);names=changed+added
assert all(not(new/n).is_symlink() and (new/n).stat().st_nlink==1 for n in names)
base=tx/'original8-baseline';base.mkdir();copy=tx/'original8-rollback-copy';copy.mkdir();(copy/'.qingchi-original8-copy').touch()
for n in names:
 if n in m:(base/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(old/n,base/n)
 (copy/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(new/n,copy/n)
patch=tx/'ORIGINAL8_SUPPLEMENT.patch';chunks=[]
for n in names:
 if n.endswith('.png'):
  q=subprocess.run(['git','diff','--no-index','--binary','--','/dev/null',str(new/n)],capture_output=True,text=True);assert q.returncode==1
  chunks.append(q.stdout.replace(str(new/n).lstrip('/'),n))
 else:chunks.append(''.join(difflib.unified_diff((old/n).read_text().splitlines(True)if n in m else [],(new/n).read_text().splitlines(True),fromfile='a/'+n if n in m else '/dev/null',tofile='b/'+n)))
patch.write_text(''.join(chunks))
with tarfile.open(tx/'original8-baseline.tar.gz','w:gz')as t:
 for n in changed:t.add(base/n,arcname=n)
rb=tx/'ROLLBACK.sh';shutil.copy2(rb,tx/'ROLLBACK-before-original8.sh');branch='''if [ "$#" -eq 2 ] && [ "$1" = "--original8-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-original8-copy" ] || { echo "Marked separate original8 copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
'''
guards=set(names)
for n in names:guards.update(str(p)for p in Path(n).parents if str(p)!='.')
branch+=' for name in '+' '.join(sorted(guards))+'''; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
 tar -xzf "$DIR/original8-baseline.tar.gz" -C "$TARGET"
'''
for n in added:branch+=' rm -f "$TARGET/'+n+'"\n'
branch+=' printf \'Restored preview07 art baseline: %s\\n\' "$TARGET"\n exit 0\nfi\n'
s=rb.read_text();i=s.index('if [ "$#"');rb.write_text(s[:i]+branch+s[i:]);rb.chmod(0o755);runs=[]
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True);runs.append({'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode});print(label,q.returncode,q.stdout.strip());assert q.returncode==0,q.stderr;return q.stdout
probe=r/'tests/original8-probe.cjs';a=run('BASELINE',['node',probe,old]);b=run('MODIFIED',['node',probe,new]);run('ROLLBACK_COMMAND',['sh',rb,'--original8-root',copy]);c=run('ROLLBACK',['node',probe,copy]);assert a==c and a!=b;assert all(sha(copy/n)==m[n]for n in changed);assert all(not(copy/n).exists()for n in added)
run('REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert all(sha(copy/n)==sha(new/n)for n in names)
for n in names:shutil.copy2(copy/n,new/n)
run('ROLLBACK_SYNTAX',['sh','-n',rb]);record={'target':str(old),'modified':str(new),'changed_symbols':['config.fishArt original drawLegacy','original04 water material and asset references','summerBedAt localRingArea cleanup only','leafWake timing and shape unchanged','ink option removed from UI'],'changed_files':changed,'added_files':added,'baseline_hashes':{n:m[n]for n in changed},'modified_hashes':{n:sha(new/n)for n in names},'original_unchanged':all(sha(old/n)==h for n,h in m.items()),'restored_hashes_match':True,'patch_reconstructs':True,'reapplied_goal':True,'runs':runs,'patch':str(patch),'boundary':'Mock drawing commands check branch execution, not aesthetic improvement. Real UI evidence separate.'}
(e/'original8-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n');(tx/'VERIFICATION.txt').open('a').write('\nORIGINAL8_TRANSACTION\n'+json.dumps(record,ensure_ascii=False,indent=2)+'\n')
for role,p in json.loads((tx/'roles.json').read_text()).items():print('REOPEN',role,p,len(Path(p).read_bytes()),sha(Path(p)))
print('REOPEN_SUPPLEMENT',patch,len(patch.read_bytes()),'MODIFIED_ORIGINAL8',new/'source/app/vendor/pond.js',sha(new/'source/app/vendor/pond.js'))
