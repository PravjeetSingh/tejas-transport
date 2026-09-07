import test from 'node:test';
import assert from 'node:assert/strict';

process.env.RESEND_API_KEY = 'test-key';
process.env.RESEND_FROM_EMAIL = 'noreply@example.com';
process.env.RESEND_TO_EMAIL = 'to@example.com';

const { default: handler } = await import('../api/send-email.js');

test('returns validation error when required form fields are missing', async () => {
  let payload;
  let statusCode = 200;

  const req = {
    method: 'POST',
    body: {
      name: 'Jane Doe',
      phone: '+91 99999 99999',
    },
  };

  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(data) {
      payload = data;
      return data;
    },
  };

  await handler(req, res);

  assert.equal(statusCode, 400);
  assert.equal(payload.success, false);
  assert.match(payload.message, /required fields/i);
});
