from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit,unquote
import threading
root=Path(__file__).resolve().parent
project=root.parents[2]
ours=project/'variants/slow-flow-13'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  name=unquote(urlsplit(path).path).lstrip('/') or 'index.html'
  if name in ['reference-spring.png','reference-autumn.png']:return str(project/'evidence/v9/candidate14-reference-comparison'/name)
  if self.server.server_port==8811:
   if name=='preview-bootstrap.js':return str(root/name)
   base=ours/'web-preview' if name=='index.html' else ours/'source/app'
  else:base=root if name in ['index.html','preview-bootstrap.js','compare.html','compare.js'] else root.parent/'source/app'
  p=(base/name).resolve()
  if p!=base and base not in p.parents:return str(root/'NOT_FOUND')
  return str(p)
 def end_headers(self):
  self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff');super().end_headers()
 def list_directory(self,path):self.send_error(404);return None
servers=[ThreadingHTTPServer(('127.0.0.1',port),Handler) for port in [8810,8811]]
for server in servers:threading.Thread(target=server.serve_forever,daemon=True).start()
print('PREVIEW_READY http://127.0.0.1:8810/compare.html',flush=True)
threading.Event().wait()
