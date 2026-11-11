from pathlib import Path
import json,hashlib,shutil,subprocess,difflib
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';v=r/'variants/spring-peach-02/source';old=r/'variants/spring-peach-01/source';e=r/'evidence/v9';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();runs=[]
manifest=json.loads((v.parent/'baseline-manifest.json').read_text());assert all(sha(old/n)==h for n,h in manifest.items())
changed=[n for n,h in manifest.items()if sha(v/n)!=h];assert set(changed)=={'app/scene-water.js','desktop/main.cjs','package.json'}
base=tx/'waterlight2-baseline.js';assert not base.exists();shutil.copy2(old/'app/scene-water.js',base)
# Extend the same four-role transaction; old roles and rollback branches remain valid.
rb=tx/'ROLLBACK.sh';shutil.copy2(rb,tx/'ROLLBACK-before-waterlight2.sh')
branch='''if [ "$#" -eq 2 ] && [ "$1" = "--spring-waterlight-file" ]; then
 [ -f "$2" ] && [ ! -L "$2" ] && [ -f "$(dirname -- "$2")/.qingchi-waterlight-copy" ] || { echo "Marked separate file copy required" >&2; exit 5; }
 [ "$(ls -ld "$2" | awk '{print $2}')" -eq 1 ] || { echo "Refuse hard-linked target" >&2; exit 7; }
 TARGET_DIR=$(CDPATH= cd -- "$(dirname -- "$2")" && pwd -P)
 ROOT=$(CDPATH= cd -- "$DIR/.." && pwd -P)
 case "$TARGET_DIR" in "$ROOT/app"|"$ROOT/variants/spring-peach-01/source/app"|"$ROOT/variants/spring-peach-02/source/app") echo "Refuse active source" >&2; exit 6;; esac
 cp "$DIR/waterlight2-baseline.js" "$2"
 cmp "$DIR/waterlight2-baseline.js" "$2"
 printf 'Restored original spring water shader: %s\\n' "$2"
 exit 0
fi
'''
s=rb.read_text();i=s.index('if [ "$#"');rb.write_text(s[:i]+branch+s[i:]);rb.chmod(0o755)
probe=r/'tests/waterlight2-probe.cjs';probe.write_text('''const fs=require('node:fs'),vm=require('node:vm');
const src=fs.readFileSync(process.argv[2],'utf8'),calls=[];let shaderId=0,attrib=0;
const gl=new Proxy({getExtension:()=>({}),getShaderParameter:()=>true,getProgramParameter:()=>true,checkFramebufferStatus:()=>42,FRAMEBUFFER_COMPLETE:42,getAttribLocation:()=>attrib++,isContextLost:()=>false,shaderSource:(s,text)=>calls.push(text),getUniformLocation:(_,name)=>name}, {get:(o,k)=>k in o?o[k]:k.startsWith('create')?()=>({id:shaderId++}):()=>{}});
const canvas={style:{},getContext:()=>gl,addEventListener(){}};const ctx={document:{body:{dataset:{sceneIntegrated:true}},getElementById:()=>canvas,createElement:()=>({getContext:()=>({fillRect(){}})})},innerWidth:1280,innerHeight:788,devicePixelRatio:2,addEventListener(){},Float32Array,WeakSet,Math};ctx.window=ctx;vm.runInNewContext(src,ctx);const water=ctx.QingchiSeasonWater;water.setSeason('spring');water.setBed({width:1536,height:1024});for(let i=0;i<120;i++)water.render(1/60,[]);const a=water.inspect();console.log(JSON.stringify({input:'spring;1280x788;120x1/60;no-click',ready:a.ready,error:a.error,frames:a.frames,time:Number(a.time.toFixed(3)),causticModel:a.causticModel||'crossed-sine-lace',waveComponents:a.causticWaveComponents||2,shaderSources:calls.length}));
''')
def run(label,args):
 q=subprocess.run(list(map(str,args)),capture_output=True,text=True,cwd=r);d={'label':label,'command':q.args,'stdout':q.stdout,'stderr':q.stderr,'exit':q.returncode};runs.append(d);print(json.dumps(d,ensure_ascii=False));assert q.returncode==0,q.stderr;return q.stdout
copy=tx/'waterlight2-rollback-copy';copy.mkdir();(copy/'.qingchi-waterlight-copy').touch();dest=copy/'scene-water.js';shutil.copy2(v/'app/scene-water.js',dest)
a=run('BASELINE',['node',probe,old/'app/scene-water.js']);b=run('MODIFIED',['node',probe,v/'app/scene-water.js']);run('ROLLBACK_COMMAND',['sh',rb,'--spring-waterlight-file',dest]);c=run('ROLLBACK',['node',probe,dest]);assert a==c and a!=b;assert sha(dest)==manifest['app/scene-water.js']
patch=tx/'WATERLIGHT2_SUPPLEMENT.patch';patch.write_text(''.join(''.join(difflib.unified_diff((old/n).read_text().splitlines(True),(v/n).read_text().splitlines(True),fromfile='a/'+n,tofile='b/'+n))for n in changed))
rec=tx/'waterlight2-reconstruct';rec.mkdir()
for n in changed:(rec/n).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(old/n,rec/n)
run('REAPPLY_GOAL',['git','apply','--unsafe-paths','--directory='+str(rec),patch]);assert all(sha(rec/n)==sha(v/n)for n in changed)
# Native rollback candidate: copy the already tested independent package, restore only the shader.
app=r/'releases/春池-水光样板02-mac-arm64.app';back=tx/'waterlight2-rollback-native.app';shutil.copytree(app,back,symlinks=True);f=back/'Contents/Resources/app/app/scene-water.js';(f.parent/'.qingchi-waterlight-copy').touch();run('NATIVE_ROLLBACK_COMMAND',['sh',rb,'--spring-waterlight-file',f]);assert sha(f)==sha(base)
run('SIGN_ROLLBACK_COPY',['codesign','--force','--deep','--sign','-',back])
record={'target':str(old/'app/scene-water.js'),'modified':str(v/'app/scene-water.js'),'changed_symbols':['DISPLAY seasonMode<.5 spring caustics','RAY_VERTEX/RAY_FRAGMENT and renderCaustics','opticalSlope'], 'baseline_sha256':sha(base),'modified_sha256':sha(v/'app/scene-water.js'),'changed_files':changed,'original_201_files_unchanged':True,'restored_hash_matches':True,'patch_reconstructs':True,'observed':{'BASELINE':json.loads(a),'MODIFIED':json.loads(b),'ROLLBACK':json.loads(c)},'runs':runs,'patch':str(patch),'rollback_native_app':str(back),'references':[{'url':'https://www.atoptics.org.uk/fz265.htm','use':'Viewed actual shallow Mediterranean caustics; not copied as game asset'},{'url':'https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-2-rendering-water-caustics','use':'General refraction and concentration principle; independently written analytic wave/ray code'}],'boundaries':'Unit probe mocks GL and does not establish visual quality. Packaged native runs separately exercise real GPU. Style remains subject to user approval. No other seasons changed.'}
(e/'waterlight2-transaction.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n')
with(tx/'VERIFICATION.txt').open('a')as f:f.write('\n\nSPRING_WATERLIGHT2_TRANSACTION\n'+json.dumps(record,ensure_ascii=False,indent=2)+'\n')
print('TRANSACTION_PASS',str(patch))
