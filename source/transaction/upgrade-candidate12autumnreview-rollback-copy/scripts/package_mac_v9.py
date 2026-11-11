from pathlib import Path
import shutil,plistlib,json,subprocess,hashlib
r=Path(__file__).resolve().parent.parent
version=json.loads((r/'package.json').read_text())['version'];assert version.startswith('0.9.0-beta.') and version.rsplit('.',1)[1].isdigit()
app=r/f'releases/蓬莱临水-{version}-mac-arm64.app'
if app.exists():raise SystemExit('Refuse overwrite existing release')
# Retain and hash the older signed package before building the independent candidate.
old=r/'releases/蓬莱临水-0.8.0-mac-arm64.app'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
manifest={str(f.relative_to(old)):sha(f) for f in old.rglob('*') if f.is_file() and not f.is_symlink()}
shutil.copytree(r/'node_modules/electron/dist/Electron.app',app,symlinks=True)
resources=app/'Contents/Resources';dest=resources/'app';dest.mkdir()
for name in ['app','desktop']:shutil.copytree(r/name,dest/name)
package={'name':'qingchi-desktop','version':version,'qingchiPackaged':True,'main':'desktop/main.cjs','description':'清池 · 原创四季与桌面工具候选版'}
(dest/'package.json').write_text(json.dumps(package,ensure_ascii=False,indent=2))
for name in ['THIRD_PARTY.txt','蓬莱临水0.9候选说明.txt']:shutil.copy2(r/name,dest/name)
p=app/'Contents/Info.plist';info=plistlib.loads(p.read_bytes());info.update({'CFBundleDisplayName':'蓬莱临水 0.9 候选','CFBundleName':'蓬莱临水候选','CFBundleIdentifier':'local.qingchi.trial.v9.candidate','CFBundleShortVersionString':'0.9.0','CFBundleVersion':'9.'+version.rsplit('.',1)[1],'CFBundleExecutable':'Qingchi','CFBundleIconFile':'Qingchi.icns'});p.write_bytes(plistlib.dumps(info))
(app/'Contents/MacOS/Electron').rename(app/'Contents/MacOS/Qingchi')
shutil.copy2(r/'app/assets/Qingchi.icns',resources/'Qingchi.icns')
if (resources/'default_app.asar').exists():(resources/'default_app.asar').unlink()
subprocess.run(['codesign','--force','--deep','--sign','-',str(app)],check=True)
subprocess.run(['codesign','--verify','--deep','--strict',str(app)],check=True)
assert all(sha(old/p)==h for p,h in manifest.items())
source_manifest={str(f.relative_to(dest)):sha(f) for f in dest.rglob('*') if f.is_file()}
e=r/'evidence/v9';(e/f'package-{version}-build.json').write_text(json.dumps({'app':str(app),'version':version,'adHocSigned':True,'notarized':False,'oldPackageUnchanged':True,'oldPackageFiles':manifest,'packagedFiles':source_manifest},ensure_ascii=False,indent=2))
print('CANDIDATE_BUILD_PASS',app)
