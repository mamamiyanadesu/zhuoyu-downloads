from pathlib import Path
import shutil,plistlib,json,subprocess,hashlib
r=Path(__file__).resolve().parent.parent
app=r/'releases/蓬莱临水-0.6.0-mac-arm64.app'
if app.exists():raise SystemExit('Refuse overwrite existing release')
shutil.copytree(r/'node_modules/electron/dist/Electron.app',app,symlinks=True)
resources=app/'Contents/Resources';dest=resources/'app';dest.mkdir()
for name in ['app','desktop']:shutil.copytree(r/name,dest/name)
package={'name':'qingchi-desktop','version':'0.6.0','qingchiPackaged':True,'main':'desktop/main.cjs','description':'清池 · 池塘生活试用版'}
(dest/'package.json').write_text(json.dumps(package,ensure_ascii=False,indent=2))
for name in ['THIRD_PARTY.txt','蓬莱临水0.6说明.txt']:shutil.copy2(r/name,dest/name)
p=app/'Contents/Info.plist';info=plistlib.loads(p.read_bytes());info.update({'CFBundleDisplayName':'蓬莱临水','CFBundleName':'蓬莱临水','CFBundleIdentifier':'local.qingchi.trial.v6','CFBundleShortVersionString':'0.6.0','CFBundleVersion':'6'});p.write_bytes(plistlib.dumps(info))
(app/'Contents/MacOS/Electron').rename(app/'Contents/MacOS/Qingchi')
info['CFBundleExecutable']='Qingchi'
info['CFBundleIconFile']='Qingchi.icns'
p.write_bytes(plistlib.dumps(info))
shutil.copy2(r/'app/assets/Qingchi.icns',resources/'Qingchi.icns')
# Remove the unused default app payload, retained upstream license and runtime notices.
if (resources/'default_app.asar').exists():(resources/'default_app.asar').unlink()
subprocess.run(['codesign','--force','--deep','--sign','-',str(app)],check=True)
subprocess.run(['codesign','--verify','--deep','--strict',str(app)],check=True)
print(app)
