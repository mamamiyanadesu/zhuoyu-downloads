'use strict';
// Local, copy-only migration. Never writes to the previous profile or overwrites a target.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {validateBundle}=require('./store.cjs');
function copyV8Save(source,target){
 if(path.resolve(source)===path.resolve(target))throw Error('Profiles must be distinct');
 if(fs.existsSync(target))return {status:'existing-preserved'};
 if(!fs.existsSync(source))return {status:'no-previous-save'};
 let temp;
 try{
  const raw=fs.readFileSync(source);if(raw.length>2*1024*1024)throw Error('Previous save exceeds 2 MB');validateBundle(JSON.parse(raw.toString('utf8')));
  fs.mkdirSync(path.dirname(target),{recursive:true});
  // Write and sync before atomically linking the complete file into the vacant target path.
  temp=target+'.migration-'+crypto.randomUUID();const fd=fs.openSync(temp,'wx',0o600);
  try{fs.writeFileSync(fd,raw);fs.fsyncSync(fd);}finally{fs.closeSync(fd);}
  try{fs.linkSync(temp,target);}catch(e){if(e.code==='EEXIST')return {status:'existing-preserved'};throw e;}
  // Immutable source bytes retained separately; collision never overwrites an older backup.
  let backup='created';try{fs.writeFileSync(target+'.from-v8',raw,{flag:'wx',mode:0o600});}catch(e){backup=e.code==='EEXIST'?'existing-preserved':'failed: '+e.message;}
  return {status:'copied',sha256:crypto.createHash('sha256').update(raw).digest('hex'),bytes:raw.length,backup};
 }catch(e){return {status:'skipped',error:e.message};}finally{if(temp&&fs.existsSync(temp))fs.unlinkSync(temp);}
}
module.exports={copyV8Save};
