const fs=require('node:fs'),vm=require('node:vm');
const ctx=new Proxy({},{get:()=>()=>{},set:()=>true}),canvas={getContext:()=>ctx},window={innerWidth:1280,innerHeight:800,devicePixelRatio:1,addEventListener:()=>{}},document={hidden:false,getElementById:()=>canvas,body:{style:{}},addEventListener:()=>{}};
const math=Object.create(Math);math.random=()=>.4;
vm.runInNewContext(fs.readFileSync(process.argv[2],'utf8'),{window,document,Math:math,performance:{now:()=>0},requestAnimationFrame:()=>{}});
const p=window.QingchiPond,supported=typeof p?.setCatalog==='function';let own=[];
if(supported){p.setCatalog([{id:'fixture-fish',name:'青禾',color:'#e8e2ce',accent:'#c78160',fin:1,tail:1,strokes:[{color:'#cc8855',size:.08,points:[[0,0],[.3,.2]]}],growth:900,fed:7,placed:true}]);own=p.ranking().filter(f=>f.custom).map(({name,food})=>({name,food}));}
console.log(JSON.stringify({input:'fixture-fish; growth=900; fed=7; placed=true',customCatalogSupported:supported,ownedFish:own}));
