# -*- coding: utf-8 -*-
from pathlib import Path
import re,json
r=Path(__file__).resolve().parent.parent
mapping={
'去蓬莱钓鱼':'去钓鱼',
'出发去蓬莱 ↗':'去钓鱼',
'画一尾新鱼':'画条鱼',
'画一尾鱼':'画条鱼',
'池畔工作台':'日常工具',
'手笺':'笔记',
'吃食榜':'吃食排行',
'四季天气':'天气',
'鱼篓与图鉴':'我的收获',
'岛屿收集手册':'我的收获',
'打捞册':'水边收藏',
'备份与设置 ↗':'备份设置',
'鱼池与数据':'设置',
'池塘生活':'养鱼',
'收起组件':'隐藏面板',
'清池 · 展开组件':'显示面板',
'暂停鱼池':'暂停游动',
'继续鱼池':'继续游动',
'随手记一笔':'随手记',
'今天的小事':'今日待办',
'查看全部日期':'全部待办',
'只看今天':'今日待办',
'留一刻给自己':'专注计时',
'提醒分钟':'提醒间隔',
'确认后循环':'重复提醒',
'自定义提醒':'定时提醒',
'测试到时提醒（3 秒）':'测试提醒',
'保存并放入池塘':'保存入池',
'新建草稿':'重新画鱼',
'清空笔画':'清空花纹',
'从鱼苗开始养':'从小养起',
'刷新榜单':'刷新排行',
'放入池塘':'放入鱼池',
'移出池塘':'移出鱼池',
'动画帧率上限':'流畅程度',
'动态水光':'水面光影',
'互动模式':'水面点击',
'点击投喂':'点击喂鱼',
'只看鱼 · 不投喂':'仅供观赏',
'导出备份':'保存备份',
'恢复上一版自动备份':'恢复上次',
'开启桌面观赏（实验）':'桌面鱼池',
'关闭桌面观赏':'关闭鱼池',
'跟随本机时间':'跟随时间',
'白昼':'白天',
'暮色</option>':'傍晚</option>',
'清夜':'夜晚',
'手动天气':'画面天气',
'启用 / 刷新当地天气':'更新天气',
'停用联网天气':'停止更新',
'停用联网':'停止更新',
'收起面板，看水面':'查看效果',
'让当地天气，走进仙山':'城市天气',
'启用杭州临平天气':'更新天气',
'← 清池':'返回鱼池',
'按住蓄力 · 抛竿':'蓄力抛竿',
'选择钓点后出发':'选择钓点',
'等鱼咬钩…':'等待咬钩',
'按空格 · 命中绿区':'提竿',
'连按 / 长按 · 收线':'收线',
'再抛一竿':'再钓一次',
'收好鱼，再出发':'已钓到鱼',
'换上这支':'换上鱼竿',
'使用中':'已装备',
'购买鱼饵':'买鱼饵',
'绿色容错区':'提竿范围',
'稀有色系权重提高':'更容易遇到稀有鱼',
'小店':'渔具店',
'打开清池工具':'打开清池',
'关闭 ×':'关闭'
}
files=['app/index.html',
'app/expedition.html',
'app/app.js',
'app/life-ui.js',
'app/expedition.js',
'desktop/native.cjs']
counts={k:[] for k in mapping}
for name in files:
 p=r/name;s=p.read_text()
 for a,b in sorted(mapping.items(),key=lambda x:-len(x[0])):
  if a in s:counts[a].append(name);s=s.replace(a,b)
 p.write_text(s)
# Short, actionable descriptions instead of old contradictory feature claims.
p=r/'app/index.html';s=p.read_text()
s=s.replace('无账号、无联网请求。笔记与待办保存在当前浏览器或宿主中；清理浏览器数据可能丢失，请定期导出。',
'笔记和进度保存在本机。<br>启用城市天气后会联网。<br>请定期保存备份，避免数据丢失。')
s=s.replace('这是独立存档的 Mac 功能试用版。新功能均离线运行；未接入真实天气、账号、支付。桌面观赏由下方按钮明确开启。',
'独立存档，不影响旧版。<br>未接入账号和真钱支付。<br>测试提醒将在3秒后出现。')
s=s.replace('六种颜色，六次相遇。',
'鱼种图鉴').replace('清池原创虚构观赏鱼色系，不对应生物分类。收集进度不会因出售而丢失。',
'共18项，含6种真实观赏鱼。<br>模型为风格化表达，非饲养指南。<br>卖出鱼不会清除收集记录。')
s=s.replace('给每一尾鱼，一个名字。',
'我的鱼').replace('鱼苗在池塘运行约 30 分钟后长成；投喂每次加 45 秒，每小时最多加 5 分钟。离池暂停成长。',
'入池后约30分钟长大，离池暂停。<br>每次吃食加快45秒。<br>每小时最多加快5分钟。')
s=s.replace('支持鼠标/触控笔；花纹保存为可编辑笔画，不上传图片。试用版最多 24 尾自有鱼。',
'支持鼠标和触控笔，最多养24尾。').replace('新鱼默认入池。编辑旧鱼会保留已有成长与吃食记录。',
'新鱼保存后入池，旧鱼记录保留。')
s=s.replace('全部是离线视觉模式，不代表真实天气。夜色保留亮度下限，不把池塘变成黑屏。',
'手动调整只改变画面，不代表实况。')
s=s.replace('本次运行的实时吃食排行；重新打开会重计。自有鱼累计吃食另存于“我的鱼”。',
'此次打开后开始统计，重开会清零。')
s=s.replace('刷新后继续计时；关闭页面期间不弹提醒，重新打开时补记到时状态。',
'关闭期间不提醒，重开后显示结果。')
s=s.replace('还没开始，准备好再出发。',
'准备好后，点击开始。')
s=s.replace('暂时没有待办。<br><span>留白，也是一种安排。</span>',
'还没有待办。<br><span>在上方添加第一件事。</span>')
s=s.replace('清池原创虚构观赏鱼色系',
'游戏中的观赏鱼')
s=s.replace('每完成 4 次钓获，发现一件原创小物；共 5 件。已经找到的会一直保留。',
'每钓4尾发现一件，共5件。')
s=s.replace('更好的鱼竿拓宽提竿范围；鱼饵提高稀有色系权重。没有真钱支付。',
'鱼竿帮助提竿，鱼饵增加稀有机会。<br>只用游戏鱼币，不用真钱。')
s=s.replace('<button data-life-tab="dex">图鉴</button>',
'<button data-life-tab="dex">鱼种图鉴</button>')
s=s.replace('<button data-life-tab="basket">鱼篓</button>',
'<button data-life-tab="basket">钓到的鱼</button>')
s=s.replace('画笔 <input',
'画笔颜色 <input').replace('大小 <input id="brush-size"',
'画笔粗细 <input id="brush-size"')
s=s.replace('<span>Mac · 蓬莱临水 0.6</span>',
'<span>Mac · 蓬莱临水 0.7</span>').replace('Mac · 蓬莱临水 0.6',
'Mac · 蓬莱临水 0.7')
# Put destination navigation in one stable top location, not three detached tool strips.
nav=re.search(r'<div class="pond-tools" data-widget>.*?</div>',s).group(0);s=s.replace(nav,'');s=s.replace('<div class="top-actions">',nav+'<div class="top-actions">',1)
s=s.replace('<link rel="stylesheet" href="garden.css">',
'<link rel="stylesheet" href="garden.css"><link rel="stylesheet" href="interface.css">');p.write_text(s)
p=r/'app/expedition.html';s=p.read_text().replace('<button id="overview">全岛</button>',
'<button id="overview">查看全岛</button>');s=s.replace('<button data-collection="basket">鱼篓</button>',
'<button data-collection="basket">钓到的鱼</button>')
s=s.replace('<button id="overview">',
'<label class="quality-control">画面<select id="scene-quality" aria-label="画面质量"><option value="hd">高清</option><option value="eco">省电</option></select></label><button id="overview">')
s=s.replace(' 用饵 <span',
' 使用鱼饵 <span');s=s.replace('<link rel="stylesheet" href="expedition.css">',
'<link rel="stylesheet" href="expedition.css"><link rel="stylesheet" href="interface.css">');p.write_text(s)
p=r/'app/expedition.js';s=p.read_text()
replacements={
'找准落点，松手抛竿':'松手抛竿',
'把鱼漂，抛向水面':'准备抛竿',
'先选一处水岸':'选择钓点',
'水面微动，等一等…':'等待咬钩',
'看准绿区，按空格！':'准备提竿',
'把鱼，慢慢拉到岸边':'把鱼拉近',
'这一尾，与你相遇':'钓到鱼了',
'力度接近 65% 更容易遇到稀有鱼；这是游戏规则。':'力度接近65%，更容易遇到稀有鱼。',
'点击湖面选点；按住下方按钮或空格蓄力，松手抛竿。':'点击水面选点，按住空格后松手。',
'鱼漂跳动后会出现横向判定线，先看游标再按空格。':'等鱼咬钩后，看指针再按空格。',
'游标左右移动：进入绿色区按空格。中央金线为精准命中；可尝试三次。':'指针进入绿区时按空格，可试3次。',
'连按或长按空格 / 下方按钮收线，鱼会逐渐靠近；松手可休息，不会断线。':'连按或长按空格收线，松手不丢进度。',
'已写入鱼篓与图鉴。带回清池，或继续寻鱼。':'已保存，可带回鱼池或继续钓鱼。',
'不扣游戏鱼币；已使用的鱼饵不返还。再试一竿吧。':'鱼币不扣，已用鱼饵不返还。',
'第一人称 · 拖动转头 / R 回正':'拖动转头，按 R 回正',
}
for a,b in replacements.items():s=s.replace(a,b)
s=s.replace("let state=null", "$('scene-quality').value=localStorage.getItem('qingchi.quality.v7')||'hd';$('scene-quality').onchange=()=>{window.QingchiWorld?.setQuality($('scene-quality').value);};\n let state=null")
p.write_text(s)
p=r/'app/app.js';s=p.read_text().replace('此刻想到的、待会要做的，\\n或只是今天看见的一片云。',
'写下想记住的事。');p.write_text(s)
rows=[{'old':a,'new':b,'files':counts[a]} for a,b in mapping.items() if counts[a]]
(r/'art/v7/copy-map.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
(r/'文案对照0.7.md').write_text('# 0.7 菜单与功能文案\n\n功能与ID保持，品牌和故事正文保留。短按钮配说明；价格独立显示。\n\n| 原文案 | 新文案 |\n|---|---|\n'+''.join('| '+v['old']+' | '+v['new']+' |\n' for v in rows))
