const M=require(require('node:path').resolve(process.argv[2]));
const input='all3maps;autumn+summer;1280x788;time0and10;autoOctober';
console.log(JSON.stringify({input,auto:M.resolveSeason('auto',new Date(2026,9,1)),maps:['clear','lotus','beach'].map(map=>({map,autumn:M.mapPlan(map,'autumn'),summer:M.mapPlan(map,'summer'),poses:M.poses('autumn',1280,788,2/3,0,map)}))}));
