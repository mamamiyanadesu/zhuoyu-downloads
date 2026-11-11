from pathlib import Path
import json,hashlib,shutil,subprocess,difflib,tarfile
r=Path(__file__).resolve().parent.parent;old=r/'variants/solid-head-09';new=r/'variants/no-egret-10';tx=r/'transaction';e=r/'evidence/v9';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
m=json.loads((new/'baseline-manifest.json').read_text());assert all(sha(old/n)==h for n,h in m.items())
allnew={str(p.relative_to(new))for top in ['source','web-preview']for p in (new/top).rglob('*')if p.is_file()};added=sorted(allnew-set(m));changed=sorted(n for n,h in m.items()if sha(new/n)!=h);names=changed+added
assert all(not(new/n).is_symlink() and (new/n).stat().st_nlink==1 for n in names)
base=tx/'noegret10-baseline';base.mkdir(exist_ok=True);copy=tx/'noegret10-rollback-copy';copy.mkdir(exist_ok=True);(copy/'.qingchi-noegret10-copy').touch();shutil.copytree(new/'source',copy/'source',dirs_exist_ok=True);shutil.copytree(new/'web-preview',copy/'web-preview',dirs_exist_ok=True)
for n in names:
 if n in m:(base/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(old/n,base/n)
 (copy/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(new/n,copy/n)
patch=tx/'NOEGRET10_SUPPLEMENT.patch';chunks=[]
for n in names:
 if n.endswith('.png'):
  q=subprocess.run(['git','diff','--no-index','--binary','--','/dev/null',str(new/n)],capture_output=True,text=True);assert q.returncode==1
  chunks.append(q.stdout.replace(str(new/n).lstrip('/'),n))
 else:chunks.append(''.join(difflib.unified_diff((old/n).read_text().splitlines(True)if n in m else [],(new/n).read_text().splitlines(True),fromfile='a/'+n if n in m else '/dev/null',tofile='b/'+n)))
patch.write_text(''.join(chunks))
with tarfile.open(tx/'noegret10-baseline.tar.gz','w:gz')as t:
 for n in changed:t.add(base/n,arcname=n)
rb=tx/'ROLLBACK.sh';runs=[]
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True);runs.append({'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode});print(label,q.returncode,q.stdout.strip());assert q.returncode==0,q.stderr;return q.stdout
probe=r/'tests/noegret10-probe.cjs';a=run('BASELINE',['node',probe,old]);b=run('MODIFIED',['node',probe,new]);run('ROLLBACK_COMMAND',['sh',rb,'--noegret10-root',copy]);c=run('ROLLBACK',['node',probe,copy]);assert a==c and a!=b;assert all(sha(copy/n)==m[n]for n in changed);assert all(not(copy/n).exists()for n in added)
run('REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert all(sha(copy/n)==sha(new/n)for n in names)
for n in names:shutil.copy2(copy/n,new/n)
run('ROLLBACK_SYNTAX',['sh','-n',rb]);record={'target':str(old),'modified':str(new),'changed_symbols':['HabitatCore maps.animals and species egret removed','LifeCore gardenItems egret removed','validateGarden drops retired egret placements on load/import','unknown visitor type rejected safely'],'changed_files':changed,'added_files':added,'baseline_hashes':{n:m[n]for n in changed},'modified_hashes':{n:sha(new/n)for n in names},'original_unchanged':all(sha(old/n)==h for n,h in m.items()),'restored_hashes_match':True,'patch_reconstructs':True,'reapplied_goal':True,'runs':runs,'patch':str(patch),'boundary':'Same-input seeded random simulation and old-save migration probe; real UI separately tested.'}
(e/'noegret10-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n');(tx/'VERIFICATION.txt').open('a').write('\nNOEGRET10_TRANSACTION\n'+json.dumps(record,ensure_ascii=False,indent=2)+'\n')
for role,p in json.loads((tx/'roles.json').read_text()).items():print('REOPEN',role,p,len(Path(p).read_bytes()),sha(Path(p)))
print('REOPEN_SUPPLEMENT',patch,len(patch.read_bytes()),'MODIFIED_NOEGRET10',new/'source/app/vendor/pond.js',sha(new/'source/app/vendor/pond.js'))
