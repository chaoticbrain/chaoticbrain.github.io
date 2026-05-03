---
title: "In the Age of AI, the Code Review Is Your Signature"
description: "Even when AI is very good at creating code, the ownership and responsibility still belong to the engineer."
pubDate: "May 3 2026"
tags: [ "AI", "workflow", "code review", "software engineering" ]
---

## In the Age of AI, the Code Review Is Your Signature

Maybe in the no-so-distant future AI development will have matured enough to not need oversight, 
but that is not today, not yet.

* AI has become excellent at creating code quickly.
* AI was trained on a lot of slop code.
* Healthcare, Banking, Aerospace, and other high-risk businesses cannot afford vibe code.
* AI assistance is not going away.
* AI should be the assistant, not the owner.
* Software Engineers need to understand the code - do not assume AI created the right code.
* If you cannot understand the code, you cannot trust the code.
* The Software Engineer is accountable.
* Code Reviews are even more essential now than ever.
* Do not offload your cognitive abilities to AI.

---

### AI has become excellent at creating code quickly.

The productivity gains from AI coding assistants are real and measurable.
What once took an engineer days — scaffolding a new service, wiring up an API integration, writing boilerplate — can now
be done in an afternoon. Tools like GitHub Copilot, Cursor, and Claude can generate code faster than most engineers can
type. This speed is genuinely valuable, and the engineers embracing it are shipping faster than those ignoring it.

### AI was trained on a lot of slop code.

But speed has a cost. AI models learn by ingesting massive amounts of publicly available code — and the public internet
is not a curated library of best practices. It is full of half-baked Stack Overflow answers that solve the immediate
problem but ignore edge cases, tutorials that skip error handling for brevity, legacy codebases held together with
string and hope, and millions of incomplete personal project repos from GitHub, Bitbucket, etc. When an AI generates
code, it is drawing from that same pool. The result is often code that looks reasonable on the surface but lacks overall
architecture, or skips edge cases, or has duplicated code for no reason, etc. YouTube is filled with videos of people
vibe-coding whole games and when they show the code, it is chaos in code, and there are multiple articles about AI being
the fault of large issues like AWS outages.

Do not get me wrong. AI can create well-architected, secure, reliable software. Newer models and tools are getting
better literally daily, and we are learning to create skills and workflows that don't just one-shot code, but go through
iterative reviews within the AI to generate better code. The latest Mythos model from Anthropic is supposedly "too good
to release" and has found dozens of hundreds day bugs in existing code bases like Firefox, but we have been told this
before (GPT 2.0). I have a lot more trust in Anthropic than OpenAI, but we should still have the mindset of "Trust but
verify."

### Healthcare, Banking, Aerospace, and other high-risk businesses cannot afford vibe code.

In domains where software failure carries real-world consequences, "vibe coding" is not acceptable. A miscalculation in
a dosing algorithm, a race condition in a payment ledger, an authentication bypass in a claims processing system — these
are not bugs you fix in the next sprint. They are incidents that harm patients, trigger regulatory investigations, and
erode the trust that institutions spend decades building. The tolerance for hidden technical debt in high-stakes systems
should be near zero, which means the bar for what gets merged must be higher, not lower, precisely because the tools
generating that code have gotten faster.

### AI assistance is not going away.

None of this means organizations should ban AI tools or try to wall themselves off from the shift. That ship has sailed.
The productivity delta between engineers who use AI assistance and engineers who do not is already massive and it will
only grow. Businesses and engineers that ignore these tools will find themselves at a structural disadvantage. The
question is not whether to use AI — it is how to use it responsibly.

### AI should be the assistant, not the owner.

AI is a powerful assistant — one that can draft, suggest, accelerate, and implement. But AI output is not a finished
product, we should not trust it blindly. When engineers treat AI output as a replacement for their own judgment rather
than raw material to be evaluated and understood, they have inverted the relationship in a dangerous way. The engineer
must remain the owner. The AI is a very fast, often brilliant, frequently overconfident partner who needs supervision.

### Software Engineers need to understand the code - do not assume the AI created the right code

This is an uncomfortable truth that the current wave of AI enthusiasm tends to paper over. If you accept a block of
AI-generated code without being able to read it critically — if you do not understand why each line is there, what it
does — then you have not written software. You have copy-pastad software and are hoping for the best. That is no
different from blindly copying snippets of code from StackOverflow without understanding it. Engineers who lean on AI
without understanding the output are not becoming more productive; they are accumulating risk. Craft still matters.
Fundamentals still matter. The engineer who understands what the code is doing will always be better positioned to catch
what the AI got wrong.

### If you cannot understand the code, you cannot trust the code.

Trust in software is earned through comprehension. We must be able to trace the logic, reason about the failure modes,
verify that the implementation matches the architecture. Then, trust is grounded in evidence. When code is merged
because it looked fine and the tests passed, that is not trust; that is YOLO, and in high-stakes systems, YOLO is a
liability.

### The Software Engineer is accountable.

Software running in systems that affect people's health, finances, safety, or legal standing carries risks that cannot
be compromised. If things go wrong, it will not be an AI agent sitting in a courtroom. The AI will never take
responsibility for the output and I highly doubt that AI companies will offer indemnification to engineers who use it.
The engineer who merges the code is the human supervisor AI requires — and if it fails, they answer for it, not the AI
that wrote it.

### Code Reviews are even more essential now than ever.

That oversight lives in the code review. It is the last line of defense before code goes to production. With AI
assistance, that defense is even more critical — because the volume of code being generated has increased dramatically.
A rigorous review process is not friction. It is the mechanism we can use to ensure that speed does not come at the
expense of correctness, security, and maintainability. Engineers who skip reviews to move faster are not actually moving
faster; they are deferring the cost to a later, much more expensive moment.

### Do not offload your cognitive abilities to AI.

Studies are already showing that humans think differently — more shallowly, less critically, when AI is in the loop.
Cognitive offloading is real, and it is happening now.

The path of least resistance is to ask, accept, paste, and move on. But every time you do that without truly
understanding what you accepted, you are trading expertise for speed and offloading risk onto something that will never
be held accountable for the outcome.

Use AI. Use it aggressively. The speed advantage is real and it compounds. But keep it in its lane: the rubber duck, the
first draft, the assistant. Not the decision-maker. Not the SME. Not the engineer.

The authority is yours, as is the accountability. Own both.

#### References

[AI Coding Assistants Are Getting Worse](https://spectrum.ieee.org/ai-coding-degrades)

[AI-Authored code contains worse bugs than software crafted by humans](https://www.theregister.com/2025/12/17/ai_code_bugs/)

[When Is Technology Too Dangerous to Release to the Public?](https://slate.com/technology/2019/02/openai-gpt2-text-generating-algorithm-ai-dangerous.html)

[AI Security Zero Day Vulnerabilities are numbered](https://blog.mozilla.org/en/privacy-security/ai-security-zero-day-vulnerabilities/)

[Amazon’s cloud hit by two outages caused by AI tools last year](https://www.theguardian.com/technology/2026/feb/20/amazon-cloud-outages-ai-tools-amazon-web-services-aws)

[Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task](https://arxiv.org/pdf/2506.08872v1)

[Thinking—Fast, Slow, and Artificial: How AI is Reshaping Human Reasoning and the Rise of Cognitive Surrender](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6097646)

[Building Pi in a world of slop](https://www.youtube.com/watch?v=RjfbvDXpFls) **language warning**

