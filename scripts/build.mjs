import { build } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const typecheck = spawnSync(
  process.execPath,
  [join(root, 'node_modules/typescript/bin/tsc'), '--noEmit'],
  { stdio: 'inherit' },
);
if (typecheck.status !== 0) process.exit(typecheck.status || 1);

const outIndex = process.argv.indexOf('--outDir');
const output = resolve(outIndex >= 0 ? process.argv[outIndex + 1] : 'dist');
if ([root, resolve('src'), resolve('public'), resolve('node_modules')].includes(output)) {
  throw new Error('Choose a separate build output directory, such as dist.');
}
const serverOutput = resolve('.cache/prerender');
await build({ build: { outDir: output, emptyOutDir: true } });
await build({ build: { ssr: 'src/entry-server.tsx', outDir: serverOutput, emptyOutDir: true } });
const { render, getMetadata, PUBLIC_PATHS, SITE_URL, CONTACT_EMAIL } = await import(
  pathToFileURL(join(serverOutput, 'entry-server.js')).href
);
const template = await readFile(join(output, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->'))
  throw new Error('The prerender placeholders are missing from index.html.');

const escape = (text) =>
  text
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
for (const path of [...PUBLIC_PATHS, '/thank-you', '/404']) {
  const metadata = getMetadata(path);
  const canonical = `${SITE_URL}${path}`;
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Duokim Axis',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: CONTACT_EMAIL,
    address: { '@type': 'PostalAddress', addressLocality: 'Abuja', addressCountry: 'NG' },
  }).replaceAll('<', '\\u003c');
  const head = `<meta name="description" content="${escape(metadata.description)}" />
    <meta name="robots" content="${metadata.noindex ? 'noindex, follow' : 'index, follow'}" />
    <link rel="canonical" href="${escape(canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Duokim Axis" />
    <meta property="og:title" content="${escape(metadata.title)}" />
    <meta property="og:description" content="${escape(metadata.description)}" />
    <meta property="og:url" content="${escape(canonical)}" />
    <meta property="og:image" content="${SITE_URL}/og-image.png" />
    <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(metadata.title)}" />
    <meta name="twitter:description" content="${escape(metadata.description)}" />
    <meta name="twitter:image" content="${SITE_URL}/og-image.png" />
    <script type="application/ld+json">${schema}</script>`;
  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escape(metadata.title)}</title>`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', render(path));
  const directory = path === '/' ? output : join(output, path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), html);
  if (path === '/404') await writeFile(join(output, '404.html'), html);
}
await writeFile(
  join(output, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PUBLIC_PATHS.map((path) => `  <url><loc>${escape(`${SITE_URL}${path}`)}</loc></url>`).join('\n')}\n</urlset>\n`,
);
await writeFile(
  join(output, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);
console.log(`Prerendered ${PUBLIC_PATHS.length} public pages, the inquiry page, and a 404 page.`);
