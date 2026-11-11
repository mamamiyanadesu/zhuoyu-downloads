#!/bin/sh
set -eu
DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
if [ "$#" -eq 2 ] && [ "$1" = "--visual-root" ]; then
 [ -d "$2/app" ] && [ -d "$2/desktop" ] || { echo "Expected a separate project copy" >&2; exit 5; }
 cp -R "$DIR/visual-v1-baseline/app/." "$2/app/"
 cp -R "$DIR/visual-v1-baseline/desktop/." "$2/desktop/"
 printf 'Restored v1 visual source files: %s\n' "$2"
 exit 0
fi
[ "$#" -eq 1 ] || { echo "Usage: $0 TARGET_COPY or $0 --visual-root PROJECT_COPY" >&2; exit 2; }
[ -f "$DIR/BASELINE.js" ] || { echo "Missing sibling baseline" >&2; exit 3; }
[ ! -L "$1" ] || { echo "Refuse symlink" >&2; exit 4; }
cp "$DIR/BASELINE.js" "$1"
printf 'Restored pristine pond engine: %s\n' "$1"
