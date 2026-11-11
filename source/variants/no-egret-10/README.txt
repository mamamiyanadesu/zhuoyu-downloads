移除白鹭预览10
打开：http://127.0.0.1:8805/
当前春夏随机动物：小乌龟、青蛙、蝴蝶、蜻蜓。小螃蟹只在旧沙滩随机池，仍可手动布置。
移除白鹭随机生成、手动添加入口；读旧存档/导入时仅滤除白鹭，不清空其他部件和进度。没有重做白鹭。
鱼头09、鱼体细节、水面、波环与美术字节不变。旧版本及已安装应用未覆盖；历史白鹭素材仅留作回滚。
已实测随机动物开关，生成蜻蜓和青蛙；白鹭强制生成返回null，布置目录没有白鹭。旧存档测试重载后白鹭消失，钱包1234及其他部件保留。
事务09有白鹭 ->10移除 ->回滚09恢复，exit0；恢复哈希、补丁重建和再应用通过。补丁transaction/NOEGRET10_SUPPLEMENT.patch；ROLLBACK.sh --noegret10-root用于标记独立副本。
重启：python3 /Users/mac/Documents/Codex/learn/qingchi-desktop-20261106/variants/no-egret-10/web-preview/serve.py
