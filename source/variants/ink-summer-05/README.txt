水墨鱼与夏水预览05
打开：http://127.0.0.1:8800/（本机服务运行时有效）
春夏切换：显示面板 → 左上地图菜单。
设置 → 鱼体美术对照：水墨 / 上一版 / 原版。刷新默认水墨。
水墨用程序绘制淡墨晕染、少量朱红、淡鳍尾，不是换一张鱼贴图；保留游动和投喂。
夏季生成式清理了原底图固定水纹，使用实时焦散和leafWake(clock)扩散消退的破碎波环；原04保留。
实测鱼体切换、投喂0->1、春夏切换；水面单独像素采样7092/66000处发生变化。
性能边界：当前浏览器帧数波动且偏低，新旧均观察到慢帧；原因未确认，不称流畅度通过。
真实录制：evidence/v9/ink5-live.webm；没有插帧，不能当作平滑30fps示范。
回滚：同输入 BASELINE polished+原底图 / MODIFIED ink+净底图 / ROLLBACK polished+原底图，三次投喂food=1。恢复哈希与原版一致，含PNG的二进制补丁重建通过。
自动化：未新增全局规则/服务/模型；秋冬不做，不打包应用。风格尚待用户认可。
重启：python3 /Users/mac/Documents/Codex/learn/qingchi-desktop-20261106/variants/ink-summer-05/web-preview/serve.py
