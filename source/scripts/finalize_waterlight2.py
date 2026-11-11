from pathlib import Path
import json,hashlib,zipfile,subprocess,shutil
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';tx=r/'transaction';v=r/'variants/spring-peach-02/source';old=r/'variants/spring-peach-01/source';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();app=r/'releases/春池-水光样板02-mac-arm64.app';archive=app.with_suffix('.zip')
for n in ['waterlight2-baseline-native','waterlight2-final-fixed-native','waterlight2-rollback-reload-fixed']:
 j=json.loads((e/n/'report.json').read_text());assert j['result']=='PASS' and len(j['checks'])==6
manifest=json.loads((v.parent/'baseline-manifest.json').read_text());assert all(sha(old/n)==h for n,h in manifest.items());original=json.loads((r/'variants/spring-peach-01/source-baseline-manifest.json').read_text());assert all(sha(r/n)==h for n,h in original.items())
assert sha(tx/'waterlight2-rollback-native.app/Contents/Resources/app/app/scene-water.js')==manifest['app/scene-water.js']
# Reapply the verified goal to its modified role after the separate rollback probe.
assert sha(tx/'waterlight2-reconstruct/app/scene-water.js')==sha(v/'app/scene-water.js');shutil.copy2(tx/'waterlight2-reconstruct/app/scene-water.js',v/'app/scene-water.js')
assert all(sha(app/'Contents/Resources/app'/n)==sha(v/n)for n in manifest)
with zipfile.ZipFile(archive)as z:
 assert z.testzip() is None;count=0
 for info in z.infolist():
  name=info.filename
  if not info.flag_bits&0x800:
   try:name=name.encode('cp437').decode('utf8')
   except (UnicodeEncodeError,UnicodeDecodeError):pass
  prefix=app.name+'/Contents/Resources/app/'
  if name.startswith(prefix) and not info.is_dir():
   rel=name[len(prefix):];assert hashlib.sha256(z.read(info)).hexdigest()==sha(v/rel),rel;count+=1
 assert count==201,count
native=[]
for label,folder,log in [('BASELINE','waterlight2-baseline-native',None),('MODIFIED','waterlight2-final-fixed-native','waterlight2-final-fixed'),('ROLLBACK','waterlight2-rollback-reload-fixed','waterlight2-rollback-reload-fixed')]:
 j=json.loads((e/folder/'report.json').read_text());native.append({'label':label,'report':str(e/folder/'report.json'),'exit':0,'checks':j['checks'],'stdout':(e/(log+'.stdout')).read_text()if log else 'Console output retained in original execution; full observations in report.json','stderr':(e/(log+'.stderr')).read_text()if log else '','command':'WATER_APP='+j['executable'].split('/Contents/MacOS/')[0]+' WATER_LABEL='+folder+' WATER_VERSION='+('0.9.0-spring-peach.1'if label=='BASELINE'else '0.9.0-spring-peach.2')+' node '+str(r/'scripts/verify_spring_waterlight.cjs')})
roles=json.loads((tx/'roles.json').read_text());report={'source':str(v),'app':str(app),'zip':str(archive),'archive_sha256':sha(archive),'archive_bytes':archive.stat().st_size,'zip_crc_verified':True,'payload_files_verified':count,'spring_sample01_unchanged_files':len(manifest),'original_source_unchanged_files':len(original),'modified_shader':str(v/'app/scene-water.js'),'modified_sha256':sha(v/'app/scene-water.js'),'baseline_sha256':manifest['app/scene-water.js'],'patch':str(tx/'WATERLIGHT2_SUPPLEMENT.patch'),'roles':roles,'native':native,'recording':str(e/'waterlight2-final-fixed-native/spring-peach-live.mp4'),'recording_frames':478,'recording_seconds':17.145670890808105,'pause_note':'About 1.2s deliberate manual pause/resume included; no generated/interpolated frames. Encoding duration 17.118s.','rollback_hash_matches':True,'patch_reconstruction_matches':True,'reapplied_goal_matches_packaged_bytes':True,'failures_retained':[{'path':str(e/'waterlight2-final-native/failure.json'),'exit':1,'fix':'GLSL reserved patch renamed lightEnvelope; actual GPU rerun passed'},{'path':str(e/'waterlight2-rollback-native/failure.json'),'exit':1,'fix':'Reload verifier waits for requested spring rather than initial default summer; no product change, same rollback app passed6'}],'scope':'Independent spring water-light sample only. Same peach art, koi engine, corner occlusion and feeding; no global config or other seasons changed. Ad-hoc signed, not notarized. Short native check is not longterm stability proof. Aesthetic/motion preference requires user review.'}
with(tx/'VERIFICATION.txt').open('a')as f:f.write('\n\nWATERLIGHT2_FINAL_NATIVE_AND_DELIVERY\n'+json.dumps(report,ensure_ascii=False,indent=2)+'\n')
reopened=[]
for role,p in roles.items():
 p=Path(p);raw=p.read_bytes();reopened.append({'role':role,'path':str(p),'bytes':len(raw),'sha256':sha(p)});print(role,str(p),len(raw),sha(p))
for p in [v/'app/scene-water.js',tx/'WATERLIGHT2_SUPPLEMENT.patch',tx/'waterlight2-baseline.js']:
 raw=p.read_bytes();print('SUPPLEMENT',p,len(raw),sha(p))
report['roles_reopened']=reopened;(e/'waterlight2-delivery.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
(v.parent/'README.txt').write_text('春池 · 水光样板02\n\n仅改春季光纹：scene-water.js DISPLAY 的 spring 分支改为7组不同方向缓慢行进波、折射射线密度、断续强光与微弱表面闪光。旧桃花底图、鱼、岸边遮挡、投喂保留。样板01及主工程原始字节未改。\n\nBASELINE：两组周期线交叉的大网纹。MODIFIED：refracted-ray-density-v2，细碎断续亮纹与缓慢聚散。ROLLBACK：独立副本恢复旧shader，SHA一致。三组原生检查均6项通过：启动/投喂/装饰阻挡/暂停恢复/实录/重载；测试是自动原生输入，不等于人工美术认可或长期稳定性测试。\n\n实录17.145秒/478捕获帧，无生成插帧，含约1.2秒主动暂停测试；视频编码时长17.118秒。独立正式样板存档Qingchi-Spring-Peach-Sample-02；QA仅用项目内隔离测试存档。Mac Apple Silicon、临时签名、未公证；未扩展其他季节。\n\n补充变更：'+str(tx/'WATERLIGHT2_SUPPLEMENT.patch')+'\n回滚：sh "'+str(tx/'ROLLBACK.sh')+'" --spring-waterlight-file /path/to/marked-copy/scene-water.js\n目标所在目录需有.qingchi-waterlight-copy标记；拒绝活动源码、符号链接、硬链接。需与同目录waterlight2-baseline.js一起保留。\n\n证据：'+str(e/'waterlight2-delivery.json')+'\n下一步：等用户确认光纹密度、亮度、速度，未认可前不扩展四季。\n')
p=r/'STATUS.json';s=json.loads(p.read_text());s.update({'ACTIVE_OBJECT':str(v),'LAST_CONFIRMED_RESULT':'User accepts overall spring direction; water-light sample02 created on isolated copy. Baseline/modified/rollback native6checks each and17.145s478-frame final recording complete; originalsample01 androot unchanged. Aesthetic approval of revisedwater pending.','NEXT_EXECUTABLE_ACTION':'Await user feedback on sample02 water caustic scale, broken highlights, brightness and gentle movement; preserve original sample01. Do not resume beta15 or expand seasons.','INPUT_PATHS':[str(v.parent/'README.txt'),str(e/'waterlight2-delivery.json'),str(e/'waterlight2-final-fixed-native/report.json'),str(e/'waterlight2-transaction.json')],'ACCEPTANCE_EVENT':'Deliver an isolated spring sample with natural-looking broken slow-moving water caustics, real native interaction recording and verified rollback. User aesthetic judgment remains separate.','current_spring_sample':str(app),'transaction_pending':False,'resume_progress':'Water sample02 complete and delivered for visual feedback. No pending evaluator or generation.','user_scope_gate':'Spring sample01 overall acceptable per user; only water caustic/reflection and subtle motion improvement authorized. No other seasons or beta15 acceptance resumed.'});p.write_text(json.dumps(s,ensure_ascii=False,indent=2)+'\n')
# Reopen final reports and state too.
for p in [e/'waterlight2-delivery.json',v.parent/'README.txt',r/'STATUS.json']:assert p.read_bytes()
print('WATERLIGHT2_DELIVERY_PASS',archive,'PAYLOAD',count,'SHA',sha(archive))
