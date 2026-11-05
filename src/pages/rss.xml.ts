import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../site.config';
import { getPosts, getCluster } from '../lib/posts';
import { absUrl } from '../lib/url';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: absUrl(`${post.id}/`),
      categories: [getCluster(post.data.cluster).name],
    })),
    customData: `<language>${SITE.locale.toLowerCase()}</language>`,
  });
}
