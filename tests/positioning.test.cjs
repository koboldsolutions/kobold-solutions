const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const dictionaries = Object.fromEntries(['en', 'es'].map(lng => [lng, JSON.parse(fs.readFileSync(path.join(root, `public/locales/${lng}/common.json`), 'utf8'))]));
const registry = import(`data:text/javascript;base64,${Buffer.from(fs.readFileSync(path.join(root, 'src/common/services.js'), 'utf8')).toString('base64')}`);
const keys = (value, prefix = '') => Object.entries(value).flatMap(([key, child]) => child && typeof child === 'object' ? keys(child, `${prefix}${key}.`) : [`${prefix}${key}`]);

function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const name = path.join(directory, entry.name);
    return entry.isDirectory() ? files(name) : /\.jsx?$/.test(name) ? [name] : [];
  });
}

test('both languages have matching keys and complete, ordered offerings', async () => {
  const { services } = await registry;
  assert.deepEqual(services.map(service => service.id), ['development', 'consulting', 'ai']);
  assert.deepEqual(keys(dictionaries.en).sort(), keys(dictionaries.es).sort());
  for (const [lng, dictionary] of Object.entries(dictionaries)) {
    assert.equal(dictionary.marquee.length, 6);
    for (const service of services) {
      const offering = dictionary.offerings[service.id];
      for (const key of ['title', 'summary', 'heading', 'description']) assert.ok(offering[key]?.trim(), `${lng}: ${service.id}.${key}`);
      assert.equal(offering.capabilities.length, 6);
      assert.ok(offering.capabilities.every(item => typeof item === 'string' && item.trim()));
      assert.ok(dictionary.orbit[service.id].title && dictionary.orbit[service.id].description);
      assert.ok(fs.existsSync(path.join(root, 'public/dark/assets/imgs/icons', service.icon)));
      assert.ok(fs.existsSync(path.join(root, 'public/dark/assets/imgs/services', service.image)));
    }
    assert.doesNotMatch(JSON.stringify(dictionary), /e[- ]?commerce|woocommerce|shopify|\bCRMs?\b/i);
    assert.match(dictionary.offerings.ai.description, /MCP \(Model Context Protocol\)/);
  }
});

test('all literal translation references resolve in both languages', () => {
  for (const file of files(path.join(root, 'src'))) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(/\bt\(\s*(['"])([^'"]+)\1/g)) {
      const key = match[2];
      for (const [lng, dictionary] of Object.entries(dictionaries)) {
        const value = key.split('.').reduce((parent, part) => parent?.[part], dictionary);
        assert.notEqual(value, undefined, `${path.relative(root, file)}: missing ${lng}:${key}`);
      }
    }
  }
});

test('hero, metadata, and the introductory call remain available in both languages', () => {
  for (const dictionary of Object.values(dictionaries)) {
    for (const key of ['eyebrow', 'title', 'accent', 'description', 'contact', 'services']) assert.ok(dictionary.hero[key]);
    for (const page of ['home', 'services', 'contact']) assert.ok(dictionary.meta[page].title && dictionary.meta[page].description);
    assert.match(dictionary.contact.schedule_call, /15/);
  }
  assert.match(dictionaries.en.contact.schedule_call, /free/i);
  assert.match(dictionaries.es.contact.schedule_call, /gratis/i);
});
