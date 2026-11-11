#!/usr/bin/env python3
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from functools import partial
import argparse
p=argparse.ArgumentParser();p.add_argument('--port',type=int,default=8786);args=p.parse_args()
root=Path(__file__).resolve().parent.parent/'app'
class Handler(SimpleHTTPRequestHandler):
 def end_headers(self):
  self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff');super().end_headers()
server=ThreadingHTTPServer(('127.0.0.1',args.port),partial(Handler,directory=str(root)))
print(f'清池预览：http://127.0.0.1:{args.port} （Ctrl+C 停止）',flush=True)
server.serve_forever()
