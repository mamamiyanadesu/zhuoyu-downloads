#!/usr/bin/env python3
"""Package reviewed application files with checksum-validated official runtime; no EXE execution."""
from pathlib import Path
import json,hashlib,zipfile,shutil,struct
r=Path(__file__).resolve().parent.parent
runtime=Path((r/'evidence/windows-runtime-path.txt').read_text().strip())
expected=json.loads((r/'node_modules/electron/checksums.json').read_text())['electron-v45.2.3-win32-x64.zip']
actual=hashlib.sha256(runtime.read_bytes()).hexdigest()
assert actual==expected,(actual,expected)
folder=r/'releases/Qingchi-0.1.0-windows-x64'
folder.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(runtime) as z:
 for info in z.infolist():
  dest=(folder/info.filename).resolve();dest.relative_to(folder.resolve())
 z.extractall(folder)
app=folder/'resources/app';app.mkdir(parents=True,exist_ok=True)
for name in ['app','desktop']:shutil.copytree(r/name,app/name,dirs_exist_ok=True)
for name in ['package.json','THIRD_PARTY.txt']:shutil.copyfile(r/name,app/name)
# Runtime remains upstream Electron; no signature or ownership assertion is added.
exe=folder/'electron.exe';out=folder/'Qingchi.exe'
if out.exists():out.unlink()
exe.rename(out)
d=out.read_bytes();offset=struct.unpack_from('<I',d,60)[0];assert d[offset:offset+4]==b'PE\0\0';machine=struct.unpack_from('<H',d,offset+4)[0];assert machine==0x8664
shutil.copyfile(r/'WINDOWS验收.txt',folder/'请先阅读.txt')
archive=r/'releases/Qingchi-0.1.0-windows-x64-portable.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for p in folder.rglob('*'):
  if p.is_file():z.write(p,p.relative_to(r/'releases'))
with zipfile.ZipFile(archive) as z:
 assert z.testzip() is None
 for p in (app/'app').rglob('*'):
  if p.is_file():assert z.read(str(p.relative_to(r/'releases')))==p.read_bytes()
report={'runtime_sha256':actual,'runtime_checksum_verified':True,'machine':hex(machine),'exe':str(out),'archive':str(archive),'bytes':archive.stat().st_size,'sha256':hashlib.sha256(archive.read_bytes()).hexdigest(),'zip_crc':'PASS','source_files_match':True,'Windows_execution':'NOT_TESTED','wallpaper_mount':'NOT_IMPLEMENTED','code_signing':'Not signed as Qingchi; no installer/public release'}
(r/'evidence/windows-package.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False,indent=2))
