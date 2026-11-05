---
title: "Why Are GPUs Used for AI? (CPU vs GPU, Explained)"
description: "AI math is millions of small, independent sums, the exact job gaming chips were built for. CPU vs GPU, the AlexNet moment, and how Nvidia got so big."
slug: why-are-gpus-used-for-ai
pubDate: 2026-11-04
cluster: hardware
youtubeId: qM1KF_ZrZ5E
videoTitle: "Why AI Runs on Gaming Chips, and How Nvidia Hit $5 Trillion"
videoUploadDate: 2026-10-07T04:52:57Z
videoDuration: PT11M9S
keywords:
  - why are gpus used for ai
  - why are gpus used for ai instead of cpu
  - cpu vs gpu for ai
  - why does ai use nvidia chips
  - what is cuda
  - what is alexnet
draft: true
---

<!-- recheck Nvidia market cap before publishing (post says ~$4.8T, #2 behind Apple ~$5.1T, as of Nov 4, 2026). Also recheck the latest-quarter revenue line if Nvidia has reported Q3 FY27. Delete this comment once done. -->

Why are GPUs used for AI? Because AI models mostly do one kind of math, multiplying huge grids of numbers, and that work splits into millions of small sums that don't depend on each other. A GPU has thousands of simple cores built to do many sums at once, so it finishes that work far faster than a CPU.

GPUs don't win because each core is smart. They win because there are so many of them. Here's how a gaming chip ended up running AI, and how Nvidia ended up at the center of it.

## What's the difference between a CPU and a GPU?

The **CPU** (central processing unit) is the general-purpose brain of a computer. It runs the operating system, your browser and your apps, and it's built to handle almost anything. It does that with a small number of very powerful **cores**. Think of a core as one worker following its own list of instructions. Intel's Core Ultra 9 285K, a high-end desktop chip, has 24 of them ([Intel](https://www.intel.com/content/www/us/en/products/sku/241060/intel-core-ultra-9-processor-285k-36m-cache-up-to-5-70-ghz/specifications.html)). Each one is fast and flexible, and great at work where step two depends on step one.

The **GPU** (graphics processing unit) is different. As Intel puts it, GPUs were originally designed to speed up the rendering of 3D graphics ([Intel](https://www.intel.com/content/www/us/en/products/docs/processors/what-is-a-gpu.html)). In plain English: drawing the picture on your screen.

That's a huge job. A 1080p screen has about **2 million pixels**. If a game redraws all of them 60 times a second, that's more than **120 million pixel colors every second** (1920 × 1080 × 60). But each pixel's math is fairly simple, mostly the same as its neighbor's, and most pixels don't have to wait for each other.

So instead of a few heavyweight workers, a GPU uses a huge crowd of small, simple ones working at the same time. That's **parallel processing**. Nvidia's GeForce RTX 5090, a gaming card, lists **21,760** of what Nvidia calls CUDA cores ([Nvidia](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/)).

That isn't an apples-to-apples comparison. A GPU core is a much simpler unit than a CPU core, and on its own it isn't very clever. That's the point.

| | CPU | GPU |
|---|---|---|
| Cores | A few, powerful (24 in a Core Ultra 9 285K) | Thousands, simple (21,760 CUDA cores in an RTX 5090) |
| Best at | Varied work with lots of steps and decisions | The same simple math repeated massively |
| Analogy | A few brilliant experts | A stadium full of people with calculators |
| Job in a PC | Runs the show | Takes the big, repetitive jobs (graphics, AI) |

Hand the experts one tricky problem with lots of steps and they'll nail it. Hand the stadium a million simple sums that can all be done at once, and it finishes long before the experts. That's why the two work as a team. Intel describes the GPU as a complement to the CPU: the CPU runs the show, and the big repetitive jobs go to the GPU.

## Why are GPUs used for AI instead of CPUs?

Because AI turns out to be a GPU-shaped problem.

A large language model is basically billions of little dials called **parameters**. GPT-3, back in 2020, had **175 billion** of them ([Brown et al.](https://arxiv.org/abs/2005.14165)). When a model works on your message, those dials get pulled into a staggering number of calculations, and most of that work boils down to one kind of math: **multiplying big grids of numbers**, which mathematicians call matrices.

You don't need to know how to do matrix math. Here's the only part that matters: multiplying two big matrices means millions of tiny steps (multiply two numbers, add the result to a running total), over and over. And most of those steps don't depend on each other.

That's the pixel problem all over again: tons of simple, independent sums. The Computer History Museum puts it neatly. Neural network training involves "a lot of repeated matrix multiplications, preferably done in parallel," which is exactly what 3D graphics chips are designed to do ([CHM](https://computerhistory.org/blog/chm-releases-alexnet-source-code/)). Google says the same about its own AI chips: they're built for the large matrix operations common in machine learning ([Google Cloud](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)).

So video games and AI models want the same thing: **a crowd**.

## When did GPUs start being used for AI?

The moment it really clicked was **2012**. Alex Krizhevsky, a graduate student at the University of Toronto, working with Ilya Sutskever and Geoffrey Hinton, built an image-recognition network that became known as **AlexNet**.

- They trained it on **two Nvidia GTX 580s**, graphics cards built for gaming.
- Training took **five to six days**.
- The code was written in **CUDA**, Nvidia's tool for programming its GPUs.

AlexNet then entered the 2012 ImageNet image-recognition competition, and won by a landslide. Each system got five guesses per photo:

| Entry | Test images it missed (top-5 error) |
|---|---|
| AlexNet | 15.3% |
| Second-best entry | 26.2% |

*Source: the AlexNet paper ([Krizhevsky, Sutskever, Hinton, NeurIPS 2012](https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html)).*

That wasn't a small win. It was a different league. In the Computer History Museum's words, before AlexNet very few machine learning researchers used neural networks, and after it, almost all of them would.

## Are GPUs used for AI training or for running models?

Both. **Training** is the giant job of tuning all those dials. **Using** the model (answering your question, which engineers call inference) is smaller per message, but it happens for every message, from every user. Both lean on the same matrix math. In 2026, Google started making two separate AI chips for the first time: one built for training and one built for running models ([Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)).

That's how GPUs went from gaming PCs to rooms full of them. Back in 2020, Microsoft announced a supercomputer it built for OpenAI with **10,000 GPUs** ([Microsoft](https://news.microsoft.com/source/features/ai/openai-azure-supercomputer/)).

If you want the other half of this story, what those calculations actually produce, read [how ChatGPT works](../how-does-chatgpt-work/).

## Why does AI use Nvidia chips?

Plenty of companies make chips. So how did one company end up with the crown?

| Year | What Nvidia did |
|---|---|
| 1993 | Founded by Jensen Huang, Chris Malachowsky and Curtis Priem, famously after talking through the idea at a Denny's in Silicon Valley. The plan: realistic 3D graphics on PCs, for gaming and multimedia ([Nvidia](https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/)) |
| 1999 | Launched the GeForce 256, marketed as the world's first GPU |
| 2006 | Unveiled **CUDA**, which lets programmers use the GPU's crowd of cores for general-purpose math, not just graphics |
| 2017 | Added **Tensor Cores**, circuits designed specifically for matrix math |

AI wasn't the target in 2006. But six years later, when Krizhevsky needed to train a neural network fast, CUDA was already there.

**Our take:** Nvidia's real edge isn't only the chips. Chips can be matched. Years of software, tools and programmer habits built around CUDA are much harder to copy.

### How big did Nvidia get?

Then ChatGPT arrived at the end of 2022, and you can see what happened in Nvidia's own numbers for its data center business, the part that sells chips for data centers:

| Nvidia fiscal year | Data center revenue |
|---|---|
| Ended January 2023 | about $15.0 billion ([Nvidia](https://www.sec.gov/Archives/edgar/data/1045810/000104581023000014/q4fy23pr.htm)) |
| Ended January 2026 | $193.7 billion ([Nvidia](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000019/q4fy26pr.htm)) |

That's nearly **13 times as much in three years**. Gaming, the original business, brought in $16.0 billion that same year. It's now the small one. In the three months that ended in July 2026, Nvidia reported **$96.2 billion** in total revenue in a single quarter ([Nvidia](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000073/q2fy27pr.htm)). That was its latest reported quarter as of November 4, 2026.

Wall Street noticed. Nvidia first hit **$1 trillion** in market value in May 2023, and on **October 29, 2025** it became the first company ever valued at **$5 trillion**. Market values move every day, though. When we checked on **November 4, 2026**, Nvidia was worth roughly **$4.8 trillion**, second behind Apple at about $5.1 trillion ([CompaniesMarketCap](https://companiesmarketcap.com/), [StockAnalysis](https://stockanalysis.com/list/biggest-companies/)). Treat that as a snapshot.

One detail people often miss: Nvidia doesn't make its chips in its own factories. It designs them, and outside manufacturers like Taiwan's TSMC build them. How that works, and why so few companies can do it, is in [what 3nm really means](../what-does-3nm-mean/).

Nvidia isn't the only player, either. AMD sells its own data center GPUs, called Instinct. And Google designs its own AI chips, called TPUs, built around the same matrix math.

## What does this mean for you?

- **AI isn't free to run.** Every chatbot answer means real chips doing real math in a real data center. When AI tools come with usage limits or paid plans, that's what's on the other end. (All that hardware also uses a lot of electricity, as we show in [where cloud photos are stored](../where-are-cloud-photos-stored/).)
- **You might already own some of this.** If you game on a PC, a GPU does the drawing. And some newer laptops include a separate part built just for AI tasks, called an **NPU** (neural processing unit). Intel's Core Ultra chips are one example. Apple's version is the Neural Engine, which appears in its new [M6 MacBook Pro and iMac](../m6-macbook-pro-imac/).
- **A great company isn't the same as a great stock.** Nvidia's chips being in demand doesn't tell you whether its shares are worth buying at any price. This isn't investment advice, and we'll never tell you to buy or sell anything.

So next time someone says AI "runs on GPUs," you'll know what that means: millions of tiny sums, done all at once, by a crowd of simple workers. More explainers like this live in [Hardware](../topics/hardware/).
