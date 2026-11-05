---
title: "How Does the Internet Work? Follow One Tap Around the World"
description: "The internet isn't a cloud. It's a network of networks, an address book, numbered packets and glass cables under the ocean. Here's the whole trip."
slug: how-does-the-internet-work
pubDate: 2026-11-04
cluster: internet-and-you
youtubeId: xucCx--vk0w
videoTitle: "How the Internet Actually Works (It's Not a Cloud)"
videoUploadDate: 2026-11-04T02:18:50Z
videoDuration: PT10M24S
keywords:
  - how does the internet work
  - how does the internet work physically
  - how does the internet work across the ocean
  - how does dns work
  - what is a packet in networking
  - undersea internet cables
draft: false
---

How does the internet work? It isn't one thing floating in a cloud. It's tens of thousands of separate networks that agreed on shared rules. Your phone looks up a site's numeric address, chops your request into small numbered packets, and routers pass them along, mostly as flashes of light in glass cables, including cables on the ocean floor.

That design is why a message can cross the Atlantic and come back faster than you can blink, and why the internet routes around damage instead of collapsing. Let's follow one tap all the way there and back.

## What is the internet, really?

Most of us picture "the internet" as one big thing somewhere. It isn't. It's a lot of separate networks connected to each other.

Your home Wi-Fi is a tiny network: your phone, laptop and TV all talking to one box, your router. That router connects to a much bigger network run by your internet provider (your ISP, the company you pay every month). Your provider connects to other providers, and those connect to others, across countries and oceans.

Put tens of thousands of these networks together and you get the internet: **a network of networks**.

An analogy helps:

| Road analogy | The real thing |
|---|---|
| Your driveway | Your home network |
| Local streets | Your internet provider |
| Highways between cities | Big carriers' long-distance networks |
| Shipping lanes | Undersea cables |

### Is the internet the same as the web?

No. The internet is the roads. The web, meaning all the pages you open in a browser, is one kind of traffic on those roads. Email is another. So are video calls, games and streaming ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)).

The web was proposed in 1989 by Tim Berners-Lee at CERN, the physics lab in Switzerland. By then the roads were already about twenty years old.

They started in 1969 with a research network called ARPANET. On October 29 that year, a student programmer in professor Leonard Kleinrock's lab at UCLA tried to log in to a computer at the Stanford Research Institute. The "L" got through. Then the "O." Then the system crashed. So the first message ever sent on the internet's ancestor was "LO" ([Kleinrock's own account](https://www.lk.cs.ucla.edu/internet_first_words.html)).

The roads only work because everyone follows the same traffic rules. In networking, those rules are called **protocols**, and the two you'll hear about most are **TCP** and **IP**. Hold on to those. They're coming back.

## How does your phone find the right computer?

Every device on the internet gets an **IP address**, a kind of street address for a computer. The common kind looks like four numbers separated by dots, such as 203.0.113.7 (an example address).

Your phone doesn't pick its own address. When it joins a network, like your home Wi-Fi, it gets one handed to it automatically. Join a coffee shop's Wi-Fi and it gets a different one.

### Why did the internet run out of addresses?

The original version, IPv4, uses 32-bit addresses, which leaves room for about **4.3 billion** of them (2³² = 4,294,967,296). That sounds like a lot until you remember there are more than 8 billion people on Earth: roughly one address for every two people, before you count phones, laptops and smart TVs.

The central supply of IPv4 addresses ran out in **February 2011**, when the global pool run by IANA was used up ([ARIN](https://www.arin.net/blog/2011/02/03/iana-ipv4-free-pool-depletion)). The newer version, **IPv6**, uses 128-bit addresses: room for a number that's 39 digits long. That should last a while.

## How does DNS work?

You never type those numbers. You type a name. So something has to translate the name into the number, and that something is **DNS**, the Domain Name System.

The easiest way to picture it is your phone's contacts app. You tap "Mom" and your phone knows her actual number, so you never have to. DNS does that for the whole internet.

When DNS doesn't already know the answer, it looks it up in steps:

| Step | Who's asked | What they answer |
|---|---|---|
| 1 | A lookup server (resolver), often run by your internet provider | "I haven't seen that name recently, let me ask the top" |
| 2 | A root server | "I don't know the address, but here's who handles names ending in .com" |
| 3 | The .com servers | "Here's the website's own name server" |
| 4 | The website's name server | "Here's the number" |

Then the answer is **remembered for a while** (cached). The next time anyone using that same lookup server asks for the name, there's no trip to the top at all.

The top is smaller than you'd think. There are just **13 named root servers, run by 12 organizations**. But each one is copied many times, so there are more than **1,700 copies** around the world ([root-servers.org](https://root-servers.org/)).

Now your phone has the address and can send its request. Except it doesn't send it in one piece.

## What is a packet in networking?

When data travels across the internet, it's split into small chunks called **packets**. On most networks, each one carries at most about **1,500 bytes**. That's tiny: a single 3-megabyte photo becomes roughly **two thousand packets**.

Every packet gets a label, like an envelope: where it's from, where it's going, and a number saying which piece of the whole it is. Picture mailing a jigsaw puzzle to a friend, one piece per envelope, with every envelope numbered.

### What does a router do?

At every junction there's a **router**, a sorting station. It reads the address on each packet and sends it to the next router that's closer to the destination. That's all it does. No single router knows the whole route. Each one just knows which way is closer.

Every packet also carries a little countdown called its **time to live**. Each router it passes through knocks one off, and if it ever hits zero, the packet is thrown away. Think of it as a self-destruct counter, so a lost packet can't wander around the internet forever. (It counts hops, not seconds.)

### Why do packets arrive out of order?

Pieces of the same message can take different paths, so they can arrive out of order. That's fine, because of the numbers. Remember **TCP**? It's the rule that puts the pieces back in order at the other end. If a piece goes missing, TCP notices the gap and gets that piece sent again.

### Why chop everything up at all?

- **Sharing:** everyone can use the same roads at once.
- **Resilience:** if one road is blocked, packets can route around it.
- **Efficiency:** lose one piece and you resend only that piece, not the whole thing.

That has been the design since ARPANET, one of the first networks built this way.

## How does the internet work physically?

Wi-Fi is radio, but it usually covers only the first stretch, from your phone to your router. After that your packets mostly ride through cables.

The long-distance cables are made of glass: **fiber optic cable**. Your data becomes flashes of light racing down a strand of glass about as thin as a human hair. Light in glass travels at about two-thirds of its speed in empty space, which is still around **200,000 kilometers per second**.

The light stays inside the strand because of a neat trick. The glass at the center bends light more than the layer wrapped around it, so the light keeps reflecting off that boundary, trapped inside, kilometer after kilometer. (Physicists call it total internal reflection.)

## How does the internet work across the ocean?

Through cables on the sea floor. According to the International Telecommunication Union, **more than 99% of international data** travels through undersea cables, not satellites ([ITU, February 2026](https://www.itu.int/en/mediacentre/Pages/PR-2026-02-03-Porto-Submarine-Cable-Resilience-Summit.aspx)).

They aren't huge. In the deep ocean, a typical cable is about **as wide as a garden hose**. And there are more than **1.5 million kilometers** of them ([TeleGeography](https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions)), enough to wrap around the Earth more than 37 times.

Light fades over distances like that, so every few dozen kilometers there's a **repeater**, a sealed box on the sea floor that boosts the signal. The cable carries electricity too, just to power them.

### How fast is data across the Atlantic?

Let's time a trip from New York to London:

| Measure | Value |
|---|---|
| Straight-line distance | about 5,570 km |
| Fastest possible one-way trip through glass | about 28 milliseconds (5,570 km ÷ 200,000 km/s) |
| Real measured round trip, there and back | about 70 milliseconds (Verizon, September 2026) |
| One blink of an eye | at least 100 milliseconds |

The real trip takes longer than the physics floor because real cables take longer routes and the equipment adds time. Even so, your message crosses an ocean and comes back before your eyes finish closing.

If you play games online, you've seen this number. It's your **ping**: the round trip to the game server, measured in milliseconds (thousandths of a second). That's why distance matters for games. A faster internet plan lets more data through at once, but it doesn't make the ocean any shorter.

Often your packets don't even go that far. Big sites keep copies of their pages and videos in buildings close to you, called a **CDN** (content delivery network). Same content, shorter trip.

## What happens when an undersea cable breaks?

Cables do break. The industry counts roughly **200 undersea cable faults a year**, nearly four a week, and most are accidents, like fishing gear or a ship dragging its anchor.

That's just under the sea. Cloudflare, an internet infrastructure company, counted **49 internet disruptions** around the world between July and September 2026, about one every two days. The top two causes were governments switching the internet off on purpose, and power outages ([Cloudflare Q3 2026 report](https://blog.cloudflare.com/q3-2026-internet-disruption-summary/)).

But when a cable breaks, traffic usually gets rerouted over other cables while it's repaired. Remember the routers? When one road closes, packets can go another way. It's the same trick from 1969.

## The whole trip, in six steps

1. **You tap** a link.
2. **DNS** turns the site's name into an IP address.
3. Your request leaves as **numbered packets**.
4. **Routers** pass each packet one hop closer.
5. **Light in glass** carries them, maybe under an ocean.
6. The replies arrive, **TCP** snaps them back into order, and the page appears.

So the internet isn't a cloud. It's roads, rules and light in glass, and it works because nobody has to know the whole route.

What happens once the page reaches you is its own story: the feed you scroll is ranked by prediction, as we explain in [how the YouTube algorithm works](../how-does-the-youtube-algorithm-work/). And chatbots are prediction machines too: see [how ChatGPT works](../how-does-chatgpt-work/). More explainers like this are in [The Internet & You](../topics/internet-and-you/).
