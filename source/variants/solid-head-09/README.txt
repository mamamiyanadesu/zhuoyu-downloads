完整鱼头09 · 保留细节，补足完整度
打开：http://127.0.0.1:8804/
仅改Koi.drawLegacy：头部吻部前伸并与两颊连成闭合实心轮廓；眼睛收回头内，窄体眼睛半径同步缩小。
花纹、明暗、鳍条、胸鳍、尾鳍和游动代码保持原样；全部水层及图片不变。非简笔画改版。
真实UI：投喂0->1->0，吃食事件0->1，春夏切换，无水层错误。
实际Canvas路径检查：64组姿态，基线08双眼在轮廓内0/64；修改09 64/64；独立副本回滚08 0/64。三个命令exit0；回滚哈希相同；补丁重建通过，09重新应用并核验。
四角色沿用；补丁为transaction/HEAD9_SUPPLEMENT.patch；ROLLBACK.sh --head9-root接受含.qingchi-head9-copy标记的独立副本，拒绝活动variants及链接。
前后图：evidence/v9/head9-render/before-after.png。观感等用户确认；未更新安装包，未声称浏览器帧率问题已解决。
重启：python3 /Users/mac/Documents/Codex/learn/qingchi-desktop-20261106/variants/solid-head-09/web-preview/serve.py
