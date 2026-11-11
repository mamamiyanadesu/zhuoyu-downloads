# 桌鱼下载

本仓库提供桌鱼 Windows x64 免费测试包与版本说明。

0.9.0-win.1 尚未完成 Windows 真机验收和发行者签名；不作为正式稳定版。
下载与校验信息见 Releases。开源组件及素材来源说明随交付包提供。

## 项目源代码

完整代码归档位于 `source/`，逐文件 SHA-256 清单见 `SOURCE-MANIFEST.json`。

- `source/app/`、`source/desktop/` 为开发主线应用和 Electron 桌面实现。
- `source/variants/occlusion-clean-16/source/` 为已确认的 Mac 视觉版本，其他变体保存在 `source/variants/`。
- `source/windows-20261110/source/` 为已发布 0.9.0-win.1 测试包对应源码，包含 Win32 桌面挂载实现。
- `source/art/` 保存美术制作源文件，应用图片、模型等资源随各源码版本保存。
- `source/scripts/`、`source/tests/` 和 `source/windows-20261110/checks/` 保存构建、检查及回归脚本。
- `source/transaction/` 保存历次迁移测试依赖及历史代码快照。这里只归档代码与配置，历史回滚包的重复二进制资源可从当前版本和变体追溯。
- 官网保持在仓库根目录 `dist/`，EdgeOne 使用现有 `edgeone.json`。

### 本地开发

需要 Node.js 22.12.0 或更高版本。开发主线可运行以下命令。

```sh
cd source
npm ci
npm start
npm test
```

已确认的 Mac 版本可在 `source/variants/occlusion-clean-16/source/` 执行 `npm install` 和 `npm start`。Windows 版可在 Windows x64 的 `source/windows-20261110/source/` 执行相同命令，安装 Electron 45.2.3 和 koffi 3.3.7。

构建脚本保留开发时的原始路径和环境假设，跨设备运行前需要核对路径。源码归档没有改变应用功能或修复既有测试问题。Windows 真机运行、签名和验收仍待完成。

第三方代码及素材说明见各版本 `THIRD_PARTY.txt` 和 `source/art/` 来源记录。授权范围依各组件原有声明执行。

归档排除了依赖安装目录、Electron 运行时、发布压缩包、本机用户存档、缓存、证据截图和本地登录配置。

### 2026-11-11 归档核验

主线 `node --test tests/*.test.cjs` 共 152 项全部通过。Windows 合约检查通过，JavaScript 语法检查覆盖 101 个文件。Windows 回归 61 项中 59 项通过，动物访客生成与密度上限相关的 2 项断言失败，与归档前的已知记录一致。Windows 原生桌面行为仍待真机验收。27,071 个归档文件已逐项核对 SHA-256 与 Git 跟踪清单。
