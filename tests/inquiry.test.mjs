import test from 'node:test';
import assert from 'node:assert/strict';
import {
  canSendInquiry,
  prepareInquiry,
  sendInquiry,
  validateInquiry,
} from '../src/utils/inquiry.ts';

const inquiry = {
  name: 'A. Person',
  email: 'person@example.com',
  service: 'Brand strategy & identity',
  message: 'We need to bring three related services into a clearer brand.',
  website: '',
};
const configured = {
  serviceId: 'service_test',
  templateId: 'template_test',
  publicKey: 'public_test',
};

test('invalid and automated inquiries cannot reach a delivery transport', async () => {
  for (const invalid of [
    { ...inquiry, email: 'not-an-email' },
    { ...inquiry, name: '   ' },
    { ...inquiry, message: '  ' },
    { ...inquiry, message: 'x'.repeat(3001) },
    { ...inquiry, website: 'https://spam.invalid' },
  ]) {
    let called = false;
    await assert.rejects(
      sendInquiry(invalid, configured, async () => {
        called = true;
        return { status: 200 };
      }),
    );
    assert.equal(called, false);
    assert.ok(Object.keys(validateInquiry(invalid)).length);
  }
});

test('missing or partial configuration offers no false delivery success', async () => {
  for (const configuration of [
    { serviceId: '', templateId: '', publicKey: '' },
    { ...configured, templateId: '' },
  ]) {
    assert.equal(canSendInquiry(configuration), false);
    await assert.rejects(sendInquiry(inquiry, configuration), /Direct delivery is unavailable/);
  }
});

test('a prepared email retains punctuation, line breaks, and all inquiry fields', () => {
  const message = 'Hello & thank you!\nCould we discuss A+B, #1, and a 50% change?';
  const draft = prepareInquiry({ ...inquiry, message }, 'studio@example.com');
  const url = new URL(draft.mailto);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(decodeURIComponent(url.pathname), 'studio@example.com');
  assert.equal(url.searchParams.get('body'), draft.body);
  assert.ok(draft.body.includes(message));
  assert.ok(draft.body.includes(inquiry.email));
  assert.ok(draft.body.includes(inquiry.name));
  assert.ok(draft.body.includes(inquiry.service));
  assert.equal(url.searchParams.get('subject'), draft.subject);
});

test('delivery only resolves after an accepted provider response', async () => {
  let resolveResponse;
  let finished = false;
  const response = new Promise((resolve) => {
    resolveResponse = resolve;
  });
  const sent = sendInquiry(inquiry, configured, async (service, template, parameters, options) => {
    assert.equal(service, configured.serviceId);
    assert.equal(template, configured.templateId);
    assert.equal(parameters.reply_to, inquiry.email);
    assert.equal(parameters.message, inquiry.message);
    assert.equal(options.publicKey, configured.publicKey);
    return response;
  }).then(() => {
    finished = true;
  });
  await Promise.resolve();
  assert.equal(finished, false);
  resolveResponse({ status: 200 });
  await sent;
  assert.equal(finished, true);
});

test('provider rejections and network failures propagate instead of producing success', async () => {
  await assert.rejects(
    sendInquiry(inquiry, configured, async () => ({ status: 500 })),
    /not accepted/,
  );
  await assert.rejects(
    sendInquiry(inquiry, configured, async () => {
      throw new Error('Network unavailable');
    }),
    /Network unavailable/,
  );
});
