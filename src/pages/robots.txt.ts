import { absUrl } from '../lib/url';

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${absUrl('sitemap-index.xml')}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
