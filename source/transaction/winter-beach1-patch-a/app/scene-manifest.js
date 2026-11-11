/* Original seasonal art catalogue; assets are local and independently generated. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QingchiSceneManifest=api;})(globalThis,()=>{
'use strict';
const seasons=['spring','summer','autumn','winter'];
const names={spring:'春 · 花信',summer:'夏 · 清浅',autumn:'秋 · 桂影',winter:'冬 · 听雪'};
const assets=Object.fromEntries(seasons.map(s=>[s,Object.freeze({bed:`assets/scenes/${s}/bed-v1.png`,foreground:`assets/scenes/${s}/${s==='summer'?'lilies':'foreground'}-v1.png`})]));
const beachBeds=Object.freeze(Object.fromEntries(['spring','summer','autumn'].map(s=>[s,Object.freeze({...assets[s],bed:`assets/scenes/beach/${s}/bed-v1.png`})])));
function assetsFor(map,s){if(!['clear','lotus','beach','lab'].includes(map))throw Error('Unknown scene map');if(!seasons.includes(s))throw Error('Unknown season');return map==='beach'&&beachBeds[s]?beachBeds[s]:assets[s];}
function resolveSeason(value,date=new Date()){if(seasons.includes(value))return value;if(value!=='auto')throw Error('Unknown season');const m=date.getMonth();return m>=2&&m<5?'spring':m>=5&&m<8?'summer':m>=8&&m<11?'autumn':'winter';}
function poses(s,w,h,ratio,time=0,map='lab'){const z=Math.min(w,h),sway=Math.sin(time*.16)*.009;
 if(s==='summer')return[{x:w*.12,y:h*(map==='beach'?.43:.78),width:z*(map==='beach'?.21:.29),angle:-.22+sway},{x:w*.88,y:h*.19,width:z*.21,angle:2.7-sway}].map(p=>({...p,height:p.width*ratio}));
 if(s==='winter')return[{x:w*.04,y:h*.92,width:z*.5,angle:.04},{x:w*.97,y:h*.06,width:z*.42,angle:3.18}].map(p=>({...p,height:p.width*ratio}));
 return[{x:w*.06,y:h*.88,width:z*.63,angle:-.12+sway},{x:w*.96,y:h*.10,width:z*.48,angle:3.05-sway}].map(p=>({...p,height:p.width*ratio}));
}
// Polygons traced in normalized SOURCE image coordinates, not viewport coordinates.
const rocks={
 spring:[[[0,0],[.14,0],[.17,.08],[.12,.18],[.07,.23],[0,.22]],[[1,.65],[.94,.69],[.91,.81],[.82,.89],[.68,.94],[.67,1],[1,1]]],
 summer:[[[0,0],[.19,0],[.18,.10],[.12,.18],[.06,.22],[0,.20]],[[.95,0],[1,0],[1,.22],[.93,.15],[.91,.07]],[[0,.81],[.08,.82],[.16,.91],[.18,1],[0,1]],[[1,.81],[1,1],[.72,1],[.76,.94],[.85,.93],[.86,.86],[.92,.82]]],
 autumn:[[[.40,0],[1,0],[1,.47],[.94,.41],[.87,.37],[.83,.28],[.75,.26],[.69,.17],[.57,.11],[.53,.04]],[[0,.65],[.05,.68],[.08,.76],[.12,.79],[.14,.88],[.27,.96],[.32,1],[0,1]]],
 winter:[[[.69,0],[1,0],[1,.29],[.95,.28],[.88,.24],[.80,.18],[.75,.11]],[[0,.66],[.06,.69],[.13,.77],[.20,.87],[.23,.96],[.32,1],[0,1]]]
};
function pointIn(poly,x,y){let hit=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit;}
const noRocks=Object.freeze([]);
function rocksFor(map,s){return map==='beach'&&beachBeds[s]?noRocks:(rocks[s]||[]);}
function rockAt(s,x,y,map='lab'){return rocksFor(map,s).some(p=>pointIn(p,x,y));}
function mapPlan(map,s){if(!['clear','lotus','beach','lab'].includes(map))throw Error('Unknown scene map');if(!seasons.includes(s))throw Error('Unknown season');return{map,season:s,original:map==='clear',bed:map==='clear'?'assets/clear-pond-v2.png':assetsFor(map,s).bed,foreground:assets[s].foreground,shore:map==='lotus'?'ellipse':map==='beach'?'tideline':'full'};}
return Object.freeze({seasons,names,assets,assetsFor,rocksFor,resolveSeason,poses,rocks,pointIn,rockAt,mapPlan});
});
