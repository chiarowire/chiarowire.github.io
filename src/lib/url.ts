import { SITE } from '../site.config';

const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';

/** Site-relative link that respects `base`. Pass paths like 'about/' or '/about/'. */
export function href(path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return base + clean;
}

/** Absolute URL for canonical / OG / JSON-LD. */
export function absUrl(path = ''): string {
  return new URL(href(path), SITE.url).toString();
}

export function postPath(slug: string): string {
  return href(`${slug}/`);
}

export function clusterPath(id: string): string {
  return href(`topics/${id}/`);
}
