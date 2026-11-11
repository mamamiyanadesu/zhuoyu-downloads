/* Original seasonal art catalogue; assets are local and independently generated. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QingchiSceneManifest=api;})(globalThis,()=>{
'use strict';
const seasons=['spring','summer','autumn','winter'];
const names={spring:'春 · 花信',summer:'夏 · 清浅',autumn:'秋 · 桂影',winter:'冬 · 听雪'};
const assets=Object.fromEntries(seasons.map(s=>[s,Object.freeze({bed:`assets/scenes/${s}/bed-v1.png`,foreground:`assets/scenes/${s}/${s==='summer'?'lilies':'foreground'}-v1.png`})]));
function resolveSeason(value,date=new Date()){if(seasons.includes(value))return value;if(value!=='auto')throw Error('Unknown season');const m=date.getMonth();return m>=2&&m<5?'spring':m>=5&&m<8?'summer':m>=8&&m<11?'autumn':'winter';}
function poses(s,w,h,ratio,time=0){const z=Math.min(w,h),sway=Math.sin(time*.16)*.009;
 if(s==='summer')return[{x:w*.12,y:h*.78,width:z*.29,angle:-.22+sway},{x:w*.88,y:h*.19,width:z*.21,angle:2.7-sway}].map(p=>({...p,height:p.width*ratio}));
 if(s==='winter')return[{x:w*.04,y:h*.92,width:z*.5,angle:.04},{x:w*.97,y:h*.06,width:z*.42,angle:3.18}].map(p=>({...p,height:p.width*ratio}));
 return[{x:w*.06,y:h*.88,width:z*.63,angle:-.12+sway},{x:w*.96,y:h*.10,width:z*.48,angle:3.05-sway}].map(p=>({...p,height:p.width*ratio}));
}
return Object.freeze({seasons,names,assets,resolveSeason,poses});
});
