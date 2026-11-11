/* Single-scene art approval variant. Never changes normal-map data or asset identity. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QingchiClearSampleCore=api;})(globalThis,()=>{
'use strict';const types=['lotus','reeds','rock'];
function naturalStyle(map,season,clearSample=false){return (map==='clear'&&clearSample)||(map==='lotus'&&season==='summer');}
function asset(type,map,enabled,refinedLotus=false){return ((enabled&&map==='clear')||(refinedLotus&&map==='lotus'))&&types.includes(type)?'assets/clear-sample-01/'+type+'.png':'assets/garden/'+type+'.png';}
function bendAngle(angle,previous,limit=.14){const d=Math.atan2(Math.sin(angle-previous),Math.cos(angle-previous));return previous+Math.max(-limit,Math.min(limit,d));}
const layout=[{id:'sample-lotus',type:'lotus',x:.20,y:.76,scale:1.05,rotation:-12},{id:'sample-reeds',type:'reeds',x:.075,y:.34,scale:.76,rotation:-18},{id:'sample-rock',type:'rock',x:.91,y:.24,scale:.60,rotation:16},{id:'sample-turtle',type:'turtle',x:.65,y:.66,scale:.52,rotation:24},{id:'sample-frog',type:'frog',x:.16,y:.69,scale:.5,rotation:-36},{id:'sample-dragonfly',type:'dragonfly',x:.34,y:.31,scale:.5,rotation:8}];
return Object.freeze({types,asset,naturalStyle,bendAngle,layout:()=>layout.map(x=>({...x}))});});
