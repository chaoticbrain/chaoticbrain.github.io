---
title: "Do you really use Git?"
description: "Why you should treat git as a diary of your thoughts on the work you are doing"
pubDate: "Mar 29 2026"
tags: [ "git", "workflow" ]
---

### How many of us actually use source control?

What does it mean to actually use source control?

For a lot of developers, source control (git from here on out) is seen mostly as a bureaucratic tool used to move code
from the developer's workstation up to the server for deployment. They learned the bare minimum needed to check the box
and follow the process.

If this is how you think, if this is how you are working. You are missing most of the value of Git.
You are going through the motions sure, but you are not actually using it.
If your git commit message history is full of "Fixed bugs", "added functionality", "Fixes #231412", then you are not
actually using git. And you are doing yourself and your coworkers disfavor.
If you are actually using Git: Git becomes a debugger, Git becomes a diary, Git becomes a story. But to use it as
these things, we need to write GOOD commit messages.

### So, what is a good commit message?

#### Say what needs to be said

I do not know where the idea that git commit messages should be short came from, but it should be considered an
antipattern. Messages do not always need to be long, but there is not a limit on how long they can be, so they should
be as long as they need to be.

#### Say Why, not What

Treat Git as if it is a team member, and you are telling them why you made the changes you made. What was your thought
process on how you came to this change? What was the challenge you faced? What was the problem? These things are
important in the long run to understand the why of the code. The diffs say what changed and how, so you do not need to
repeat that.

This means you probably cannot use AI to generate a good commit. AI does not know your thoughts, it does not know why
you made these changes, just what was changed. So AI will generate a well-formated commit that repeats what without
the why. It will look nice, It will look useful, but the value add will be fairly low.
Include citations

#### Include Citations

When appropriate, include citations in your message. If you discovered the solution from stack overflow, add the link.
Or add the link to documentation etc. If you are doing performance improvements, add the performance data.

#### Link to your work item

Most git hosting services like GitHub or Azure DevOps support using `#<Work Item Number>` to create links between a
commit and a work item. Your commit message should include the work item number.
In general, the teams I worked on have put the work item number at the beginning of the subject line.

eg:
```markdown
#123456 fix authentication failure when using Azure AD
When you attempted to log in to the app using firefox......
...
```

#### Be human

Git commit messages are meant to be read by humans, so be human. Include your frustrations and your epiphanies. Yes, I
know this sounds weird, but a year from now, when you are trying to figure out what is going on and why, those will
matter and will actually help.

#### Commit message, not code comment

Code changes over time, but code comments have a habit of not changing. In my experience, It ends up being more helpful
to put my comments about the code into the Git commit message and not the code. I do not trust comments in code because
too often, the comment is out of date with the code.

Commit messages are temporally-linked to code, so the comment is always valid because you look at it in the context of
the code at the time it was written.

#### Markdown works

Again, GitHub / Azure DevOps and others support rendering of Markdown within a commit message when viewed within the 
system. Even when viewing outside the host app, Markdown is still a human-readable format that ensures some structure 
to the message. Use it.

#### Use a dedicated tool

These days, every IDE has a built Git functionality. I have yet to find one that does not suck. The built-in tools let
you "check the box" but rarely help you leverage Git to its full potential. They also have a habit of artificially
limiting how long a commit message should be.

Instead of using the IDE, use a dedicated UI such as [Git Kraken](https://www.gitkraken.com), 
[SourceTree](https://www.sourcetreeapp.com), or [Fork](https://git-fork.com). These tools let you explore the
full history of the repo, search, read commit messages, and view the source diffs. Trying to do this with an IDE alone is
often not enough. I also find that "context switching" from developing to reviewing using a dedicated tool helps me 
re-review my code before I commit.

Personal preference: I use [Fork](https://git-fork.com) for all my work. It is a great tool, and worth the money.

#### Commit often

Even I forget this one sometimes. It is good practice to commit small, self-contained changes often instead of
committing a whole feature at a time. Doing this has multiple benefits: 
It forces you to work on small, self-contained changes. It lets you roll back to earlier versions when you realize you 
were going down a wrong path but do not want to completely reset. 

There is no such thing as too many commits, but there is such a thing as too few.

#### Do not squash (Controversial personal opinion)

This one is more of a personal opinion than the rest of these points. Many developers and teams would rather have a
pretty, straight railroad track than show the true history of how the code changed. So they squash commits on merge.
My personal opinion is that this also squashes some value of Git and definitely squashes the value of my advice
above. So, on my teams, I advocate that we do not squash commits. We let history be history, even when it is messy and
verbose.

### An Example:

Which of these messages is more useful:
#### Option 1:
```
Fix Bug
Fixed bug when chat loaded
```

#### Option 2:
```
#12321 fix issue where invoke was not executing on entry of the first chat

I hate React's "double load" in dev. It has caused more issues than it has fixed.

The initial state of Conversation was invalid. We were setting uuid and
abortcontroller to null. This was not noticed during development because React's
load-unload-load in dev was causing us to always go through the "resetChat"
action which would reset those to valid values.

In production (and test and stage) this reload is not happening, so the bug was exposed.

The solution is that the initial state should ALWAYS be valid.
```

I bet most people will say `Option 2`.  (Yes, this is a real comic message by me). You do not need the code to figure out
what I was working on, and WHY I made the change I did. It is a window into my thought process at the time I was fixing
the bug.

Over time, writing messages like this ends up building a story of why the code changed. Of the obsticals and
frustrations found while developing it. The lessons learned.

When you are next facing a bug, If you actually use git, it adds a layer of thought-debugging to the flow. It allows you
to go back through time and remember the why of a decision. Doing this helps speed up finding the solution to the bug
and not repeating the same mistakes of the past.

### Additional reading and opinions
* https://medium.com/compass-true-north/writing-good-commit-messages-fc33af9d6321
* https://chris.beams.io/git-commit#seven-rules
