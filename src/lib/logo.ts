// Chiaro Wire mark: an open "C" ring with a wire running out through its gap,
// ending in a node. Original, code-drawn (see resources/brand.md). Used by the
// header logo and the favicon so they always match.

/** Inner shapes for a 64x64 viewBox, drawn in `fg`. */
export function markShapes(fg: string): string {
  return (
    `<path d="M40.6 21.4A15 15 0 1 0 40.6 42.6" fill="none" stroke="${fg}" stroke-width="7" stroke-linecap="round"/>` +
    `<path d="M30 32H48" stroke="${fg}" stroke-width="4" stroke-linecap="round"/>` +
    `<circle cx="51" cy="32" r="5" fill="${fg}"/>`
  );
}

/** Full square badge: rounded tile in `bg` with the mark in `fg`. */
export function markSvg(bg: string, fg: string, size?: number): string {
  const dims = size ? ` width="${size}" height="${size}"` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"${dims}><rect width="64" height="64" rx="14" fill="${bg}"/>${markShapes(fg)}</svg>`;
}
