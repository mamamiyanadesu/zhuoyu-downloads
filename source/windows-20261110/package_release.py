from pathlib import Path
import zipfile,hashlib,json,shutil,struct
r=Path(__file__).resolve().parent;project=r.parent;source=r/'source';release=r/'release';release.mkdir(exist_ok=True);out=release/'Zhuoyu-0.9.0-win.1-x64';assert not out.exists()
runtime=Path((project/'evidence/windows-runtime-path.txt').read_text().strip());checks=json.loads((project/'node_modules/electron/checksums.json').read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();assert sha(runtime)==checks['electron-v45.2.3-win32-x64.zip']
with zipfile.ZipFile(runtime) as z:
 for i in z.infolist():(out/i.filename).resolve().relative_to(out.resolve())
 z.extractall(out)
a=out/'resources/app';shutil.copytree(source,a,ignore=shutil.ignore_patterns('.DS_Store'))
# Exclude the Mac-only optional binary dependency from the Windows distribution.
shutil.rmtree(a/'node_modules/@koromix/koffi-darwin-arm64')
(out/'electron.exe').rename(out/'Zhuoyu.exe')
for p in [out/'Zhuoyu.exe',a/'node_modules/@koromix/koffi-win32-x64/win32_x64/koffi.node']:
 d=p.read_bytes();offset=struct.unpack_from('<I',d,60)[0];assert d[offset:offset+4]==b'PE\0\0' and struct.unpack_from('<H',d,offset+4)[0]==0x8664
(out/'请先阅读.txt').write_text('''桌鱼 Windows x64 测试版 0.9.0-win.1
面向 Windows 10/11 Intel/AMD 64 位；不是 ARM 版。尚未完成 Windows 真机验收。
1. 将整个 ZIP 解压到可写文件夹，再双击 Zhuoyu.exe。不要只取 EXE，也不要从 ZIP 内直接运行。
2. 本包无安装器、不要求管理员权限、不设置开机启动。尚未进行发行者代码签名，不宣称通过 SmartScreen；请先核对来源，不建议关闭系统安全保护。
3. 手笺/鱼池等数据保存在 %APPDATA%\\Zhuoyu-Windows-Preview-1，独立于旧版。退出再打开应保留数据。
4. 点击水面投喂；工具中可切换春夏秋。桌面模式时不接收投喂点击，使用托盘图标返回主窗口或关闭鱼池。
5. 轮盘默认配置中的 Option 在 Windows 对应 Alt；启用后按住显示、松开收起。可改组合快捷键。桌面挂载、Alt、全屏避让、多显示器与睡眠恢复待 Windows 实测。
6. 如果桌面结构不支持，会报告挂载失败；不应覆盖图标。主窗口可继续使用。出现异常请记录系统版本、缩放比例、操作与报错，不以本包证明所有功能可用。
7. 自动检查：运行 Windows自检.cmd，输出位于软件同目录“自检报告”。该检查会修改独立自检存档而不是你的使用存档。
8. 完全退出后删除解压目录即可移除程序；不会自动删除用户存档。Mac 版与旧存档未修改。
验收重点：启动/投喂/三季切换；手笺退出重开；桌面模式/托盘返回与关闭；轮盘打开文件/文件夹；多屏/DPI；睡眠/全屏；退出后无残留进程。天气联网与系统通知单独检查。
测试边界：共用渲染、存储在 Mac Electron 实跑通过；Win32 适配仅模拟契约检查通过，不能替代真机。
''',encoding='utf8')
(out/'Windows自检.cmd').write_bytes(('''@echo off\r
cd /d "%~dp0"\r
set "QINGCHI_PROFILE=%~dp0selftest-profile"\r
set "QINGCHI_VERIFY_OUT=%~dp0selftest-report"\r
start /wait "" "%~dp0Zhuoyu.exe" --verify-zhuoyu\r
echo Exit code: %errorlevel%\r
echo Report: %~dp0selftest-report\r
pause\r
''').encode('ascii'))
archive=release/(out.name+'-portable.zip')
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for p in sorted(out.rglob('*')):
  if p.is_file():z.write(p,p.relative_to(release))
with zipfile.ZipFile(archive) as z:
 assert z.testzip() is None
 for p in a.rglob('*'):
  if p.is_file():assert z.read(str(p.relative_to(release)))==p.read_bytes()
manifest={str(p.relative_to(a)):sha(p) for p in a.rglob('*') if p.is_file()};(r/'evidence/package-source-manifest.json').write_text(json.dumps(manifest,indent=2))
report={'archive':str(archive),'sha256':sha(archive),'bytes':archive.stat().st_size,'runtime_checksum_verified':True,'exe_arch':'AMD64','native_dependency_arch':'AMD64','zip_crc':'PASS','packaged_source_bytes':'MATCH','windows_runtime':'NOT_TESTED','code_signing':'UNSIGNED','edition':'TEST_PREVIEW'};(r/'evidence/windows-package.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
