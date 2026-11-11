from pathlib import Path
import json,hashlib,html,os
r=Path(__file__).resolve().parent.parent;e=r/'evidence/v9';out=e/'candidate6-motion-review';native=json.loads((e/'candidate6-motion-native2/report.json').read_text());assert native['result']=='PASS';assert (e/'candidate6-motion-native2.exit').read_text().strip()=='0'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
for version in ['0.9.0-beta.5','0.9.0-beta.6']:
 build=json.loads((e/f'package-{version}-build.json').read_text());bundle=Path(build['app'])/'Contents/Resources/app';assert all(sha(bundle/f)==h for f,h in build['packagedFiles'].items())
build=json.loads((e/'package-0.9.0-beta.6-build.json').read_text());bundle=Path(build['app'])/'Contents/Resources/app'
assert all(sha(bundle/f.relative_to(r))==sha(f) for name in ['app','desktop'] for f in (r/name).rglob('*') if f.is_file())
clips=native['clips'];total=0;seconds=0;pertype={}
for clip in clips:
 p=Path(clip['video']);clip['bytes']=p.stat().st_size;clip['sha256']=sha(p);total+=clip['capture']['frames'];seconds+=clip['capture']['seconds'];d=json.loads((Path(clip['dir'])/'capture.json').read_text());last={}
 for t in d['trace']:
  sim=t['habitat']['simulation']
  for v in sim['visitors']:
   prev=last.get(v['id']);delta=abs(v['angle']-prev['angle']) if prev else 0;dt=sim['time']-prev['time'] if prev else 0
   if dt>0:pertype[v['type']]=max(pertype.get(v['type'],0),delta/dt)
   last[v['id']]={'angle':v['angle'],'time':sim['time']}
samples=json.loads((out/'sample-index.json').read_text());turn=json.loads((out/'turn-comparison-samples.json').read_text());unique=set(x['frame'] for s in samples for x in s['entries']);unique.update(x['file'] for s in turn for x in s['frames'])
text=f'''beta6 动物连续转向修正与录制记录（2026-11-08）
结论：实际 Mac arm64 beta6 候选应用已验证连续转向与自然访客。本轮是局部动作修复，不是整个对标项目完成。

问题与改动
beta5 真实连续记录暴露换方向时角度瞬跳（示例乌龟约171.3度），原有生命周期/关节测试没覆盖这类观感缺陷。
app/habitat-core.js 的 QingchiHabitatCore.create.turnToward 与 step 的 moving/leaving 分支现按最短弧、物种角速度先转向再平移。慢速动物转向不消耗离场行走时间；螃蟹保持横向。手动布置、原清池底图与用户存档不变。
同输入：seed3521 / lotus / high / 3600步 / dt1/60。
BASELINE：最大单步179.633886度，超过90度跳变59次。
MODIFIED：最大单步6度，超过90度跳变0次，仍有11124次位移样本。
ROLLBACK：最大单步179.633886度，超过90度跳变59次；恢复哈希一致，补丁重建一致。
121项单测通过。修改了1个生产行为文件及版本/候选说明；测试和录制控制器为辅助文件。beta5旧包逐文件哈希保留，beta6包内app/desktop与当前源码一致。

真实打包版记录
应用：{native['executable']}
完整记录4段：荷塘五种指定动物完整生命周期、沙滩螃蟹完整生命周期、荷塘自然随机50秒、沙滩自然随机50秒。指定邀请不代表随机模式；自然两段没有调用observe。
本轮合计{total}个实际编码帧，{seconds:.3f}秒（各段起止之间总和）。1280×788 CDP合成画面、JPEG82质量、按捕获时间戳VFR编码，无补帧。不是无损原生像素、不是每一渲染帧都捕获，也不是对标视频原帧率观看。捕获帧率不当作应用性能测试。
每段记录原始逐帧时间戳frames.jsonl与raw-capture.json。相同时间戳若出现仅保留该时刻最后真实帧用于呈现，原始文件全部保留；统计详见capture.timestampHandling。
六种动物在采样区间均符合各自角速度上限；不把采样说成每个渲染帧都做了测量。自然访客出生、数量、与鱼/进度和手动布局独立性有运行记录。最终返回清池后比较布局与进度通过。

实际图像检查范围
已查看六种动物各12格阶段裁切图（72格），另查看beta5/beta6乌龟转向各24张连续捕获帧；合计120格，去重{len(unique)}个来源帧。角度标签来自邻近状态采样，不是图像逐帧测角。
对照序列可见beta5换头朝向突然跳变，beta6同类型转向逐步过渡；不是相同随机轨迹的逐像素A/B。六种动物关键帧可见不同肢体/翅姿和离场淡出，未在这些抽检格中见黑底；仍不能据此断言全部连续画面无白边、无穿帮。
未把视频“已生成”记作人工完整观看。白鹭等与背景的材质统一、青蛙肢体可读性、停驻/离场自然感仍需视觉完善及用户确认。

失败保留
beta5录制第一次因编码变量name未定义退出1；已保存的荷塘原帧用于修正后编码，未重录。
beta5续录四段均已完成，最终数据断言因错误地比较清池与沙滩各自布局而退出1；同一存档另做回到清池的往返/重载后置检查PASS，没有把原退出码改成0。
beta6第一次因严格时间戳断言退出1，当次元数据未完整落盘，不能定位具体异常帧；该次JPEG仅作为失败排查，不作为时间证据。修正为逐帧落盘、保留原始数据与明确时间戳整理规则；beta6第二次完整运行退出0。

剩余范围
完整对标视频观看、独立沙滩底材质、春秋布置材质统一、真实全局轮盘/全屏/物理拖入/睡眠和多屏条件仍未全部验收；beta5既有51项回归不冒充beta6全套回归。无新增夜景制作。当前不宣称达到或超过对标，目标保持active。
'''
(out/'审阅结论.txt').write_text(text)
report={'result':'PASS','scope':'Selected beta6 native animal motion fix, recording and review; overall upgrade incomplete','checks':native['checks'],'native_report':str(e/'candidate6-motion-native2/report.json'),'clips':clips,'total_encoded_frames':total,'total_seconds':seconds,'observed_max_rate_deg_per_sim_second':pertype,'reviewed_tiles':120,'reviewed_distinct_frames':len(unique),'old_beta5_bundle_hashes_unchanged':True,'beta6_bundle_matches_source':True,'unit_tests':121,'review':str(out/'审阅结论.txt')};(out/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
parts=['<!doctype html><meta charset="utf-8"><title>beta6 动物动作修正</title><style>body{max-width:1280px;margin:30px auto;background:#f5f3e9;color:#263c33;font:17px system-ui}video,img{max-width:100%}pre{white-space:pre-wrap;line-height:1.65}.pair{display:grid;grid-template-columns:1fr 1fr;gap:16px}a{color:#315c9b}</style><h1>beta6 动物连续转向 · 局部修复验收</h1><p>全部为实际打包应用捕获；原始时间戳可追溯，无插帧。整体升级仍未完成。</p>']
for c in clips:
 src=html.escape(os.path.relpath(c['video'],out),quote=True);parts.append(f'<h2>{html.escape(c["name"])}</h2><video controls preload="metadata" src="{src}"></video><p>{c["capture"]["frames"]}帧 / {c["capture"]["seconds"]:.3f}秒</p>')
parts.append('<h2>连续转向帧对照</h2><p>相同视口、主题与鱼量；随机轨迹不同，角度为邻近状态采样。</p>')
for v in ['beta5','beta6']:parts.append(f'<img src="{v}-turtle-turn-24frames.jpg" alt="{v}连续转向24帧">')
for s in samples:parts.append(f'<h2>{s["species"]}</h2><img src="{s["species"]}-motion-sheet.jpg">')
parts.append('<pre>'+html.escape(text)+'</pre>');(out/'index.html').write_text('\n'.join(parts));assert all(Path(c['video']).is_file() for c in clips);print(json.dumps({'report':str(out/'report.json'),'clips':len(clips),'frames':total,'seconds':seconds,'nativeChecks':len(native['checks']),'observedRates':pertype},ensure_ascii=False))
