#!/bin/sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
open "$ROOT/releases/清池试用版-0.3.0-mac-arm64.app"
