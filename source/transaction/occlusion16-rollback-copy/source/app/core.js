/* Qingchi original component model. No dependency on commercial application code. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.QingchiCore = api;
})(typeof globalThis === 'object' ? globalThis : this, function () {
  'use strict';
  const KEY = 'qingchi.desktop.v1';
  const copy = x => JSON.parse(JSON.stringify(x));
  function day(now = Date.now()) { const d = new Date(now); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
  function timer(kind='focus', seconds=1500) { return {kind, duration:seconds*1000, remaining:seconds*1000, status:'idle', endsAt:null}; }
  function initial(now=Date.now()) { return {schema:1,note:'',tasks:[],settings:{fishCount:18,fps:30,caustics:true,waterQuality:'low',mode:'interact',quietView:true,personalLine:'今天，慢慢来。'},timer:timer(),focus:{date:day(now),count:0},savedAt:now}; }
  function validate(v) {
    const fail = () => { throw new Error('备份格式不正确；现有数据未替换。'); };
    if (!v || v.schema!==1 || typeof v.note!=='string' || v.note.length>4000 || !Array.isArray(v.tasks) || v.tasks.length>200) fail();
    const ids = new Set();
    for (const t of v.tasks) {
      if (!t || typeof t.id!=='string'||t.id.length>100||ids.has(t.id)||typeof t.text!=='string'||!t.text.trim()||t.text.length>160||typeof t.done!=='boolean'||!/^\d{4}-\d{2}-\d{2}$/.test(t.date)) fail();
      ids.add(t.id);
    }
    const s=v.settings,t=v.timer;
    if(s && s.waterQuality!==undefined && !['low','high'].includes(s.waterQuality)) fail();
    if(s && s.personalLine!==undefined && (typeof s.personalLine!=='string'||!s.personalLine.trim()||s.personalLine.length>60)) fail();
    if(s && s.quietView!==undefined && typeof s.quietView!=='boolean') fail();
    if (!s || !Number.isInteger(s.fishCount)||s.fishCount<5||s.fishCount>50||![30,60].includes(s.fps)||typeof s.caustics!=='boolean'||!['interact','quiet'].includes(s.mode)) fail();
    if (!t || !['focus','break','test','custom'].includes(t.kind)||!['idle','running','paused','finished'].includes(t.status)||!Number.isFinite(t.duration)||t.duration<1000||t.duration>7200000||!Number.isFinite(t.remaining)||t.remaining<0||t.remaining>t.duration) fail();
    if (t.status==='running' ? !Number.isFinite(t.endsAt)||t.endsAt<=0 : t.endsAt!==null) fail();
    if (!v.focus||!/^\d{4}-\d{2}-\d{2}$/.test(v.focus.date)||!Number.isInteger(v.focus.count)||v.focus.count<0||v.focus.count>100000||!Number.isFinite(v.savedAt)) fail();
    // Reconstruct an allowlisted shape: imported objects never become application prototypes.
    return {schema:1,note:v.note,tasks:v.tasks.map(t=>({id:t.id,text:t.text,done:t.done,date:t.date})),settings:{fishCount:s.fishCount,fps:s.fps,caustics:s.caustics,waterQuality:s.waterQuality??'low',mode:s.mode,quietView:s.quietView??true,personalLine:s.personalLine??'今天，慢慢来。'},timer:{kind:t.kind,duration:t.duration,remaining:t.remaining,status:t.status,endsAt:t.endsAt},focus:{date:v.focus.date,count:v.focus.count},savedAt:v.savedAt};
  }
  function remaining(t,now=Date.now()) { return t.status==='running' ? Math.max(0,Math.min(t.duration,t.endsAt-now)) : t.remaining; }
  function start(t,now=Date.now()) { const n=copy(t);n.remaining=(n.status==='finished'?n.duration:remaining(n,now));n.status='running';n.endsAt=now+n.remaining;return n; }
  function pause(t,now=Date.now()) { const n=copy(t);n.remaining=remaining(n,now);n.status='paused';n.endsAt=null;return n; }
  function complete(state,now=Date.now()) { const n=copy(state);if(n.timer.status!=='running'||remaining(n.timer,now)>0)return {state:n,completed:false};n.timer.status='finished';n.timer.remaining=0;n.timer.endsAt=null;if(n.focus.date!==day(now))n.focus={date:day(now),count:0};if(n.timer.kind==='focus')n.focus.count++;return {state:n,completed:true}; }
  function createStore(storage) {
    let blocked=false;
    return {
      load(now=Date.now()) { try { const raw=storage.getItem(KEY);const state=raw?validate(JSON.parse(raw)):initial(now);blocked=false;return {state,error:null}; } catch(e) { blocked=true;return {state:initial(now),error:'无法读取本地存档，原数据未覆盖。可导出当前内容，或导入有效备份恢复。'}; } },
      save(state) { if(blocked)throw Error('原存档异常，自动保存已暂停；请先导出或恢复备份。'); const n=validate(state);storage.setItem(KEY,JSON.stringify(n));return n; },
      import(text) { if(typeof text!=='string'||text.length>1000000)throw Error('备份文件过大。');let v;try{v=validate(JSON.parse(text));}catch(e){throw Error('备份格式不正确；现有数据未替换。');}storage.setItem(KEY,JSON.stringify(v));blocked=false;return v; },
      export(state) { return JSON.stringify(validate(state),null,2); }
    };
  }
  return {KEY,day,timer,initial,validate,remaining,start,pause,complete,createStore,copy};
});
