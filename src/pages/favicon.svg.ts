import { SITE } from '../site.config';
import { markSvg } from '../lib/logo';

// Favicon generated from the brand config + mark, so a rebrand updates it too.
export function GET() {
  const svg = markSvg(SITE.colors.light.accent, SITE.colors.light.accentText);
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
}
