// ─────────────────────────────────────────────────────────────────────────────
// THE ONE BRAND FILE. Rebranding = edit this file only.
// Name, tagline, colors, site URL and channel links all live here.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  // Brand picked by Alex 2026-11-04: "for the blog - lets go with Chiaro Wire". See resources/brand.md.
  name: 'Chiaro Wire',
  shortName: 'Chiaro', // used for the favicon letter and tight spots
  tagline: 'Breaking tech, made clear.',
  description:
    'Plain-English explainers on AI, chips and the internet. The written side of the Ostro YouTube channel.',
  locale: 'en-US',
  lang: 'en',

  // Final public URL with NO trailing slash. User-site repo `chiarowire.github.io`
  // serves at the root. If Alex buys chiarowire.com later, change this to
  // 'https://chiarowire.com' (base stays '/').
  url: 'https://chiarowire.github.io',
  // '/' for a <username>.github.io repo or a custom domain (no subpath).
  // '/<repo-name>/' only if the site ever moves to a project repo.
  base: '/',

  // YouTube channel (Ostro)
  youtube: {
    channelId: 'UCtY_jGmeGSviw5GGxoP1DdQ',
    channelName: 'Ostro',
    channelUrl: 'https://www.youtube.com/channel/UCtY_jGmeGSviw5GGxoP1DdQ',
    subscribeUrl: 'https://www.youtube.com/channel/UCtY_jGmeGSviw5GGxoP1DdQ?sub_confirmation=1',
  },

  // null until Alex gives an address for the site. The Contact page shows a placeholder.
  contactEmail: null as string | null,

  // Colors (checked for WCAG AA contrast against the backgrounds below).
  colors: {
    light: { bg: '#fbfaf7', surface: '#ffffff', text: '#1b1d22', muted: '#4f5562', accent: '#1f5fbf', accentText: '#ffffff', border: '#e3e1db' },
    dark: { bg: '#121418', surface: '#1b1e24', text: '#eceef2', muted: '#a9afbb', accent: '#7fb0ff', accentText: '#0d1117', border: '#2c313a' },
  },

  // Search engine ownership tags (paste the content="..." value only). Filled after launch.
  verification: {
    google: 'nhfEIq6aZhld3hKQdrzZuZNNf88U1ftKeHNJXqk_2wA', // Google Search Console → HTML tag method
    bing: '', // Bing Webmaster Tools → meta tag method
  },

  // GoatCounter account code (the "chiarowire" in chiarowire.goatcounter.com). While this is
  // empty, no tracking script is rendered. Fill it in only in the same push as the updated
  // Privacy Policy.
  analytics: {
    goatcounterCode: 'chiarowire' as string,
  },

  postsPerPageHome: 6,
} as const;

// Content clusters (topic hubs). Post frontmatter `cluster` must be one of these ids.
export const CLUSTERS = [
  {
    id: 'ai-explained',
    name: 'AI Explained',
    description: 'How chatbots, image generators and the AI race actually work, minus the hype.',
  },
  {
    id: 'hardware',
    name: 'Hardware',
    description: 'Chips, GPUs and the physical machines that make modern tech possible.',
  },
  {
    id: 'internet-and-you',
    name: 'The Internet & You',
    description: 'The cloud, the network, your feed and the systems you use every day.',
  },
] as const;

export type ClusterId = (typeof CLUSTERS)[number]['id'];
export const CLUSTER_IDS = CLUSTERS.map((c) => c.id) as [ClusterId, ...ClusterId[]];
