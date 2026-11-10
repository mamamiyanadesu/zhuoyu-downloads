/* Original seasonal art catalogue; assets are local and independently generated. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QingchiSceneManifest=api;})(globalThis,()=>{
'use strict';
const seasons=['spring','summer','autumn','winter'];
const names={spring:'春 · 花信',summer:'夏 · 清浅',autumn:'秋 · 桂影',winter:'冬 · 听雪'};
const assets=Object.fromEntries(seasons.map(s=>[s,Object.freeze({bed:s==='spring'?'assets/scenes/spring/peach-master-v2.png':`assets/scenes/${s}/bed-v1.png`,foreground:s==='autumn'?'assets/scenes/autumn/foreground-osmanthus-v2.png':`assets/scenes/${s}/${s==='summer'?'lilies':'foreground'}-v1.png`})]));
const beachBeds=Object.freeze(Object.fromEntries(seasons.map(s=>[s,Object.freeze({...assets[s],bed:`assets/scenes/beach/${s}/bed-v1.png`})])));
function assetsFor(map,s){if(!['clear','lotus','beach','lab'].includes(map))throw Error('Unknown scene map');if(!seasons.includes(s))throw Error('Unknown season');return map==='clear'&&s==='summer'?{...assets[s],bed:'assets/clear-pond-v2.png',ringClean:'assets/clear-pond-clean-v5.png'}:map==='beach'&&beachBeds[s]?beachBeds[s]:assets[s];}
function resolveSeason(value,date=new Date()){if(seasons.includes(value))return value;if(value!=='auto')throw Error('Unknown season');const m=date.getMonth();return m>=2&&m<5?'spring':m>=5&&m<8?'summer':m>=8&&m<11?'autumn':'winter';}
function poses(s,w,h,ratio,time=0,map='lab'){const z=Math.min(w,h),sway=Math.sin(time*.16)*.009;
 if(map==='clear'&&s==='summer')return [];
 if(s==='spring')return []; // Complete spring master has four baked corner compositions; do not stamp old cherry sprites.
 if(s==='summer')return[{x:w*.12,y:h*(map==='beach'?.43:.78),width:z*(map==='beach'?.21:.29),angle:-.22+sway},{x:w*.88,y:h*.19,width:z*.21,angle:2.7-sway}].map(p=>({...p,height:p.width*ratio}));
 if(s==='winter')return[{x:w*.04,y:h*.92,width:z*.5,angle:.04},{x:w*.97,y:h*.06,width:z*.42,angle:3.18}].map(p=>({...p,height:p.width*ratio}));
 return[{x:w*.06,y:h*.88,width:z*.63,angle:-.12+sway},{x:w*.96,y:h*.10,width:z*.48,angle:3.05-sway}].map(p=>({...p,height:p.width*ratio}));
}
// Polygons traced in normalized SOURCE image coordinates, not viewport coordinates.
const rocks={
 spring:[[[0,0],[0.3,0],[0.25,0.08],[0.19,0.14],[0.17,0.23],[0.1,0.29],[0,0.34]],[[1,0],[0.6,0],[0.66,0.1],[0.72,0.17],[0.79,0.21],[0.84,0.3],[0.94,0.34],[1,0.4]],[[0,0.51],[0.07,0.59],[0.11,0.68],[0.17,0.7],[0.19,0.8],[0.27,0.88],[0.33,1],[0,1]],[[1,0.61],[0.97,0.71],[0.93,0.78],[0.85,0.82],[0.82,0.9],[0.72,1],[1,1]]],
 summer:[[[0,0],[.19,0],[.18,.10],[.12,.18],[.06,.22],[0,.20]],[[.95,0],[1,0],[1,.22],[.93,.15],[.91,.07]],[[0,.81],[.08,.82],[.16,.91],[.18,1],[0,1]],[[1,.81],[1,1],[.72,1],[.76,.94],[.85,.93],[.86,.86],[.92,.82]]],
 autumn:[[[.40,0],[1,0],[1,.47],[.94,.41],[.87,.37],[.83,.28],[.75,.26],[.69,.17],[.57,.11],[.53,.04]],[[0,.65],[.05,.68],[.08,.76],[.12,.79],[.14,.88],[.27,.96],[.32,1],[0,1]]],
 winter:[[[.69,0],[1,0],[1,.29],[.95,.28],[.88,.24],[.80,.18],[.75,.11]],[[0,.66],[.06,.69],[.13,.77],[.20,.87],[.23,.96],[.32,1],[0,1]]]
};
function pointIn(poly,x,y){let hit=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit;}
const summerLeaves=[[[0.013020833333333334, 0.7236328125], [0.020833333333333332, 0.6923828125], [0.034505208333333336, 0.6708984375], [0.053385416666666664, 0.6572265625], [0.07356770833333333, 0.650390625], [0.09700520833333333, 0.650390625], [0.11783854166666667, 0.6591796875], [0.13346354166666666, 0.677734375], [0.14518229166666666, 0.7021484375], [0.15104166666666666, 0.732421875], [0.14778645833333334, 0.7626953125], [0.13802083333333334, 0.7919921875], [0.12239583333333333, 0.8154296875], [0.10481770833333333, 0.830078125], [0.08528645833333333, 0.8369140625], [0.06705729166666667, 0.833984375], [0.048828125, 0.826171875], [0.08333333333333333, 0.75390625], [0.029947916666666668, 0.8076171875], [0.020182291666666668, 0.787109375], [0.014322916666666666, 0.76171875]], [[0.12825520833333334, 0.8447265625], [0.1328125, 0.8203125], [0.14518229166666666, 0.8017578125], [0.16276041666666666, 0.7939453125], [0.18033854166666666, 0.7978515625], [0.19661458333333334, 0.810546875], [0.20703125, 0.8310546875], [0.21028645833333334, 0.8525390625], [0.203125, 0.875], [0.19010416666666666, 0.888671875], [0.177734375, 0.8955078125], [0.17122395833333334, 0.8505859375], [0.16731770833333334, 0.8974609375], [0.15234375, 0.8955078125], [0.13736979166666666, 0.884765625], [0.12890625, 0.8681640625]], [[0.900390625, 0.0], [1.0, 0.0], [1.0, 0.1591796875], [0.9778645833333334, 0.15625], [0.95703125, 0.146484375], [0.9361979166666666, 0.1298828125], [0.9212239583333334, 0.107421875], [0.9108072916666666, 0.080078125], [0.904296875, 0.048828125]]];
const noRocks=Object.freeze([]);
function rocksFor(map,s){return map==='clear'&&s==='summer'?summerLeaves:map==='beach'&&beachBeds[s]?noRocks:(rocks[s]||[]);}
function rockAt(s,x,y,map='lab'){return rocksFor(map,s).some(p=>pointIn(p,x,y));}
function mapPlan(map,s){if(!['clear','lotus','beach','lab'].includes(map))throw Error('Unknown scene map');if(!seasons.includes(s))throw Error('Unknown season');return{map,season:s,original:map==='clear',bed:map==='clear'&&s!=='spring'?'assets/clear-pond-depth-v6.png':assetsFor(map,s).bed,foreground:assets[s].foreground,shore:map==='lotus'?'ellipse':map==='beach'?'tideline':'full'};}
return Object.freeze({seasons,names,assets,assetsFor,rocksFor,resolveSeason,poses,rocks,pointIn,rockAt,mapPlan});
});
