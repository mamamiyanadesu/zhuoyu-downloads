#!/bin/sh
set -eu
DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
if [ "$#" -eq 2 ] && [ "$1" = "--upgrade-root" ]; then
 [ -d "$2/app" ] && [ -f "$2/.qingchi-rollback-copy" ] && [ ! -L "$2" ] || { echo "Separate marked upgrade copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app desktop art tests scripts; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 for name in app desktop art tests scripts; do rm -rf "$TARGET/$name"; done
 rm -f "$TARGET/蓬莱临水0.9候选说明.txt"
 tar -xzf "$DIR/v8-upgrade-baseline.tar.gz" -C "$TARGET"
 printf 'Restored v8 upgrade baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--habitats-root" ]; then
 [ -d "$2/app" ] && [ -d "$2/desktop" ] && [ -f "$2/.qingchi-rollback-copy" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] && [ ! -L "$2/desktop" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 rm -rf "$TARGET/app" "$TARGET/desktop"
 tar -xzf "$DIR/v7-maps-baseline.tar.gz" -C "$TARGET"
 printf 'Restored v7 habitats baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--garden-root" ]; then
 [ -d "$2/app" ] && [ -d "$2/desktop" ] && [ -f "$2/.qingchi-rollback-copy" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] && [ ! -L "$2/desktop" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 rm -rf "$TARGET/app" "$TARGET/desktop"
 tar -xzf "$DIR/v6-garden-baseline.tar.gz" -C "$TARGET"
 printf 'Restored v6 garden baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--feedback-root" ]; then
 [ -d "$2/app" ] && [ -d "$2/desktop" ] && [ -f "$2/.qingchi-rollback-copy" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 rm -rf "$TARGET/app" "$TARGET/desktop"
 tar -xzf "$DIR/v5-feedback-baseline.tar.gz" -C "$TARGET"
 printf 'Restored v5 feedback baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--firstperson-root" ]; then
 [ -d "$2/app" ] && [ -d "$2/desktop" ] && [ -f "$2/.qingchi-rollback-copy" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 rm -rf "$TARGET/app" "$TARGET/desktop"
 tar -xzf "$DIR/v4-firstperson-baseline.tar.gz" -C "$TARGET"
 printf 'Restored v4 first-person baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--expedition-root" ]; then
 [ -d "$2/app" ] && [ -d "$2/desktop" ] && [ -f "$2/.qingchi-rollback-copy" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 rm -rf "$TARGET/app" "$TARGET/desktop"
 tar -xzf "$DIR/v3-expedition-baseline.tar.gz" -C "$TARGET"
 printf 'Restored v3 expedition baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--feature-root" ]; then
 [ -d "$2/app" ] && [ -d "$2/desktop" ] && [ -f "$2/.qingchi-rollback-copy" ] || { echo "Expected a separate copy with .qingchi-rollback-copy marker" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source tree" >&2; exit 6; }
 cp -R "$DIR/v2-feature-baseline/app/." "$TARGET/app/"
 cp -R "$DIR/v2-feature-baseline/desktop/." "$TARGET/desktop/"
 cp "$DIR/v2-feature-baseline/package.json" "$TARGET/package.json"
 cp "$DIR/v2-feature-baseline/package-lock.json" "$TARGET/package-lock.json"
 rm -f "$TARGET/app/assets/qingchi-icon-1024.png"
 rm -f "$TARGET/app/environment.js"
 rm -f "$TARGET/app/life-core.js"
 rm -f "$TARGET/app/life-ui.js"
 rm -f "$TARGET/app/life.css"
 rm -f "$TARGET/app/wallpaper.html"
 rm -f "$TARGET/app/wallpaper.js"
 rm -f "$TARGET/desktop/native.cjs"
 rm -f "$TARGET/desktop/store.cjs"
 rm -f "$TARGET/desktop/verify-life.cjs"
 rm -f "$TARGET/desktop/verify-reopen.cjs"
 rm -f "$TARGET/desktop/wallpaper-preload.cjs"
 printf 'Restored v2 feature source: %s\n' "$TARGET"
 exit 0
fi
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
