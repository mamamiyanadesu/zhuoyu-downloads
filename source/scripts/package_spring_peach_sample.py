from pathlib import Path
import shutil,json,plistlib,subprocess,hashlib
r=Path(__file__).resolve().parent.parent;v=r/'variants/spring-peach-01/source';app=r/'releases/春池-桃花样板01-mac-arm64.app';assert not app.exists();version='0.9.0-spring-peach.1'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
source=json.loads((r/'variants/spring-peach-01/source-baseline-manifest.json').read_text());assert all(sha(r/n)==h for n,h in source.items())
shutil.copytree(r/'node_modules/electron/dist/Electron.app',app,symlinks=True);dest=app/'Contents/Resources/app';dest.mkdir()
for n in ['app','desktop']:shutil.copytree(v/n,dest/n)
for n in ['package.json','THIRD_PARTY.txt']:shutil.copy2(v/n,dest/n)
p=app/'Contents/Info.plist';info=plistlib.loads(p.read_bytes());info.update({'CFBundleDisplayName':'春池 · 桃花样板01','CFBundleName':'春池桃花样板','CFBundleIdentifier':'local.qingchi.spring.peach.sample01','CFBundleShortVersionString':'0.9.0','CFBundleVersion':'9.201','CFBundleExecutable':'Qingchi','CFBundleIconFile':'Qingchi.icns'});p.write_bytes(plistlib.dumps(info));(app/'Contents/MacOS/Electron').rename(app/'Contents/MacOS/Qingchi');shutil.copy2(v/'app/assets/Qingchi.icns',app/'Contents/Resources/Qingchi.icns');(app/'Contents/Resources/default_app.asar').unlink(missing_ok=True)
commands=[]
for args in [['codesign','--force','--deep','--sign','-',str(app)],['codesign','--verify','--deep','--strict',str(app)]]:
 q=subprocess.run(args,capture_output=True,text=True);commands.append({'command':args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode});assert q.returncode==0,q.stderr
m={str(f.relative_to(dest)):sha(f) for f in dest.rglob('*') if f.is_file()};assert all(sha(v/n)==h for n,h in m.items());assert all(sha(r/n)==h for n,h in source.items())
report={'app':str(app),'version':version,'adHocSigned':True,'notarized':False,'originalSourceUnchanged':True,'profile':'Qingchi-Spring-Peach-Sample-01','source':str(v),'packagedFiles':m,'commands':commands,'scope':'Spring representative wallpaper sample only; other seasons not reworked; inherited stability issues not resolved'};(r/'evidence/v9/spring-peach1-build.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print('SPRING_SAMPLE_BUILD_PASS',app)
