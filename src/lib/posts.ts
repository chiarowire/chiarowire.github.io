import { getCollection, type CollectionEntry } from 'astro:content';
import { CLUSTERS } from '../site.config';

export type Post = CollectionEntry<'posts'>;

/** Drafts render only in `astro dev`. A production build never includes them. */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', ({ data }) => (import.meta.env.PROD ? data.draft !== true : true));
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
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
