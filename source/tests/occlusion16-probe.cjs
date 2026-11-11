const fs=require('fs'),path=require('path'),vm=require('vm');
const app=path.resolve(process.argv[2],'source/app');let polygons=0,images=0;
const ctx=new Proxy({getImageData:()=>({data:new Uint8Array(16)}),fill:()=>polygons++,drawImage:()=>images++},{get:(o,k)=>o[k]||(()=>{})});
const nodes={};const element=()=>({style:{},width:1280,height:720,getContext:()=>ctx,toDataURL:()=>'',setAttribute(){},append(){},insertBefore(){}});
const document={body:{dataset:{sceneIntegrated:'true'},append(){}},getElementById:id=>nodes[id]||(nodes[id]=element()),createElement:element,querySelector:()=>element()};
const M=require(path.join(app,'scene-manifest.js')),C=require(path.join(app,'scene-core.js'));
class Image{constructor(){this.width=1280;this.height=720;}set src(v){queueMicrotask(()=>this.onload());}}
const window={QingchiSceneCore:C,QingchiSceneManifest:M,QingchiHabitatCore:{maps:[{id:'clear',image:'x'}]},QingchiClearSample:{enabled:false},QingchiSeasonWater:{setBed(){},setSeason(){},setMask(){},render(){}}};
const box={window,document,Image,innerWidth:1280,innerHeight:720,devicePixelRatio:1,addEventListener(){},dispatchEvent(){},CustomEvent:class{},setInterval(){},console,Uint8Array};
(async()=>{vm.runInNewContext(fs.readFileSync(path.join(app,'scene-art.js'),'utf8'),box);await window.QingchiScene.select('autumn');polygons=0;images=0;window.QingchiScene.occlude(ctx);
const water=fs.readFileSync(path.join(app,'scene-water-ours.js'),'utf8');const detail=water.split('vec3 bedDetail(vec3 color,vec2 p){')[1];const noSummer=/if\(seasonMode>\.5&&seasonMode<1\.5\)return color;/.test(detail);
const r=fs.readFileSync(path.join(app,'reference-details.js'),'utf8');
console.log(JSON.stringify({input:'clear/autumn,1280x720;summer bedDetail',autumnRockCutouts:polygons,branchStamps:images,summerAddedDarkDetail:noSummer?'disabled':'enabled',turtleBelowFish:r.includes("insertBefore(c,document.getElementById('wallpaper-canvas'))")}));})();
