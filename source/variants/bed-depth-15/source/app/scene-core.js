/* Original scene loading/geometry primitives. No reference-package code or assets. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QingchiSceneCore=api;})(globalThis,()=>{
 'use strict';
 function cover(iw,ih,w,h){if(![iw,ih,w,h].every(x=>Number.isFinite(x)&&x>0))throw Error('Invalid scene dimensions');const scale=Math.max(w/iw,h/ih);return{scale,x:(w-iw*scale)/2,y:(h-ih*scale)/2,width:iw*scale,height:ih*scale};}
 function localPoint(x,y,pose){const a=-pose.angle,dx=x-pose.x,dy=y-pose.y;return{u:(dx*Math.cos(a)-dy*Math.sin(a))/pose.width+.5,v:(dx*Math.sin(a)+dy*Math.cos(a))/pose.height+.5};}
 function alphaHit(data,iw,ih,u,v,threshold=100){if(u<0||v<0||u>=1||v>=1)return false;return data[(Math.floor(v*ih)*iw+Math.floor(u*iw))*4+3]>=threshold;}
 // Atomic, latest-request-wins loading. Failures preserve the last working scene.
 function loader(load,commit){let serial=0,active=null,error=null;const cache=new Map();return{async request(key,assets){const ticket=++serial;error=null;try{const resources=await Promise.all(Object.entries(assets).map(async([role,url])=>{if(!cache.has(url))cache.set(url,Promise.resolve().then(()=>load(url)).catch(e=>{cache.delete(url);throw e;}));return[role,await cache.get(url)];}));if(ticket!==serial)return false;commit(key,Object.fromEntries(resources));active=key;return true;}catch(e){if(ticket===serial)error=String(e.message||e);return false;}},cancel(){serial++;},inspect:()=>({active,error,serial,cached:cache.size})};}
 return{cover,localPoint,alphaHit,loader};
});
