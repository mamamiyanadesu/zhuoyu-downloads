from pathlib import Path
import json,math,html,os
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/'candidate14-fish-body-review';out.mkdir(exist_ok=True);v=json.load(open(e/'candidate14-fish-body-verification/report.json'));tx=json.load(open(e/'fish-body1-transaction.json'));assert v['result']=='PASS' and tx['restored_hashes_equal'] and tx['patch_reconstructs'];b=v['baseline_analysis'];m=v['modified_analysis']
text=f'''beta.14 鱼体运动修正（整体目标未完成）
改动：Koi.constructor 初始化完整骨架；Koi.update 将逐帧随机急转替换为连续游走并限制速度方向转角；Koi.updateSpine 以有限角连续骨架、转向滞后与传播到尾端的行波生成身体。绘制仍使用原有鱼体轮廓、胸鳍、尾鳍、花纹、自绘笔迹和物种外观。没有新依赖/图片，没有更换鱼身份或存档格式。
两轮聚焦修正：第一轮beta13只改骨架，消除了反折但身体朝向滞后，7524条观测中405条朝向与速度相差超过90度，不接受这一版为最终运动修正。第二轮beta14同时平滑游动方向，替换旧抖动轨迹；因此不再宣称头部轨迹逐字保持。保留beta12基线、beta13中间包和第一轮代码，未覆盖。
本次原生采样：相同1280×788逻辑视口、18鱼、秋季荷塘及同三布置物件，真实打包应用；各自随机初始鱼，不是同一随机种子逐帧对照。约20Hz读取骨架，观测条目可能重复渲染帧，不是独立统计样本或全部渲染帧。
BASELINE beta12：{b['samples']}条姿态观测，相邻关节最大角{math.degrees(b['stats']['maxJoint']['max']):.2f}度；头尾直线距离/骨架总长最小{b['stats']['extension']['min']:.5f}；朝向与速度误差P95={math.degrees(b['stats']['headingError']['p95']):.2f}度，超过90度{b['heading_over90']}条。
MODIFIED beta14：{m['samples']}条姿态观测，相邻关节最大角{math.degrees(m['stats']['maxJoint']['max']):.2f}度；头尾比最小{m['stats']['extension']['min']:.5f}；方向误差P95={math.degrees(m['stats']['headingError']['p95']):.2f}度，超过90度{m['heading_over90']}条。关节间距保持4.34逻辑像素。该次样本未见反折或倒向姿态，不外推为任意未来状态绝无缺陷。
运动速度上限由源码与15/30/60/144fps模型测试验证；异步墙钟采样推算的velocityYawRate存在采样混叠，不作为实际逐渲染帧角速度证明，更不是性能FPS。
验收：148项单测；14项选定原生断言，含实际投食被鱼吃掉、暂停冻结骨架/恢复、进度保留，以及3秒提醒、18秒真实聚鱼、投喂解除循环、暂停取消、关动效仍完成、页面重载保持截止时间、备份与鱼进度保持。此次不是全进程重启或物理休眠验收。闹钟平均径向误差实测由170.37降到33.40逻辑像素，不能换算为跨机器统一性能或体验比例。
三态：同种子73119、16秒、15/30/60/144fps游走/反向食物输入和自绘鱼静止进食。BASELINE可出现反折；MODIFIED关节<=0.156rad、头尾比>0.9，新增单测要求食物可达、尾部非刚体摆动、方向限角和成长缩放。ROLLBACK逐字恢复BASELINE输出；52个基线文件SHA恢复一致，补丁可重建新版。自绘字段与静止进食事件三态一致，旧随机轨迹在修改版有意改变。
失败边界：两次单测的VM跨域对象原型比较错误，经JSON规格化后比较全部字段；两个原生验证入口在页面未就绪时访问未定义全局，改为安全等待window属性后通过。均保留失败日志，未据此修改产品功能或跳过验收。
视觉：已查看完整视口起始截图、每2秒共10帧概览及首2秒6Hz共12帧局部采样。鱼身从团缩C形变为完整连续轮廓，局部序列可见胸鳍/尾端相对身体姿态变化，不是单图整体平移替代全部动作。稀疏人工查看不是完整人工播放/逐帧检查，也不是主观美术认可。
范围：对比本项目beta12/beta14，不是碧潭观鱼最终对标。四季植物与地图资源沿用已验证版本；没有新增夜景。完整最终包回归、性能、源码/安装包归档、参考五集连续核查，以及权限/真实全屏/多屏/睡眠条件仍待处理。整体目标不标完成。
'''
for name,motion in [('BASELINE beta12',v['baseline_motion']),('MODIFIED beta14',v['motion'])]:text+=f"{name}录像：{motion['duration']:.3f}秒，{motion['encodedFrames']}捕获/编码帧，{motion['video']}。\n"
(out/'审阅结论.txt').write_text(text);record={'result':'PASS','scope':'fish motion increment;not fullgoal or subjective art acceptance','native_evidence':str(e/'candidate14-fish-body-verification/report.json'),'scoped_transaction':str(e/'fish-body1-transaction.json'),'implementation_rounds':2,'review':str(out/'审阅结论.txt'),'visual_samples':{'overview':10,'detail':12,'complete_manual_playback':False}};(out/'report.json').write_text(json.dumps(record,ensure_ascii=False,indent=2));rel=lambda p:html.escape(os.path.relpath(p,out),quote=True)
pairs=[]
for label,d in [('BASELINE beta12','fish-body1-baseline-motion'),('MODIFIED beta14','candidate14-fish-body-motion')]:
 p=e/d/'autumn-start.png';assert p.is_file();video=e/d/'fish-body-feed-20s.mp4';assert video.is_file();pairs.append(f'<figure><h2>{label}</h2><img src="{rel(p)}"><video controls preload="metadata" src="{rel(video)}"></video></figure>')
(out/'index.html').write_text('<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>鱼体运动前后对照</title><style>body{max-width:1600px;margin:24px auto;padding:20px;background:#f5f1e7;color:#344637;font:17px system-ui}.pair{display:grid;grid-template-columns:1fr 1fr;gap:16px}figure{margin:0}img,video{width:100%}pre{white-space:pre-wrap;line-height:1.7}</style><h1>beta14 · 鱼体反折与倒滑修正</h1><p>本项目前后对照；不宣称整体对标完成。</p><div class="pair">'+''.join(pairs)+'</div><h2>首2秒局部采样（非全部帧）</h2><img style="max-width:960px" src="fish-first2s-detail.png"><pre>'+html.escape(text)+'</pre></html>')
print('FISH_BODY_REVIEW',out/'index.html')
