from pathlib import Path
import json,hashlib,subprocess,zipfile,shutil,os
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';version='0.9.0-beta.14';d=r/'releases/beta14-delivery-20261108';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert (e/'candidate14regression-full-transaction.exit').read_text().strip()=='0'
summary=json.loads((e/'candidate14-regression-summary/report.json').read_text());assert summary['result']=='PASS'
app=r/f'releases/蓬莱临水-{version}-mac-arm64.app';build=json.loads((e/f'package-{version}-build.json').read_text());payload=app/'Contents/Resources/app';assert all(sha(payload/n)==h for n,h in build['packagedFiles'].items());assert all(sha(r/n)==h for n,h in build['packagedFiles'].items() if n.startswith(('app/','desktop/')))
assert not d.exists();d.mkdir();shutil.copytree(app,d/app.name,symlinks=True)
for src,name in [(r/'蓬莱临水0.9候选说明.txt','原构建使用说明.txt'),(r/'THIRD_PARTY.txt','THIRD_PARTY.txt'),(e/'candidate14_验收进展.txt','使用说明与本次验收.txt'),(e/'candidate14-regression-summary/report.json','原生回归摘要.json'),(e/'candidate14_差距矩阵.txt','阶段差距矩阵.txt')]:shutil.copy2(src,d/name)
media=d/'截图与录像';media.mkdir()
for p in sorted((e/'candidate14-day-matrix2').glob('*.png')):shutil.copy2(p,media/p.name)
for name in ['02-draw.png','03-ranking.png','04-real-minute-reminder.png']:shutil.copy2(e/'candidate14-features-native'/name,media/name)
motion=json.loads((e/'candidate14-motion-final/report.json').read_text())
for clip in motion['clips']:shutil.copy2(Path(clip['video']),media/('beta14-'+clip['name']+'.mp4'))
fish=json.loads((e/'candidate14-fish-body-motion/report.json').read_text());shutil.copy2(Path(fish['video']),media/'beta14-fish-body-feed-20s.mp4')
for p in [e/'candidate14-performance/测量口径与结论.txt',e/'candidate14-performance/comparison-table.csv']:
 if p.exists():shutil.copy2(p,d/p.name)
appzip=r/f'releases/蓬莱临水-{version}-mac-arm64.zip';assert not appzip.exists();cmd=['ditto','-c','-k','--sequesterRsrc','--keepParent',str(d),str(appzip)];q=subprocess.run(cmd,capture_output=True,text=True);assert q.returncode==0,q.stderr
with zipfile.ZipFile(appzip) as z:assert z.testzip() is None;assert any(n.endswith('Contents/MacOS/Qingchi') for n in z.namelist())
extract=e/'candidate14-archive-extracted';assert not extract.exists();extract.mkdir();x=subprocess.run(['ditto','-x','-k',str(appzip),str(extract)],capture_output=True,text=True);assert x.returncode==0,x.stderr;unpacked=extract/d.name/app.name;up=unpacked/'Contents/Resources/app';assert all(sha(up/n)==h for n,h in build['packagedFiles'].items());signed=subprocess.run(['codesign','--verify','--deep','--strict',str(unpacked)],capture_output=True,text=True);assert signed.returncode==0,signed.stderr
sourcezip=r/f'releases/蓬莱临水-{version}-可编辑源码与素材.zip';assert not sourcezip.exists();files=[]
for name in ['app','desktop','art','tests','scripts']:files.extend(p for p in (r/name).rglob('*') if p.is_file() and '__pycache__' not in p.parts and p.suffix!='.pyc')
for name in ['package.json','package-lock.json','THIRD_PARTY.txt','蓬莱临水0.9候选说明.txt','STATUS.json']:files.append(r/name)
roles=json.loads((r/'transaction/roles.json').read_text());files.extend(Path(p) for p in roles.values());files.extend(r/'transaction'/n for n in ['BASELINE.js','roles.json']);files.extend((r/'transaction').glob('*baseline.tar.gz'));files.extend((r/'transaction').glob('*.patch'))
for name in ['v2-feature-baseline','visual-v1-baseline','v8-upgrade-baseline']:files.extend(p for p in (r/'transaction'/name).rglob('*') if p.is_file())
for name in ['candidate14-regression-summary/report.json', 'candidate14-day-review/report.json', 'candidate14-features-native/report.json', 'candidate14-features-reopen/report.json', 'candidate14-gameplay-native/report.json', 'candidate14-gameplay-reopen/report.json', 'candidate14-animals-native/report.json', 'candidate14-wheel-local/report.json', 'candidate14-motion-final/report.json', 'candidate14-fish-body-verification/report.json', 'candidate14-alarm-native2/report.json', 'candidate14-suite/report.json', 'candidate14-suite-tail/report.json', 'candidate14_验收进展.txt', 'candidate14regression-transaction.json', 'candidate14_差距矩阵.txt']:files.append(e/name)
for p in (e/'candidate14-performance').glob('*'):
 if p.is_file() and (p.name.endswith('-report.json') or p.suffix=='.csv' or p.name=='测量口径与结论.txt'):files.append(p)
for folder in ['candidate14-day-review','candidate14-motion-review','candidate14-regression-summary','candidate14-suite','candidate14-suite-tail']:
 files.extend(p for p in (e/folder).rglob('*') if p.is_file() and p.suffix in ['.json','.txt','.html','.jpg','.py','.cjs','.stdout','.stderr'])
for name in ['candidate14-performance/measure-diagnostic.cjs','candidate14-performance/correction.json','candidate14-crab-motion-recheck/report.json','candidate14-reference-comparison/report.json','candidate14-comparison-capture/report.json','candidate14delivery-transaction.json']:
 files.append(e/name)
files=sorted(set(files));manifest={str(p.relative_to(r)):sha(p) for p in files};prefix='蓬莱临水-beta14-源码/'
with zipfile.ZipFile(sourcezip,'x',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for p in files:z.write(p,prefix+str(p.relative_to(r)))
 z.writestr(prefix+'ARCHIVE_MANIFEST.json',json.dumps(manifest,ensure_ascii=False,indent=2));z.writestr(prefix+'源码包说明.txt','独立增量候选，整体目标仍未完成。包含原创位图/提示词、Blender源/构建脚本、分件动画源码和原许可；AI位图不是分层绘画源。不包含用户存档、node_modules或参考安装包素材。安装已有锁定依赖后 npm test / npm start；构建 scripts/package_mac_v9.py 拒绝覆盖旧包。transaction 的同一四角色及全部所需基线保留；只向带标记独立副本运行回滚。绝对原路径为证据来源，跨机器运行需调整项目根。包内说明是构建时快照，最新测试结论见 evidence/v9/candidate14_验收进展.txt。\n')
with zipfile.ZipFile(sourcezip) as z:
 assert z.testzip() is None
 for n,h in manifest.items():assert hashlib.sha256(z.read(prefix+n)).hexdigest()==h
record={'goal_complete':False,'version':version,'original_app':str(app),'app':str(d/app.name),'extracted_app':str(unpacked),'payload_unchanged':True,'archives':[{ 'path':str(p),'sha256':sha(p),'bytes':p.stat().st_size,'crc_pass':True} for p in [appzip,sourcezip]],'source_files':len(manifest),'all_source_hashes_verified':True,'original_payload_hashes':build['packagedFiles'],'source_ledger_snapshot_sha256':manifest['transaction/VERIFICATION.txt'],'archive_commands':[{'command':cmd,'exit':q.returncode,'stdout':q.stdout,'stderr':q.stderr},{'command':x.args,'exit':x.returncode,'stdout':x.stdout,'stderr':x.stderr},{'command':signed.args,'exit':signed.returncode,'stdout':signed.stdout,'stderr':signed.stderr}],'extracted_native_smoke_pending':True}
(e/'candidate14-distribution.json').write_text(json.dumps(record,ensure_ascii=False,indent=2));print(json.dumps({k:v for k,v in record.items() if k!='original_payload_hashes'},ensure_ascii=False,indent=2))
