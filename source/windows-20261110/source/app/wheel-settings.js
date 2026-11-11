(() => {
 'use strict';
 const h = window.qingchiDesktop, root = document.getElementById('wheel-settings');
 if (!h || !root) return;
 const L = window.QingchiLauncher;
 let state = null, signature = '';
 const el = (tag, text) => { const n = document.createElement(tag); if (text !== undefined) n.textContent = text; return n; };
 const kindText = {app: '应用', folder: '文件夹', file: '文件', url: '网址', action: '应用内'};
 root.replaceChildren(el('h3', '系统快捷轮盘'));
 const enabled = el('input'); enabled.type = 'checkbox'; enabled.id = 'wheel-enabled';
 const enabledLabel = el('label', '启用系统轮盘'); enabledLabel.append(enabled); root.append(enabledLabel);
 const shortcut = el('input'); shortcut.id = 'wheel-shortcut'; shortcut.maxLength = 80;
 const shortLabel = el('label', '快捷键'); shortLabel.append(shortcut); root.append(shortLabel);
 const help = el('p', h.platform === 'win32'
  ? 'Windows 下按住 Alt 呼出轮盘，松开收起。可改用 Ctrl+Shift+Space 等组合键；只检查快捷键状态，不记录输入文字。桌面挂载与全局快捷键仍待真机验收。'
  : '按住 Option 呼出轮盘，松开收起。未授予辅助功能权限时，只在鱼池窗口内生效。也可改用 Alt+Space 等组合键。');
 help.className = 'fine'; root.append(help);
 const row = el('div'); row.className = 'tool-actions';
 const save = el('button', '保存快捷键'), preview = el('button', '打开轮盘');
 save.id = 'wheel-save-shortcut'; preview.id = 'wheel-preview'; save.className = 'secondary'; preview.className = 'secondary';
 row.append(save, preview); root.append(row);
 const count = el('select'); count.id = 'wheel-count';
 for (let i = 6; i <= 10; i++) { const o = el('option', i + ' 个槽位'); o.value = i; count.append(o); }
 const countLabel = el('label', '槽位数量'); countLabel.append(count); root.append(countLabel);
 const status = el('p'); status.id = 'wheel-settings-status'; status.setAttribute('role', 'status'); root.append(status);
 const list = el('ol'); list.id = 'wheel-config-list'; root.append(list);
 const note = el('p', '拖入应用、文件夹、文件或网址；拖动编号可交换顺序。点击、回车或数字键打开，松开 Alt / Option 或 Esc 取消。路径不会交给命令行。');
 note.className = 'fine'; root.append(note);
 async function action(a) {
  const r = await h.wheelAction(a);
  if (!r.ok) { status.textContent = r.error; status.classList.add('error'); return false; }
  render(r.value); return true;
 }
 function render(v) {
  state = v; status.classList.remove('error');
  status.textContent = v.status.active
   ? (v.status.reason === 'global-alt' ? 'Alt 轮盘监听已开启' : v.status.reason === 'global-option' ? 'Option 全局监听已开启' : '系统全局快捷键已注册：' + v.config.shortcut)
   : (v.status.reason === 'permission-required' ? 'Option 全局监听未授权。鱼池窗口内仍可按住 Option 使用，或改用组合键。' : '轮盘未启用：' + v.status.reason);
  enabled.checked = v.config.enabled;
  if (document.activeElement !== shortcut) shortcut.value = v.config.shortcut;
  count.value = v.config.slots.length;
  const sig = JSON.stringify(v.config.slots);
  if (sig === signature) return;
  signature = sig; list.replaceChildren();
  for (const s of v.slots) {
   const li = el('li'); li.dataset.slot = s.index;
   const handle = el('span', String(s.index + 1)); handle.className = 'wheel-drag-handle'; handle.draggable = true; handle.title = '拖动排序';
   handle.ondragstart = e => e.dataTransfer.setData('application/x-qingchi-slot', String(s.index));
   const info = el('div'); info.className = 'wheel-slot-info';
   const name = el('input'); name.id = 'wheel-name-' + s.index; name.placeholder = '空槽位'; name.value = s.label || ''; name.maxLength = 40; name.disabled = s.empty;
   name.setAttribute('aria-label', '槽位 ' + (s.index + 1) + ' 名称');
   name.onchange = () => action({type: 'rename', index: s.index, label: name.value});
   const where = s.empty ? '拖入目标、选择文件，或添加网址 / 应用内动作' : (kindText[s.kind] || '目标') + ' · ' + s.path;
   const p = el('small', s.exists === false ? '路径失效 · ' + s.path : where); p.title = s.path || '';
   if (s.exists === false) p.className = 'error';
   info.append(name, p);
   const actions = el('div'); actions.className = 'wheel-slot-actions';
   const choose = el('button', '选择'); choose.dataset.choose = s.index; choose.onclick = () => action({type: 'choose', index: s.index});
   const folder = el('button', '文件夹'); folder.hidden = h.platform !== 'win32'; folder.onclick = () => action({type: 'choose', index: s.index, kind: 'folder'});
   const url = el('button', '网址'); url.onclick = async () => {
    const entered = window.prompt('输入要打开的 http 或 https 网址', s.kind === 'url' ? s.path : 'https://');
    if (!entered) return;
    await action({type: 'put', index: s.index, path: entered, kind: 'url'});
   };
   const act = el('select'); act.setAttribute('aria-label', '槽位 ' + (s.index + 1) + ' 应用内动作');
   const blank = el('option', '应用内'); blank.value = ''; act.append(blank);
   if (L) for (const [id, label] of Object.entries(L.ACTIONS)) { const o = el('option', label); o.value = id; act.append(o); }
   if (s.kind === 'action') act.value = s.path;
   act.onchange = () => { if (act.value) action({type: 'put', index: s.index, path: act.value, kind: 'action'}); };
   const up = el('button', '↑'); up.setAttribute('aria-label', '上移槽位 ' + (s.index + 1)); up.disabled = s.index === 0; up.onclick = () => action({type: 'swap', index: s.index, to: s.index - 1});
   const clear = el('button', '清除'); clear.dataset.clear = s.index; clear.disabled = s.empty; clear.onclick = () => action({type: 'clear', index: s.index});
   actions.append(choose, folder, url, act, up, clear);
   li.append(handle, info, actions);
   li.ondragover = e => { e.preventDefault(); li.classList.add('drag-over'); };
   li.ondragleave = () => li.classList.remove('drag-over');
   li.ondrop = async e => {
    e.preventDefault(); e.stopPropagation(); li.classList.remove('drag-over');
    const from = e.dataTransfer.getData('application/x-qingchi-slot');
    if (from !== '' && /^\d+$/.test(from)) return action({type: 'swap', index: +from, to: s.index});
    const text = (e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain') || '').split(/\s+/).find(x => L?.looksLikeUrl(x));
    if (text) return action({type: 'put', index: s.index, path: text, kind: 'url'});
    if (e.dataTransfer.files.length !== 1) { status.textContent = '每次拖入一个目标'; return; }
    try { const path = h.filePath(e.dataTransfer.files[0]); if (!path) throw Error('无法读取拖入目标的本机路径'); await action({type: 'put', index: s.index, path}); }
    catch (err) { status.textContent = err.message; }
   };
   list.append(li);
  }
 }
 enabled.onchange = () => action({type: 'configure', value: {enabled: enabled.checked}});
 count.onchange = () => action({type: 'configure', value: {count: +count.value}});
 save.onclick = () => action({type: 'configure', value: {shortcut: shortcut.value.trim()}});
 preview.onclick = () => action({type: 'show'});
 h.onWheel(render);
 h.wheelRead().then(r => r.ok ? render(r.value) : status.textContent = r.error);
 const open = document.getElementById('tools-open'); if (open) open.textContent = '轮盘 · 提醒';
 window.QingchiWheelSettings = Object.freeze({inspect: () => state});
})();
