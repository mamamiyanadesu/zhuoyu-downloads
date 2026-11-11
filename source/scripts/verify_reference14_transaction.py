from pathlib import Path
import json,hashlib,subprocess,shutil,tarfile,os,datetime
r=Path('/Users/mac/Documents/Codex/learn/qingchi-desktop-20261106');a=r/'variants/slow-flow-13';b=r/'variants/reference-seasons-14';e=r/'evidence/v9/reference14';t=r/'transaction';probe=r/'tests/reference14-probe.cjs'
def hashes(root):return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob('*') if p.is_file()}
orig=json.loads((e/'baseline-manifest.json').read_text());assert hashes(a)==orig,'Original13 changed';modified=hashes(b);changed=[n for n in sorted(set(orig)|set(modified)) if orig.get(n)!=modified.get(n)];added=[n for n in changed if n not in orig]
runs=[]
def run(label,args,expected=0,cwd=None):
 p=subprocess.run([str(x) for x in args],cwd=cwd,capture_output=True,text=True);rec=dict(label=label,command=[str(x) for x in args],cwd=str(cwd or r),stdout=p.stdout,stderr=p.stderr,exit=p.returncode);runs.append(rec);assert p.returncode==expected,rec;return rec
base=run('BASELINE',['node',probe,a]);mod=run('MODIFIED',['node',probe,b]);assert base['stdout']!=mod['stdout']
for n in changed:
 if n.endswith('.js'):run('SYNTAX',['node','--check',b/n])
stage=t/'reference14-patch-stage';assert not stage.exists();(stage/'before').mkdir(parents=True);(stage/'after').mkdir()
for n in changed:
 for src,folder in [(a,'before'),(b,'after')]:
  p=src/n
  if p.exists():d=stage/folder/n;d.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,d)
p=subprocess.run(['git','diff','--no-index','--binary','--no-renames','before','after'],cwd=stage,capture_output=True);assert p.returncode==1,p.stderr
patch=p.stdout.replace(b'a/before/',b'a/').replace(b'b/after/',b'b/').replace(b'a/after/',b'a/').replace(b'b/before/',b'b/');patchfile=t/'REFERENCE14_SUPPLEMENT.patch';patchfile.write_bytes(patch)
archive=t/'reference14-baseline.tar.gz'
with tarfile.open(archive,'w:gz') as tar:
 for n in changed:
  if n in orig:tar.add(a/n,arcname=n)
rollback=t/'ROLLBACK.sh';old=rollback.read_text();assert '--reference14-root' not in old
paths=' '.join(changed);delete='\n'.join(' rm -f "$TARGET/'+n+'"' for n in added)
block='''if [ "$#" -eq 2 ] && [ "$1" = "--reference14-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-reference14-copy" ] || { echo "Marked separate reference14 copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
 for name in source source/app source/app/assets source/app/assets/reference14 source/app/vendor web-preview '''+paths+'''; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
'''+delete+'''
 tar -xzf "$DIR/reference14-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pristine preview13 files: %s\\n' "$TARGET"
 exit 0
fi
'''
pos=old.index('if [ "$#"');rollback.write_text(old[:pos]+block+old[pos:]);os.chmod(rollback,0o755)
copy=t/'reference14-rollback-copy';assert not copy.exists();shutil.copytree(b,copy);(copy/'.qingchi-reference14-copy').write_text('Separate disposable verification copy\n');run('ROLLBACK_EXEC',['sh',rollback,'--reference14-root',copy]);rb=run('ROLLBACK',['node',probe,copy]);assert rb['stdout']==base['stdout'];restored=hashes(copy);restored.pop('.qingchi-reference14-copy');assert restored==orig,'rollback bytes not original'
run('PATCH_RECONSTRUCT',['git','apply','--unsafe-paths','--directory='+str(copy),patchfile]);rebuilt=hashes(copy);rebuilt.pop('.qingchi-reference14-copy');assert rebuilt==modified
# Explicitly reverse/reapply only the isolated candidate, never the confirmed13 source.
run('CANDIDATE_REVERSE',['git','apply','-R','--unsafe-paths','--directory='+str(b),patchfile]);assert hashes(b)==orig
run('CANDIDATE_REAPPLY',['git','apply','--unsafe-paths','--directory='+str(b),patchfile]);assert hashes(b)==modified;run('MODIFIED_RECHECK',['node',probe,b]);assert hashes(a)==orig
report={'baseline':str(a),'modified':str(b),'changed':changed,'added':added,'baseline_hashes':orig,'modified_hashes':modified,'runs':runs,'original13_unchanged':True,'rollback_hash_matches':True,'patch_reconstructs':True,'candidate_goal_reapplied':True,'patch':str(patchfile),'rollback':str(rollback),'verification':str(t/'VERIFICATION.txt'),'scope':'Local-only independently recreated spring and autumn comparison variants; no install, remote publish, commercial package asset copying or confirmed13 edits.'}
(e/'transaction.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
with (t/'VERIFICATION.txt').open('a') as f:f.write('\nREFERENCE14 TRANSACTION\n'+json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print('CHANGED',len(changed),'PATCH_BYTES',len(patch),'ORIGINAL13_UNCHANGED',True,'ROLLBACK_MATCH',True)
for v in [base,mod,rb]:print(v['label'],v['stdout'].strip(),'exit',v['exit'])
print('REPORT',e/'transaction.json')
