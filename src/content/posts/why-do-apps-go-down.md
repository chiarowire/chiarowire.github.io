---
title: "Why Do Apps Go Down? Outages Explained Simply"
description: "Why do apps go down, even at giant companies? The usual causes of outages in plain words, why one glitch hits millions, and what an outage means for you."
slug: why-do-apps-go-down
kind: news
pubDate: 2026-11-19
cluster: internet-and-you
keywords:
  - why do apps go down
  - why do websites go down
  - what causes outages
  - app outage explained
  - is it down or just me
draft: false
---

Why do apps go down? Most of the time, it isn't hackers. It's a change: an update, a settings tweak or maintenance work on the company's own computers that goes wrong. Because millions of people use the same servers, one mistake there can stop an app for everyone at once.

This month has been full of examples, so let's walk through what's actually happening behind the error message.

## What an app really is

The app on your phone is only the front door. When you check your email, pay a friend or play a song, your phone sends a request over the internet to a company's servers in a data center, and those servers send back the answer. Our explainer on [where cloud files actually live](../where-are-cloud-photos-stored/) shows what those buildings look like.

So an "outage" usually means your phone is fine. It's the computers on the other end that can't answer, or can't answer fast enough.

## Why do apps go down? The usual causes

Most outages come from a short list of causes. Here they are in plain words:

| Cause | What it means |
|---|---|
| A bad update | New code or a new setting goes live and breaks something nobody caught in testing |
| Maintenance gone wrong | Work to upgrade the network or add more computers trips something else |
| Too much traffic | More people show up than the servers can handle, like a store on Black Friday |
| A chain reaction | When some servers fail, the rest take on their load, and the extra work knocks more of them over |
| A broken shared service | Many apps lean on the same sign-in system, payment link or cloud provider, so when it stalls, they all do |
| Cables and power | Rarer, but a cut fiber line or a power problem can take part of a network offline |

Cyberattacks happen too, but companies often say plainly when one isn't involved. In both of the big outages we covered this month, the company said there was no sign of an attack.

## Two real examples from November 2026

**Microsoft 365.** Outlook, Teams and Copilot stopped working for many people from November 12 to 14. Microsoft said the disruption came from "an issue during an earlier network capacity upgrade," according to [CNBC](https://www.cnbc.com/2026/11/12/microsoft-outage-outlook-aws-google.html). In other words, work meant to give its network more room went wrong. Early on, Microsoft also described "a large number of servers being unexpectedly unavailable," [TechCrunch](https://techcrunch.com/2026/11/12/microsofts-outlook-email-hit-by-new-outage/) reported. That's the chain reaction from the table above. Our [Microsoft 365 outage](../microsoft-365-outage/) post has the full story.

**Chase.** On November 16, some Chase transactions slowed down and some Zelle payments with other banks were delayed. Chase blamed "a software bug in on-premise hardware systems," per CNBC, meaning computers the bank runs in its own buildings. Because a payment between two banks needs both sides working, the slowdown spilled over to people at other banks. More in our [Chase bank outage](../chase-bank-outage/) post.

Notice the pattern: neither was a mystery force from outside. Both came from the companies' own systems, and both spread because lots of things depend on those systems at once.

## Why one glitch can hit millions at once

Big companies don't build a separate system for each customer. They run huge shared pools of computers, which is why the cloud is cheap and works almost everywhere. The trade-off is that a mistake in a shared piece reaches everyone who depends on it.

The internet itself is built to route around trouble. If one path breaks, traffic finds another road, as our guide to [how the internet works](../how-does-the-internet-work/) explains. But that only helps if the company on the other end can still answer. If its own servers are stuck, there's no other road to take.

## What an outage means for you

- **Down usually isn't deleted.** An outage typically means the servers that hand you your data can't be reached for a while. The reports we checked on the outages above don't mention any lost data.
- **It's probably not your phone.** If an app fails for you and for people around you at the same moment, the problem is very likely on the company's end. Outage trackers collect user reports, so a spike tells you many people noticed trouble, not what caused it.
- **Many companies post updates.** Big services often run an official status page or post on their support accounts. That's where the company's own explanation shows up first.
- **Slow can look like down.** Sometimes a service is working, just badly. Payments that take longer and emails that arrive late are part of the same picture.

## Is it worth caring about?

Our take: yes, in a calm way. Outages are a normal part of how giant online services work, and the big ones are usually fixed within hours or days. But they're a good reminder of how much of daily life, from work email to paying rent, now runs through a handful of companies' computers.

Who this matters to most: anyone whose work, money or schoolwork lives in one app. Knowing that an outage is usually a temporary problem on the company's side, and not something you did, makes those days a bit less stressful. And as AI assistants like ChatGPT and Gemini handle more everyday tasks, they depend on the same kind of data centers too, which is part of why [AI runs on huge GPU-filled servers](../why-are-gpus-used-for-ai/).

### Sources

- CNBC: [coverage of the Microsoft 365 outage](https://www.cnbc.com/2026/11/12/microsoft-outage-outlook-aws-google.html) (November 12-14, 2026)
- TechCrunch: [Microsoft's Outlook email hit by new outage](https://techcrunch.com/2026/11/12/microsofts-outlook-email-hit-by-new-outage/) (November 12, 2026)
- CNBC: [JPMorgan Chase says temporary software bug is affecting consumer banking](https://www.cnbc.com/2026/11/16/jpmorgan-chase-technical-issue.html) (November 16, 2026)
