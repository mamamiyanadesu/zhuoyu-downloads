#!/bin/sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
open "$ROOT/releases/蓬莱临水-0.7.0-mac-arm64.app"
