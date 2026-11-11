const path=require('node:path'),a=require('node:assert/strict');
const Old=require('../transaction/v8-upgrade-baseline/app/core.js'),C=require(path.resolve(process.argv[2]));
const input=Old.initial(100),raw=JSON.stringify(input),next=C.validate(input),quiet=next.settings.quietView??null;
const comparable=JSON.parse(JSON.stringify(next));delete comparable.settings.quietView;a.deepEqual(comparable,input);a.equal(JSON.stringify(input),raw);
console.log(JSON.stringify({input:'v8 schema1 at timestamp=100; missing quietView',quietView:quiet,legacyFieldsPreserved:true,sourceInputUnchanged:true}));
