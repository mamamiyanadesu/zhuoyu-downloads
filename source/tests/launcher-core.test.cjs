const {test}=require('node:test'),a=require('node:assert/strict'),L=require('../app/launcher-core.js'),T=require('../app/tools-core.js');

const file={label:'合法带空格文件',kind:'file',path:'/tmp/a $ (test).txt'};
function io(log){return {openExternal:async url=>{log.push(['external',url]);},openPath:async p=>{log.push(['path',p]);return '';},spawn:(file,args,opts)=>{log.push(['spawn',file,args,opts]);return {unref(){log.push(['unref']);}};},action:async id=>{log.push(['action',id]);}};}

test('filesystem slots keep absolute paths and reject command-like or remote targets',()=>{
 a.deepEqual(L.normalizeSlot(file),file);
 a.deepEqual(L.slotFromStat('/Applications/Calculator.app',{isDirectory:true}),{label:'Calculator',path:'/Applications/Calculator.app',kind:'app'});
 a.deepEqual(L.slotFromStat('C:\\Program Files\\Notes\\Notes.exe',{isFile:true}),{label:'Notes',path:'C:\\Program Files\\Notes\\Notes.exe',kind:'app'});
 a.deepEqual(L.slotFromStat('D:\\Desktop\\Pond.lnk',{isFile:true}),{label:'Pond',path:'D:\\Desktop\\Pond.lnk',kind:'app'});
 a.deepEqual(L.slotFromStat('/Users/me/Documents',{isDirectory:true}).kind,'folder');
 a.deepEqual(L.slotFromStat('\\\\files\\share\\readme.txt',{isFile:true}),{label:'readme.txt',path:'\\\\files\\share\\readme.txt',kind:'file'});
 for(const slot of [{label:'x',kind:'file',path:'https://example.com'},{label:'x',kind:'file',path:'/tmp/a\ncommand'},{label:'x',kind:'file',path:'relative.exe'},{label:'x',kind:'app',path:'C:not-absolute'},{label:'',kind:'file',path:'/tmp/a'},{label:'x',kind:'shell',path:'/tmp/a'}])a.throws(()=>L.normalizeSlot(slot));
});

test('urls and in-app actions round-trip through the saved wheel without becoming shell commands',()=>{
 const url=L.normalizeSlot({kind:'url',path:'  HTTPS://www.Example.com/docs  ',label:' 说明 '});
 a.equal(url.path,'https://www.example.com/docs');a.equal(url.label,'说明');
 a.equal(L.normalizeSlot({kind:'url',path:'https://example.com'}).label,'example.com');
 const action=L.normalizeSlot({kind:'action',path:'pond-quiet'});
 a.deepEqual(action,{label:'安静视图',path:'pond-quiet',kind:'action'});
 for(const bad of ['javascript:alert(1)','file:///etc/passwd','http://user:pass@example.com','data:text/html,hi','https://example.com/\nnext'])a.throws(()=>L.normalizeSlot({kind:'url',path:bad}));
 a.throws(()=>L.normalizeSlot({kind:'action',path:'rm -rf /'}));
 let s=T.initial();
 s.wheel.slots[0]=file;s.wheel.slots[1]=url;s.wheel.slots[2]=action;
 s=T.validate(s);
 const swapped=L.exchange(s.wheel.slots,0,2);
 s=T.dispatch(s,{type:'wheel-config',value:{slots:swapped}}).state;
 a.equal(s.wheel.slots[0].kind,'action');a.equal(s.wheel.slots[2].path,file.path);a.equal(s.wheel.slots[1].kind,'url');
 a.equal(JSON.stringify(s.wheel).includes('shell'),false);
});

test('launch plans use open, spawn, or in-app dispatch and never a shell string',async ()=>{
 const bundle=L.launchPlan({label:'Calculator',kind:'app',path:'/System/Applications/Calculator.app'},{platform:'darwin'});
 a.deepEqual(bundle,{via:'exec',file:'/usr/bin/open',args:['/System/Applications/Calculator.app'],shell:false,fallback:'/System/Applications/Calculator.app',reason:'app-bundle'});
 const exe=L.launchPlan({label:'Notes',kind:'app',path:'C:\\Program Files\\Notes\\Notes.exe'},{platform:'win32'});
 a.equal(exe.via,'exec');a.equal(exe.shell,false);a.deepEqual(exe.args,[]);a.equal(exe.cwd,'C:\\Program Files\\Notes');
 const link=L.launchPlan({label:'Pond',kind:'app',path:'D:\\Desktop\\Pond.lnk'},{platform:'win32',link:{target:'C:\\Program Files\\Pond\\Pond.exe',args:'--safe "My Notes" /n',cwd:'C:\\Program Files\\Pond'}});
 a.equal(link.reason,'shortcut-target');a.deepEqual(link.args,['--safe','My Notes','/n']);a.equal(link.file,'C:\\Program Files\\Pond\\Pond.exe');a.equal(link.shell,false);
 a.equal(L.launchPlan({label:'Pond',kind:'app',path:'D:\\Desktop\\Pond.lnk'},{platform:'win32',link:{target:'relative.exe',args:'/c calc'}}).reason,'shell-shortcut');
 a.equal(L.launchPlan({label:'Pond',kind:'app',path:'D:\\Desktop\\Pond.lnk'},{platform:'win32',link:{target:'C:\\a.exe',args:'"unterminated'}}).via,'path');
 a.equal(L.launchPlan(file,{platform:'darwin'}).via,'path');
 a.equal(L.launchPlan({label:'文档',kind:'url',path:'https://example.com'},{platform:'win32'}).via,'external');
 const calls=[];
 await L.performLaunch(bundle,io(calls));
 await L.performLaunch(link,io(calls));
 await L.performLaunch(L.launchPlan({kind:'action',path:'pond-tools'}),io(calls));
 a.deepEqual(calls[0],['spawn','/usr/bin/open',['/System/Applications/Calculator.app'],{cwd:undefined,detached:true,shell:false,stdio:'ignore',windowsHide:false}]);
 a.ok(calls.filter(x=>x[0]==='spawn').every(x=>x[3].shell===false&&Array.isArray(x[2])&&typeof x[1]==='string'));
 a.deepEqual(calls.filter(x=>x[0]==='action'),[['action','pond-tools']]);
 const logged=[];
 const opened=await L.performLaunch(exe,{...io(logged),spawn(){throw Error('enoent');}});
 a.equal(opened.via,'path');a.deepEqual(logged.at(-1),['path',exe.fallback]);
});

test('pointer angle picks a sector and the center or release zone does not',()=>{
 a.equal(L.slotAtPoint(8,0,-120,{inner:46}),0);
 a.equal(L.slotAtPoint(8,120,0,{inner:46}),2);
 a.equal(L.slotAtPoint(4,0,120,{inner:46}),2);
 a.equal(L.slotAtPoint(4,-120,0,{inner:46}),3);
 a.equal(L.slotAtPoint(8,0,-20,{inner:46}),null);
 a.equal(L.slotAtPoint(8,0,-120,{inner:46,outer:80}),null);
 a.equal(L.moveSelection(8,null,1),0);
 a.equal(L.moveSelection(8,0,-1),7);
 a.equal(L.moveSelection(4,1,1,i=>i!==2),3);
 a.equal(L.moveSelection(3,0,1,()=>false),null);
 const slots=[file,null];
 a.deepEqual(L.exchange(slots,0,1),[null,file]);
 a.throws(()=>L.exchange(slots,0,3));
});
