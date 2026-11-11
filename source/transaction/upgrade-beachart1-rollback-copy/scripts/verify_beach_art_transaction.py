from pathlib import Path
import json,hashlib,shutil,tarfile,subprocess,difflib
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';b=tx/'beach-art1-baseline';m=json.loads((b/'manifest.json').read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();rb=tx/'ROLLBACK.sh';shutil.copy2(rb,tx/'ROLLBACK-before-beach-art1.sh')
with tarfile.open(tx/'beach-art1-baseline.tar.gz','w:gz') as t:
 for n in m:t.add(b/n,arcname=n)
block='''if [ "$#" -eq 2 ] && [ "$1" = "--beach-art-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] && [ ! -L "$2/app/clear-sample-core.js" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 tar -xzf "$DIR/beach-art1-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pre-beach-art routing: %s\\n' "$TARGET"
 exit 0
fi
'''
s=rb.read_text();anchor='if [ "$#" -eq 2 ] && [ "$1" = "--beach-shore-root" ]; then';assert anchor in s;rb.write_text(s.replace(anchor,block+anchor,1));rb.chmod(0o755)
copy=tx/'beach-art1-rollback-copy';(copy/'app').mkdir(parents=True);(copy/'.qingchi-rollback-copy').touch();runs=[]
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True);runs.append({'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode});assert q.returncode==0,q.stderr;print(label,q.returncode,q.stdout.strip()[-280:]);return q.stdout
for n,h in m.items():assert sha(b/n)==h;shutil.copy2(r/n,copy/n)
run('RESTORE',['sh',rb,'--beach-art-root',copy]);assert all(sha(copy/n)==h for n,h in m.items());obs={}
for label,file in [('BASELINE',b/'app/clear-sample-core.js'),('MODIFIED',r/'app/clear-sample-core.js'),('ROLLBACK',copy/'app/clear-sample-core.js')]:obs[label]=json.loads(run(label,['node',r/'tests/beach-art-probe.cjs',file]))
assert obs['BASELINE']==obs['ROLLBACK'];delta=[(a,z) for a,z in zip(obs['BASELINE']['cases'],obs['MODIFIED']['cases']) if a!=z];assert len(delta)==1 and delta[0][0]['map']=='beach' and delta[0][0]['season']=='summer';assert all('clear-sample-01' in p for p in delta[0][1]['bundle'].values());assert not delta[0][0]['natural'] and delta[0][1]['natural']
p=tx/'BEACH_ART1_SUPPLEMENT.patch';p.write_text(''.join(''.join(difflib.unified_diff((b/n).read_text().splitlines(True),(r/n).read_text().splitlines(True),fromfile='a/'+n,tofile='b/'+n)) for n in m));run('REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),p]);assert all(sha(copy/n)==sha(r/n) for n in m)
rec={'scope':'Summer beach naturalStyle/asset/bundle routing only; other11 map-season outputs unchanged','changed_symbols':['QingchiClearSampleCore.naturalStyle','QingchiClearSampleCore.asset'],'baseline_hashes':m,'modified_hashes':{n:sha(r/n) for n in m},'runs':runs,'observed':obs,'delta':delta,'rollback_hash_equal':True,'patch_reconstructs':True,'patch':str(p),'patch_sha256':sha(p)};vf=tx/'VERIFICATION.txt';v=json.loads(vf.read_text());v['beach_art1']=rec;vf.write_text(json.dumps(v,ensure_ascii=False,indent=2));(r/'evidence/v9/beach-art1-transaction.json').write_text(json.dumps(rec,ensure_ascii=False,indent=2));print('BEACH_ART_TRANSACTION_PASS')
