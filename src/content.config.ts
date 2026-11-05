import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CLUSTER_IDS } from './site.config';

const posts = defineCollection({
  // The `slug` frontmatter field becomes the entry id (and the URL).
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z
    .object({
      title: z.string().max(70),
      description: z.string().max(160),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cluster: z.enum(CLUSTER_IDS),
      // 'video' = adapted from an Ostro video (youtubeId required).
      // 'news' = breaking tech/AI news; the video is optional (added later if Ostro covers it).
      kind: z.enum(['video', 'news']).default('video'),
      youtubeId: z.string().regex(/^[A-Za-z0-9_-]{11}$/).optional(),
      keywords: z.array(z.string()).default([]),
      draft: z.boolean().default(true),
      // Queue scheduling hint (see queue/README.md). Allowed so a queue file moved into this
      // folder validates as-is. It has no effect on the site.
      publishOn: z.coerce.date().optional(),
      // Optional video details for VideoObject structured data.
      videoTitle: z.string().optional(),
      videoUploadDate: z.coerce.date().optional(),
      videoDuration: z.string().optional(), // ISO 8601, e.g. PT10M24S
    })
    .refine((d) => d.kind === 'news' || !!d.youtubeId, {
      message: 'Video posts need a youtubeId (only kind: news may leave it out).',
      path: ['youtubeId'],
    }),
});

export const collections = { posts };
