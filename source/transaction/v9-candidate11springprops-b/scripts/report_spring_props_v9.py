from pathlib import Path
import json,hashlib,html,os
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/'candidate11-spring-review';out.mkdir(exist_ok=True);sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
native=json.load(open(e/'candidate11-spring-props-native2/report.json'));tx=json.load(open(e/'spring-props1-transaction.json'));assert native['result']=='PASS';assert tx['restored_hashes_equal'] and tx['patch_reconstructs'];motions=[json.load(open(e/n/'report.json')) for n in ['spring-props1-baseline-motion2','candidate11-spring-props-motion']];assert all(m['result']=='PASS' for m in motions)
for v in ['0.9.0-beta.10','0.9.0-beta.11']:
 b=json.load(open(e/f'package-{v}-build.json'));p=Path(b['app'])/'Contents/Resources/app';assert all(sha(p/n)==h for n,h in b['packagedFiles'].items())
assert all(sha(r/n)==h for n,h in b['packagedFiles'].items() if n.startswith(('app/','desktop/')))
text='''beta.11 春季布置增量（整个对标目标仍未完成）
变化：QingchiClearSampleCore.asset 的 spring 首分支，仅更换三地图可布置荷叶/芦苇和青石素材路由。嫩叶/闭合花苞与新生芦苇为两张独立原创1254×1254 RGBA，青石复用已有自然材质。原清池底图、四季池底、樱花/花瓣、布置坐标/大小、鱼和进度、动物渲染模式保持；naturalStyle标志未更改。
生成：内置image_gen各生成一次；原项目夏季植物为编辑参考，不使用参考安装包图像。提示词、原始来源、hash/alpha在art/spring-garden-01。原夏季PNG未覆盖，AI位图不等于分层绘画源，不保证独占版权。
技术：135项单测通过；基线beta10与源码原生各9项；最终beta11原生13项（含三实体内部不投食、透明角落可投食的真实点击日志）。三地图资源/目录一致，其他季节无春素材串入，快速地图×季节提交最终请求，往返和页面重载保留布局与共享进度。不是新一轮物理睡眠或全进程重启验收。
第一次打包检查在小数边缘采样失败，保留failure.json与退出1。未记录首次真实点击的精确命中，不能断言根因；检查器改成整数实体内部3×3邻域并记录trusted事件，第二次全部通过，没有改应用负载或削弱实体/透明区域要求。
同输入normal clear/lotus/beach×四季×lotus/reeds/rock：BASELINE春季荷叶/芦苇旧assets/garden路径；MODIFIED为spring独立资源，春季青石统一自然材质；ROLLBACK与BASELINE完全相同。三态命令退出0、stderr空；53个基线文件哈希恢复一致，新增资源/测试/元数据在副本回滚时移除；补丁重建一致。完整四角色继续沿用。
美术：基线与源码同视口/18鱼/同三部件位置截图已查看，新叶脉、嫩芽、矿物质感取代平面多边形。透明合成未见大块黑底或白边；不是所有边缘像素的证明。草叶姿态仍沿用自有夏季参考的俯视表现，实际观感应由用户确认。秋季布置与鱼C形转身质感、完整参考视频对照仍有缺口。清池原底保留造成冬季绿叶的既有边界未改变。
录像为原生打包版按真实捕获时间戳VFR编码，未插帧；不保证捕获每个渲染帧，不作为性能FPS，也不宣称完整人工观看。没有夜景新制作；系统权限继续按用户要求留待稍后手动授权。
'''
for label,m in zip(['BASELINE beta10','MODIFIED beta11'],motions):text+=f"{label} 录像：{m['duration']:.3f}秒，{m['encodedFrames']}捕获/编码帧，路径{m['video']}。\n"
(out/'审阅结论.txt').write_text(text);record={'result':'PASS','scope':'spring manual props increment, not whole goal or subjective aesthetic approval','checks':native['checks'],'unit_count':135,'native':str(e/'candidate11-spring-props-native2/report.json'),'scoped_transaction':str(e/'spring-props1-transaction.json'),'motions':motions,'old_beta10_payload_unchanged':True,'beta11_payload_matches_source':True,'review':str(out/'审阅结论.txt')};(out/'report.json').write_text(json.dumps(record,ensure_ascii=False,indent=2))
rel=lambda p:html.escape(os.path.relpath(p,out),quote=True)
pairs=''
for m in ['clear','lotus','beach']:
 paths=[e/'spring-props1-baseline-native'/f'{m}-spring-day.png',e/'candidate11-spring-props-native2'/f'{m}-spring-day.png'];assert all(p.is_file() for p in paths);pairs+=f'<h2>{m} 春季，同一布局，18鱼</h2><div class="pair">'+''.join(f'<figure><img src="{rel(p)}"><figcaption>{label}</figcaption></figure>' for p,label in zip(paths,['BASELINE beta10','MODIFIED beta11']))+'</div>'
vids='<div class="pair">'+''.join(f'<figure><video controls preload="metadata" src="{rel(Path(m["video"]))}"></video><figcaption>{label} 原生捕获</figcaption></figure>' for m,label in zip(motions,['beta10','beta11']))+'</div>'
(out/'index.html').write_text('<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>beta11春季布置对照</title><style>body{max-width:1600px;margin:24px auto;padding:20px;background:#f5f4e9;color:#254635;font:17px system-ui}.pair{display:grid;grid-template-columns:1fr 1fr;gap:14px}figure{margin:0}img,video{width:100%}pre{white-space:pre-wrap;line-height:1.65}</style><h1>春季布置 · 增量对照</h1><p>仅与本项目beta10比较，不是对碧潭观鱼的最终对标验收。</p>'+pairs+'<h2>连续原生录像</h2>'+vids+'<pre>'+html.escape(text)+'</pre></html>')
print('SPRING_PROPS_REPORT',out/'index.html')
