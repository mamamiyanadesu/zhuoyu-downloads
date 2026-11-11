from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import functools

ROOT = Path(__file__).resolve().parents[1] / 'site' / 'dist'
class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()
    def list_directory(self, path):
        self.send_error(404)
        return None

server = ThreadingHTTPServer(('127.0.0.1', 8816), functools.partial(Handler, directory=str(ROOT)))
print('SITE_READY http://127.0.0.1:8816/', flush=True)
server.serve_forever()
