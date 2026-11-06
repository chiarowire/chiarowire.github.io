---
title: "Why AI Runs on Gaming Chips, and What It Means for You"
description: "AI runs on chips built for video games. Here's why, in plain English, and how that demand is reaching the prices of phones, PCs and consoles."
slug: why-are-gpus-used-for-ai
kind: news
pubDate: 2026-11-04
cluster: hardware
keywords:
  - why does ai run on gaming chips
  - why are gpus used for ai
  - why does ai use gpus
  - why are graphics cards so expensive
  - why are phones more expensive
  - how does ai affect prices
draft: true
---

<!-- Publish note: recheck the dated figures first. RTX 5070 prices (checked Nov 2-3, 2026), IDC's phone and PC figures (latest checked Oct 14, 2026), the Switch 2 US price. If Nvidia has reported the quarter that ended Oct 25, 2026 (results due Nov 17, 2026), replace the July quarter's Data Center and Edge Computing figures with the new ones from its press release, using the same two labels. Cut anything you can't confirm. Keep it free of advice, stock talk and market value. Delete this note once done. -->

Why does AI run on gaming chips? Because AI, like a video game, comes down to a huge pile of simple math done all at once, and graphics chips were built for exactly that. The part that reaches you: demand for those chips and their memory now shows up in the price of phones, PCs and consoles.

Here's the short version of how a chip made for games ended up running ChatGPT, and why it matters even if you've never played a game on a PC.

## Why are GPUs used for AI?

A GPU, or graphics processing unit, is the chip that draws what you see in a game. Intel says GPUs were originally designed to speed up the rendering of 3D graphics ([Intel](https://www.intel.com/content/www/us/en/products/docs/processors/what-is-a-gpu.html)). That's a big job: a 1080p screen has about 2 million pixels, and a game redraws them many times a second. But the math for each pixel is simple.

So a GPU works differently from the main processor in your computer, the CPU. Intel describes the CPU as using fewer cores on individual tasks, while the GPU splits work across many smaller cores at the same time ([Intel](https://www.intel.com/content/www/us/en/products/docs/processors/cpu-vs-gpu.html)).

Think of the CPU as a few brilliant experts, and the GPU as a stadium full of people with calculators. Give the experts one tricky problem and they'll nail it. Give the stadium a million easy sums and it finishes first.

AI turned out to be a stadium job. An AI model does an enormous amount of simple math, and much of it can happen at the same time. The Computer History Museum notes that training this kind of AI involves repeated math best done in parallel, which is what 3D graphics chips are designed for ([CHM](https://computerhistory.org/blog/chm-releases-alexnet-source-code/)). In other words, games and AI want the same thing: a crowd of simple workers.

The moment that proved it came in 2012. A University of Toronto team trained an image-recognition AI that won a major contest, using just two Nvidia GTX 580 graphics cards and five to six days of computing ([paper](https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html)). Those were cards meant for gaming ([Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/two-gtx-580s-in-sli-are-responsible-for-the-ai-we-have-today-nvidias-huang-revealed-that-the-invention-of-deep-learning-began-with-two-flagship-fermi-gpus-in-2012)). The museum calls that result a turning point for AI.

## Is AI really running on gaming cards?

Not literally, not anymore. "Gaming chips" is shorthand. The GPUs in AI data centers are built for that work, not pulled out of a gaming PC. They're the same idea at a much bigger scale. Back in 2020, Microsoft announced a supercomputer for OpenAI with 10,000 GPUs ([Microsoft](https://news.microsoft.com/source/features/ai/openai-azure-supercomputer/)).

Nvidia isn't the only name here, either. AMD sells GPUs for data centers, called [Instinct](https://www.amd.com/en/products/accelerators/instinct.html), and Google designs its own AI chips, called [TPUs](https://docs.cloud.google.com/tpu/docs/intro-to-tpu).

You can see how far the balance has moved in Nvidia's own reports. The company started in 1993 with a plan to bring 3D graphics to PCs ([Nvidia](https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/)). In its fiscal year that ended in January 2026, its data center business brought in $193.7 billion, while gaming and AI PCs brought in $16.0 billion ([Nvidia](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000019/q4fy26pr.htm)).

Nvidia no longer breaks out gaming on its own. Its reports now use a group called Edge Computing, which covers PCs, game consoles, workstations, robotics and cars ([Nvidia](https://s201.q4cdn.com/141608511/files/doc_financials/2027/Q127/Q1FY27-CFO-Commentary.pdf)). In the three months that ended July 26, 2026, Data Center revenue was $89.0 billion and Edge Computing was $7.2 billion ([Nvidia](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000073/q2fy27pr.htm)). The hobby that started it all is now the small side of the business.

## How does this affect the AI tools you use?

Every chatbot answer means real chips doing real work in a data center, and that isn't free. It helps explain why AI tools come with caps.

- **Gemini:** Google says its Gemini apps have "compute-based usage limits", which depend on how complex your prompt is and which models and features you use ([Google](https://support.google.com/gemini/answer/16275805?hl=en)).
- **ChatGPT:** OpenAI says free users get unlimited everyday text chats, but tools like image creation, file uploads and voice have separate limits. Paid Plus users get higher limits ([OpenAI](https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq)).

So plain text chat can feel unlimited while heavier tools hit a cap. Thousands of chips running at once also need a lot of power and cooling, which we cover in [where cloud photos are stored](../where-are-cloud-photos-stored/). If you want to know what the calculations actually produce, read [how ChatGPT works](../how-does-chatgpt-work/).

## Why are graphics cards, phones and PCs getting more expensive?

Here's where it reaches your wallet, and for most devices the link is memory, not the chips themselves. AI chips need a lot of fast memory, and only so many factories make it. IDC, a research firm that tracks the industry, says "major memory makers have shifted production toward memory used in AI data centers" ([IDC](https://www.idc.com/resource-center/blog/global-memory-shortage-crisis-market-analysis-and-the-potential-impact-on-the-smartphone-and-pc-markets-in-2026/)). Factory space used for AI memory can't also make memory for phones and laptops.

One example: in December 2025, memory maker Micron said it would leave its Crucial consumer business, citing AI-driven data center demand ([Micron](https://investors.micron.com/news/press-release/2025/Micron-Announces-Exit-from-Crucial-Consumer-Business-12-03-2025/default.aspx)). IDC said in October 2026 that memory costs had risen about 350% in a year and called this an "AI-led memory crisis" ([IDC](https://www.idc.com/resource-center/press-releases/smartphone-shipments-decline-3q26/)).

Here's what that looks like on the shelf:

| What you'd buy | What's happening |
|---|---|
| Gaming graphics cards | The Nvidia RTX 5070 launched at about $550. TechSpot's November 2 check put it 48% above that ([TechSpot](https://techspot.com/article/3192-gpu-pricing-q4-2026)). Tom's Hardware's November 3 update listed the best US price at $899 ([Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking)) |
| Phones | In August, IDC forecast that the average phone worldwide will sell for $581 in 2026, up 27.6% in a year ([IDC](https://www.idc.com/resource-center/blog/smartphone-shipments-set-for-record-16-7-drop-in-2026-as-the-memory-crisis-hits-full-force/)) |
| PCs | In June, IDC forecast that average PC prices will rise 17% in 2026 ([IDC](https://www.idc.com/resource-center/blog/pc-market-enters-volatile-territory-as-memory-shortage-persists-through-2027/)) |
| Consoles | The Nintendo Switch 2's US list price went from $449.99 to $499.99 on September 1, 2026 ([Nintendo](https://www.nintendo.co.jp/corporate/release/en/2026/260508.html)) |

Some caution on reading that table:

- **An average isn't your phone.** It's a forecast across all phones sold. IDC says the cheapest phones are hit hardest and premium phones should hold up better.
- **Nintendo didn't blame AI.** It said the change wasn't due to any one factor, and named memory and other component prices, exchange rates and oil ([Nintendo](https://www.nintendo.co.jp/ir/pdf/2026/260511e.pdf)).
- **Memory doesn't explain everything.** TechSpot says some graphics card increases are bigger than memory costs alone can account for.

## Will these things be harder to find?

Some already are. On its February 2026 earnings call, Nvidia said it expected limited supply to hold back its gaming business ([transcript](https://www.fool.com/earnings/call-transcripts/2026/02/25/nvidia-nvda-q4-2026-earnings-call-transcript)). It didn't say which cards ([PCWorld](https://www.pcworld.com/article/3072665/nvidia-gpu-shortages-are-here-again.html)). Tom's Hardware's tracker describes higher-end cards like the RTX 5070 Ti and RTX 5080 as being in poor supply at any reasonable price.

You might also get less for the money. Research firm TrendForce says PC makers are cutting storage in mainstream models ([TrendForce](https://www.trendforce.com/presscenter/news/20260930-13258.html)).

Forecasters don't see a quick fix. In June, IDC said it saw no real relief for PCs before the end of 2027 and that prices were unlikely to return to 2025 levels ([IDC](https://www.idc.com/resource-center/blog/pc-market-enters-volatile-territory-as-memory-shortage-persists-through-2027/)). For phones, it said in October that any market recovery would wait until 2028 at the earliest ([IDC](https://www.idc.com/resource-center/press-releases/smartphone-shipments-decline-3q26/)). Those are forecasts, not facts, and they can change.

## Is it worth caring about?

**Our take:** yes, because this has moved past tech news and into everyday prices.

If you only use a chatbot now and then, you'll mostly notice it as usage limits. If you're pricing up a new phone, laptop or console, this is a big part of why those price tags look the way they do. PC gamers and people looking at the cheapest phones feel it most, because they're now competing with AI for the same kinds of parts.

We're explaining what's going on here, not telling anyone what to buy or when. If you want to go deeper, here's [how chips are made and why so few companies can do it](../what-does-3nm-mean/), and what Apple's [M6 MacBook Pro and iMac](../m6-macbook-pro-imac/) do with AI on the device itself. More explainers live in [Hardware](../topics/hardware/).
