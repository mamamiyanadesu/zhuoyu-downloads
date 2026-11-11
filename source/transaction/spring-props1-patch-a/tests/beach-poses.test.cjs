'use strict';const test=require('node:test'),a=require('node:assert/strict'),path=require('node:path'),probe=require('./beach-poses-probe.cjs');
const file=path.join(__dirname,'../app/scene-art.js');
test('legacy manual positions suppress overlapping clusters, not the relocated water cluster',()=>{a.deepEqual(probe(file),[{map:'clear',poses:2},{map:'lotus',poses:0},{map:'beach',poses:1}]);});
test('manual props placed on actual automatic cluster centers suppress both refined-map clusters',()=>{a.deepEqual(probe(file,true),[{map:'clear',poses:2},{map:'lotus',poses:0},{map:'beach',poses:0}]);});
