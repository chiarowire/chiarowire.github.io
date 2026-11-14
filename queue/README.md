# queue/

Finished posts waiting to publish. This folder sits outside `src/`, so Astro never renders it.
Files here are public in the repo but not on the site. The daily routine publishes at most
1 post a day.

## How it works
- Each file is a complete post with `draft: true`. Filenames match the `slug`.
- **Dated items:** a file with `publishOn: YYYY-MM-DD` publishes on that date, or the first run
  after it, ahead of news. `publishOn` is an allowed optional field in `src/content.config.ts`,
  so it can stay in the file after the move. It has no effect on the site.
- **Slow-news items:** files without `publishOn` publish only on days with no qualifying news,
  in the order below.
- **To publish one:** `git mv queue/<slug>.md src/content/posts/`, then set `draft: false` and
  `pubDate` to today. Re-check any dated facts. Do what any `<!-- ... -->` note at the top of the
  body says, then delete that note. Remove the post from the order list below.
- Links between queued posts render as plain text until the target publishes (see
  `getQueuedSlugs()` in `src/lib/posts.ts`). Nothing breaks when one goes live.
- `npm run check` fails if a queued slug is already live, so a post can't publish twice.
  The fix is to delete the queue copy.
- HTML comments that aren't publish notes (the affiliate-box placeholder in the cloud post) stay
  as they are. Never add affiliate links: those need Alex's go-ahead.

## Order
Dated:
(none)

Slow-news days, top first:
(none)
