import test from 'node:test';
import assert from 'node:assert/strict';
import { getMetadata, normalisePath, PUBLIC_PATHS } from '../src/utils/metadata.ts';

test('all public paths have distinct, indexable metadata', () => {
  const titles = PUBLIC_PATHS.map((path) => getMetadata(path).title);
  assert.equal(new Set(titles).size, titles.length);
  for (const path of PUBLIC_PATHS) {
    assert.equal(getMetadata(path).noindex, undefined);
    assert.ok(getMetadata(path).description.length > 50);
  }
});

test('project pages are discoverable, while confirmations and unknown paths are not', () => {
  assert.equal(PUBLIC_PATHS.filter((path) => path.startsWith('/work/')).length, 2);
  assert.ok(!PUBLIC_PATHS.includes('/thank-you'));
  assert.equal(getMetadata('/thank-you').noindex, true);
  assert.equal(getMetadata('/an-unknown-page').noindex, true);
});

test('canonical paths discard tracking parameters, anchors, and trailing slashes', () => {
  assert.equal(normalisePath('/about/?utm_source=test#team'), '/about');
  assert.equal(normalisePath('/'), '/');
  assert.equal(getMetadata('/ABOUT/').title, getMetadata('/about').title);
});
