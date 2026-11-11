from pathlib import Path
import shutil,plistlib,json,subprocess,hashlib
r=Path(__file__).resolve().parent.parent;version='0.9.0-clear-day.1';app=r/f'releases/蓬莱临水-{version}-mac-arm64.app';assert not app.exists(),'Refuse overwrite'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();old=r/'releases/蓬莱临水-0.9.0-beta.3-mac-arm64.app';original={str(f.relative_to(old)):sha(f) for f in old.rglob('*') if f.is_file() and not f.is_symlink()}
shutil.copytree(r/'node_modules/electron/dist/Electron.app',app,symlinks=True);resources=app/'Contents/Resources';dest=resources/'app';dest.mkdir()
for n in ['app','desktop']:shutil.copytree(r/n,dest/n)
(dest/'package.json').write_text(json.dumps({'name':'qingchi-clear-day-sample','version':version,'qingchiPackaged':True,'qingchiClearSample':True,'main':'desktop/main.cjs'},indent=2));shutil.copy2(r/'THIRD_PARTY.txt',dest/'THIRD_PARTY.txt')
p=app/'Contents/Info.plist';info=plistlib.loads(p.read_bytes());info.update({'CFBundleDisplayName':'蓬莱临水 · 清池白天样板','CFBundleName':'清池白天样板','CFBundleIdentifier':'local.qingchi.clear.day.sample01','CFBundleShortVersionString':'0.9.0','CFBundleVersion':'9.101','CFBundleExecutable':'Qingchi','CFBundleIconFile':'Qingchi.icns'});p.write_bytes(plistlib.dumps(info));(app/'Contents/MacOS/Electron').rename(app/'Contents/MacOS/Qingchi');shutil.copy2(r/'app/assets/Qingchi.icns',resources/'Qingchi.icns');(resources/'default_app.asar').unlink(missing_ok=True)
subprocess.run(['codesign','--force','--deep','--sign','-',str(app)],check=True);subprocess.run(['codesign','--verify','--deep','--strict',str(app)],check=True)
assert all(sha(old/n)==h for n,h in original.items());m={str(f.relative_to(dest)):sha(f) for f in dest.rglob('*') if f.is_file()};assert all(sha(r/n)==h for n,h in m.items() if n.startswith(('app/','desktop/')))
(r/'evidence/v9/clear-day-build.json').write_text(json.dumps({'app':str(app),'version':version,'adHocSigned':True,'notarized':False,'beta3Unchanged':True,'beta3Files':original,'packagedFiles':m},ensure_ascii=False,indent=2));print('BUILD_PASS',app)
