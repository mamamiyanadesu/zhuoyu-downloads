from pathlib import Path
import json,hashlib,html,os
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/'candidate12-autumn-review';out.mkdir(exist_ok=True);sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
native=json.load(open(e/'candidate12-autumn-props-native/report.json'));tx=json.load(open(e/'autumn-props1-transaction.json'));assert native['result']=='PASS';assert tx['restored_hashes_equal'] and tx['patch_reconstructs']
motions=[json.load(open(e/n/'report.json')) for n in ['autumn-props1-baseline-motion','candidate12-autumn-props-motion2']]
assert all(m['result']=='PASS' and len(m['checkpoints'])==3 and all(c['state']['scene']=='autumn' and c['state']['stored']['season']=='autumn' for c in m['checkpoints']) for m in motions)
for version in ['0.9.0-beta.11','0.9.0-beta.12']:
 b=json.load(open(e/f'package-{version}-build.json'));p=Path(b['app'])/'Contents/Resources/app';assert all(sha(p/n)==h for n,h in b['packagedFiles'].items())
assert all(sha(r/n)==h for n,h in b['packagedFiles'].items() if n.startswith(('app/','desktop/')))
text='''beta.12 秋季布置增量验收（总目标未完成）
变化：QingchiClearSampleCore.asset 新增 autumn 首分支，三地图可布置荷叶、芦苇和青石进入当季资源包。新增两张1254×1254原创RGBA：卷边枯荷、干莲蓬；干燥结穗芦苇。青石复用项目已有自然材质。不是统一底图调色；原清池背景、四季池底与前景、布置坐标/大小/旋转、动物身份和naturalStyle渲染模式均未改变。
来源：内置image_gen各生成一次，只以项目自有夏季植物作编辑参考；未复用参考安装包图片。原始提示词、源路径、SHA与alpha范围在art/autumn-garden-01。实际透明留白大于4%，不是提示词要求的12%；完整轮廓没有裁断，原图未做后处理。PNG是可编辑位图而非分层绘画源，不作独占版权保证。
技术：140项单测通过。打包版三地图资源和目录一致；植物/青石实体点击不投食，透明角落点击可投食；快速地图季节切换提交最终请求，其他季节不串入秋素材；地图往返和页面重载后布局、鱼与进度保留。原生专项不等同全项回归或新一轮物理睡眠/全进程重启验收。
失败保留：首次单测1项失败，旧beach-bed.test将秋季荷叶固定为通用素材；更新12地图季节组合的正确预期后140通过，未降低行为要求。一次py_compile因沙箱禁止缓存目录写入而退出1，改为内存compile后语法通过，未改运行逻辑。
同输入normal clear/lotus/beach×四季×lotus/reeds/rock：BASELINE秋季荷叶/芦苇为旧garden路径；MODIFIED为autumn独立资源，三地图秋季青石统一自然材质；ROLLBACK与BASELINE逐字一致。三态命令退出0、stderr空；54个基线文件哈希恢复一致，新资产/测试/元数据在副本回滚时移除；补丁重建一致。沿用原四角色记录，未替换为另一套。
视觉审阅：同1280×788逻辑视口、18鱼、同三物件布局截图显示，原多边形莲花与芦苇换成带自然叶脉、卷边和干穗的植被。三地图均未见大块黑底、白色矩形或缺图；不代表每个alpha边缘像素无瑕疵。芦苇投影仍带一定斜视感，沿用自有夏季参考；鱼体C形转身质感仍待修正。原清池保留夏季绿荷底图是已知边界，不声称原清池底图完全独立四季化。
录屏：实际打包应用真实时间戳VFR编码，未插帧；开始、投食前、结束三时点核对场景、存档季节、底图和素材路径。首段新版录像中途面板展开，触发原因未记录，不能将其当作全程安静对照；保留原件，重录增加安静视图检查及仅H/点击的最小事件日志，不拦截输入。使用脚本设置独立fixture，再通过原生鼠标输入投食；不把fixture设置冒充用户手动选季。捕获帧数不是渲染FPS，不保证取得每个渲染帧，不声明完整人工逐帧观看。
边界：仅本项目beta11/beta12前后比较，不是与碧潭观鱼的最终对照。完整参考视频、鱼体动态、权限相关全局轮盘、物理全屏/多屏/睡眠等仍未完成；没有夜景新制作。整体美术需要用户确认，不能宣布达到或超过对标。
'''
for label,m in zip(['BASELINE beta11','MODIFIED beta12'],motions):text+=f"{label}：{m['duration']:.3f}秒，{m['encodedFrames']}捕获/编码帧，{m['video']}。\n"
(out/'审阅结论.txt').write_text(text)
record={'result':'PASS','scope':'autumn manual props increment, not whole goal or subjective art acceptance','unit_count':140,'native_count':len(native['checks']),'native':str(e/'candidate12-autumn-props-native/report.json'),'scoped_transaction':str(e/'autumn-props1-transaction.json'),'motions':motions,'old_beta11_payload_unchanged':True,'beta12_payload_matches_source':True,'review':str(out/'审阅结论.txt')};(out/'report.json').write_text(json.dumps(record,ensure_ascii=False,indent=2))
rel=lambda p:html.escape(os.path.relpath(p,out),quote=True)
pairs=''
for m in ['clear','lotus','beach']:
 paths=[e/'autumn-props1-baseline-native'/f'{m}-autumn-day.png',e/'candidate12-autumn-props-native'/f'{m}-autumn-day.png'];assert all(p.is_file() for p in paths);pairs+=f'<h2>{m} 秋季，同布局18鱼</h2><div class="pair">'+''.join(f'<figure><img src="{rel(p)}"><figcaption>{label}</figcaption></figure>' for p,label in zip(paths,['BASELINE beta11','MODIFIED beta12']))+'</div>'
vids='<div class="pair">'+''.join(f'<figure><video controls preload="metadata" src="{rel(Path(m["video"]))}"></video><figcaption>{label}</figcaption></figure>' for m,label in zip(motions,['beta11','beta12']))+'</div>'
(out/'index.html').write_text('<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>beta12秋季布置对照</title><style>body{max-width:1600px;margin:24px auto;padding:20px;background:#f5f0e5;color:#514329;font:17px system-ui}.pair{display:grid;grid-template-columns:1fr 1fr;gap:14px}figure{margin:0}img,video{width:100%}pre{white-space:pre-wrap;line-height:1.65}</style><h1>秋季布置 · 增量对照</h1><p>仅本项目前后比较，不宣称完成整体对标。</p>'+pairs+'<h2>连续原生捕获</h2>'+vids+'<pre>'+html.escape(text)+'</pre></html>')
print('AUTUMN_PROPS_REPORT',out/'index.html')
