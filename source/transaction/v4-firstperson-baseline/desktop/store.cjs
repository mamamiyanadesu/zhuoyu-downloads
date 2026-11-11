'use strict';
const fs=require('node:fs'),path=require('node:path');
const C=require('../app/core.js'),L=require('../app/life-core.js');
function validateBundle(input){
 if(input?.format==='qingchi-backup-v3')return {format:'qingchi-backup-v3',components:C.validate(input.components),life:L.validate(input.life)};
 if(input?.schema===1)return {format:'qingchi-backup-v3',components:C.validate(input),life:L.initial()};
 throw Error('不是清池备份；原数据未替换');
}
class FileStore{
 constructor(file){this.file=file;this.blocked=false;this.error=null;this.state={format:'qingchi-backup-v3',components:C.initial(),life:L.initial()};
  if(fs.existsSync(file)){try{this.state=validateBundle(JSON.parse(fs.readFileSync(file,'utf8')));}catch(e){this.blocked=true;this.error='主存档无法读取，已停止自动覆盖。请导入备份或恢复上一版。';}}
 }
 snapshot(){return {state:JSON.parse(JSON.stringify(this.state)),error:this.error,blocked:this.blocked,hasPrevious:fs.existsSync(this.file+'.bak')};}
 write(next,{recover=false}={}){
  if(this.blocked&&!recover)throw Error(this.error);const valid=validateBundle(next),text=JSON.stringify(valid);if(Buffer.byteLength(text)>2*1024*1024)throw Error('存档超过 2 MB，请减少笔画或收藏');
  fs.mkdirSync(path.dirname(this.file),{recursive:true});const tmp=this.file+'.tmp';
  let fd;try{fd=fs.openSync(tmp,'w',0o600);fs.writeFileSync(fd,text);fs.fsyncSync(fd);fs.closeSync(fd);fd=null;
   if(fs.existsSync(this.file)){const suffix=this.blocked?'.corrupt-'+Date.now():'.bak';fs.copyFileSync(this.file,this.file+suffix);}
   fs.renameSync(tmp,this.file);this.state=valid;this.blocked=false;this.error=null;return this.snapshot();
  }finally{if(fd!==undefined&&fd!==null)fs.closeSync(fd);if(fs.existsSync(tmp))fs.unlinkSync(tmp);}
 }
 core(value){const n=this.snapshot().state;n.components=C.validate(value);return this.write(n).state.components;}
 life(value,expected){if(expected!==this.state.life.revision)throw Error('存档已被另一操作更新，请重开面板后重试');const next=L.validate(value);next.revision=this.state.life.revision+1;const n=this.snapshot().state;n.life=next;return this.write(n).state.life;}
 import(text){if(typeof text!=='string'||Buffer.byteLength(text)>2*1024*1024)throw Error('备份过大');const n=validateBundle(JSON.parse(text));n.life.revision=this.state.life.revision+1;return this.write(n,{recover:true});}
 recover(){if(!fs.existsSync(this.file+'.bak'))throw Error('没有上一版备份');return this.import(fs.readFileSync(this.file+'.bak','utf8'));}
}
module.exports={FileStore,validateBundle};
