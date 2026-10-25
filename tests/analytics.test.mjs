import test from 'node:test';
import assert from 'node:assert/strict';
import { readConsent, saveConsent, setAnalyticsEnabled } from '../src/utils/analytics.ts';

function browser(t) {
  const previous = Object.fromEntries(
    ['window', 'document', 'location', 'localStorage'].map((key) => [key, globalThis[key]]),
  );
  const scripts = new Map();
  const cookies = [];
  const storage = new Map();
  globalThis.window = {};
  globalThis.location = { hostname: 'www.example.com', origin: 'https://www.example.com' };
  globalThis.localStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  };
  globalThis.document = {
    getElementById: (id) => scripts.get(id),
    createElement: () => {
      const script = { remove: () => scripts.delete(script.id) };
      return script;
    },
    head: { appendChild: (script) => scripts.set(script.id, script) },
    set cookie(value) {
      cookies.push(value);
    },
  };
  t.after(() => {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete globalThis[key];
      else globalThis[key] = value;
    }
  });
  return { scripts, cookies };
}

test('analytics creates no script without configuration or when disabled', (t) => {
  const { scripts } = browser(t);
  setAnalyticsEnabled(true, '');
  setAnalyticsEnabled(false, 'G-LOCALTEST');
  assert.equal(scripts.size, 0);
  assert.equal(window['ga-disable-G-LOCALTEST'], true);
});

test('consent enables one script and revoking it disables collection and expires its cookies', (t) => {
  const { scripts, cookies } = browser(t);
  saveConsent('accepted');
  setAnalyticsEnabled(true, 'G-LOCALTEST');
  setAnalyticsEnabled(true, 'G-LOCALTEST');
  assert.equal(scripts.size, 1);
  assert.ok(scripts.get('duokim-analytics').src.includes('G-LOCALTEST'));
  assert.equal(window['ga-disable-G-LOCALTEST'], false);
  saveConsent('declined');
  setAnalyticsEnabled(false, 'G-LOCALTEST');
  assert.equal(scripts.size, 0);
  assert.equal(window['ga-disable-G-LOCALTEST'], true);
  assert.ok(cookies.some((cookie) => cookie.startsWith('_ga=; Max-Age=0')));
  assert.ok(cookies.some((cookie) => cookie.startsWith('_ga_LOCALTEST=; Max-Age=0')));
});

test('the current visit still respects a choice when browser storage is blocked', (t) => {
  browser(t);
  globalThis.localStorage = {
    getItem() {
      throw new Error('Blocked');
    },
    setItem() {
      throw new Error('Blocked');
    },
  };
  saveConsent('accepted');
  assert.equal(readConsent(), 'accepted');
  saveConsent('declined');
  assert.equal(readConsent(), 'declined');
});
