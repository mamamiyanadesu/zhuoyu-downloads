from pathlib import Path
import json,hashlib,shutil,subprocess,difflib,tarfile
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';name='蓬莱临水0.9候选说明.txt';base=tx/'candidate5-doc-baseline';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();rb=tx/'ROLLBACK.sh';shutil.copy2(rb,tx/'ROLLBACK-before-candidate5-doc.sh')
with tarfile.open(tx/'candidate5-doc-baseline.tar.gz','w:gz') as t:t.add(base/name,arcname=name)
block='''if [ "$#" -eq 2 ] && [ "$1" = "--candidate-doc-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ ! -L "$2" ] && [ ! -L "$2/蓬莱临水0.9候选说明.txt" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 tar -xzf "$DIR/candidate5-doc-baseline.tar.gz" -C "$TARGET"
 printf 'Restored candidate documentation: %s\\n' "$TARGET"
 exit 0
fi
''';s=rb.read_text();anchor='if [ "$#" -eq 2 ] && [ "$1" = "--version-bridge-root" ]; then';assert anchor in s;rb.write_text(s.replace(anchor,block+anchor,1));rb.chmod(0o755);copy=tx/'candidate5-doc-rollback-copy';copy.mkdir();(copy/'.qingchi-rollback-copy').touch();shutil.copy2(r/name,copy/name);runs=[]
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True);runs.append({'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode});print(label,q.returncode,q.stdout.strip());assert q.returncode==0,q.stderr;return q.stdout
run('RESTORE',['sh',rb,'--candidate-doc-root',copy]);assert sha(copy/name)==sha(base/name);obs={}
for label,file in [('BASELINE',base/name),('MODIFIED',r/name),('ROLLBACK',copy/name)]:obs[label]=json.loads(run(label,['python3',r/'scripts/probe_candidate_doc.py',file]))
assert obs['BASELINE']==obs['ROLLBACK'];assert obs['MODIFIED']['version']=='0.9.0-beta.5' and obs['MODIFIED']['states_shared_beta_profile'];patch=tx/'CANDIDATE5_DOC_SUPPLEMENT.patch';patch.write_text(''.join(difflib.unified_diff((base/name).read_text().splitlines(True),(r/name).read_text().splitlines(True),fromfile='a/'+name,tofile='b/'+name)));run('REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert sha(copy/name)==sha(r/name)
folder=r/'releases/beta5-delivery-20261108';folder.mkdir();old=r/'releases/蓬莱临水-0.9.0-beta.5-mac-arm64.app';app=folder/old.name;build=json.loads((r/'evidence/v9/package-0.9.0-beta.5-build.json').read_text());oldroot=old/'Contents/Resources/app';assert all(sha(oldroot/n)==h for n,h in build['packagedFiles'].items());shutil.copytree(old,app,symlinks=True);dest=app/'Contents/Resources/app';shutil.copy2(r/name,dest/name);shutil.copy2(r/name,folder/'使用说明.txt');shutil.copy2(r/'THIRD_PARTY.txt',folder/'THIRD_PARTY.txt');changed=[n for n,h in build['packagedFiles'].items() if sha(dest/n)!=h];assert changed==[name],changed
run('SIGN',['codesign','--force','--deep','--sign','-',app]);run('VERIFY_SIGN',['codesign','--verify','--deep','--strict',app]);assert all(sha(oldroot/n)==h for n,h in build['packagedFiles'].items());assert all(sha(dest/n)==h for n,h in build['packagedFiles'].items() if n!=name)
record={'scope':'Documentation-only update on independent delivery app copy; original beta5 build preserved','folder':str(folder),'app':str(app),'old_app':str(old),'changed_payload_files':changed,'app_and_desktop_source_hashes_unchanged':True,'old_payload_unchanged':True,'observed':obs,'runs':runs,'restored_hash_equal':True,'patch_reconstructs':True,'doc_baseline_sha':sha(base/name),'doc_modified_sha':sha(r/name),'patch':str(patch),'payload_hashes':{n:sha(dest/n) for n in build['packagedFiles']},'native_smoke_pending':True};(r/'evidence/v9/candidate5-delivery-prepare.json').write_text(json.dumps(record,ensure_ascii=False,indent=2));vf=tx/'VERIFICATION.txt';v=json.loads(vf.read_text());v['candidate5_doc_delivery']=record;vf.write_text(json.dumps(v,ensure_ascii=False,indent=2));print('DELIVERY_COPY_PREPARED',app)
