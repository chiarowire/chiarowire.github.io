---
title: "How Does ChatGPT Work? The Next-Word Trick, Explained"
description: "ChatGPT writes by predicting the next word, one token at a time. How LLMs learn, how they write, and why they sometimes make things up."
slug: how-does-chatgpt-work
pubDate: 2026-11-04
cluster: ai-explained
youtubeId: rr8j4zXHk8E
videoTitle: "How ChatGPT Really Works: It Guesses the Next Word"
videoUploadDate: 2026-10-03T02:08:59Z
videoDuration: PT10M55S
keywords:
  - how does chatgpt work
  - how do large language models work
  - what is a token in ai
  - how does chatgpt generate answers
  - why does ai hallucinate
  - what is a context window
draft: false
---

How does ChatGPT work? It does one simple job over and over: it predicts the next word (technically the next *token*, a chunk of text), adds it to the reply and predicts again. It learned to do that by playing a guessing game with an enormous amount of text, and then people trained it to act like a helpful assistant.

That one idea explains almost everything about chatbots: why they're so fluent, why the reply appears piece by piece, why you can get two different answers to the same question, and why they sometimes state wrong things with total confidence. Let's walk through it, step by step.

## What is a large language model?

"AI" is a huge umbrella. It covers any computer system built to do things we'd normally call smart: recognizing a face, translating a sentence, recommending your next song.

Inside that umbrella sit three smaller circles, one inside the other:

- **Machine learning.** Instead of a programmer writing every rule by hand, the system learns patterns from examples (data). Show it enough examples and it starts making good guesses about things it has never seen.
- **Deep learning.** Machine learning built on large, layered networks of simple math operations. They're loosely inspired by how neurons connect in the brain. Loosely: it's math, not a brain.
- **Large language models (LLMs).** Deep learning models trained on an enormous amount of text so they can read and write language.

ChatGPT, Claude and Gemini, the chatbots you've heard of, are all built on large language models. (For a recent example, see Anthropic's [Claude Fable 5.2](../claude-fable-5-2/) launch.) So when someone says "AI" today, they usually mean that small inner circle. The chatbot is just one very loud part of a much bigger field.

## What is a token in AI?

A language model doesn't read words the way you do. It reads **tokens**.

A token is a chunk of text. Sometimes it's a whole word, sometimes part of a word, sometimes a single character or a bit of punctuation. As a rule of thumb, one token is about three to four characters of English. Anthropic's documentation puts it at roughly 3.5 characters; Google's Gemini docs say about 4. So a short, common word is often one token, while a long or unusual word gets split into several.

Tokens matter because everything a model does is counted in them: what it reads, what it writes, and how much of a conversation it can hold in view at once.

## How does ChatGPT learn?

Here's the training trick, and it's surprisingly simple.

Take a huge pile of text (books, articles, websites, code) and play a guessing game with it. Hide the next word. Ask the model to guess it. Then show it the real answer.

If the guess was wrong, nudge the model's internal settings a tiny bit, so next time it's slightly more likely to be right. Then do it again. And again. Billions and billions of times. This first stage is called **pretraining**.

Those internal settings are called **parameters**. Picture them as millions, or billions, of little dials. Training is the slow process of turning all those dials until the model gets very good at guessing what comes next.

The scale is wild. In 2020, OpenAI described a model called GPT-3 with **175 billion parameters** ([GPT-3 paper](https://arxiv.org/abs/2005.14165)). That's 175 billion dials, all tuned by one guessing game.

## What is a transformer, and what does the "T" in GPT mean?

Why did this suddenly start working so well? A big part of the answer is a design called the **Transformer**. Google researchers introduced it in 2017 in a paper called "[Attention Is All You Need](https://arxiv.org/abs/1706.03762)."

Its clever part is **attention**. When the model looks at a word, attention lets it weigh every other word around it and decide which ones matter most for understanding it. Take this example sentence: "The cat didn't cross the road because it was tired." Attention is how a model can learn that "it" most likely means the cat, not the road.

That idea made language models much better at following context. And the "T" in GPT? It stands for Transformer (Generative Pre-trained Transformer).

## How does ChatGPT generate answers?

When you type a question, the model reads your message as tokens and predicts the next token. Just one.

But it doesn't produce a single answer. It produces a list of possible next tokens, each with a probability. Imagine you type "The sky is…". The model might rate "blue" as very likely, "clear" as fairly likely and "purple" as unlikely. (Those are illustrative, not real numbers.)

Then:

1. **Predict:** score every possible next token.
2. **Pick:** choose one of them.
3. **Add:** append it to the text, and go back to step 1.

Predict, pick, add, word by word, until the answer is done. That's why chatbots seem to "type" their replies in pieces. It isn't just an animation. The answer really is being built one token at a time.

### Why do you get different answers to the same question?

The model doesn't always pick the single most likely token. A setting called **temperature** controls how much randomness goes into the choice.

| Temperature | What it does | Feels like |
|---|---|---|
| Lower | Sticks closer to the most likely tokens | Safer, more predictable answers |
| Higher | Gives less likely tokens more of a chance | More variety, and sometimes more surprises |

Because of that built-in randomness, you can ask the same question twice and get two slightly different answers.

## How did a text predictor become a chatbot?

A model trained only on the guessing game, a **pretrained model**, isn't naturally good at answering questions or following instructions. It just continues text.

So companies add a second stage of training. People write example conversations showing how a good assistant should respond. Then people rank different answers from best to worst, and the model is trained to prefer the kinds of answers people ranked higher. That's called **reinforcement learning from human feedback (RLHF)**.

OpenAI used this kind of approach for ChatGPT, which launched as a free research preview on **November 30, 2022**. That means ChatGPT turns four on November 30, 2026.

### Training vs. using: does it learn while you chat?

Two words are worth keeping apart:

| | Training | Using |
|---|---|---|
| What happens | The model is built: all that guessing, all those dials turned | The model runs its predictions on your message |
| How often | A huge, expensive process done ahead of time | Every time you send a message |
| Are the dials changing? | Yes | No, they're already set |

When you chat with one of these models, you aren't teaching it in real time the way a person learns from a conversation. You're using a model that was already trained.

## How does ChatGPT remember what you said?

If the dials don't change while you chat, how does it remember what you said three messages ago? The answer is the **context window**.

Think of it as the model's short-term, working memory. Everything in your current conversation gets fed back in as tokens, so the model can "see" it while predicting the next word. But that memory has a limit. Go past it, and the earliest parts of a very long conversation can fall out of view.

### Why doesn't it know about recent events?

A model learns from data collected up to a certain date, so its knowledge has a **cutoff**. AI companies publish these dates for their models. Ask about something that happened after the cutoff, and the model simply wasn't trained on it.

That's why many chatbots now connect to web search. Instead of relying only on what it learned in training, the model pulls in fresh information, puts it into its context window and writes an answer from that, often with links you can check.

## Why does ChatGPT make things up?

You may have seen it happen: a confident, detailed, perfectly written answer that's just wrong. A made-up fact. A book that doesn't exist. A quote nobody said. This is called a **hallucination**: the model generates false or misleading information that sounds completely plausible.

Once you know how these models work, it makes sense. The model's whole job is to produce text that sounds likely. Most of the time, likely and true line up. But not always, and the model has no built-in alarm that goes off when it's unsure.

In September 2025, OpenAI published research arguing that part of the problem is how models are trained and tested: standard procedures reward guessing over admitting uncertainty ([OpenAI: Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/)).

Think of a multiple-choice test where a blank answer scores zero. If you don't know, guessing is the smart move, because you might get lucky. The researchers argue that many AI benchmarks work the same way, so a model that guesses confidently can look better on the scoreboard than a careful one that says "I don't know." Their suggestion is to change the scoring so models stop being punished for expressing uncertainty.

The takeaway: hallucinations aren't a weird glitch that's about to vanish. They come from how these systems are built and graded. For now, it's on us to use them wisely.

## How to use AI chatbots well

Here's our take: four simple habits.

1. **Treat it like a brilliant writer, not a perfect encyclopedia.** It's great at drafting, explaining, summarizing and brainstorming. It isn't a guaranteed source of facts.
2. **Check anything that matters.** Names, numbers, dates, quotes, and anything medical, legal or financial. If it's important, verify it with a real source.
3. **Ask it to show its work.** Ask where a claim comes from and to say when it isn't sure. Then actually check those sources yourself.
4. **Remember what it is.** A system that predicts the next word, trained on a huge amount of text and fine-tuned by people to be helpful. Not magic. Not a mind. A very, very good pattern machine.

Prediction turns out to be a theme in modern tech. The feeds you scroll run on it too: see [how the YouTube algorithm works](../how-does-the-youtube-algorithm-work/), where the "score" on every video is really a bet on what you'll do next. And if you want to know how your question physically reaches a chatbot's servers, read [how the internet works](../how-does-the-internet-work/). Some of this is starting to run on your own computer instead: Apple's new [M6 MacBook Pro and iMac](../m6-macbook-pro-imac/) are pitched on faster on-device AI. And Apple's Siri AI, which leans on Apple's servers in a similar way, [no longer makes most people wait in a queue](../siri-ai-waitlist/).

## The short version

- ChatGPT is built on a **large language model**: deep learning trained on a huge amount of text.
- It reads and writes in **tokens**, chunks of about 3 to 4 characters.
- It learned by **guessing the next word** billions of times, tuning billions of **parameters**.
- The **Transformer** and its **attention** mechanism (2017) made that work at scale.
- It writes by **predict, pick, add**, with **temperature** adding controlled randomness.
- **RLHF** turned a text-continuer into a helpful assistant.
- It remembers through its **context window**, and its knowledge stops at a **cutoff** unless it searches the web.
- It **hallucinates** because sounding likely isn't the same as being true.

More explainers like this live in [AI Explained](../topics/ai-explained/).

### Sources

Key sources for this post: [GPT-3 paper (2020)](https://arxiv.org/abs/2005.14165), ["Attention Is All You Need" (2017)](https://arxiv.org/abs/1706.03762), [InstructGPT paper (RLHF)](https://arxiv.org/abs/2203.02155), [Anthropic glossary](https://platform.claude.com/docs/en/about-claude/glossary), [Google Gemini token docs](https://ai.google.dev/gemini-api/docs/tokens), [OpenAI's ChatGPT launch post (archived)](https://web.archive.org/web/20221202010338/https://openai.com/blog/chatgpt/), and [OpenAI's hallucination research (Sept 2025)](https://openai.com/index/why-language-models-hallucinate/).
