from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit,unquote
import threading
root=Path(__file__).resolve().parent;project=root.parents[2];app=root.parent/'source/app';warm=project/'variants/slow-flow-13/source/app';fall=project/'variants/reference-seasons-14/source/app'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  name=unquote(urlsplit(path).path).lstrip('/') or 'compare.html';parts=name.split('/');scene=parts[0] if parts[0] in ['spring','summer','autumn'] else None
  if scene:
   name='/'.join(parts[1:]) or 'index.html'
   if name=='index.html':return str(root/(scene+'.html'))
   if name=='preview-bootstrap.js':return str(root/name)
   if name in ['bed15-menu.js','bed-detail-core.js']:return str(app/name)
   if self.server.server_port==8813:
    base=fall if scene=='autumn' else warm
    name=name.replace('-ours.js','.js')
   else:base=app
  else:base=root if name in ['compare.html','compare.js'] else app
  p=(base/name).resolve()
  if p!=base and base not in p.parents:return str(root/'NOT_FOUND')
  return str(p)
 def end_headers(self):self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff');super().end_headers()
 def list_directory(self,path):self.send_error(404);return None
servers=[ThreadingHTTPServer(('127.0.0.1',port),Handler) for port in [8812,8813]]
for s in servers:threading.Thread(target=s.serve_forever,daemon=True).start()
print('PREVIEW_READY http://127.0.0.1:8812/compare.html',flush=True);threading.Event().wait()
