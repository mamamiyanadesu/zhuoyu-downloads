#!/bin/sh
set -eu
[ "$#" -eq 1 ] || { echo "Usage: $0 TARGET_COPY" >&2; exit 2; }
DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
[ -f "$DIR/BASELINE.js" ] || { echo "Missing sibling baseline" >&2; exit 3; }
[ ! -L "$1" ] || { echo "Refuse symlink" >&2; exit 4; }
cp "$DIR/BASELINE.js" "$1"
printf 'Restored pristine pond engine: %s\n' "$1"
