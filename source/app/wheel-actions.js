(() => {
 'use strict';
 const h = window.qingchiDesktop;
 if (!h || typeof h.wheelAction !== 'function') return;
 const buttons = {'pond-tools': 'tools-open', 'pond-settings': 'open-settings', 'pond-weather': 'environment-open', 'pond-fishing': 'fishing-open', 'pond-garden': 'garden-open', 'pond-life': 'life-open'};
 function press(id) { const el = document.getElementById(id); if (!el) return; try { el.click(); } catch { /* dialog already open */ } }
 if (typeof h.onWheelInvoke === 'function') h.onWheelInvoke(id => {
  if (id === 'pond-quiet') { press(document.body.classList.contains('immersive') ? 'restore-widgets' : 'immersive'); return; }
  if (document.body.classList.contains('immersive')) press('restore-widgets');
  const target = buttons[id];
  if (target === 'tools-open' && document.getElementById('tools-dialog')?.open) return;
  if (target === 'open-settings' && document.getElementById('settings')?.open) return;
  if (target) press(target);
 });
 let globalHold = false, enabled = true, shortcut = 'Option', timer = 0;
 function sync(v) {
  if (!v?.status || !v.config) return;
  globalHold = v.status.reason === 'global-option' || v.status.reason === 'global-alt';
  enabled = !!v.config.enabled; shortcut = v.config.shortcut;
 }
 if (typeof h.onWheel === 'function') h.onWheel(sync);
 h.wheelRead?.().then(r => { if (r?.ok) sync(r.value); });
 const typing = e => !!e.target?.closest?.('input,textarea,select,[contenteditable]');
 const local = () => enabled && shortcut === 'Option' && !globalHold;
 document.addEventListener('keydown', e => {
  if (e.key !== 'Alt' || e.repeat || e.ctrlKey || e.metaKey || e.shiftKey || e.isComposing || typing(e) || !local()) return;
  e.preventDefault();
  if (timer) return;
  timer = setTimeout(() => { timer = 0; h.wheelAction({type: 'show', hold: true}); }, 180);
 }, true);
 document.addEventListener('keyup', e => {
  if (e.key !== 'Alt') return;
  if (timer) { clearTimeout(timer); timer = 0; return; }
  if (local()) h.wheelAction({type: 'cancel'});
 }, true);
})();
