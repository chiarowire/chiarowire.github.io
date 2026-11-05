import { getCollection, type CollectionEntry } from 'astro:content';
import { CLUSTERS } from '../site.config';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export type Post = CollectionEntry<'posts'>;

/** Drafts render only in `astro dev`. A production build never includes them. */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', ({ data }) => (import.meta.env.PROD ? data.draft !== true : true));
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Slugs of posts waiting in queue/ (repo root, outside the collection, never rendered).
 * Links to them are unwrapped to plain text until they publish. Read once per build.
 */
let queued: Set<string> | undefined;
export function getQueuedSlugs(): Set<string> {
  if (queued) return queued;
  queued = new Set();
  const dir = join(process.cwd(), 'queue');
  if (!existsSync(dir)) return queued;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.md') || f.toLowerCase() === 'readme.md') continue;
    const m = readFileSync(join(dir, f), 'utf8').match(/^slug:\s*["']?([a-z0-9-]+)/m);
    queued.add(m ? m[1] : f.replace(/\.md$/, ''));
  }
  return queued;
}

export function getCluster(id: string) {
  const c = CLUSTERS.find((c) => c.id === id);
  if (!c) throw new Error(`Unknown cluster: ${id}`);
  return c;
}

export function readingMinutes(body = ''): number {
  const words = body.replace(/[#>*_`\-|\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Pages that own a top-level path; a post slug must never collide with one. */
export const RESERVED_SLUGS = ['about', 'contact', 'privacy', 'terms', 'affiliate-disclosure', 'topics', '404', 'rss.xml', 'robots.txt', 'favicon.svg'];
