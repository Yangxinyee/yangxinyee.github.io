// Regenerates zh/index.html from index.html and the Chinese strings in js/i18n.js.
// Run by .github/workflows/build-zh.yml whenever index.html or js/i18n.js changes.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import vm from 'node:vm';
import { JSDOM } from 'jsdom';

const SITE = 'https://yangxinyee.github.io';

// Load the translations object without a browser: stub the few globals i18n.js touches.
const noop = () => {};
const sandbox = {
    window: {},
    document: { addEventListener: noop, querySelector: () => null, querySelectorAll: () => [], documentElement: { dataset: {} } },
    localStorage: { getItem: () => null, setItem: noop },
    CustomEvent: class {}
};
vm.createContext(sandbox);
vm.runInContext(readFileSync('js/i18n.js', 'utf8') + '\n;globalThis.__translations = translations;', sandbox);
const zh = sandbox.__translations.zh;
const get = (source, path) => path.split('.').reduce((value, key) => value?.[key], source);

const dom = new JSDOM(readFileSync('index.html', 'utf8'));
const doc = dom.window.document;
const root = doc.documentElement;
root.setAttribute('lang', 'zh-CN');
root.setAttribute('data-page-lang', 'zh');
doc.querySelector('title').textContent = zh.meta.title;
doc.querySelector('meta[name="description"]')?.setAttribute('content', zh.meta.description);
doc.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE}/zh/`);

const missing = [];
doc.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = get(zh, element.dataset.i18n);
    if (typeof value === 'string') element.textContent = value;
    else missing.push(element.dataset.i18n);
});

// The page lives one level down, so relative asset and page links need a ../ prefix.
doc.querySelectorAll('[src],[href]').forEach((element) => {
    for (const attribute of ['src', 'href']) {
        const value = element.getAttribute(attribute);
        if (value && !/^(https?:|\/\/|#|mailto:|\/|data:|javascript:)/.test(value)) element.setAttribute(attribute, `../${value}`);
    }
});

mkdirSync('zh', { recursive: true });
writeFileSync('zh/index.html', `<!DOCTYPE html>\n${root.outerHTML}\n`);
if (missing.length) console.warn(`Missing Chinese strings: ${missing.join(', ')}`);
console.log('Wrote zh/index.html');
