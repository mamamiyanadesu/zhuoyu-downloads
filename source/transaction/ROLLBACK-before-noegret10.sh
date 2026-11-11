#!/bin/sh
set -eu
DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
if [ "$#" -eq 2 ] && [ "$1" = "--head9-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-head9-copy" ] || { echo "Marked separate head9 copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
 for name in source source/app source/app/vendor source/app/vendor/pond.js web-preview web-preview/preview-bootstrap.js web-preview/serve.py; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
 tar -xzf "$DIR/head9-baseline.tar.gz" -C "$TARGET"
 printf 'Restored preview08 art baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--original8-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-original8-copy" ] || { echo "Marked separate original8 copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
 for name in source source/app source/app/scene-art.js source/app/scene-manifest.js source/app/scene-water.js source/app/spring-summer-preview.js source/app/vendor source/app/vendor/pond.js web-preview web-preview/preview-bootstrap.js web-preview/serve.py; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
 tar -xzf "$DIR/original8-baseline.tar.gz" -C "$TARGET"
 printf 'Restored preview07 art baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--pale7-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-pale7-copy" ] || { echo "Marked separate pale7 copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
 for name in source source/app source/app/scene-art.js source/app/scene-water.js web-preview web-preview/preview-bootstrap.js web-preview/serve.py; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
 tar -xzf "$DIR/pale7-baseline.tar.gz" -C "$TARGET"
 printf 'Restored preview06 art baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--clear6-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-clear6-copy" ] || { echo "Marked separate clear6 copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
 for name in source source/app source/app/assets source/app/assets/clear-pond-depth-v6.png source/app/assets/scenes source/app/assets/scenes/spring source/app/assets/scenes/spring/peach-clear-v6.png source/app/scene-art.js source/app/scene-manifest.js source/app/scene-water.js source/app/spring-summer-preview.js web-preview web-preview/preview-bootstrap.js web-preview/serve.py; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
 tar -xzf "$DIR/clear6-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/source/app/assets/clear-pond-depth-v6.png"
 rm -f "$TARGET/source/app/assets/scenes/spring/peach-clear-v6.png"
 printf 'Restored preview05 art baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--ink5-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-ink5-copy" ] || { echo "Marked separate ink5 copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
 for name in source source/app source/app/assets source/app/assets/clear-pond-clean-v5.png source/app/scene-manifest.js source/app/scene-water.js source/app/spring-summer-preview.js source/app/vendor source/app/vendor/pond.js web-preview web-preview/preview-bootstrap.js web-preview/serve.py; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
 tar -xzf "$DIR/ink5-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/source/app/assets/clear-pond-clean-v5.png"
 printf 'Restored preview04 art baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--art4-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-art4-copy" ] || { echo "Marked separate art4 copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
 for name in source source/app source/app/habitat.js source/app/index.html source/app/life-ui.js source/app/scene-bridge.js source/app/scene-integrated.css source/app/scene-manifest.js source/app/scene-water.js source/app/spring-summer-preview.js source/app/vendor source/app/vendor/pond.js web-preview web-preview/index.html web-preview/preview-bootstrap.js web-preview/serve.py; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
 tar -xzf "$DIR/art4-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/source/app/spring-summer-preview.js"
 printf 'Restored preview03 art baseline: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--water-quality-root" ]; then
 [ -d "$2" ] && [ ! -L "$2" ] && [ -f "$2/.qingchi-quality-copy" ] || { echo "Marked separate quality copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET" in "$ROOT/variants/"*|"$ROOT") echo "Refuse active source" >&2; exit 6;; esac
 for name in source source/app source/app/app.js source/app/core.js source/app/index.html source/app/scene-bridge.js source/app/scene-water.js web-preview web-preview/index.html web-preview/preview-bootstrap.js web-preview/serve.py; do
 [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 if [ -f "$TARGET/$name" ]; then [ "$(ls -ld "$TARGET/$name" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard link" >&2; exit 8; }; fi
 done
 tar -xzf "$DIR/water-quality3-baseline.tar.gz" -C "$TARGET"
 printf 'Restored fixed-low water preview: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--spring-waterlight-file" ]; then
 [ -f "$2" ] && [ ! -L "$2" ] && [ -f "$(dirname -- "$2")/.qingchi-waterlight-copy" ] || { echo "Marked separate file copy required" >&2; exit 5; }
 [ "$(ls -ld "$2" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard-linked target" >&2; exit 7; }
 TARGET_DIR=$(CDPATH= cd -- "$(dirname -- "$2")" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET_DIR" in "$ROOT/app"|"$ROOT/variants/spring-peach-01/source/app"|"$ROOT/variants/spring-peach-02/source/app") echo "Refuse active source" >&2; exit 6;; esac
 cp "$DIR/waterlight2-baseline.js" "$2"
 cmp "$DIR/waterlight2-baseline.js" "$2"
 printf 'Restored original spring water shader: %s\n' "$2"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--spring-peach-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] && [ "$TARGET" != "$ROOT/variants/spring-peach-01/source" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app app/assets app/assets/scenes app/assets/scenes/spring app/assets/scenes/spring/peach-master-v2.png app/scene-art.js app/scene-bridge.js app/scene-integrated.css app/scene-manifest.js app/scene-water.js app/vendor app/vendor/pond.js desktop desktop/main.cjs desktop/spring-sample-profile.cjs package.json; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/spring-peach1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/app/assets/scenes/spring/peach-master-v2.png"
 rm -f "$TARGET/desktop/spring-sample-profile.cjs"
 printf 'Restored pre-peach-spring source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--fish-body-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in THIRD_PARTY.txt app app/vendor app/vendor/pond.js package-lock.json package.json tests tests/animals-art.test.cjs tests/autumn-beach-probe.cjs tests/autumn-garden.test.cjs tests/beach-art-probe.cjs tests/beach-bed-probe.cjs tests/beach-bed.test.cjs tests/beach-layout-probe.cjs tests/beach-layout.test.cjs tests/beach-poses-probe.cjs tests/beach-poses.test.cjs tests/candidate-v9.test.cjs tests/clear-day-probe.cjs tests/clear-sample.test.cjs tests/core.test.cjs tests/engine-probe.cjs tests/expedition-probe.cjs tests/expedition.test.cjs tests/feature-probe.cjs tests/feedback-probe.cjs tests/feedback.test.cjs tests/firstperson.test.cjs tests/fish-body-probe.cjs tests/fish-body.test.cjs tests/garden-state-probe.cjs tests/garden-view.test.cjs tests/garden.test.cjs tests/habitat-state-probe.cjs tests/habitat.test.cjs tests/life.test.cjs tests/quiet-engine-probe.cjs tests/scene-core.test.cjs tests/scene-engine-probe.cjs tests/scene-seasons.test.cjs tests/shore-contour.test.cjs tests/shore-geometry-probe.cjs tests/spring-beach-probe.cjs tests/spring-garden.test.cjs tests/tools-core.test.cjs tests/version-bridge-probe.cjs tests/version-bridge.test.cjs tests/visitor-turn-probe.cjs tests/visitor-turn.test.cjs tests/visual-probe.cjs tests/visual-state-probe.cjs tests/water-probe.cjs tests/water.test.cjs tests/winter-beach-probe.cjs tests/winter-garden-probe.cjs tests/winter-garden.test.cjs 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/fish-body1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/tests/fish-body-probe.cjs"
 rm -f "$TARGET/tests/fish-body.test.cjs"
 printf 'Restored pre-fish-body-motion source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--autumn-props-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in THIRD_PARTY.txt app app/assets app/assets/garden-seasonal app/assets/garden-seasonal/autumn app/assets/garden-seasonal/autumn/lotus-v1.png app/assets/garden-seasonal/autumn/reeds-v1.png app/clear-sample-core.js app/garden.js app/scene-art.js app/scene-manifest.js art art/autumn-garden-01 art/autumn-garden-01/assets.json art/autumn-garden-01/prompts.json art/autumn-garden-01/validation-note.txt package-lock.json package.json tests tests/animals-art.test.cjs tests/autumn-beach-probe.cjs tests/autumn-garden.test.cjs tests/beach-art-probe.cjs tests/beach-bed-probe.cjs tests/beach-bed.test.cjs tests/beach-layout-probe.cjs tests/beach-layout.test.cjs tests/beach-poses-probe.cjs tests/beach-poses.test.cjs tests/candidate-v9.test.cjs tests/clear-day-probe.cjs tests/clear-sample.test.cjs tests/core.test.cjs tests/engine-probe.cjs tests/expedition-probe.cjs tests/expedition.test.cjs tests/feature-probe.cjs tests/feedback-probe.cjs tests/feedback.test.cjs tests/firstperson.test.cjs tests/garden-state-probe.cjs tests/garden-view.test.cjs tests/garden.test.cjs tests/habitat-state-probe.cjs tests/habitat.test.cjs tests/life.test.cjs tests/quiet-engine-probe.cjs tests/scene-core.test.cjs tests/scene-engine-probe.cjs tests/scene-seasons.test.cjs tests/shore-contour.test.cjs tests/shore-geometry-probe.cjs tests/spring-beach-probe.cjs tests/spring-garden.test.cjs tests/tools-core.test.cjs tests/version-bridge-probe.cjs tests/version-bridge.test.cjs tests/visitor-turn-probe.cjs tests/visitor-turn.test.cjs tests/visual-probe.cjs tests/visual-state-probe.cjs tests/water-probe.cjs tests/water.test.cjs tests/winter-beach-probe.cjs tests/winter-garden-probe.cjs tests/winter-garden.test.cjs 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/autumn-props1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/app/assets/garden-seasonal/autumn/lotus-v1.png"
 rm -f "$TARGET/app/assets/garden-seasonal/autumn/reeds-v1.png"
 rm -f "$TARGET/tests/autumn-garden.test.cjs"
 rm -f "$TARGET/art/autumn-garden-01/prompts.json"
 rm -f "$TARGET/art/autumn-garden-01/assets.json"
 rm -f "$TARGET/art/autumn-garden-01/validation-note.txt"
 printf 'Restored pre-autumn-manual-props source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--spring-props-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in THIRD_PARTY.txt app app/assets app/assets/garden-seasonal app/assets/garden-seasonal/spring app/assets/garden-seasonal/spring/lotus-v1.png app/assets/garden-seasonal/spring/reeds-v1.png app/clear-sample-core.js app/garden.js app/scene-art.js app/scene-manifest.js art art/spring-garden-01 art/spring-garden-01/alpha-preview.jpg art/spring-garden-01/assets.json art/spring-garden-01/prompts.json art/spring-garden-01/validation-note.txt package-lock.json package.json tests tests/animals-art.test.cjs tests/autumn-beach-probe.cjs tests/beach-art-probe.cjs tests/beach-bed-probe.cjs tests/beach-bed.test.cjs tests/beach-layout-probe.cjs tests/beach-layout.test.cjs tests/beach-poses-probe.cjs tests/beach-poses.test.cjs tests/candidate-v9.test.cjs tests/clear-day-probe.cjs tests/clear-sample.test.cjs tests/core.test.cjs tests/engine-probe.cjs tests/expedition-probe.cjs tests/expedition.test.cjs tests/feature-probe.cjs tests/feedback-probe.cjs tests/feedback.test.cjs tests/firstperson.test.cjs tests/garden-state-probe.cjs tests/garden-view.test.cjs tests/garden.test.cjs tests/habitat-state-probe.cjs tests/habitat.test.cjs tests/life.test.cjs tests/quiet-engine-probe.cjs tests/scene-core.test.cjs tests/scene-engine-probe.cjs tests/scene-seasons.test.cjs tests/shore-contour.test.cjs tests/shore-geometry-probe.cjs tests/spring-beach-probe.cjs tests/spring-garden.test.cjs tests/tools-core.test.cjs tests/version-bridge-probe.cjs tests/version-bridge.test.cjs tests/visitor-turn-probe.cjs tests/visitor-turn.test.cjs tests/visual-probe.cjs tests/visual-state-probe.cjs tests/water-probe.cjs tests/water.test.cjs tests/winter-beach-probe.cjs tests/winter-garden-probe.cjs tests/winter-garden.test.cjs 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/spring-props1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/app/assets/garden-seasonal/spring/lotus-v1.png"
 rm -f "$TARGET/app/assets/garden-seasonal/spring/reeds-v1.png"
 rm -f "$TARGET/tests/spring-garden.test.cjs"
 rm -f "$TARGET/art/spring-garden-01/prompts.json"
 rm -f "$TARGET/art/spring-garden-01/alpha-preview.jpg"
 rm -f "$TARGET/art/spring-garden-01/assets.json"
 rm -f "$TARGET/art/spring-garden-01/validation-note.txt"
 printf 'Restored pre-spring-manual-props source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--winter-beach-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app tests app/assets app/assets/scenes app/assets/scenes/beach app/assets/scenes/beach/winter app/assets/scenes/beach/winter/bed-v1.png app/scene-manifest.js app/scene-art.js app/clear-sample-core.js tests/beach-bed.test.cjs tests/scene-seasons.test.cjs package.json package-lock.json THIRD_PARTY.txt 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/winter-beach1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/app/assets/scenes/beach/winter/bed-v1.png"
 printf 'Restored pre-independent-winter-beach source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--autumn-beach-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app tests app/assets app/assets/scenes app/assets/scenes/beach app/assets/scenes/beach/autumn app/assets/scenes/beach/autumn/bed-v1.png app/scene-manifest.js app/scene-art.js app/clear-sample-core.js tests/beach-bed.test.cjs tests/scene-seasons.test.cjs package.json package-lock.json THIRD_PARTY.txt 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/autumn-beach1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/app/assets/scenes/beach/autumn/bed-v1.png"
 printf 'Restored pre-independent-autumn-beach source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--spring-beach-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app tests app/assets app/assets/scenes app/assets/scenes/beach app/assets/scenes/beach/spring app/assets/scenes/beach/spring/bed-v1.png app/scene-manifest.js app/scene-art.js app/clear-sample-core.js tests/beach-bed.test.cjs tests/scene-seasons.test.cjs package.json package-lock.json THIRD_PARTY.txt 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/spring-beach1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/app/assets/scenes/beach/spring/bed-v1.png"
 printf 'Restored pre-independent-spring-beach source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--beach-bed-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app tests app/assets app/assets/scenes app/assets/scenes/beach app/assets/scenes/beach/summer app/assets/scenes/beach/summer/bed-v1.png app/scene-manifest.js app/scene-art.js tests/beach-layout-probe.cjs tests/beach-poses-probe.cjs tests/beach-poses.test.cjs package.json package-lock.json THIRD_PARTY.txt 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/beach-bed1-baseline.tar.gz" -C "$TARGET"
 rm -f "$TARGET/app/assets/scenes/beach/summer/bed-v1.png"
 printf 'Restored pre-independent-summer-beach source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--visitor-turn-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app/habitat-core.js package.json package-lock.json 蓬莱临水0.9候选说明.txt; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/visitor-turn1-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pre-continuous-heading source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--candidate-doc-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ ! -L "$2" ] && [ ! -L "$2/蓬莱临水0.9候选说明.txt" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 tar -xzf "$DIR/candidate5-doc-baseline.tar.gz" -C "$TARGET"
 printf 'Restored candidate documentation: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--version-bridge-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/desktop" ] && [ ! -L "$2" ] && [ ! -L "$2/desktop" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in desktop/preload.cjs desktop/main.cjs desktop/verify-regression-v9.cjs package.json package-lock.json; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/versionbridge1-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pre-version-bridge source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--beach-art-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] && [ ! -L "$2/app/clear-sample-core.js" ] && [ ! -L "$2/app/scene-art.js" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 tar -xzf "$DIR/beach-art1-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pre-beach-art routing: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--beach-shore-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] && [ ! -L "$2/app/scene-art.js" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 tar -xzf "$DIR/beach-shore1-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pre-beach-shore layout: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--winter-garden-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app/clear-sample-core.js app/garden.js app/scene-art.js; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/winter-garden1-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pre-winter-garden integration: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--shore-day-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app/habitat-core.js app/habitat.js app/scene-art.js app/clear-sample-core.js app/garden.js app/garden.css; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/shore-day1-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pre-shore-day source: %s\n' "$TARGET"
 exit 0
fi
if [ "$#" -eq 2 ] && [ "$1" = "--clear-day-root" ]; then
 [ -f "$2/.qingchi-rollback-copy" ] && [ -d "$2/app" ] && [ -d "$2/desktop" ] && [ ! -L "$2" ] && [ ! -L "$2/app" ] && [ ! -L "$2/desktop" ] || { echo "Separate marked copy required" >&2; exit 5; }
 TARGET=$(CDPATH= cd -- "$2" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 [ "$TARGET" != "$ROOT" ] || { echo "Refuse active source" >&2; exit 6; }
 for name in app/environment.js app/clear-sample.js app/life-ui.js desktop/main.cjs; do
  [ ! -L "$TARGET/$name" ] || { echo "Refuse symlink" >&2; exit 7; }
 done
 tar -xzf "$DIR/clear-day-baseline.tar.gz" -C "$TARGET"
 printf 'Restored pre-day-only sample: %s\n' "$TARGET"
 exit 0
fi
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
