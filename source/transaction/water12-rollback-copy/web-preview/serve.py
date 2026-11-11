from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit,unquote
import json
root=Path(__file__).resolve().parent;assets=root.parent/'source/app'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  name=unquote(urlsplit(path).path).lstrip('/') or 'index.html'
  base=root if name in ['index.html','preview-bootstrap.js'] else assets
  p=(base/name).resolve()
  if p!=base and base not in p.parents:return str(root/'NOT_FOUND')
  return str(p)
 def end_headers(self):
  self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff');super().end_headers()
 def list_directory(self,path):self.send_error(404);return None
server=ThreadingHTTPServer(('127.0.0.1',8808),Handler)
print('PREVIEW_READY http://127.0.0.1:8808/',flush=True)
server.serve_forever()
