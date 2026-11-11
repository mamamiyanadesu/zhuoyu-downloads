(() => {
 'use strict';
 const h = window.qingchiWheel, L = window.QingchiLauncher;
 const root = document.getElementById('slots'), status = document.getElementById('wheel-status'), wedge = document.getElementById('wedge'), main = document.getElementById('wheel');
 let model = {slots: [], status: {}}, selected = null, running = false;
 const hint = '指向目标，点击或回车打开 · 松开或 Esc 取消';
 function hitTest(e) {
  const rect = main.getBoundingClientRect();
  return L.slotAtPoint(model.slots.length, e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2), {inner: 48, outer: Math.min(rect.width, rect.height) / 2});
 }
 function paint() {
  for (const b of root.children) b.classList.toggle('is-hot', Number(b.dataset.index) === selected);
  if (selected == null || !model.slots[selected]) { wedge.hidden = true; status.textContent = hint; return; }
  const n = model.slots.length, sweep = 360 / n, slot = model.slots[selected];
  wedge.hidden = false;
  wedge.style.background = `conic-gradient(from ${selected * sweep - sweep / 2}deg, #d7e6c6 0deg ${sweep}deg, transparent ${sweep}deg)`;
  status.textContent = slot.empty ? '空槽位' : slot.exists === false ? slot.label + ' · 路径已失效' : slot.label;
 }
 function select(index) { selected = index; paint(); }
 async function run(i) {
  if (running || !Number.isInteger(i)) return;
  running = true; select(i);
  try { const r = await h.run(i); if (!r.ok) status.textContent = r.error; }
  finally { running = false; }
 }
 function render(s) {
  model = s;
  if (selected != null && selected >= s.slots.length) selected = null;
  root.replaceChildren();
  const n = s.slots.length, r = Math.min(innerWidth, innerHeight) * .32;
  for (const slot of s.slots) {
   const i = slot.index, angle = i / n * Math.PI * 2 - Math.PI / 2, b = document.createElement('button');
   b.type = 'button'; b.className = 'slot'; b.dataset.index = i; b.dataset.kind = slot.kind || ''; b.dataset.missing = String(slot.exists === false);
   b.style.setProperty('--x', Math.cos(angle) * r + 'px'); b.style.setProperty('--y', Math.sin(angle) * r + 'px'); b.style.animationDelay = (i * 16) + 'ms';
   b.setAttribute('aria-label', slot.empty ? '空槽位 ' + (i + 1) : slot.label + (slot.exists === false ? '，路径已失效' : ''));
   if (slot.icon) { const im = document.createElement('img'); im.src = slot.icon; im.alt = ''; b.append(im); }
   else { const sym = document.createElement('span'); sym.className = 'symbol'; sym.textContent = slot.empty ? '＋' : slot.kind === 'url' ? '↗' : slot.kind === 'action' ? '◌' : '?'; b.append(sym); }
   const label = document.createElement('span'); label.className = 'label'; label.textContent = slot.empty ? '未设置' : slot.label; b.append(label);
   b.addEventListener('pointerup', e => e.stopPropagation());
   b.addEventListener('click', () => run(i));
   root.append(b);
  }
  paint();
 }
 document.getElementById('cancel').onclick = () => h.cancel();
 main.addEventListener('pointermove', e => { const hit = hitTest(e); if (hit !== selected) select(hit); });
 main.addEventListener('pointerleave', () => select(null));
 main.addEventListener('pointerup', e => { if (e.target.closest('#cancel,.slot')) return; const hit = hitTest(e); if (hit != null) run(hit); });
 addEventListener('keydown', e => {
  const n = model.slots.length;
  if (e.key === 'Escape') { e.preventDefault(); h.cancel(); return; }
  if (e.key === 'Alt') { e.preventDefault(); return; }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); select(L.moveSelection(n, selected, 1, i => !model.slots[i].empty)); return; }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); select(L.moveSelection(n, selected, -1, i => !model.slots[i].empty)); return; }
  if (e.key === 'Enter') { e.preventDefault(); if (e.target.id !== 'cancel' && selected != null) run(selected); return; }
  if (/^[1-9]$/.test(e.key) || e.key === '0') { const i = e.key === '0' ? 9 : +e.key - 1; if (i < n) { select(i); run(i); } }
 });
 addEventListener('keyup', e => { if (e.key === 'Alt' && !e.ctrlKey && !e.metaKey && !e.shiftKey && model.status && model.status.hold) h.cancel(); });
 h.onClosing(() => document.documentElement.classList.add('is-closing'));
 h.onState(v => { document.documentElement.classList.remove('is-closing'); render(v); });
 h.read().then(r => r.ok ? render(r.value) : status.textContent = r.error);
 requestAnimationFrame(() => document.documentElement.classList.add('is-open'));
})();
