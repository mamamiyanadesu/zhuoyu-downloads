/* Wheel launcher decisions: slot shape, hit testing, and how a target is opened.
   No filesystem, Electron, or shell strings. Callers pass stat results and perform the plan. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QingchiLauncher=api;})(globalThis,()=>{'use strict';
const ACTIONS=Object.freeze({
 'pond-quiet':'安静视图',
 'pond-tools':'轮盘与提醒',
 'pond-settings':'设置',
 'pond-weather':'天气',
 'pond-fishing':'去钓鱼',
 'pond-garden':'布置鱼池',
 'pond-life':'我的鱼'
});
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
function baseName(p){return String(p).slice(Math.max(String(p).lastIndexOf('/'),String(p).lastIndexOf('\\'))+1);}
function extOf(p){const base=baseName(p).toLowerCase();const i=base.lastIndexOf('.');return i>=0?base.slice(i):'';}
function dirname(p){const i=Math.max(p.lastIndexOf('/'),p.lastIndexOf('\\'));return i>0?p.slice(0,i):undefined;}
function isAbsolute(p){return typeof p==='string'&&(p.startsWith('/')||/^[A-Za-z]:[\\/]/.test(p)||/^\\\\[^\\]/.test(p));}
function assertAbsolute(p){assert(typeof p==='string'&&p.length>0&&p.length<4096&&!/[\0\r\n]/.test(p)&&isAbsolute(p),'请选择本机绝对路径');return p;}
function clipLabel(label){assert(typeof label==='string','名称无效');const text=label.trim();assert(text.length>0&&text.length<=40,'名称需要 1–40 个字');return text;}
function looksLikeUrl(value){return typeof value==='string'&&/^\s*https?:\/\//i.test(value);}
function parseHttp(raw){assert(typeof raw==='string','网址无效');const text=raw.trim();assert(text.length>0&&text.length<=2048&&!/[\0\r\n]/.test(text),'网址无效');let url;try{url=new URL(text);}catch{throw Error('网址需以 http:// 或 https:// 开头');}
 assert(url.protocol==='http:'||url.protocol==='https:','只打开 http 或 https 网址');assert(!url.username&&!url.password,'网址不能包含账号密码');assert(url.href.length<=2048,'网址过长');return url.href;}
function labelFromUrl(href){const host=new URL(href).hostname.replace(/^www\./i,'');return clipLabel(host||'网址');}
function labelForPath(p){const name=baseName(p).replace(/\.app$/i,'').replace(/\.(?:exe|lnk|com)$/i,'').trim().slice(0,40);return name||'目标';}
function kindFor(p,info){assert(info&&(info.isFile||info.isDirectory),'仅支持应用、文件夹和普通文件');const ext=extOf(p);if(info.isDirectory&&ext==='.app')return 'app';if(info.isDirectory)return 'folder';if(info.isFile&&(ext==='.exe'||ext==='.com'||ext==='.lnk'))return 'app';if(info.isFile)return 'file';throw Error('仅支持应用、文件夹和普通文件');}
function slotFromStat(p,info){p=assertAbsolute(p);return {label:labelForPath(p),path:p,kind:kindFor(p,info)};}
function normalizeSlot(s){assert(s&&typeof s==='object','目标无效');
 if(s.kind==='url'||(s.kind==null&&looksLikeUrl(s.path))){const path=parseHttp(s.path);const label=clipLabel(typeof s.label==='string'&&s.label.trim()?s.label:labelFromUrl(path));return {label,path,kind:'url'};}
 if(s.kind==='action'){assert(typeof s.path==='string'&&Object.prototype.hasOwnProperty.call(ACTIONS,s.path),'未知的应用内动作');return {label:clipLabel(typeof s.label==='string'&&s.label.trim()?s.label:ACTIONS[s.path]),path:s.path,kind:'action'};}
 assert(s.kind==='app'||s.kind==='folder'||s.kind==='file','目标必须是有效本机绝对路径');
 const path=assertAbsolute(s.path);return {label:clipLabel(s.label),path,kind:s.kind};}
function splitArgs(text){if(text==null||text==='')return [];assert(typeof text==='string'&&text.length<=2048&&!/[\0\r\n]/.test(text),'快捷方式参数无效');const out=[];let cur='',quote=null;
 for(const c of text){if(quote){if(c===quote)quote=null;else cur+=c;}else if(c==='"'||c==="'")quote=c;else if(c===' '||c==='\t'){if(cur){out.push(cur);cur='';}}else cur+=c;}
 assert(!quote,'快捷方式参数无效');if(cur)out.push(cur);assert(out.length<=32,'快捷方式参数无效');return out;}
function launchPlan(slot,env={}){const s=normalizeSlot(slot),platform=env.platform==='win32'||env.platform==='darwin'?env.platform:'other',ext=extOf(s.path);
 if(s.kind==='url')return {via:'external',url:s.path,shell:false,reason:'url'};
 if(s.kind==='action')return {via:'action',id:s.path,shell:false,reason:'in-app'};
 if(platform==='darwin'&&(s.kind==='app'||ext==='.app'))return {via:'exec',file:'/usr/bin/open',args:[s.path],shell:false,fallback:s.path,reason:'app-bundle'};
 if(platform==='win32'&&(ext==='.exe'||ext==='.com'))return {via:'exec',file:s.path,args:[],cwd:dirname(s.path),shell:false,fallback:s.path,reason:'executable'};
 if(platform==='win32'&&ext==='.lnk'){const link=env.link,target=link&&typeof link.target==='string'?link.target:'';
  if(isAbsolute(target)&&target.length<4096&&!/[\0\r\n]/.test(target)){let args;try{args=splitArgs(link.args||'');}catch{return {via:'path',path:s.path,shell:false,reason:'shell-shortcut'};}
   const cwd=typeof link.cwd==='string'&&isAbsolute(link.cwd)&&!/[\0\r\n]/.test(link.cwd)?link.cwd:undefined;
   return {via:'exec',file:target,args,cwd,shell:false,fallback:s.path,reason:'shortcut-target'};}
  return {via:'path',path:s.path,shell:false,reason:'shell-shortcut'};}
 return {via:'path',path:s.path,shell:false,reason:'shell-open'};}
async function performLaunch(plan,io){assert(plan&&plan.shell!==true,'拒绝通过 Shell 启动');
 if(plan.via==='external'){await io.openExternal(plan.url);return {via:'external'};}
 if(plan.via==='path'){const err=await io.openPath(plan.path);if(err)throw Error(typeof err==='string'?err:'无法打开');return {via:'path'};}
 if(plan.via==='exec'){assert(plan.shell===false&&typeof plan.file==='string'&&Array.isArray(plan.args),'启动计划无效');
  try{const child=await io.spawn(plan.file,plan.args,{cwd:plan.cwd,detached:true,shell:false,stdio:'ignore',windowsHide:false});child?.unref?.();return {via:'exec'};}
  catch(e){const fallback=plan.fallback||plan.file;if(!io.openPath||!fallback)throw e;const err=await io.openPath(fallback);if(err)throw Error(typeof err==='string'&&err?err:e.message);return {via:'path'};}}
 if(plan.via==='action'){await io.action(plan.id);return {via:'action'};}
 throw Error('无法启动');}
function slotAtPoint(count,dx,dy,bounds={}){if(!Number.isInteger(count)||count<1)return null;const dist=Math.hypot(dx,dy),inner=bounds.inner??48,outer=bounds.outer??Infinity;if(!(dist>=inner)||dist>outer)return null;
 let fromTop=Math.atan2(dy,dx)+Math.PI/2;const turn=Math.PI*2;if(fromTop<0)fromTop+=turn;const sector=turn/count;return Math.floor((fromTop+sector/2)/sector)%count;}
function moveSelection(count,index,delta,usable){if(!Number.isInteger(count)||count<=0)return null;const step=delta<0?-1:1;let i=Number.isInteger(index)&&index>=0&&index<count?index:(step<0?0: -1);
 for(let n=0;n<count;n++){i=(i+step+count)%count;if(!usable||usable(i))return i;}return null;}
function exchange(slots,from,to){assert(Array.isArray(slots)&&Number.isInteger(from)&&Number.isInteger(to)&&from>=0&&to>=0&&from<slots.length&&to<slots.length,'无效位置');const next=slots.slice();[next[from],next[to]]=[next[to],next[from]];return next;}
return Object.freeze({ACTIONS,looksLikeUrl,parseHttp,isAbsolute,normalizeSlot,slotFromStat,splitArgs,launchPlan,performLaunch,slotAtPoint,moveSelection,exchange,labelForPath});});
