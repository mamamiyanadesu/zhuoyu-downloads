#!/bin/sh
set -eu
cd "$(dirname "$0")"
BIN="$PWD/node_modules/electron/dist/Electron.app/Contents/MacOS/Electron"
if [ ! -x "$BIN" ]; then
 printf '尚未安装本项目桌面运行时。请在项目目录执行 npm ci。\n'
 read -r _unused
 exit 1
fi
exec "$BIN" "$PWD"
