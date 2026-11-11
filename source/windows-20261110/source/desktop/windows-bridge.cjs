'use strict';
// Win32 adapter for our own Electron windows only. No process injection, registry
// changes, admin rights, shell commands, text capture or arbitrary key logging.
let singleton;
function loadAPI(){
 const k=require('koffi'),u=k.load('user32.dll');
 k.struct('ZhuoyuRECT',{left:'int32_t',top:'int32_t',right:'int32_t',bottom:'int32_t'});
 k.struct('ZhuoyuPOINT',{x:'int32_t',y:'int32_t'});
 k.struct('ZhuoyuMONITORINFO',{cbSize:'uint32_t',rcMonitor:'ZhuoyuRECT',rcWork:'ZhuoyuRECT',dwFlags:'uint32_t'});
 const f=s=>u.func(s);
 return {
 find:f('uintptr_t __stdcall FindWindowW(const char16_t *cls, const char16_t *name)'),
 findEx:f('uintptr_t __stdcall FindWindowExW(uintptr_t parent, uintptr_t after, const char16_t *cls, const char16_t *name)'),
 send:f('intptr_t __stdcall SendMessageTimeoutW(uintptr_t hwnd, uint32_t msg, uintptr_t wp, intptr_t lp, uint32_t flags, uint32_t timeout, _Out_ uintptr_t *result)'),
 parent:f('uintptr_t __stdcall GetParent(uintptr_t hwnd)'),setParent:f('uintptr_t __stdcall SetParent(uintptr_t hwnd, uintptr_t parent)'),
 style:f('intptr_t __stdcall GetWindowLongPtrW(uintptr_t hwnd, int index)'),setStyle:f('intptr_t __stdcall SetWindowLongPtrW(uintptr_t hwnd, int index, intptr_t value)'),
 rect:f('int __stdcall GetWindowRect(uintptr_t hwnd, _Out_ ZhuoyuRECT *rect)'),
 map:f('int __stdcall MapWindowPoints(uintptr_t from, uintptr_t to, _Inout_ ZhuoyuPOINT *point, uint32_t count)'),
 position:f('int __stdcall SetWindowPos(uintptr_t hwnd, uintptr_t after, int x, int y, int cx, int cy, uint32_t flags)'),
 valid:f('int __stdcall IsWindow(uintptr_t hwnd)'),foreground:f('uintptr_t __stdcall GetForegroundWindow()'),
 activate:f('int __stdcall SetForegroundWindow(uintptr_t hwnd)'),
 pid:f('uint32_t __stdcall GetWindowThreadProcessId(uintptr_t hwnd, _Out_ uint32_t *pid)'),
 className:f('int __stdcall GetClassNameW(uintptr_t hwnd, _Out_ char16_t *name, int count)'),
 monitor:f('uintptr_t __stdcall MonitorFromWindow(uintptr_t hwnd, uint32_t flags)'),
 monitorInfo:f('int __stdcall GetMonitorInfoW(uintptr_t monitor, _Inout_ ZhuoyuMONITORINFO *info)'),
 key:f('int16_t __stdcall GetAsyncKeyState(int key)')
 };
}
function create(api){
 const attached=new Map();const equal=(a,b)=>BigInt(a||0)===BigInt(b||0);
 const handle=w=>{const b=w.getNativeWindowHandle();return b.length===8?b.readBigUInt64LE(0):BigInt(b.readUInt32LE(0));};
 function worker(){
  const prog=api.find('Progman',null);if(!prog)throw Error('未找到 Windows 桌面管理器，未挂载鱼池。');
  for(const lp of [0,1])api.send(prog,0x052c,0xD,lp,2,1000,[0]);
  let child=api.findEx(prog,0,'WorkerW',null);
  if(child&&!api.findEx(child,0,'SHELLDLL_DefView',null))return child;
  let win=0;for(let n=0;n<2000;n++){
   win=api.findEx(0,win,null,null);if(!win)break;
   if(api.findEx(win,0,'SHELLDLL_DefView',null)){
    child=api.findEx(0,win,'WorkerW',null);
    if(child&&!api.findEx(child,0,'SHELLDLL_DefView',null))return child;
   }
  }
  throw Error('当前 Windows 桌面结构不受测试版支持；未覆盖桌面图标，鱼池仍可在主窗口使用。');
 }
 function attach(w){
  const hwnd=handle(w),parent=worker(),r={};if(!api.rect(hwnd,r))throw Error('无法读取鱼池窗口位置');
  const prior={hwnd,parent:api.parent(hwnd),style:api.style(hwnd,-16),rect:r,host:parent};
  try{
   const style=(Number(prior.style)&~0x80000000)|0x40000000;
   api.setStyle(hwnd,-16,style>>>0);api.setParent(hwnd,parent);
   if(!equal(api.parent(hwnd),parent))throw Error('Windows 拒绝桌面挂载（可能与 DPI 或桌面版本有关）');
   const p={x:r.left,y:r.top};api.map(0,parent,p,1);
   if(!api.position(hwnd,1,p.x,p.y,r.right-r.left,r.bottom-r.top,0x10|0x20|0x40))throw Error('桌面窗口尺寸设置失败');
   attached.set(w.id,prior);return {mode:'workerw',attached:true};
  }catch(e){api.setParent(hwnd,prior.parent);api.setStyle(hwnd,-16,prior.style);throw e;}
 }
 function detach(w){const p=attached.get(w.id);if(!p)return;attached.delete(w.id);if(api.valid(p.hwnd)){api.setParent(p.hwnd,p.parent);api.setStyle(p.hwnd,-16,p.style);}}
 function healthy(w){const p=attached.get(w.id);return !!p&&!!api.valid(p.host)&&equal(api.parent(p.hwnd),p.host);}
 function front(){
  const hwnd=api.foreground(),p=[0];if(!hwnd)return {available:false,fullscreen:null,pid:0};api.pid(hwnd,p);
  const buf=Buffer.alloc(512);api.className(hwnd,buf,256);const cls=buf.toString('utf16le').split('\0')[0];
  const r={},m={cbSize:40,rcMonitor:{left:0,top:0,right:0,bottom:0},rcWork:{left:0,top:0,right:0,bottom:0},dwFlags:0};
  const desktop=['Progman','WorkerW','Shell_TrayWnd','Shell_SecondaryTrayWnd'].includes(cls);
  const okay=api.rect(hwnd,r)&&api.monitorInfo(api.monitor(hwnd,2),m),b=m.rcMonitor;
  const fullscreen=!!okay&&!desktop&&p[0]!==process.pid&&r.left<=b.left+2&&r.top<=b.top+2&&r.right>=b.right-2&&r.bottom>=b.bottom-2;
  return {available:!!okay,fullscreen:okay?fullscreen:null,pid:p[0],hwnd:String(hwnd),source:'win32-foreground-bounds'};
 }
 function watch({enabled=()=>false,onAltDown=()=>{},onAltUp=()=>{},onSystem=()=>{}}){
  let was=false,lastSystem=0;const timer=setInterval(()=>{
   try{
    const alt=enabled()&&!!(api.key(0x12)&0x8000);if(alt!==was){was=alt;if(alt)onAltDown();else onAltUp();}
    if(Date.now()-lastSystem>=1000){lastSystem=Date.now();onSystem(front());}
   }catch{onSystem({available:false,fullscreen:null,source:'win32-query-failed'});}
  },60);timer.unref?.();return()=>clearInterval(timer);
 }
 return {attach,detach,healthy,front,watch,activate:hwnd=>{const n=BigInt(hwnd||0);return n&&api.valid(n)?!!api.activate(n):false;}};
}
module.exports={create,get(){if(process.platform!=='win32')throw Error('Win32 adapter requires Windows');return singleton??=(create(loadAPI()));}};
