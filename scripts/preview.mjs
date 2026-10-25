import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { resolve, join, extname, sep } from 'node:path';

const argumentsList = process.argv.slice(2);
const option = (name, fallback) => {
  const index = argumentsList.indexOf(name);
  return index < 0 ? fallback : argumentsList[index + 1];
};
const host = option('--host', '127.0.0.1');
const port = Number(option('--port', '4173'));
const root = resolve(option('--dir', 'dist'));
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};
await stat(join(root, 'index.html')).catch(() => {
  throw new Error('Build the site with npm run build before starting the production preview.');
});
const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  let path;
  try {
    path = decodeURIComponent(new URL(request.url, `http://${host}`).pathname);
  } catch {
    response.writeHead(400).end('Invalid address.');
    return;
  }
  let file = resolve(root, `.${path}`);
  if (file !== root && !file.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end();
    return;
  }
  let status = 200;
  let details;
  try {
    details = await stat(file);
    if (details.isDirectory()) {
      file = join(file, 'index.html');
      details = await stat(file);
    }
  } catch {
    status = 404;
    file = join(root, '404.html');
    try {
      details = await stat(file);
    } catch {
      response.writeHead(404).end('Page not found.');
      return;
    }
  }
  if (!details.isFile()) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(status, {
    'Content-Type': types[extname(file)] || 'application/octet-stream',
    'Content-Length': details.size,
    'Cache-Control': 'no-cache',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  if (request.method === 'HEAD') {
    response.end();
    return;
  }
  const stream = createReadStream(file);
  stream.on('error', () => response.destroy());
  stream.pipe(response);
});
server.on('error', (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(port, host, () => {
  console.log(`Duokim Axis production preview\n  Local: http://${host}:${port}/`);
});
