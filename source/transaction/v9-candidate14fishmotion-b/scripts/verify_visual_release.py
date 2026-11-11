from pathlib import Path
import hashlib,json,subprocess,difflib,zipfile,shutil
r=Path(__file__).resolve().parent.parent;tx=r/'transaction';b=tx/'visual-v1-baseline';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();runs=[]
def run(label,args):
 q=subprocess.run(args,capture_output=True,text=True);runs.append(dict(label=label,command=args,stdout=q.stdout,stderr=q.stderr,exit=q.returncode));print(label,q.stdout.strip(),q.stderr.strip(),'exit',q.returncode);assert q.returncode==0;return q.stdout
roles=json.loads((tx/'roles.json').read_text());mod=Path(roles['MODIFIED_FILE']);modified=mod.read_bytes();pristine=tx/'BASELINE.js';restored=tx/'rollback-copy.js';restored.write_bytes(modified)
run('ROLLBACK_EXEC',['sh',roles['ROLLBACK'],str(restored)]);assert sha(restored)==sha(pristine)
for probe in ['engine-probe.cjs','visual-probe.cjs']:
 for label,file in [('BASELINE',pristine),('MODIFIED',mod),('ROLLBACK',restored)]:run(label+' '+probe,['node',str(r/'tests'/probe),str(file)])
mod.write_bytes(modified)
Path(roles['DIFF_FILE']).write_text(''.join(difflib.unified_diff(pristine.read_text().splitlines(True),mod.read_text().splitlines(True),fromfile='BASELINE.js',tofile='pond.js')))
patchcopy=tx/'patch-check.js';patchcopy.write_bytes(pristine.read_bytes());run('ENGINE_PATCH',['patch',str(patchcopy),roles['DIFF_FILE']]);assert sha(patchcopy)==sha(mod)
patch=''
for old in b.rglob('*'):
 if old.is_file() and old.suffix in ['.js','.cjs','.css','.html'] and old.parts[len(b.parts)] in ('app','desktop'):
  rel=old.relative_to(b);patch+=''.join(difflib.unified_diff(old.read_text().splitlines(True),(r/rel).read_text().splitlines(True),fromfile='a/'+str(rel),tofile='b/'+str(rel)))
(tx/'VISUAL_SUPPLEMENT.patch').write_text(patch)
root=tx/'visual-rollback-copy';run('VISUAL_ROOT_ROLLBACK',['sh',roles['ROLLBACK'],'--visual-root',str(root)])
for old in b.rglob('*'):
 if old.is_file() and old.parts[len(b.parts)] in ('app','desktop'):assert sha(old)==sha(root/old.relative_to(b))
run('VISUAL_PATCH_REAPPLY',['patch','-p1','-d',str(root),'-i',str(tx/'VISUAL_SUPPLEMENT.patch')])
for file in ['app/vendor/pond.js','app/style.css','app/index.html','app/app.js','desktop/main.cjs']:assert sha(r/file)==sha(root/file)
unit=run('CORE_TESTS',['node','--test',str(r/'tests/core.test.cjs')]);(r/'evidence/visual-unit-tests.txt').write_text(unit)
app=r/'releases/清池-0.2.0-mac-arm64.app'
run('SIGNATURE',['codesign','--verify','--deep','--strict',str(app)])
for folder in ['app','desktop']:
 for p in (r/folder).rglob('*'):
  if p.is_file():assert sha(p)==sha(app/'Contents/Resources/app'/p.relative_to(r))
native=json.loads((r/'evidence/mac-final-visible/desktop-smoke.json').read_text());assert native['result']=='PASS';assert native['bundled'] is True;assert '.app/' not in native['userData'];assert not (app/'Contents/Resources/app/runtime-profile').exists()
archive=r/'releases/Qingchi-0.2.0-mac-arm64.zip'
if not archive.exists():run('MAC_ARCHIVE',['ditto','-c','-k','--sequesterRsrc','--keepParent',str(app),str(archive)])
with zipfile.ZipFile(archive) as z:
 assert z.testzip() is None
 def entry(name):
  matches=[n for n in z.namelist() if n==name or (not z.getinfo(n).flag_bits & 0x800 and n.encode('cp437').decode('utf-8',errors='replace')==name)]
  assert len(matches)==1;return matches[0]
 assert not any('/runtime-profile/' in n for n in z.namelist())
 assert z.read(entry(app.name+'/Contents/_CodeSignature/CodeResources'))==(app/'Contents/_CodeSignature/CodeResources').read_bytes()
 for file in ['app/vendor/pond.js','app/style.css','app/index.html','desktop/main.cjs']:
  assert z.read(entry(app.name+'/Contents/Resources/app/'+file))==(r/file).read_bytes()
pack=r/'releases/Qingchi-clear-assets-v2.zip'
with zipfile.ZipFile(pack,'w',zipfile.ZIP_DEFLATED) as z:
 for p in list((r/'app/assets').glob('*'))+[r/'app/icon.svg',r/'evidence/asset-prompt.txt',r/'evidence/visual-asset-provenance.json',r/'Mac清浅版说明.txt']:
  z.write(p,p.name)
with zipfile.ZipFile(pack) as z:assert z.testzip() is None
v=json.loads(Path(roles['VERIFICATION']).read_text());v['visual_v2']={'changed_symbols':['Koi.draw','Koi.updateColorTheme','drawCaustics','applySettings fishSize','pond-bed background','wallpaper-canvas mask','Mac bundle icon'],'runs':runs,'native_result':native,'native_command':'QINGCHI_VERIFY_OUT='+str(r/'evidence/mac-final-visible')+' '+str(app/'Contents/MacOS/Qingchi')+' --verify-shell','native_stdout':(r/'evidence/mac-final-visible.stdout').read_text(),'native_stderr':(r/'evidence/mac-final-visible.stderr').read_text(),'native_exit':0,'visual_patch':str(tx/'VISUAL_SUPPLEMENT.patch'),'previous_source':str(b),'restored_sha256':sha(restored),'modified_sha256':sha(mod),'assets':[{'path':str(p),'sha256':sha(p),'bytes':p.stat().st_size} for p in (r/'app/assets').glob('*')],'archives':[{'path':str(p),'sha256':sha(p),'bytes':p.stat().st_size} for p in [archive,pack]],'historical_browser_checks':'Previous 21 checks not rerun this turn. New native checks and core tests are current.','errors_and_corrections':[{'layer':'syntax command path','exit':1,'error':'MODULE_NOT_FOUND from duplicated project prefix','correction':'node --check desktop/main.cjs: exit 0'},{'layer':'iconutil sandbox','exit':1,'stderr':'Invalid Iconset','correction':'PNG dimensions checked; same system service under approved GUI permission exited 0'},{'layer':'native final rendering','exit':1,'stderr':(r/'evidence/mac-final.stderr').read_text(),'correction':'Explicitly show/focus smoke-test window, temporary always-on-top, visibility diagnostics; final native run passed. Window occlusion is an inference, not established root cause.'}]}
Path(roles['VERIFICATION']).write_text(json.dumps(v,ensure_ascii=False,indent=2))
status=json.loads((r/'STATUS.json').read_text());status.update({'LAST_CONFIRMED_RESULT':'Mac clear visual v2 delivered: generated local pond asset, revised koi renderer, Apple Silicon app; 22 core tests, 7 native check groups, baseline/modified/rollback and patch reconstruction passed.','NEXT_EXECUTABLE_ACTION':'Review user feedback on visual v2 before expanding scope; native desktop wallpaper mounting remains a separate unimplemented stage.','INPUT_PATHS':[str(app),str(pack),str(r/'Mac清浅版说明.txt'),roles['VERIFICATION']],'ACCEPTANCE_EVENT':'Observed final Mac bundle rendering and component controls, screenshot inspected, final archives reopened and CRC checked.','pending_requirement':'Intel Mac, cross-device first launch, Developer ID/notarization, actual desktop mounting and sleep/multi-monitor unverified.','current_platform':'Mac Apple Silicon','visual_version':'0.2.0'});(r/'STATUS.json').write_text(json.dumps(status,ensure_ascii=False,indent=2))
(r/'交接.txt').write_text('清池清浅 Mac 0.2 已完成本轮素材制作与接入。\n真源：'+str(r)+'\n旧版：'+str(b)+'\n当前验收：22 核心测试、7 组最终 Mac 原生检查、输入/水光的 baseline-modified-rollback；见 transaction/VERIFICATION.txt 的 visual_v2。\n最终包：'+str(app)+'\nMac清浅版说明.txt 描述边界和存档；不复制商业素材。Apple Silicon 本机 ad-hoc 签名，未公证，未验证 Intel、多屏、睡眠或桌面挂载。\n下一步依据用户对画面的反馈，不自动扩展到付费、激活或 Windows。\n')
for role,path in roles.items():p=Path(path);data=p.read_bytes();assert data;print(role,str(p),len(data),sha(p))
for p in [archive,pack,r/'STATUS.json',r/'Mac清浅版说明.txt']:
 with p.open('rb') as f:assert f.read(16)
 print('DELIVERABLE',p,p.stat().st_size,sha(p))
