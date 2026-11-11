from pathlib import Path
import shutil,json,hashlib
r=Path(__file__).resolve().parent.parent;old=r/'variants/original-look-08';new=r/'variants/solid-head-09';assert not new.exists();new.mkdir()
m={str(p.relative_to(old)):hashlib.sha256(p.read_bytes()).hexdigest() for top in ['source','web-preview'] for p in (old/top).rglob('*') if p.is_file()};(new/'baseline-manifest.json').write_text(json.dumps(m,indent=2))
for top in ['source','web-preview']:shutil.copytree(old/top,new/top)
assert all((old/n).stat().st_ino!=(new/n).stat().st_ino for n in m)
p=new/'source/app/vendor/pond.js';s=p.read_text();start=s.index('    drawLegacy(ctx) {');a=s[:start];b=s[start:]
oldline='const outline=points.map(p=>({x:p.x+p.nx,y:p.y+p.ny})).concat([...points].reverse().map(p=>({x:p.x-p.nx,y:p.y-p.ny})));'
newline='''// A closed, opaque snout extends ahead of segment 0. Previously the
        // body ended at x=0 while both eyes were drawn at x=+2, outside it.
        const forward={x:Math.cos(angle),y:Math.sin(angle)}, headWidth=size*(this.bodyWidth||1);
        const nose=side=>({x:head.x+forward.x*4.5*size-forward.y*side*2.8*headWidth,y:head.y+forward.y*4.5*size+forward.x*side*2.8*headWidth});
        const outline=[nose(1),...points.map(p=>({x:p.x+p.nx,y:p.y+p.ny})),...[...points].reverse().map(p=>({x:p.x-p.nx,y:p.y-p.ny})),nose(-1)];'''
assert b.count(oldline)==1;b=b.replace(oldline,newline)
oldEye="for(const side of [-1,1]){ctx.beginPath();ctx.arc(2*size,side*3.7*size,.8*size,0,Math.PI*2);ctx.fillStyle='#354c43';ctx.fill();}"
newEye="""// Eyes sit inside the filled cheek rather than beyond the nose cap.
        for(const side of [-1,1]){ctx.beginPath();ctx.arc(.2*size,side*3.0*headWidth,.65*size,0,Math.PI*2);ctx.fillStyle='#354c43';ctx.fill();}"""
assert b.count(oldEye)==1;b=b.replace(oldEye,newEye);p.write_text(a+b)
p=new/'web-preview/serve.py';p.write_text(p.read_text().replace('8803','8804'))
p=new/'web-preview/preview-bootstrap.js';p.write_text(p.read_text().replace('原色锦鲤回归预览08','实心鱼头预览09'))
print('COPIED',new,'BASELINE_SHA',m['source/app/vendor/pond.js'],'MODIFIED_SHA',hashlib.sha256((new/'source/app/vendor/pond.js').read_bytes()).hexdigest())
