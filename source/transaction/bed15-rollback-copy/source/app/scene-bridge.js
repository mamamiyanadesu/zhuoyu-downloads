(()=>{'use strict';if(!document.body.dataset.sceneIntegrated)return;const selected=()=>window.QingchiScene?.inspect().map==='clear'&&!['spring','summer','autumn'].includes(window.QingchiScene?.inspect().season)?window.QingchiLegacyWater:window.QingchiSeasonWater;
window.QingchiWaterSurface=Object.freeze({setQuality:value=>window.QingchiSeasonWater?.setQuality(value),render(dt,waves){selected()?.render(window.QingchiScene?.inspect().reduced?0:dt,waves);},inspect(){return{...selected()?.inspect(),map:window.QingchiScene?.inspect().map,integrated:true};}});
})();
