from pathlib import Path
import json,hashlib,html,os
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/'candidate8-spring-review';out.mkdir(exist_ok=True)
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
native=json.loads((e/'candidate8-spring-beach-native/report.json').read_text());motion=json.loads((e/'candidate8-spring-beach-motion2/report.json').read_text());tx=json.loads((e/'spring-beach1-transaction.json').read_text());assert native['result']==motion['result']=='PASS';assert tx['restored_hashes_equal'] and tx['patch_reconstructs']
for version in ['0.9.0-beta.7','0.9.0-beta.8']:
 build=json.loads((e/f'package-{version}-build.json').read_text());bundle=Path(build['app'])/'Contents/Resources/app';assert all(sha(bundle/n)==h for n,h in build['packagedFiles'].items())
assert all(sha(bundle/f.relative_to(r))==sha(f) for name in ['app','desktop'] for f in (r/name).rglob('*') if f.is_file())
raw=json.loads((e/'candidate8-spring-beach-motion2/raw-capture.json').read_text());frames=raw['frames'];start=frames[0]['timestamp'];picks=[min(frames,key=lambda f:abs(f['timestamp']-start-t)) for t in [1,5.5,7.5,18]]
review=f'''beta8 春季沙滩增量验收（2026-11-08）
结论：已交付独立春季沙底与自然青石的 Mac arm64 候选包；不是整个对标项目完成。

改动：SceneManifest.assetsFor/rocksFor/mapPlan 增加春季沙滩路由，清除旧底图不存在的两处岩石遮挡。ClearSampleCore.asset 仅为春季沙滩 rock 选择本项目已有自然青石；其他物件、地图和季节不变。资源仍按原子解码提交。
新底图为1672×941 RGB原创生成PNG；提示词与来源在art/spring-beach-01。未复制参考安装包资产。原始PNG、提示词与代码保留，非分层绘画源，也不保证独占版权。

实测：128项单元测试通过。最终beta8原生窗口12项针对性检查通过，包括春季清池/荷塘/沙滩、原岩石位置和水面/干岸点击、冬夏路径保留、切图切季竞态、900×650及1536×864逻辑视口、回到清池并页面重载后状态保持。没有把页面重载写作操作系统重启或睡眠验收。
同输入beach spring source-point(0.1,0.1)：BASELINE共享春季底图、rock=true、2处旧岩石遮挡；MODIFIED独立春季沙底、rock=false、0处旧岩石遮挡；ROLLBACK与BASELINE一致。三次退出码均为0，stderr为空。原沙岸仍不接受投喂，未扩大水域边界。恢复哈希及补丁重建一致。
截图固定1280×788、18条环境鱼、白天晴天，关闭随机访客；随机鱼位置不同。默认测试存档收藏为空，本次不能单独证明任意旧存档迁移。
旧beta7负载逐文件哈希不变，新beta8 app/desktop与源码一致。只作临时签名，未Apple公证。最终全项原生回归尚未完成。

画面与动态：独立浅沙底去掉了荷塘大石角框，春季花枝保留；第一版仍显示几何青石，第二轮改用已有自然青石，未改布局。已查看基线、两轮源码1280截图及最终1536截图；抽帧检查另行记录，不把静态截图视作完整动态验收。
实际打包版录像{motion['duration']:.3f}秒、{motion['encodedFrames']}帧，包含一次鼠标投喂。按真实捕获时间戳VFR编码，无插帧；捕获不保证覆盖每个渲染帧，不当作30fps性能指标。下方4张仅为抽样，不宣称完整观看。

错误保留：首次源码GUI启动在沙箱内未获得调试端点，exit1；切换明确GUI权限后成功。Python编译缓存写权限失败，改为不写缓存的语法检查。首次录像检查器读取尚不存在的全局变量，exit1、0帧；改为window可选访问后重试。这些不是伪装成成功的应用输出。

范围边界：本轮仅完成春季沙滩材质增量。秋冬沙滩独立材质、春秋其他布置材质统一、完整作者视频顺序观看与对照、外部应用全局轮盘、真实全屏/多屏/睡眠及最终全量回归仍未完成。遵守已确认的日景范围，不新增夜景制作。整体美术认可仍由用户确认，不宣称达到或超过对标。
'''
(out/'审阅结论.txt').write_text(review)
record={'result':'PASS','scope':'Spring beach increment only; full goal active','checks':native['checks']+motion['checks'],'unit_count':128,'baseline_native':str(e/'spring-beach1-baseline-native/report.json'),'native':str(e/'candidate8-spring-beach-native/report.json'),'motion':motion,'transaction':str(e/'spring-beach1-transaction.json'),'old_beta7_payload_unchanged':True,'new_payload_matches_source':True,'review':str(out/'审阅结论.txt'),'motion_sample_frames':picks}
(out/'report.json').write_text(json.dumps(record,ensure_ascii=False,indent=2))
rel=lambda p:html.escape(os.path.relpath(p,out),quote=True)
before=e/'spring-beach1-baseline-native/beach-spring-day.png';after=e/'candidate8-spring-beach-native/beach-spring-day.png'
samples=''.join(f'<figure><img src="{rel(e/"candidate8-spring-beach-motion2/frames"/f["file"])}"><figcaption>{f["timestamp"]-start:.3f}s 实际捕获帧</figcaption></figure>' for f in picks)
page=f'''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>beta8 春季沙滩增量</title><style>body{{max-width:1600px;margin:24px auto;padding:20px;background:#f6f3e8;color:#233b31;font:17px system-ui}}.pair{{display:grid;grid-template-columns:1fr 1fr;gap:12px}}figure{{margin:0}}img,video{{width:100%}}pre{{white-space:pre-wrap;line-height:1.7}}@media(max-width:700px){{.pair{{grid-template-columns:1fr}}}}</style><h1>beta8 春季沙滩 · 增量候选</h1><p>同视口 / 18条鱼 / 白天晴天。这里只比较本项目beta7与beta8，不是与碧潭观鱼的最终对照。</p><div class="pair"><figure><img src="{rel(before)}"><figcaption>BASELINE beta7</figcaption></figure><figure><img src="{rel(after)}"><figcaption>MODIFIED beta8</figcaption></figure></div><h2>实际打包版录像</h2><video controls preload="metadata" src="{rel(Path(motion['video']))}"></video><h2>四帧抽样</h2><div class="pair">{samples}</div><pre>{html.escape(review)}</pre></html>'''
(out/'index.html').write_text(page)
for p in [before,after,Path(motion['video']),*[e/'candidate8-spring-beach-motion2/frames'/f['file'] for f in picks]]:assert p.is_file() and p.stat().st_size>0
print(json.dumps({'report':str(out/'report.json'),'seconds':motion['duration'],'frames':motion['encodedFrames'],'sample_paths':[str(e/'candidate8-spring-beach-motion2/frames'/f['file']) for f in picks]},ensure_ascii=False))
