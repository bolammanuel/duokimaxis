import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { PUBLIC_PATHS, getMetadata } from '../src/utils/metadata.ts';

const outputDirectory = process.env.DUOKIM_BUILD_DIR || 'dist';
const built = await access(join(outputDirectory, 'index.html')).then(
  () => true,
  () => false,
);

test(
  'the production output contains unique, populated pages for every public route',
  { skip: !built && 'Run npm run build first.' },
  async () => {
    for (const path of PUBLIC_PATHS) {
      const html = await readFile(join(outputDirectory, path.slice(1), 'index.html'), 'utf8');
      assert.match(html, /<h1[^>]*>/);
      assert.ok(!html.includes('<!--app-html-->'));
      assert.ok(!html.includes('<!--app-head-->'));
      assert.ok(html.includes(getMetadata(path).title.replaceAll('&', '&amp;')));
      assert.ok(html.includes(`rel="canonical" href="https://duokimaxis.com${path}"`));
      assert.ok(!html.includes('G-DUOKIMAXIS12'));
      assert.match(html, /property="og:image" content="https:\/\/duokimaxis.com\/og-image.png"/);
    }
  },
);

test(
  'the sitemap contains real project URLs and omits confirmation and error pages',
  { skip: !built && 'Run npm run build first.' },
  async () => {
    const sitemap = await readFile(join(outputDirectory, 'sitemap.xml'), 'utf8');
    assert.equal((sitemap.match(/<url>/g) || []).length, PUBLIC_PATHS.length);
    assert.ok(sitemap.includes('/work/anic-brand-architecture'));
    assert.ok(!sitemap.includes('thank-you'));
    assert.ok(!sitemap.includes('#/'));
    const notFound = await readFile(join(outputDirectory, '404.html'), 'utf8');
    assert.ok(notFound.includes('noindex, follow'));
    assert.ok(notFound.includes('This page'));
  },
);
