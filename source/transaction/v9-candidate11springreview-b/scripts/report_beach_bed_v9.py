from pathlib import Path
from PIL import Image,ImageDraw
import json,hashlib,html,os
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/'candidate7-beach-review';out.mkdir(exist_ok=True)
base=json.loads((e/'beach-bed1-baseline-native/report.json').read_text());native=json.loads((e/'candidate7-beach-bed-native/report.json').read_text());motion=json.loads((e/'candidate7-beach-motion/report.json').read_text());tx=json.loads((e/'beach-bed1-transaction.json').read_text());assert native['result']==motion['result']=='PASS';assert (e/'candidate7-beach-motion.exit').read_text().strip()=='0';assert tx['restored_hashes_equal'] and tx['patch_reconstructs'];sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
for version in ['0.9.0-beta.6','0.9.0-beta.7']:
 build=json.loads((e/f'package-{version}-build.json').read_text());bundle=Path(build['app'])/'Contents/Resources/app';assert all(sha(bundle/n)==h for n,h in build['packagedFiles'].items())
assert all(sha(bundle/f.relative_to(r))==sha(f) for name in ['app','desktop'] for f in (r/name).rglob('*') if f.is_file())
before=e/'beach-bed1-baseline-native/beach-summer-day.png';after=e/'candidate7-beach-bed-native/beach-summer-day.png';im=Image.new('RGB',(1600,532),'#f6f3e8');draw=ImageDraw.Draw(im)
for i,p in enumerate([before,after]):
 q=Image.open(p).convert('RGB');q.thumbnail((800,493));im.paste(q,(i*800,32));draw.text((i*800+12,10),'BASELINE beta6' if i==0 else 'MODIFIED beta7',fill='#20392f')
im.save(out/'before-after.jpg',quality=94)
raw=json.loads((e/'candidate7-beach-motion/raw-capture.json').read_text());frames=raw['frames'];start=frames[0]['timestamp'];picks=[min(frames,key=lambda f:abs(f['timestamp']-start-t)) for t in [1,5.5,7.5,18]];grid=Image.new('RGB',(1280,836),'#f6f3e8');draw=ImageDraw.Draw(grid)
for i,f in enumerate(picks):
 p=e/'candidate7-beach-motion/frames'/f['file'];q=Image.open(p);q.thumbnail((640,394));x=i%2*640;y=i//2*418;grid.paste(q,(x,y+24));draw.text((x+8,y+5),f"Actual captured frame {f['timestamp']-start:.3f}s",fill='#20392f')
grid.save(out/'motion-samples.jpg',quality=94)
review=f'''beta7 夏季独立沙底增量验收（2026-11-08）
结论：夏季沙滩不再复用荷塘的四角岩石底图。已在实际打包 Mac arm64 应用验证；整体对标尚未完成。

改动与来源
仅夏季沙滩使用新独立细沙PNG（1672×941，RGB不透明）。内置 image_gen 生成，以本项目原创夏季底图作材质/光照参考，未使用参考安装包图片或新增第三方依赖。
资产：{r/'app/assets/scenes/beach/summer/bed-v1.png'}
提示词：{r/'art/beach-bed-01/prompts.json'}
生成来源/尺寸/SHA：{r/'art/beach-bed-01/assets.json'}
位图原件、提示词、配置和遮挡代码均保留；位图不是可编辑分层绘画源文件，不作独占版权或商业清权保证。

实际机制
SceneManifest.assetsFor/rocksFor/mapPlan 将夏季沙滩底图与对应岩石遮挡一起选取，QingchiScene.select 在解码完成后提交；布局、水面采样、命中和遮挡读取同一个地图季节资源。只清除新沙底已不存在的旧四角岩石遮挡；水域/沙岸几何、手动布置遮挡没有被关闭。
第一版宽视口检查发现原自动荷叶落到沙岸，第二轮把夏季沙滩自动左荷叶移到水域；原清池和荷塘位置不变。重叠过滤保留，新增“按实际自动位置布置手动物件”的覆盖测试。

验证
126项单测通过。beta6基线与beta7实际打包版分别11项针对性检查：三地图底图与解码状态、原岩石位置/开放水面/干沙岸真实鼠标输入、冬季旧路由保留、切图切季竞态、900×650与1536×864模拟视口、返回清池及真实页面重载后布局/鱼/收藏/进度保持。
默认截图1280×788、18条环境鱼、夏季白天晴天、访客关闭。原始测试存档收藏鱼为空，不能把本次默认存档结果单独当作任意旧存档迁移验证。缩放是CDP逻辑视口测试，不是物理多屏或真实窗口拖拽。
同输入beach summer source-point(0.1,0.1)：BASELINE共享夏底/岩石true/4个遮挡；MODIFIED独立沙底/岩石false/0个旧岩石遮挡；ROLLBACK恢复共享夏底/true/4。恢复哈希与补丁重建均一致。原清池、荷塘与冬季资源路径在三个状态中一致。
真实点击旧岩石区由不投喂变为投喂一次；普通水面仍投喂一次，干岸仍不投喂。未扩大水域几何边界。
旧beta6包逐文件哈希保持不变；新beta7 app/desktop负载与当前源码一致。临时签名，未Apple公证。

图像检查与动态证据
已直接查看基线1280截图、第一版1280/900/1536截图、第二版1280/1536截图、最终打包版1280/1536截图。最终画面为浅黄沙岸与青绿水域，荷叶位于水中，岩石为保留的独立手动布置，不再有荷塘四角巨石框。
前后对照使用同逻辑视口、鱼量、时间主题，鱼的随机位置不同；不是像素级差分验收。主观新沙底风格仍待用户确认。
另录制实际beta7约{motion['duration']:.3f}秒，{motion['encodedFrames']}个实际编码帧，包含一次原生鼠标投喂。按捕获时间戳VFR编码，无插帧；不是每个渲染帧都无损记录，捕获帧率不作为性能测试。附4张实际捕获帧抽样图，不能把抽样记作完整人工观看。

失败和边界
首次单测失败是旧布局探针缺少新增assetsFor/rocksFor桩，补齐后保留原几何断言；第二次失败是旧重叠夹具位置不再覆盖已移入水域的荷叶，保留原位置的非重叠结果并增加真正重叠位置检查，未删除遮挡要求。
本轮只完成夏季沙滩底材质：春/秋/冬沙滩独立材质、春秋布置材质统一、全局系统功能、完整参考视频观看、全量最终包回归和整体验收仍待完成；未制作夜景，不宣称达到或超过对标。
'''
(out/'审阅结论.txt').write_text(review)
record={'result':'PASS','scope':'Summer beach original material and native routing/input/rollback increment; whole goal remains open','checks':native['checks']+motion['checks'],'native':str(e/'candidate7-beach-bed-native/report.json'),'motion':motion,'baseline_native':str(e/'beach-bed1-baseline-native/report.json'),'transaction':str(e/'beach-bed1-transaction.json'),'unit_count':126,'old_beta6_payload_unchanged':True,'new_payload_matches_source':True,'review':str(out/'审阅结论.txt'),'viewed_composite_files':[str(e/n) for n in ['beach-bed1-baseline-native/beach-summer-day.png','beach-bed1-source-native/beach-summer-day.png','beach-bed1-source-native/beach-summer-900.png','beach-bed1-source-native/beach-summer-1536.png','beach-bed2-source-native/beach-summer-day.png','beach-bed2-source-native/beach-summer-1536.png','candidate7-beach-bed-native/beach-summer-day.png','candidate7-beach-bed-native/beach-summer-1536.png']],'motion_sample_frames':picks}
(out/'report.json').write_text(json.dumps(record,ensure_ascii=False,indent=2));video=html.escape(os.path.relpath(motion['video'],out),quote=True);page=f'<!doctype html><meta charset="utf-8"><title>beta7 夏季独立沙底</title><style>body{{max-width:1600px;margin:28px auto;background:#f6f3e8;color:#233b31;font:17px system-ui}}img,video{{max-width:100%}}pre{{white-space:pre-wrap;line-height:1.65}}</style><h1>beta7 夏季独立沙底 · 增量验收</h1><img src="before-after.jpg"><h2>实际打包版短时录像</h2><video controls preload="metadata" src="{video}"></video><h2>四帧抽样</h2><img src="motion-samples.jpg"><pre>{html.escape(review)}</pre>';(out/'index.html').write_text(page);print(json.dumps({'report':str(out/'report.json'),'nativeChecks':len(native['checks']),'recordingSeconds':motion['duration'],'motionFrames':motion['encodedFrames']},ensure_ascii=False))
