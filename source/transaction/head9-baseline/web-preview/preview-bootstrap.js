(()=>{'use strict';
 const C=QingchiCore,L=QingchiLifeCore;
 if(!localStorage.getItem(C.KEY)){const s=C.initial();s.settings.fishCount=24;s.settings.quietView=true;localStorage.setItem(C.KEY,JSON.stringify(s));}
 if(!localStorage.getItem(L.KEY)){const s=L.initial();s.garden=[];s.habitats.layouts.clear=[];s.habitats.active='clear';s.habitats.visitors={enabled:false,density:'low'};s.env={season:'summer',light:'day',weather:'clear'};localStorage.setItem(L.KEY,JSON.stringify(L.validate(s)));}
 addEventListener('DOMContentLoaded',()=>{document.title='春池 · 原色锦鲤回归预览08';const v=document.querySelector('.version');if(v)v.textContent='原色锦鲤回归预览08 · 浏览器版';});
})();
