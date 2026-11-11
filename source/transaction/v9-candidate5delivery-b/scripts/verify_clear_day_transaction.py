from pathlib import Path
import json,subprocess,shutil,hashlib,difflib
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';b=tx/'clear-day-baseline';copy=tx/'clear-day-rollback-copy';copy.mkdir();(copy/'.qingchi-rollback-copy').touch();manifest=json.loads((b/'manifest.json').read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();runs=[]
def run(label,args):
 q=subprocess.run([str(x) for x in args],text=True,capture_output=True);runs.append({'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode});print(label,q.returncode,q.stdout.strip());assert q.returncode==0,q.stderr;return q.stdout
for n,h in manifest.items():
 assert sha(b/n)==h;p=copy/n;p.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(r/n,p)
run('RESTORE',['sh',tx/'ROLLBACK.sh','--clear-day-root',copy]);assert all(sha(copy/n)==h for n,h in manifest.items())
observed={}
for label,f in [('BASELINE',b/'app/environment.js'),('MODIFIED',r/'app/environment.js'),('ROLLBACK',copy/'app/environment.js')]:observed[label]=json.loads(run(label,['node',r/'tests/clear-day-probe.cjs',f]))
assert [observed[k]['rendered'] for k in ['BASELINE','MODIFIED','ROLLBACK']]==['night','day','night']
run('NON_SAMPLE_UNCHANGED',['node',r/'tests/clear-day-probe.cjs',r/'app/environment.js','off'])
patch=tx/'CLEAR_DAY_SUPPLEMENT.patch';diff=''
for n in manifest:diff+=''.join(difflib.unified_diff((b/n).read_text().splitlines(True),(r/n).read_text().splitlines(True),fromfile='a/'+n,tofile='b/'+n))
patch.write_text(diff);run('REAPPLY',['git','apply','--unsafe-paths','--directory='+str(copy),patch]);assert all(sha(copy/n)==sha(r/n) for n in manifest)
record={'scope':'clear day-only branch, saved night renders day; non-sample compatibility retained','changed_symbols':['QingchiEnvironment.apply config.light','clear-sample night button/daylight options','life-ui persist/sync env.light','clear sample native title'],'baseline_hashes':manifest,'modified_hashes':{n:sha(r/n) for n in manifest},'runs':runs,'observed':observed,'rollback_hashes_equal':True,'patch_reconstructs':True,'patch':str(patch),'patch_sha256':sha(patch),'package_verification':'pending separate final-package report'}
p=tx/'VERIFICATION.txt';v=json.loads(p.read_text());v['clear_day_only']=record;p.write_text(json.dumps(v,ensure_ascii=False,indent=2));(r/'evidence/v9/clear-day-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2));print('CLEAR_DAY_TRANSACTION_PASS')
for role,name in json.loads((tx/'roles.json').read_text()).items():f=Path(name);print(role,str(f),len(f.read_bytes()),sha(f))
