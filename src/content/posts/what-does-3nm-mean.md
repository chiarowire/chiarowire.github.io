---
title: "What Does 3nm Mean? Why Chip Sizes Aren't Real Sizes"
description: "The 3nm on a chip isn't a measurement. It's a generation name. What a transistor is, what 3nm and 2nm really mean, and why chips are so hard to make."
slug: what-does-3nm-mean
pubDate: 2026-11-06
cluster: hardware
youtubeId: m4NvvlYUDnc
videoTitle: "\"3nm\" Chips Aren't 3nm. So What's Really Inside?"
videoUploadDate: 2026-10-10T19:28:11Z
videoDuration: PT11M55S
keywords:
  - what does 3nm mean
  - what is a 3nm chip
  - 3nm process
  - 2nm vs 3nm
  - what is inside a computer chip
  - what is a transistor
draft: false
---

What does 3nm mean? Today, it's a generation name, not a measurement. "3 nanometers" tells you a chip comes from a newer, denser manufacturing process than "5nm". It doesn't tell you the size of anything on the chip. On TSMC's 3nm process, the gap from one transistor's gate to the next is about 45 nanometers.

So what's actually inside a chip, why did the industry keep a number that doesn't measure anything, and why can only a handful of companies make the most advanced ones? Let's zoom all the way in.

## What is inside a computer chip?

Every chip you own, in your phone, your laptop or a data center full of AI hardware, is built mostly from one basic part: the **transistor**. Intel describes transistors as microscopic switches that make computer chips work ([Intel](https://www.intel.com/content/www/us/en/newsroom/tech101/the-transistor-explained.html)). They have no moving parts. It's electricity controlling electricity.

A transistor has four parts that matter:

| Part | What it does |
|---|---|
| Source | Where the current comes from |
| Drain | Where the current wants to go |
| Channel | The path between them |
| Gate | Sits on the channel and opens or closes it |

Put a small voltage on the gate and the channel opens, so current flows: the switch is **on**. Remove the voltage and the current stops: **off**. On and off are the ones and zeros of binary. Every photo, message and game on your phone is, deep down, long strings of them.

One switch doesn't do much. The magic is in wiring them together. A few transistors in the right pattern make a **logic gate**. An AND gate, for example, outputs a 1 only if both of its inputs are 1. A handful of gates makes a circuit that adds two bits, a row of those adds bigger numbers, and enough of that is a computer.

### How did we get from one switch to billions?

| Year | Milestone |
|---|---|
| 1947 | John Bardeen and Walter Brattain demonstrate the first transistor at Bell Labs, in a group led by William Shockley. All three later share the Nobel Prize in Physics ([NobelPrize.org](https://www.nobelprize.org/prizes/physics/1956/summary/)) |
| Late 1950s | Jack Kilby at Texas Instruments and Robert Noyce, working separately, show a whole circuit can be built in one piece of material: the integrated circuit, or chip |
| 1971 | The Intel 4004, one of the first microprocessors: about 2,300 transistors |
| 2024 | Apple's M4: 28 billion transistors, according to Apple |
| Recent | Nvidia's Blackwell data center GPUs, the AI chips: 208 billion transistors, according to Nvidia |

That's more than ten million times as many transistors in the M4 as in the 4004 (28 billion ÷ 2,300 ≈ 12 million).

## What is Moore's Law?

In 1965, Gordon Moore, who went on to co-found Intel, predicted that the number of components on a chip would double every year. In 1975 he revised that to about every two years ([Intel](https://newsroom.intel.com/press-kit/moores-law)).

It's an observation, not a law of physics. But it became the target the whole industry aimed for, and the main way to hit it was to make transistors smaller. That brings us to the mysterious number on the box.

## What does 3nm mean?

A nanometer is one billionth of a meter. A human hair is something like 80,000 to 100,000 nanometers wide ([nano.gov](https://www.nano.gov/about-nanotechnology/just-how-small-is-nano)). So when a phone chip is said to be made on a "3 nanometer" process, it's natural to picture transistors 3 nanometers across.

That's not what it means.

Decades ago the number did roughly track something real: the length of the transistor's gate, the part that switches it on and off. Each new generation, the number shrank and chips got denser. Then the link broke. Intel itself says traditional nanometer-based names stopped matching the actual gate length back in **1997** ([Intel, 2021](https://www.sec.gov/Archives/edgar/data/50863/000119312521224438/d199788dex991.htm)).

IEEE Spectrum, the magazine of the engineering organization IEEE, put it plainly: most of the critical features of a so-called 7nm transistor are "considerably larger than 7 nm" ([IEEE Spectrum](https://spectrum.ieee.org/a-better-way-to-measure-progress-in-semiconductors)).

### How big are things on a 3nm chip?

Here's one real measurement. On TSMC's 3nm process, the spacing from one transistor's gate to the next, which engineers call the **gate pitch**, is about **45 nanometers**. That's TSMC's own figure, from a paper it presented at the IEDM engineering conference in 2022 ([SemiWiki](https://semiwiki.com/semiconductor-manufacturers/tsmc/322688-iedm-2022-tsmc-3nm/)).

| What the label says | One real measurement |
|---|---|
| "3nm" | About 45nm gate pitch, 15 times bigger than the name |

### So what is "3nm", really?

Think of it as a **generation name**, like a model year on a car. It tells you this is the newer, denser, more efficient process compared with the one before it. It doesn't tell you how big the transistors are.

You can see it in how the names get used:

- **Renaming:** in 2021, Intel renamed its "10nm Enhanced SuperFin" process to "Intel 7". Same technology, new name.
- **Angstroms:** Intel also started naming future generations in angstroms (a tenth of a nanometer), with names like Intel 20A and Intel 18A. The numbers keep shrinking, even though the transistors are many times bigger than that.
- **A better yardstick:** some engineers have proposed dropping the label and describing each process with real densities instead, such as how many logic transistors fit in a square millimeter. Researchers led by Stanford's Philip Wong published one version of that idea in 2020 ([IEEE Spectrum](https://spectrum.ieee.org/experts-invent-a-new-way-to-track-semiconductor-technology)).

## What actually gets better with each generation?

If the name isn't a measurement, what improved? Two things: transistors got packed closer together, and their **shape** changed.

| Shape | How the gate grips the channel | When |
|---|---|---|
| Planar (flat) | From the top only, like a lid | For decades |
| FinFET | The channel stands up like a fin, and the gate wraps three sides | Intel moved to it in 2011 |
| Gate-all-around (nanosheet) | The channel is a stack of thin sheets, and the gate wraps all four sides | Samsung's 3nm in 2022; TSMC's 2nm, in volume production since late 2025 |

Why change shape at all? As flat transistors shrank, they got leaky. Current would sneak through even when the switch was supposed to be off. Wrapping the gate around more of the channel gives it more grip and less leaking ([ASML](https://www.asml.com/en/company/stories/2022/what-is-a-gate-all-around-transistor), [TSMC](https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_2nm)).

## Is 2nm better than 3nm?

Usually, yes, in the sense that a newer generation from the same company tends to fit more transistors in the same space and use power more efficiently. But the label alone won't tell you how fast a phone or laptop is. For real speed, look at independent tests and reviews.

That matters right now, because "2nm" is landing in products. Apple calls its M6 its "first state-of-the-art 2-nanometer chip" ([Apple](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/)). Read that as a generation name. We look at what M6 actually changes in [the M6 MacBook Pro and iMac](../m6-macbook-pro-imac/).

## Why are chips so hard to make?

It starts with very pure silicon, grown into a big cylinder called an ingot, then sliced into thin, polished discs called **wafers**. According to ASML, the most common wafer size is 300 millimeters across, about 12 inches ([ASML](https://www.asml.com/en/news/stories/2021/semiconductor-manufacturing-process-steps)). One wafer holds many chips, built up together, layer by layer.

The key step is **lithography**, basically printing with light:

1. Coat the wafer in a light-sensitive material.
2. Shine light through a stencil that holds the circuit pattern.
3. Wash away part of the coating, so the pattern is printed.
4. Etch, add new material, and repeat.

How many times? ASML says each chip goes through this process hundreds of times. The Semiconductor Industry Association says there can be up to **1,400 process steps** for the wafers alone, and a finished wafer typically takes about three months, sometimes longer ([SIA](https://www.semiconductors.org/chipmakers-are-ramping-up-production-to-address-semiconductor-shortage-heres-why-that-takes-time/)). At the end, the wafer is cut into individual chips, and each one is packaged so it can go into a device.

### What is EUV lithography?

To print smaller patterns, you need light with a shorter wavelength. For the finest layers of the most advanced chips, the industry uses **extreme ultraviolet (EUV)** light, with a wavelength of 13.5 nanometers.

Making that light is wild. Inside the machine, tiny droplets of molten tin fly through a vacuum chamber. A laser pulse flattens each droplet, and a second, much more powerful pulse blasts it into a plasma hotter than the surface of the Sun. That plasma gives off the EUV light, **50,000 times every second** ([ASML](https://www.asml.com/en/discover/hot-machines)).

EUV light is absorbed by almost everything, even air. So the whole light path runs in a vacuum, and instead of lenses, extremely precise mirrors steer the light. As of 2026, only one company makes these EUV machines: **ASML**, in the Netherlands. Every chipmaker at the cutting edge depends on them.

### Why does dust matter so much?

The patterns are so fine that one tiny speck can wreck the circuits under it. Samsung says even a dust particle 1 micrometer across can cause a defect ([Samsung Semiconductor](https://semiconductor.samsung.com/support/tools-resources/dictionary/semiconductors-101-part-7-all-about-the-fab-the-birthplace-of-semiconductor-chips/)). That's why chips are made in cleanrooms, with workers in head-to-toe suits and air filtered far beyond anything in a normal building.

There's even a limit on how big one chip can be. The machine prints one patch of the wafer at a time, and that patch has a maximum size. That's why Nvidia's Blackwell is really two of the largest chips that can be printed, joined so they work as one GPU.

### Who can make the most advanced chips?

Very few companies. TSMC in Taiwan, Samsung in South Korea and Intel in the US are the names you'll hear most. And designing a chip isn't the same as making it: Nvidia designs Blackwell, but TSMC manufactures it.

## What does it mean for you?

- **Read the label as a generation, not a size.** "3nm", "2nm" or "18A" means newer and usually denser. It doesn't tell you real-world speed, so check reviews.
- **More transistors is why devices keep improving.** The extra switches become more cores, more on-chip memory, and dedicated parts for graphics and AI.
- **Chipmaking is concentrated.** Only a handful of companies can make the most advanced chips, which is why chip factories and supply chains keep showing up in the news.

It's switches all the way down. Even the "crowd" of simple cores inside a GPU is built from these same tiny transistors. That crowd is the reason AI runs on graphics chips, which we cover in [why GPUs are used for AI](../why-are-gpus-used-for-ai/). Those chips run the chatbots we explain in [how ChatGPT works](../how-does-chatgpt-work/), and they fill the data centers where your photos live, as we show in [where cloud photos are stored](../where-are-cloud-photos-stored/). More explainers like this live in [Hardware](../topics/hardware/).
