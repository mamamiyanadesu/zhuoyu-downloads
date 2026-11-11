(() => {
 'use strict';
 const C=window.QingchiCore,$=id=>document.getElementById(id);
 const nativeStore=window.qingchiDesktop?.readCore;
 const storage=nativeStore?{getItem:()=>{const r=window.qingchiDesktop.readCore();if(!r.ok)throw Error(r.error);return JSON.stringify(r.value);},setItem:(_key,value)=>{const r=window.qingchiDesktop.saveCore(JSON.parse(value));if(!r.ok)throw Error(r.error);}}:{getItem:key=>localStorage.getItem(key),setItem:(key,value)=>localStorage.setItem(key,value)};
 const store=C.createStore(storage);
 const loaded=store.load();let state=loaded.state,showHistory=false,tab='note',paused=false,unsaved=false;
 let today=C.day();
 function status(text,error=false){$('save-status').textContent=text;$('save-status').classList.toggle('error',error);}
 function commit(next){next.savedAt=Date.now();try{state=store.save(next);unsaved=false;status('已保存在本机 · '+new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'}));return true;}catch(e){state=next;unsaved=true;status('未保存：'+e.message,true);return false;}}
 function mutate(fn){const n=C.copy(state);fn(n);return commit(n);}
 function switchTab(name){tab=name;for(const x of ['note','tasks','focus']){$('panel-'+x).hidden=x!==name;$('tab-'+x).setAttribute('aria-pressed',String(x===name));}if(name==='tasks')renderTasks();renderTimer();}
 function updateNote(){if(document.activeElement!==$('note'))$('note').value=state.note;$('note-count').textContent=state.note.length+' / 4000';}
 function renderTasks(){
  const tasks=state.tasks.filter(t=>showHistory||t.date===today);$('task-list').replaceChildren();
  for(const task of tasks){
   const li=document.createElement('li'),label=document.createElement('label'),check=document.createElement('input'),span=document.createElement('span'),remove=document.createElement('button');
   check.type='checkbox';check.checked=task.done;check.setAttribute('aria-label','完成：'+task.text);span.textContent=task.text;label.append(check,span);li.classList.toggle('done',task.done);
   if(showHistory){const date=document.createElement('small');date.textContent=task.date;span.append(date);}
   check.onchange=()=>{mutate(s=>{s.tasks.find(t=>t.id===task.id).done=check.checked;});renderTasks();};
   remove.textContent='×';remove.setAttribute('aria-label','删除：'+task.text);remove.onclick=()=>{mutate(s=>{s.tasks=s.tasks.filter(t=>t.id!==task.id);});renderTasks();};
   li.append(label,remove);$('task-list').append(li);
  }
  $('task-empty').hidden=tasks.length>0;$('task-progress').textContent=`${tasks.filter(t=>t.done).length} / ${tasks.length} 件已完成`;
  $('task-badge').textContent=state.tasks.filter(t=>t.date===today&&!t.done).length;
  $('toggle-history').textContent=showHistory?'今日待办':'全部待办';
 }
 function renderTimer(){const t=state.timer,ms=C.remaining(t),secs=Math.ceil(ms/1000);$('timer').textContent=String(Math.floor(secs/60)).padStart(2,'0')+':'+String(secs%60).padStart(2,'0');
  $('timer-start').textContent=t.status==='running'?'暂停':t.status==='paused'?'继续':t.kind==='break'?'开始休息':t.kind==='test'?'再次测试':t.kind==='custom'?'开始提醒':'开始专注';
  $('timer-status').textContent=t.status==='running'?(t.kind==='test'?'正在测试提醒，不计入专注次数。':'只做眼前这一件事。'):t.status==='paused'?'已经暂停，随时可以继续。':t.status==='finished'?'这一刻已经完成。':'还没开始，准备好再出发。';
  $('focus-mode').setAttribute('aria-pressed',String(t.kind==='focus'));$('break-mode').setAttribute('aria-pressed',String(t.kind==='break'));$('focus-count').textContent=state.focus.date===today?state.focus.count:0;
 }
 function applyWaterQuality(){const requested=state.settings.waterQuality||'low',result=window.QingchiWaterSurface?.setQuality(requested);$('water-quality').value=result?.quality||requested;$('water-quality-status').textContent=result?.ok===false?result.error:requested==='high'?'高质量：更细的水光边缘，GPU 工作量和耗电更高。':'低功耗：保留当前效果，适合长时间观赏。';}
 function applySettings(){applyWaterQuality();window.QingchiPond.configure({fishCount:state.settings.fishCount,fishSize:.70,fishSpeed:1,enableCaustics:state.settings.caustics,enableFeeding:state.settings.mode==='interact',fps:state.settings.fps});
  $('pond-status').textContent=`${state.settings.fishCount} 尾锦鲤 · ${state.settings.fps} FPS 上限`;
  $('interaction-hint').textContent=state.settings.mode==='quiet'?'只看鱼 · 安静相伴':'点击水面 · 喂一喂';
  if(![...$('fish-count').options].some(o=>Number(o.value)===state.settings.fishCount)){const opt=document.createElement('option');opt.value=state.settings.fishCount;opt.textContent=state.settings.fishCount+' 尾 · 备份设置';$('fish-count').append(opt);}
  $('fish-count').value=state.settings.fishCount;$('fps').value=state.settings.fps;$('caustics').checked=state.settings.caustics;$('interaction').value=state.settings.mode;
 }
 function refreshAll(){updateNote();renderTasks();renderTimer();applySettings();renderQuiet();}
 function clock(){const now=new Date();$('clock').textContent=now.toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit',hour12:false});$('clock').dateTime=now.toISOString();$('calendar').textContent=now.toLocaleDateString('zh-CN',{month:'long',day:'numeric',weekday:'long'});if(today!==C.day()){today=C.day();renderTasks();}}
 function finishTimer(){const result=C.complete(state);if(!result.completed)return;commit(result.state);$('reminder').hidden=false;$('reminder-title').textContent=state.timer.kind==='test'?'提醒测试成功。':state.timer.kind==='break'?'休息好了，慢慢回来。':'这一刻，完成了。';$('reminder-text').textContent=state.timer.kind==='test'?'页面内提醒已触发；没有发送系统通知。':'把目光交给水面，休息一下。';if(state.timer.kind==='custom'){$('reminder-title').textContent=window.QingchiLife?.timerLabel?.()||'定时提醒到了';}if(state.timer.kind!=='test')window.qingchiDesktop?.remind?.($('reminder-title').textContent);window.dispatchEvent(new CustomEvent('qingchi-timer-finished',{detail:{kind:state.timer.kind}}));}
 function tick(){clock();finishTimer();renderTimer();}
 function changeTimer(kind,seconds){if(state.timer.status==='running'||state.timer.status==='paused'){if(!confirm('切换会结束当前计时，是否继续？'))return false;}mutate(s=>s.timer=C.timer(kind,seconds));$('reminder').hidden=true;renderTimer();return true;}
 function renderQuiet(){const value=state.settings.quietView;document.body.classList.toggle('immersive',value);$('restore-widgets').hidden=!value;$('quiet-view').checked=value;}
 function immersive(value){mutate(s=>s.settings.quietView=value);renderQuiet();(value?$('restore-widgets'):$('immersive')).focus();}
 $('quiet-view').onchange=()=>immersive($('quiet-view').checked);
 $('note').placeholder='写下想记住的事。';
 $('note').addEventListener('input',()=>{mutate(s=>s.note=$('note').value);updateNote();});
 $('task-form').addEventListener('submit',e=>{e.preventDefault();const text=$('task-input').value.trim();if(!text)return;if(state.tasks.length>=200){status('待办已达 200 条，请先清理历史记录。',true);return;}mutate(s=>s.tasks.push({id:globalThis.crypto?.randomUUID?.()||Date.now()+'-'+Math.random(),text,done:false,date:today}));$('task-input').value='';renderTasks();});
 $('toggle-history').onclick=()=>{showHistory=!showHistory;renderTasks();};
 for(const x of ['note','tasks','focus'])$('tab-'+x).onclick=()=>switchTab(x);
 $('timer-start').onclick=()=>{finishTimer();mutate(s=>s.timer=s.timer.status==='running'?C.pause(s.timer):C.start(s.timer));$('reminder').hidden=true;renderTimer();};
 $('timer-reset').onclick=()=>{if(state.timer.status==='running'&&!confirm('要重置这次正在进行的计时吗？'))return;mutate(s=>s.timer=C.timer(s.timer.kind,s.timer.duration/1000));$('reminder').hidden=true;renderTimer();};
 $('focus-mode').onclick=()=>changeTimer('focus',1500);$('break-mode').onclick=()=>changeTimer('break',300);
 $('dismiss-reminder').onclick=()=>{$('reminder').hidden=true;if(state.timer.kind==='custom'&&window.QingchiLife?.timerRepeats?.()){mutate(s=>s.timer=C.start(C.timer('custom',s.timer.duration/1000)));renderTimer();}};
 const openSettings=()=>{if(!$('settings').open)$('settings').showModal();};
 $('open-settings').onclick=openSettings;$('backup-shortcut').onclick=openSettings;$('close-settings').onclick=()=>$('settings').close();
 $('pause-pond').onclick=()=>{paused=!paused;window.QingchiPond.setPaused(paused);$('pause-pond').textContent=paused?'继续游动':'暂停游动';};
 $('immersive').onclick=()=>immersive(true);$('restore-widgets').onclick=()=>immersive(false);
 document.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='h'&&!e.repeat&&!e.isComposing&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.target.closest('input,textarea,select,[contenteditable]')&&!document.querySelector('dialog[open]')&&!document.body.classList.contains('garden-edit'))immersive(!document.body.classList.contains('immersive'));});
 for(const [id,key,convert] of [['fish-count','fishCount',Number],['fps','fps',Number],['interaction','mode',String]])$(id).onchange=()=>{mutate(s=>s.settings[key]=convert($(id).value));applySettings();};
 $('water-quality').onchange=()=>{const requested=$('water-quality').value,result=window.QingchiWaterSurface?.setQuality(requested);if(!result?.ok){$('water-quality').value=result?.quality||state.settings.waterQuality||'low';$('water-quality-status').textContent=result?.error||'画质切换暂不可用，请稍后再试。';return;}mutate(s=>s.settings.waterQuality=requested);applyWaterQuality();};
 $('caustics').onchange=()=>{mutate(s=>s.settings.caustics=$('caustics').checked);applySettings();};
 $('test-reminder').onclick=()=>{if(changeTimer('test',3)){mutate(s=>s.timer=C.start(s.timer));$('settings').close();switchTab('focus');}};
 $('export-data').onclick=()=>{try{const text=store.export(state),url=URL.createObjectURL(new Blob([text],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='清池备份-'+C.day()+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);$('import-status').textContent='已发起备份下载，请确认文件已保存。';}catch(e){$('import-status').textContent='导出失败：'+e.message;}};
 $('import-data').onclick=()=>$('import-file').click();
 $('import-file').onchange=async()=>{const file=$('import-file').files?.[0];if(!file)return;try{if(file.size>1000000)throw Error('备份不能超过 1 MB。');const text=await file.text();C.validate(JSON.parse(text));if(!confirm('导入将替换当前笔记、待办和计时。建议先保存备份。继续吗？'))return;state=store.import(text);unsaved=false;$('note').value=state.note;refreshAll();tick();status('备份已恢复到本机');$('import-status').textContent='导入成功。';}catch(e){$('import-status').textContent='导入失败，原数据未替换：'+e.message;}finally{$('import-file').value='';}};
 window.addEventListener('storage',e=>{if(e.key!==C.KEY)return;if(unsaved||document.activeElement===$('note')||document.activeElement===$('task-input')){status('另一窗口更新了存档。请先导出本窗口内容，再刷新核对。',true);return;}const next=store.load();if(next.error){status(next.error,true);return;}state=next.state;refreshAll();status('已同步另一窗口的本地更新');});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick();});
 window.addEventListener('beforeunload',e=>{if(unsaved){e.preventDefault();e.returnValue='';}});
 window.QingchiApp=Object.freeze({reloadCore:()=>{const next=store.load();if(next.error)throw Error(next.error);state=next.state;refreshAll();tick();},startCustom:(minutes)=>{if(!Number.isInteger(minutes)||minutes<1||minutes>120)throw Error('时长必须为 1–120 分钟');if(changeTimer('custom',minutes*60)){mutate(s=>s.timer=C.start(s.timer));switchTab('focus');return true;}return false;},inspect:()=>({state:C.copy(state),unsaved,tab,paused,host:window.__TAURI__?'tauri':window.qingchiDesktop?'desktop':'web'})});
 refreshAll();tick();if(loaded.error){unsaved=true;status(loaded.error,true);}setInterval(tick,500);
})();
