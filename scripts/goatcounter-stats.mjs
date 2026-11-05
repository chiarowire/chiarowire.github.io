// Prints traffic totals from the GoatCounter API as JSON, for the daily routine's Log page.
// Needs GOATCOUNTER_API_KEY (a "Read statistics" key) and analytics.goatcounterCode in
// src/site.config.ts. Without both it logs "skipped", prints no JSON and exits 0.
//
// GoatCounter counts visits, not separate visitors and page views: one person reading three
// pages is three visits, and a reload isn't counted. See goatcounter.com/help/sessions.
import { execFileSync } from 'node:child_process';
import { readdir, readFile } from 'node:fs/promises';

const key = process.env.GOATCOUNTER_API_KEY;
const config = await readFile(new URL('../src/site.config.ts', import.meta.url), 'utf8');
const code = (config.match(/goatcounterCode:\s*'([^']*)'/) ?? [])[1];

if (!key || !code) {
  console.error('goatcounter-stats: skipped (no API key or site code)');
  process.exit(0);
}

const API = process.env.GOATCOUNTER_API_URL || `https://${code}.goatcounter.com/api/v0`;

// curl, not fetch: Node's fetch can skip a sandbox proxy. The key goes in over stdin, so it
// never appears in a command line.
function get(path, params) {
  const url = `${API}/${path}?${new URLSearchParams(params)}`;
  const curlConfig = `header = "Authorization: Bearer ${key}"\nheader = "Content-Type: application/json"\n`;
  try {
    const body = execFileSync('curl', ['-sS', '--fail', '-m', '20', '--config', '-', url], {
      input: curlConfig,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    return JSON.parse(body);
  } catch (err) {
    const detail = String(err.stderr || err.message).trim().split('\n').pop().replaceAll(key, '[key]');
    throw new Error(`GoatCounter API ${path} failed: ${detail}`);
  }
}

// GoatCounter asks for times rounded to the hour. End on the next hour to include the current one.
const HOUR = 3_600_000;
const end = Math.floor(Date.now() / HOUR) * HOUR + HOUR;
const range = (days) => ({
  start: new Date(end - days * 24 * HOUR).toISOString().replace('.000Z', 'Z'),
  end: new Date(end).toISOString().replace('.000Z', 'Z'),
});

const visits = (days) => get('stats/total', range(days)).total;

// Top posts only: paths that match a live post file, not the home page or legal pages.
const trim = (path) => path.replace(/\/+$/, '');
const files = await readdir(new URL('../src/content/posts/', import.meta.url));
const posts = new Set(files.filter((f) => f.endsWith('.md')).map((f) => `/${f.slice(0, -3)}`));

// The API returns paths sorted by count, and 100 is its maximum page size.
const { hits = [] } = get('stats/hits', { ...range(30), limit: '100' });
const topPosts = hits
  .filter((h) => !h.event && posts.has(trim(h.path)))
  .slice(0, 10)
  .map((h) => ({ path: h.path, title: h.title, visits: h.count }));

console.log(
  JSON.stringify(
    { at: new Date().toISOString(), visits7d: visits(7), visits30d: visits(30), topPosts },
    null,
    2,
  ),
);
