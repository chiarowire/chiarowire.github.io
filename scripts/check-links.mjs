// Zero-dependency check of the built site (run after `npm run build`):
// - every internal <a href> / <link href> / <img src> resolves to a file in dist/
// - no draft post leaked into the production build
// - every page has a title, meta description and canonical URL
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const CONFIG = await readFile(new URL('../src/site.config.ts', import.meta.url), 'utf8');
const BASE = (CONFIG.match(/base:\s*'([^']*)'/) ?? [, '/'])[1];
const SITE_URL = (CONFIG.match(/url:\s*'([^']*)'/) ?? [, ''])[1];

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

const files = await walk(DIST);
const pages = files.filter((f) => f.endsWith('.html'));
let problems = 0;
const fail = (msg) => {
  problems++;
  console.log('  ✗ ' + msg);
};

for (const page of pages) {
  const rel = page.slice(DIST.length).replace(/\\/g, '/');
  const html = await readFile(page, 'utf8');
  if (/class="draft-banner"/.test(html)) fail(`${rel}: draft post in production build`);
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${rel}: missing <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) fail(`${rel}: missing meta description`);
  if (!/name="robots" content="noindex/.test(html) && !/<link rel="canonical"/.test(html)) fail(`${rel}: missing canonical`);

  const refs = [...html.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)].map((m) => m[1]);
  for (let ref of refs) {
    if (SITE_URL && ref.startsWith(SITE_URL)) ref = ref.slice(SITE_URL.length) || '/';
    if (/^(https?:|mailto:|data:|\/\/)/.test(ref)) continue;
    let target;
    if (ref.startsWith('/')) {
      if (!ref.startsWith(BASE)) { fail(`${rel}: link outside base: ${ref}`); continue; }
      target = ref.slice(BASE.length);
    } else {
      target = posix.join(posix.dirname(rel), ref);
    }
    const p = join(DIST, target);
    const ok = target.endsWith('/') || target === '' ? await exists(join(p, 'index.html')) : (await exists(p)) || (await exists(join(p, 'index.html')));
    if (!ok) fail(`${rel}: broken internal link → ${ref}`);
  }
}

console.log(`Checked ${pages.length} pages: ${problems === 0 ? 'all good' : problems + ' problem(s)'}`);
process.exit(problems ? 1 : 0);
