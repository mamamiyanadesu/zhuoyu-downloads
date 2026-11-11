from pathlib import Path
import json,hashlib,subprocess,zipfile,shutil,os
r=Path(__file__).resolve().parent.parent;d=r/'releases/beta5-delivery-20261108';prepare=json.loads((r/'evidence/v9/candidate5-delivery-prepare.json').read_text());app=Path(prepare['app']);sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();payload=app/'Contents/Resources/app';assert all(sha(payload/n)==h for n,h in prepare['payload_hashes'].items());assert (r/'evidence/v9/candidate5delivery-full-transaction.exit').read_text().strip()=='0'
(d/'阶段验收摘要.txt').write_text('beta.5 增量候选交付，不是总目标完成。\n118项单测；原beta5包51项选定原生检查；本交付副本仅更新使用说明，app/desktop运行源码哈希与原beta5完全相同，重新签名后4项原生启动/投喂/往返/重载检查通过。\n三均衡档短时平均29.90–29.99FPS；荷塘节能14.83FPS。各组10秒预热、12秒测量，18鱼、DPR2、1280×788；不代表长时稳定，CPU/RSS未全面低于旧版，GPU利用率未知。\n原清池和旧包保留。全局快捷键、真实系统全屏、物理拖入/多屏/休眠、完整视频与动物连续视觉评审、沙滩独立材质及整体美术仍未验收。\n本包未公证，仅本地临时签名。详见使用说明、性能测量口径、可编辑源码与验证账本。\n')
shutil.copy2(r/'evidence/v9/package5-performance/测量口径与结论.txt',d/'性能测量口径.txt');shutil.copy2(r/'evidence/v9/package5-performance/comparison-table.csv',d/'性能数据.csv')
shots=d/'本轮运行截图';shots.mkdir(exist_ok=True);
for filename in ['01-delivery-open.png','02-delivery-lotus-day.png']:shutil.copy2(r/'evidence/v9/candidate5-delivery-native2'/filename,shots/filename)
appzip=r/'releases/蓬莱临水-0.9.0-beta.5-mac-arm64.zip';cmd=['ditto','-c','-k','--sequesterRsrc','--keepParent',str(d),str(appzip)];q=subprocess.run(cmd,capture_output=True,text=True) if not appzip.exists() else subprocess.CompletedProcess(cmd,0,'Existing archive retained after CRC/encoding audit','');assert q.returncode==0,q.stderr
with zipfile.ZipFile(appzip) as z:assert z.testzip() is None;assert any(n.endswith('Contents/MacOS/Qingchi') for n in z.namelist());assert any((i.filename if i.flag_bits&0x800 else i.filename.encode('cp437').decode('utf8')).endswith('使用说明.txt') for i in z.infolist())
sourcezip=r/'releases/蓬莱临水-0.9.0-beta.5-可编辑源码与素材.zip';assert not sourcezip.exists();files=[]
for name in ['app','desktop','art','tests','scripts']:
 files.extend(p for p in (r/name).rglob('*') if p.is_file() and '__pycache__' not in p.parts and not p.name.endswith('.pyc'))
for name in ['package.json','package-lock.json','THIRD_PARTY.txt','蓬莱临水0.9候选说明.txt','STATUS.json']:files.append(r/name)
for name in ['MODIFIED_FILE','DIFF_FILE','VERIFICATION','ROLLBACK']:
 p=Path(json.loads((r/'transaction/roles.json').read_text())[name]);files.append(p)
files.extend(r/'transaction'/n for n in ['BASELINE.js','roles.json']);files.extend((r/'transaction').glob('*baseline.tar.gz'));files.extend((r/'transaction').glob('*.patch'))
for name in ['v2-feature-baseline','visual-v1-baseline','v8-upgrade-baseline']:
 files.extend(p for p in (r/'transaction'/name).rglob('*') if p.is_file())
for name in ['candidate5-regression-summary/report.json','candidate5-delivery-native2/report.json','candidate5-delivery-native2/feed-trace.json','package5-performance/candidate-report.json','package5-performance/comparison-table.csv','package5-performance/测量口径与结论.txt','candidate5-delivery-prepare.json','versionbridge1-transaction.json','beta5_版本修复与原生回归记录.txt']:
 files.append(r/'evidence/v9'/name)
files=sorted(set(files));manifest={str(p.relative_to(r)):sha(p) for p in files};prefix='蓬莱临水-beta5-源码/'
with zipfile.ZipFile(sourcezip,'x',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for p in files:z.write(p,prefix+str(p.relative_to(r)))
 z.writestr(prefix+'ARCHIVE_MANIFEST.json',json.dumps(manifest,ensure_ascii=False,indent=2))
 z.writestr(prefix+'源码包说明.txt','此源码包包含app、desktop、原创素材与提示词、测试和构建脚本，不含node_modules及任何用户存档。安装依赖后可用npm test运行单测、npm start运行开发副本。执行前先读使用说明与各脚本参数；历史构建/验证脚本拒绝覆盖已存在输出。\ntransaction中四角色为同一项目记录；原路径保留作来源证据，跨机器运行时以解压目录为根。ROLLBACK.sh所需基线和归档已包含，只对独立标记副本使用。完整补丁REFERENCE_UPGRADE_SUPPLEMENT.patch可从v8-upgrade-baseline重建当前源树。\n账本为本次打包前快照；分发ZIP自身哈希不可能写进自身，另见外部candidate5-distribution.json。总目标尚未完成。\n')
with zipfile.ZipFile(sourcezip) as z:
 assert z.testzip() is None
 for n,h in manifest.items():assert hashlib.sha256(z.read(prefix+n)).hexdigest()==h
rec={'goal_complete':False,'app':str(app),'delivery_folder':str(d),'app_archive':{'path':str(appzip),'bytes':appzip.stat().st_size,'sha256':sha(appzip),'crc_pass':True,'command':cmd,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode},'source_archive':{'path':str(sourcezip),'bytes':sourcezip.stat().st_size,'sha256':sha(sourcezip),'crc_pass':True,'files':len(files),'all_member_hashes_match':True,'ledger_snapshot_sha256':manifest['transaction/VERIFICATION.txt']},'native_report':str(r/'evidence/v9/candidate5-delivery-native2/report.json'),'performance':str(r/'evidence/v9/package5-performance/candidate-report.json'),'original_beta5_payload_preserved':True};(r/'evidence/v9/candidate5-distribution.json').write_text(json.dumps(rec,ensure_ascii=False,indent=2));vf=r/'transaction/VERIFICATION.txt';v=json.loads(vf.read_text());v['candidate5_distribution']=rec;vf.write_text(json.dumps(v,ensure_ascii=False,indent=2));print(json.dumps(rec,ensure_ascii=False,indent=2))
