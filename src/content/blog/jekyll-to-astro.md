---
title: "From Jekyll to Astro - Modernizing Chaotic Brain"
description: "Ten years after setting up this blog on Jekyll, I finally got around to rebuilding it. Ruby rot, dead dependencies, and a more modern path forward with Astro."
pubDate: "Mar 08 2026"
tags: ["astro", "jekyll", "workflow", "github-pages"]
---

## Ten Years Later

If you read my [first post](/blog/getting-the-ball-rolling), you'll know that setting up the original Jekyll blog was already more work than it should have been. That was 2015. Fast forward to 2026 and I finally got the itch to update things — and walked right into the same kind of mess, just with older dust on it.

## The Problem with Jekyll in 2026

Jekyll is a Ruby project. That used to be fine. Ruby on Rails was everywhere, Ruby developers were everywhere, and the tooling was solid. That world has mostly moved on.

I don't write Ruby day-to-day anymore. Honestly I haven't in years. That means every time I touch a Ruby project I'm re-learning the gem ecosystem, fighting version managers, and debugging things that have nothing to do with what I actually want to accomplish.

Trying to spin up the old site to work on it locally was a good illustration of the problem. The dependencies had rotted. The `github-pages` gem pins to specific versions of Jekyll and its plugins, and those pins don't always survive a decade of Ruby releases. After fighting version conflicts for a while I had to ask myself: is this worth fixing, or should I just start over?

## GitHub Pages Has Moved On Too

The other nudge came from GitHub itself. The old "deploy from branch" model — where GitHub Pages would run Jekyll directly on your repository and build the site for you — is still supported, but it's increasingly the legacy path. GitHub now steers you toward GitHub Actions for deployment, which gives you a proper build step and removes the constraint of having to use whatever Jekyll version GitHub Pages happens to support.

That's actually a meaningful change. With Actions you're not tied to any particular static site generator. GitHub builds whatever you tell it to build.

## Enter Astro

I'd been hearing good things about [Astro](https://astro.build) for a while. It's a modern static site generator built on Node.js, designed specifically for content-focused sites. A few things appealed to me:

- **No Ruby.** I write JavaScript and Python day-to-day. The Node.js toolchain is something I actually use.
- **Fast builds.** Astro ships zero JavaScript to the browser by default and only hydrates components that actually need it.
- **Content collections.** Blog posts are Markdown files with typed frontmatter — Astro validates the schema at build time, so you catch problems before deployment rather than after.
- **Template ecosystem.** There are solid starter templates that get you to a working site in minutes, not hours.

I ended up using [Astrofy](https://github.com/manuelernestog/astrofy) as a starting point — it had a portfolio section, blog, and sidebar layout that fit what I wanted without a lot of customization. Tailwind CSS and DaisyUI handle the styling, which are tools I'm comfortable with.

## What the Migration Looked Like

The old site had three blog posts and a handful of pages. Migrating the posts was straightforward — mostly frontmatter cleanup:

- Rename `date` to `pubDate`
- Convert `tags: git svn workflow` (space-separated string) to `tags: ["git", "svn", "workflow"]` (proper YAML array)
- Drop `layout: post` — Astro doesn't use it
- Add a `description` field, which Jekyll didn't require

The post body content transferred over without changes. Markdown is Markdown.

Deployment is now a GitHub Actions workflow: push to `main`, the workflow runs `npm run build`, and the output gets deployed to GitHub Pages. Clean, reproducible, and not dependent on whatever runtime GitHub decides to use on their end.

## Was It Worth It?

Yeah. The site builds in about a second locally, the toolchain is stuff I actually know, and I'm not going to dread touching it the next time I want to add something.

The lesson, as usual, is that the cost of maintenance compounds quietly over time. The right time to deal with it is before you actually need to — but the second best time is when you get fed up enough to actually do it.

Now what do I do with it? Probably the same thing I was going to do in 2015. We'll see.
