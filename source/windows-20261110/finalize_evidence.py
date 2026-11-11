from pathlib import Path
import json,hashlib,difflib,tarfile,subprocess
r=Path(__file__).resolve().parent;project=r.parent;e=r/'evidence';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
original=project/'variants/occlusion-clean-16/source';manifest=json.loads((e/'parent-manifest.json').read_text());assert all((original/n).is_file() and sha(original/n)==h for n,h in manifest.items())
diff=[]
for p in sorted((r/'source').rglob('*')):
 if not p.is_file() or 'node_modules' in p.parts:continue
 name=p.relative_to(r/'source');b=original/name
 try:old=b.read_text() if b.exists() else '';new=p.read_text()
 except UnicodeDecodeError:continue
 if old!=new:
  z=subprocess.run(['diff','-u','-L','a/'+str(name) if b.exists() else '/dev/null','-L','b/'+str(name),str(b) if b.exists() else '/dev/null',str(p)],capture_output=True,text=True);assert z.returncode==1;diff.append(z.stdout)
(r/'DIFF.patch').write_text(''.join(diff))
# Validate the complete textual patch on a fresh separate baseline copy.
import shutil
t=e/'patch-reconstruction';
if t.exists():shutil.rmtree(t)
shutil.copytree(original,t)
z=subprocess.run(['patch','-p1','-i',str(r/'DIFF.patch')],cwd=t,capture_output=True,text=True);(e/'patch.stdout').write_text(z.stdout);(e/'patch.stderr').write_text(z.stderr);assert z.returncode==0
for p in (r/'source').rglob('*'):
 if p.is_file() and 'node_modules' not in p.parts:
  q=t/p.relative_to(r/'source');assert q.read_bytes()==p.read_bytes(),str(q)
# Binary optional native dependencies are separately pinned and integrity checked.
report=json.loads((e/'windows-package.json').read_text());assert sha(Path(report['archive']))==report['sha256']
lines=['桌鱼 Windows 0.9.0-win.1 验证记录','Windows 真机验收 NOT_TESTED；本记录不是公开发行签名证明。','原件保留：parent-manifest 全部字节一致','改动对象：windows-20261110/source；verify-zhuoyu.cjs nonexistent setEnvironment call replaced by real onchange UI controls.', 'BASELINE --verify-zhuoyu: exit1 / FAIL / Script failed to execute; evidence/recheck-before-fix', 'MODIFIED --verify-zhuoyu: exit0 / PASS / three seasons + note reload + synthetic feed 0->1; evidence/fixed-runtime','ROLLBACK --verify-zhuoyu: exit1 / FAIL / same script error; evidence/rollback-runtime; restored verifier SHA equals pristine verifier.', 'All runtime checks use the same --verify-zhuoyu and isolated userData path; rollback app is a separate source copy. Candidate verifier remains modified.', 'Win32 mock contracts exit0: attachment/detachment, failed attach restoration, existing save not overwritten; JavaScript parse files101. All 18 Win32 Koffi declarations parsed with real Koffi on Mac; no user32.dll executed.', 'Unit tests against original and modified: 61 total,57 pass,4 fail, both exit1, same four failures. Current root test fixtures conflict with accepted clean16 (legacy migration assumptions and visitor simulation). Not fixed by changing accepted gameplay. Logs retained.','Execution errors: sandbox Electron exit134; corrected by approved native launch. Initial contract parse exit1: ES module parsed as script; corrected module-aware parser exit0. Initial unit relocation exit1 ENOENT; corrected paths; remaining four failures reproduce on pristine parent. First package exit1: wrong Koffi native relative path; corrected inspected win32_x64/koffi.node path; final package exit0.','Patch reconstruction exit0; byte match for all non-node_modules source files. Binary dependencies separately npm integrity verified.','Packaging: '+json.dumps(report,ensure_ascii=False),'Commands: node check_contracts.cjs; node --test checks/*.test.cjs; python3 package_release.py; Electron source --verify-zhuoyu. Full stdout/stderr follows.']
for name in ['recheck-before-fix.stdout','recheck-before-fix.stderr','fixed-runtime.stdout','fixed-runtime.stderr','rollback-runtime.stdout','rollback-runtime.stderr','contracts.stdout','contracts.stderr','unit-tests.stdout','unit-tests.stderr','baseline-unit-tests.stdout','baseline-unit-tests.stderr','package.stdout','package.stderr']:
 lines+=['\n--- LITERAL '+name+' ---',(e/name).read_text()]
(r/'VERIFICATION.txt').write_text('\n'.join(lines))
(r/'ROLLBACK.sh').write_text('''#!/bin/sh
set -eu
# Restores a separate source copy; baseline archive is a required sibling fixture.
[ "$#" -eq 1 ] || { echo "Usage: $0 /absolute/path/to/rollback-copy" >&2; exit 2; }
HERE=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
python3 - "$HERE" "$1" <<'PYROLL'
from pathlib import Path
import tarfile,sys,hashlib,shutil,tempfile
r=Path(sys.argv[1]);t=Path(sys.argv[2]);assert t.is_absolute() and not t.is_symlink() and 'rollback' in t.name.lower(), 'Use a separate absolute rollback-named copy'
assert t.resolve()!=r/'source' and r/'source' not in t.resolve().parents
archive=r/'evidence/baseline-source.tar.gz'
assert hashlib.sha256(archive.read_bytes()).hexdigest()=='BASESHA'
with tempfile.TemporaryDirectory() as d:
 with tarfile.open(archive) as z:
  for x in z.getmembers():assert not x.issym() and not x.islnk() and '..' not in Path(x.name).parts
  z.extractall(d)
 if t.exists():shutil.rmtree(t)
 shutil.copytree(Path(d)/'source',t)
print('RESTORED',t)
PYROLL
'''.replace('BASESHA',sha(e/'baseline-source.tar.gz')));(r/'ROLLBACK.sh').chmod(0o755)
# Execute source rollback and compare full baseline file manifest.
t=e/'rollback-full-source';z=subprocess.run([str(r/'ROLLBACK.sh'),str(t)],capture_output=True,text=True);assert z.returncode==0,z.stderr
expected=json.loads((e/'baseline-manifest.json').read_text());actual={str(p.relative_to(t)):sha(p) for p in t.rglob('*') if p.is_file()};assert expected==actual
with (r/'VERIFICATION.txt').open('a') as f:f.write('\nFULL SOURCE ROLLBACK exit0: '+z.stdout+'\nAll restored file hashes match baseline-manifest.json\n')
for name in ['transaction/VERIFICATION.txt']:
 with (project/name).open('a') as f:f.write('\nWINDOWS_20261110_SUPPLEMENT: '+str(r/'VERIFICATION.txt')+'\nRenderer roles unchanged; Windows supplemental source/diff/rollback roles in '+str(r)+'\n')
with (project/'launch-prep-20261109/WORKSTATE.md').open('a') as f:f.write('\n2026-11-10 Windows test delivery: '+str(Path(report['archive']))+' SHA256 '+report['sha256']+'. Fixed shared-runtime PASS on Mac arm64; Windows native NOT_TESTED. Full rollback verified; unit tests57/61, same4 failures on pristine parent. User prioritizes Windows; no Mac submission work performed. Next: Windows x64 native test of EXE, tray/WorkerW/Alt/DPI/sleep.\n')
for p in [r/'source/desktop/main.cjs',r/'DIFF.patch',r/'VERIFICATION.txt',r/'ROLLBACK.sh',project/'app/vendor/pond.js',project/'transaction/DIFF.patch',project/'transaction/VERIFICATION.txt',project/'transaction/ROLLBACK.sh']:
 data=p.read_bytes();print('REOPEN',str(p),len(data),hashlib.sha256(data).hexdigest())
print('PACKAGE',report['archive'],report['bytes'],report['sha256'])
