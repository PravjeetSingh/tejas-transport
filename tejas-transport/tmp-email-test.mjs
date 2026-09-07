import fs from 'node:fs';

const env = {};
for (const line of fs.readFileSync('.env', 'utf8').split(/\r?\n/)) {
  if (!line || line.startsWith('#')) continue;
  const idx = line.indexOf('=');
  if (idx > -1) {
    env[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
}

const payload = {
  name: 'Test User',
  phone: '+91 99999 99999',
  email: 'test@example.com',
  pickup: 'Delhi',
  delivery: 'Noida',
  container: '20ft',
  message: 'Testing contact form submission.'
};

const response = await fetch('http://localhost:3000/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});

const text = await response.text();
console.log('status:', response.status);
console.log('body:', text);
