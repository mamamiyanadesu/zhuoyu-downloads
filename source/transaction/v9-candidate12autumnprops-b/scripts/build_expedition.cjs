const path=require('node:path');
let esbuild;try{esbuild=require('esbuild')}catch{esbuild=require('/Users/mac/Documents/Codex/learn/game-ui-style-lab/node_modules/esbuild');}
const root=path.resolve(__dirname,'..');esbuild.buildSync({entryPoints:[path.join(root,'app/penglai/src/main.js')],outfile:path.join(root,'app/penglai/world.bundle.js'),bundle:true,format:'iife',target:'chrome120',minify:true,legalComments:'eof',alias:{three:path.join(root,'app/penglai/vendor/three/three.module.js')}});console.log('Built Penglai fishing world with esbuild',esbuild.version);
