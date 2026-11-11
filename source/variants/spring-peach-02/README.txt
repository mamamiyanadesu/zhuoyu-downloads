春池 · 水光样板02

仅改春季光纹：scene-water.js DISPLAY 的 spring 分支改为7组不同方向缓慢行进波、折射射线密度、断续强光与微弱表面闪光。旧桃花底图、鱼、岸边遮挡、投喂保留。样板01及主工程原始字节未改。

BASELINE：两组周期线交叉的大网纹。MODIFIED：refracted-ray-density-v2，细碎断续亮纹与缓慢聚散。ROLLBACK：独立副本恢复旧shader，SHA一致。三组原生检查均6项通过：启动/投喂/装饰阻挡/暂停恢复/实录/重载；测试是自动原生输入，不等于人工美术认可或长期稳定性测试。

实录17.145秒/478捕获帧，无生成插帧，含约1.2秒主动暂停测试；视频编码时长17.118秒。独立正式样板存档Qingchi-Spring-Peach-Sample-02；QA仅用项目内隔离测试存档。Mac Apple Silicon、临时签名、未公证；未扩展其他季节。

补充变更：/Users/mac/Documents/Codex/learn/qingchi-desktop-20261106/transaction/WATERLIGHT2_SUPPLEMENT.patch
回滚：sh "/Users/mac/Documents/Codex/learn/qingchi-desktop-20261106/transaction/ROLLBACK.sh" --spring-waterlight-file /path/to/marked-copy/scene-water.js
目标所在目录需有.qingchi-waterlight-copy标记；拒绝活动源码、符号链接、硬链接。需与同目录waterlight2-baseline.js一起保留。

证据：/Users/mac/Documents/Codex/learn/qingchi-desktop-20261106/evidence/v9/waterlight2-delivery.json
下一步：等用户确认光纹密度、亮度、速度，未认可前不扩展四季。
