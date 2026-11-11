'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const r=path.join(__dirname,'source'),{create}=require('./source/desktop/windows-bridge.cjs');
let parent=0,style=0x80000000,pos=0,fail=false;
const a={find:()=>100,findEx:(p,after,cls)=>cls==='WorkerW'?200:0,send:()=>1,parent:()=>parent,setParent:(_h,p)=>{parent=p;},style:()=>style,setStyle:(_h,_i,s)=>{style=s;},rect:(_h,r)=>Object.assign(r,{left:10,top:20,right:1010,bottom:720}),map:()=>1,position:()=>{pos++;return fail?0:1;},valid:()=>1};
const b=create(a),w={id:1,getNativeWindowHandle(){const b=Buffer.alloc(8);b.writeBigUInt64LE(500n);return b;}};
assert.equal(b.attach(w).attached,true);assert.equal(parent,200);assert(b.healthy(w));b.detach(w);assert.equal(parent,0);assert.equal(style,0x80000000);console.log('PASS mock attach/health/detach restored original parent and style');
fail=true;assert.throws(()=>b.attach(w),/尺寸/);assert.equal(parent,0);assert.equal(style,0x80000000);console.log('PASS mock failed attachment rolls back');
const {FileStore}=require('./source/desktop/store.cjs'),os=require('node:os');const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zhuoyu-contract-'));const file=path.join(tmp,'save.json');const init=require('./source/desktop/windows-profile.cjs');assert(init.ensure(file).created);const before=fs.readFileSync(file);assert.equal(init.ensure(file).created,false);assert(before.equals(fs.readFileSync(file)));console.log('PASS profile initialization preserves existing bytes');fs.rmSync(tmp,{recursive:true});
let n=0;for(const dir of ['app','desktop'])for(const p of walk(path.join(r,dir))){if(/\.(cjs|js)$/.test(p)){const text=fs.readFileSync(p,'utf8');if(/^\s*(import |export )/m.test(text)){const q=require('node:child_process').spawnSync(process.execPath,['--check','--input-type=module'],{input:text,encoding:'utf8'});assert.equal(q.status,0,q.stderr);}else new vm.Script(text,{filename:p});n++;}}console.log('PASS JavaScript parse files='+n);
function* walk(p){for(const d of fs.readdirSync(p,{withFileTypes:true})){const q=path.join(p,d.name);if(d.isDirectory())yield*walk(q);else yield q;}}
console.log('WINDOWS_NATIVE_EXECUTION=NOT_TESTED; mocks do not prove real Win32 behavior');
