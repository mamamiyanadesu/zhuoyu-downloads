#!/bin/sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
open "$ROOT/releases/清池蓬莱版-0.4.0-mac-arm64.app" --args --expedition
