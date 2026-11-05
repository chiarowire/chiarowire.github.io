---
title: "How Does the YouTube Algorithm Work? It's Betting on You"
description: "The YouTube algorithm doesn't grade videos. It predicts what you'll do next. How it, TikTok and Instagram rank your feed, and how to change it."
slug: how-does-the-youtube-algorithm-work
pubDate: 2026-11-04
cluster: internet-and-you
youtubeId: pvBJr2N4NEg
videoTitle: "The Algorithm Isn't Picking Good Videos. It's Betting on You"
videoUploadDate: 2026-10-29T04:00:21Z
videoDuration: PT10M55S
keywords:
  - how does the youtube algorithm work
  - how does youtube recommend videos
  - how does the tiktok algorithm work
  - how does the instagram algorithm work
  - how to reset youtube recommendations
  - youtube watch time
draft: false
---

How does the YouTube algorithm work? It doesn't pick "good" videos. It pulls a few hundred candidates out of billions, predicts how you'll react to each (click, keep watching, like, share), combines those guesses into one score using weights people chose, and sorts. TikTok and Instagram also rank by prediction, and one of the strongest signals is how long you watch.

That's why your feed can feel uncannily specific, why clickbait rose and then lost, and why platforms and governments are now arguing over who gets to set the weights. Here's how the machine works, using what YouTube, TikTok and Instagram have actually published about their systems.

## Is there one "algorithm"?

No. A feed is just a list. Every time you open the app, the system has to decide what goes in slot one, slot two, slot three and so on. "The algorithm" is shorthand for the systems that fill those slots.

And there's usually more than one. Adam Mosseri, the head of Instagram, wrote in 2023 that Instagram doesn't have a single algorithm. Feed, Stories, Explore and Reels each have their own ranking system with their own signals ([Instagram Ranking Explained](https://about.instagram.com/blog/announcements/instagram-ranking-explained/)).

Under the hood, though, most of these systems share one shape. We know that because Google has published research papers on how YouTube's recommender works, in [2016](https://research.google/pubs/deep-neural-networks-for-youtube-recommendations/) and [2019](https://research.google/pubs/recommending-what-video-to-watch-next-a-multitask-ranking-system/).

## How does YouTube decide what to recommend?

It's a two-stage funnel.

| Stage | What it does | Size |
|---|---|---|
| 1. Candidate generation | Uses your history to pull out videos that are probably relevant to you. A rough cut, done fast. | Billions of videos → a few hundred |
| 2. Ranking | A bigger, slower model gives each candidate a score. The list is sorted by that score. | A few hundred → your ranked feed |

The top of the sorted list is what you see. And these models are big: the 2016 paper says its models learned about a billion parameters and were trained on hundreds of billions of examples.

Here's the key idea. **The score isn't a quality grade. It's a prediction**: a bet on what you'll do next. (Chatbots are prediction machines too, just for words. See [how ChatGPT works](../how-does-chatgpt-work/).)

## What signals does the YouTube algorithm use?

To bet on you, the system needs to know things about you.

YouTube says its system learns every day from more than **80 billion** pieces of information it calls signals ([YouTube's blog, 2021](https://blog.youtube/inside-youtube/on-youtubes-recommendation-system/)). Its [help page](https://support.google.com/youtube/answer/16089387) lists the main ones:

- your watch history
- your search history
- your channel subscriptions
- likes and dislikes
- "Not interested" and "Don't recommend channel" clicks
- your answers to its satisfaction surveys

### How does the TikTok algorithm work?

TikTok published a similar list in 2020 when it explained its For You feed ([TikTok newsroom](https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you)). It groups the factors three ways:

- **What you do:** the videos you like, share or comment on, and the accounts you follow.
- **What the video is:** its caption, sound and hashtags.
- **Your settings:** your language, country and device.

TikTok was unusually specific about weighting. A strong signal, like finishing a longer video from beginning to end, counts for more than a weak one, like you and the creator being in the same country. Settings get a low weight because you never actively chose them as preferences.

Notice what's at the top: not what you tap, but how long you stayed.

TikTok also says that a creator's follower count, and whether their previous videos did well, are not direct factors. Big accounts get more views because more people follow them, not because the ranking system favors them.

### How does the Instagram algorithm work?

For the main feed, Mosseri listed Instagram's signals roughly in order of importance:

1. **Your activity:** posts you've liked, shared, saved or commented on.
2. **Information about the post:** how popular it is and when it was posted.
3. **Information about who posted it.**
4. **Your history with that person:** how often you interact with them.

## How does the algorithm know what I like?

It doesn't only look at you. It looks at people like you.

YouTube's help page says it compares your habits with those of people who have similar habits, and suggests what they watched. The 2016 Google paper describes the same idea: viewers are grouped by coarse features such as the videos they watched, the words they searched and basic demographics.

That also solves the blank-page problem. A brand-new account has no history, so:

- **TikTok** asks new users to pick a few interests, like pets or travel. Anyone who skips that gets a generalized feed of popular videos.
- **YouTube's** 2016 paper says details like your region and device act as a starting guess for new users, until real behavior takes over.

## How are videos ranked? Predictions, multiplied by weights

Here's what the ranking model actually does with each candidate. It doesn't ask "is this good?" It asks a stack of yes-or-no questions about you.

| Platform | Some of what it predicts you'll do |
|---|---|
| Instagram Feed | Spend a few seconds on the post, comment, like, share, tap the profile |
| Instagram Reels | Watch all the way through, reshare, like, tap through to the audio |
| YouTube (2019 paper) | Click, how long you'll watch (engagement); like, rate it well in a survey (satisfaction) |

Each prediction is a probability, a number between 0 and 1.

Picture two candidate videos. You're very likely to tap the first but unlikely to finish it. You're a bit less likely to tap the second, but much more likely to watch it to the end. If watching counts for more than tapping, the second video wins the slot. (That's an illustration, not real numbers.)

Then comes the step almost nobody talks about. The 2019 paper says the system combines all those predictions into one score using what it calls **weighted multiplication**, and that **the weights are manually tuned**. In other words, people decide how much each prediction counts.

YouTube also asks some viewers to rate videos they've watched, and treats those survey answers as a key input. The model learns to predict that answer too.

## Why does the algorithm care about watch time?

YouTube learned this the hard way. By its own account, in 2011 it realized that clicking on a video doesn't mean you actually watched it. In 2012 it started ranking on time watched instead.

The 2016 paper is blunt about why. Ranking by click rate tends to promote deceptive videos that people don't finish: clickbait. Watch time captures engagement better.

### Three more things the systems correct for

- **Position bias.** Whatever sits in slot one gets more clicks just because it's in slot one. The system could wrongly learn "people love this" when people really just love the top slot. The 2019 paper adds a small side model whose only job is to estimate how much of the credit came from position, so it can be subtracted out.
- **Freshness.** The 2016 paper says viewers consistently prefer new uploads (though not at the expense of relevance), so the model is trained to account for a video's age.
- **Variety.** TikTok says its feed generally won't show two videos in a row from the same creator or with the same sound, and that it deliberately mixes in things outside your usual interests to avoid a "filter bubble."

## How do I reset or change my recommendations?

Your feed learns from **time, not taste**. Every second you linger is a signal. Finishing a video is a strong one. Scrolling straight past is a signal too. So if your feed looks like your worst habits, the app isn't reading your mind. It's reading your watch time.

The good news: the inputs are editable.

| Platform | What you can do |
|---|---|
| YouTube | Mark a video "Not interested," choose "Don't recommend channel," and pause or delete your watch history ([YouTube Help](https://support.google.com/youtube/answer/6342839)) |
| TikTok | Long-press a video and choose "Not interested," or use the topic sliders in settings (they turn categories down without removing them) |
| Instagram | Use the Following tab for only accounts you follow, in time order. Or open "Your Algorithm" to see the topics it thinks you like and type what you want more or less of |

### New feed controls in 2026

On October 22, 2026, CNN reported that Instagram, Facebook, TikTok and YouTube were all rolling out new ways to steer your feed. Among them:

- **Instagram's "Your Algorithm"** launched on Reels in December 2025 and has since expanded to the whole app. In October 2026, Meta brought it to Facebook.
- **YouTube custom feeds**, announced in September 2026. You type a request, like long documentaries for winding down, and it builds that feed as its own tab on your home page.

None of these replace the main recommended feed. They sit beside it.

## Are governments regulating the algorithm?

The weights are becoming a public argument.

On September 8, 2026, Australia's government released draft legislation it calls "[My Feed, My Way](https://pm.gov.au/media/my-feed-my-way)." Platforms would have to notify users and offer a choice: keep the personalized, recommended feed, or opt out and see only the friends and creators they follow. It's aimed at users over 16, since under-16s are already covered by Australia's social media age ban. Fines could reach A$109.2 million. When it was announced, it was a draft out for consultation, and the government said it would introduce the legislation to Parliament in 2026.

Then on October 22, 2026, a law firm announced a class action against Meta in Australia's Federal Court on behalf of eight young people who say Facebook and Instagram harmed them while they were under 18. Meta said it would defend itself vigorously, and the court has suppressed the details of the claim. It's part of a wider wave of cases arguing that the design of these feeds is the problem.

## The short version

- "The algorithm" is a **funnel**: billions of videos, down to a few hundred candidates, down to a ranked list.
- The ranking score is a **prediction of your behavior**, not a quality grade.
- YouTube says it learns from **80+ billion signals** a day, and **how long you watch** is among the strongest.
- Predictions are combined using **weights that people tune by hand**.
- YouTube moved from clicks to **watch time in 2012** because clicks rewarded clickbait.
- You can **edit the inputs**, and in 2026 platforms and governments started fighting over who sets the weights.

Next time your feed shows you something uncannily specific, you'll know what happened: a few hundred candidates, a stack of predictions about you, weights a team of people chose, and a sort. It didn't read your mind. It read your time.

Curious how those videos physically reach your phone? Read [how the internet works](../how-does-the-internet-work/). More explainers like this are in [The Internet & You](../topics/internet-and-you/).
