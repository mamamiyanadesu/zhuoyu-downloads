#!/usr/bin/env python3
from pathlib import Path
import json,hashlib,subprocess,difflib,shutil
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';roles=json.loads((tx/'roles.json').read_text())
old=json.loads((tx/'VERIFICATION.txt').read_text());target=Path(old['target']);raw=target.read_bytes();sha=lambda b:hashlib.sha256(b).hexdigest();assert sha(raw)==old['original_sha256'];assert (tx/'BASELINE.js').read_bytes()==raw
mod=Path(roles['MODIFIED_FILE']);changed=mod.read_bytes();assert changed!=raw
Path(roles['DIFF_FILE']).write_text(''.join(difflib.unified_diff(raw.decode().splitlines(True),changed.decode().splitlines(True),fromfile='BASELINE.js',tofile='pond.js')))
runs=[]
def run(label,args):
 p=subprocess.run(args,capture_output=True,text=True);runs.append({'label':label,'command':args,'stdout':p.stdout,'stderr':p.stderr,'exit':p.returncode});print(label,p.stdout.strip(),'exit',p.returncode);assert p.returncode==0;return p.stdout
probe=str(r/'tests/engine-probe.cjs')
b=json.loads(run('BASELINE',['node',probe,str(target)]));m=json.loads(run('MODIFIED',['node',probe,str(mod)]));assert b['foodAfterWidget']==1 and m['foodAfterWidget']==0 and m['foodAfterWater']==1
copy=tx/'rollback-copy.js';copy.write_bytes(changed);run('ROLLBACK_EXEC',['sh',roles['ROLLBACK'],str(copy)]);back=json.loads(run('ROLLBACK',['node',probe,str(copy)]));assert back==b and copy.read_bytes()==raw
patched=tx/'patch-check.js';patched.write_bytes(raw);run('PATCH_RECONSTRUCTION',['patch',str(patched),roles['DIFF_FILE']]);assert patched.read_bytes()==changed;mod.write_bytes(changed)
unit=run('CORE_TESTS',['node','--test',str(r/'tests/core.test.cjs')]);(r/'evidence/unit-tests.txt').write_text(unit)
for path in ['app/core.js','app/app.js','app/vendor/pond.js','desktop/main.cjs','desktop/preload.cjs']:run('SYNTAX '+path,['node','--check',str(r/path)])
checks=[]
for p in sorted((r/'evidence').glob('browser-checks-*.json')):checks.extend(json.loads(p.read_text()))
assert len(checks)==21 and all(x['passed'] for x in checks)
native=json.loads((r/'evidence/desktop-smoke.json').read_text());assert native['result']=='PASS'
manifest=[]
for folder in ['app','desktop','tests','scripts']:
 for p in sorted((r/folder).rglob('*')):
  if p.is_file():manifest.append({'path':str(p),'bytes':p.stat().st_size,'sha256':sha(p.read_bytes())})
(r/'evidence/source-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
old.update({'changed_symbols':['isPondInput','click handler','mousemove handler','render','QingchiPond.configure','QingchiCore','component UI'],'modified_sha256':sha(changed),'restored_sha256':sha(copy.read_bytes()),'runs':runs,'browser_assertions':checks,'native_smoke':native,'component_manifest':str(r/'evidence/source-manifest.json'),'windows_status':'Packaged only; not run; desktop wallpaper mounting not implemented','errors_and_corrections':[{'layer':'local server bind','error':'PermissionError Errno 1','exit':1,'correction':'task-scoped loopback server started with approved permission'},{'layer':'EGO desktop launch','error':'Failed to start ego lite in sandbox','exit':4,'correction':'approved GUI access; reused space 91'},{'layer':'Electron runtime','error':'Executable absent after npm install','exit':127,'correction':'inspected Electron 45 package; ran separate official install.js with checksum verification; native smoke passed'}]})
Path(roles['VERIFICATION']).write_text(json.dumps(old,ensure_ascii=False,indent=2));assert target.read_bytes()==raw
for role,path in roles.items():b=Path(path).read_bytes();print(role,path,'bytes',len(b),'sha256',sha(b))
print('BROWSER_ASSERTIONS',len(checks),'PASS');print('NATIVE',native['platform'],native['result']);print('RESTORED_HASH_EQUALS_ORIGINAL',sha(copy.read_bytes())==sha(raw))
