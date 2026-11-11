原色锦鲤回归预览08
打开：http://127.0.0.1:8803/
用户拒绝07灰水及水墨鱼，恢复04原清池底图、春季原图和原版彩色锦鲤drawLegacy；config.fishArt=original，移除水墨选项。原图哈希及drawLegacy与04相同，无新生成美术。
水材质恢复04基准；春季保留柔和光学边界。夏季summerBedAt仅局部叶边环带使用既有净底纹理，leafWake动态波环函数与07字节一致。
真实浏览器：春夏切换，春季局部清理关闭/夏季开启；投喂food 0->1->0、吃食事件1->2，锦鲤动画frames522->549，水层error为空。此记录不代表帧率问题已解决。
事务同输入：BASELINE07=ink+pale-clear-bottom-v7；MODIFIED08=original+original-color-v8；ROLLBACK=恢复07，哈希一致；补丁重建和再次应用通过。三轮exit0。
四个原有角色不替换；08由transaction/ORIGINAL8_SUPPLEMENT.patch、original8-baseline.tar.gz及ROLLBACK.sh --original8-root扩展。真实测试记录追加VERIFICATION.txt。
仍为隔离预览，未替换已安装应用。审美、原版相似度待用户确认；不推进秋冬。
重启：python3 /Users/mac/Documents/Codex/learn/qingchi-desktop-20261106/variants/original-look-08/web-preview/serve.py
