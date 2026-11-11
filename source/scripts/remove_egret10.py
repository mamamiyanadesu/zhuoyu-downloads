from pathlib import Path
import hashlib,json,shutil
r=Path(__file__).resolve().parent.parent;old=r/'variants/solid-head-09';new=r/'variants/no-egret-10';assert not new.exists();new.mkdir()
m={str(p.relative_to(old)):hashlib.sha256(p.read_bytes()).hexdigest()for top in ['source','web-preview']for p in (old/top).rglob('*')if p.is_file()};(new/'baseline-manifest.json').write_text(json.dumps(m,indent=2))
for top in ['source','web-preview']:shutil.copytree(old/top,new/top)
assert all((new/n).stat().st_ino!=(old/n).stat().st_ino for n in m)
p=new/'source/app/habitat-core.js';s=p.read_text();s=s.replace(",'egret'",'').replace("egret:{name:'白鹭',size:.10,speed:.014,zone:'shallow'},",'');s=s.replace('function zoneAt(id,type,x,y){','function zoneAt(id,type,x,y){if(!species[type])return false;').replace('function allowed(type,x,y){','function allowed(type,x,y){if(!species[type])return false;');p.write_text(s)
p=new/'source/app/life-core.js';s=p.read_text().replace("{id:'egret',name:'白鹭',kind:'animal'},",'');needle='return input.map(v=>{if(!v||!idOK(v.id)';assert needle in s;s=s.replace(needle,"// Retired egret placements are removed on load/import; keep every other saved item.\n  return input.filter(v=>v?.type!=='egret').map(v=>{if(!v||!idOK(v.id)",1);p.write_text(s)
p=new/'web-preview/serve.py';p.write_text(p.read_text().replace('8804','8805'));p=new/'web-preview/preview-bootstrap.js';p.write_text(p.read_text().replace('实心鱼头预览09','移除白鹭预览10'))
print('COPIED_AND_PATCHED',new);print('BASELINE_HASHES',{n:h for n,h in m.items()if n.endswith(('life-core.js','habitat-core.js'))})
