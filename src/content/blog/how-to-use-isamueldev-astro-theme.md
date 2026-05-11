---
title: "I Built a Full Astro Blog Theme from Scratch on Mobile — Here's How to Use It"
description: "No laptop, no terminal, no tutorial. Just GitHub's browser interface, Vercel, and a clear idea of what a modern blog should look like. Here's the complete setup guide."
date: 2026-05-11
tags: ["astro", "web dev", "open source", "blogging"]
author: "iSamuel"
featured: true
cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop"
---

## Overview 

Let me be upfront about something before we get into the setup.

I built this theme entirely on my phone. No laptop. No VS Code. No terminal window open on a second monitor. Every single file in this repo was created through GitHub's browser interface, committed one by one, and deployed automatically through Vercel.

I'm a Physics and Electronics student. I run [ReviByte](https://revibyte.blog) as a solo operation. I built this theme because after months of working inside AstroPaper, I understood enough of how Astro actually works to stop customizing someone else's code and start writing my own.

This is that code. And this is how you set it up.

---

## What You're Actually Getting

Before I walk you through the setup, you need to understand what this theme is and what it isn't.

It is not a multipurpose theme. It doesn't have an e-commerce section, a portfolio grid, or a SaaS landing page. It's a blog theme — built specifically for people who write, publish, and want their content to load fast and rank well on Google.

Here's what's inside:

**Pages that are already built:**
- Homepage with a full-width hero post and a recent posts grid below it
- Blog list page at `/blog/`
- Individual post page at `/blog/[slug]/`
- Tags index at `/tags/` and individual tag pages at `/tags/[tag]/`
- Author page at `/author/`
- About, Contact, Privacy Policy, Terms and Conditions, Disclaimer
- Custom 404 page
- Offline page for when the PWA loses connection

**Features on every post:**
- Reading time calculated from actual word count
- Table of contents generated from your H2 and H3 headings — only appears when a post has three or more headings, so short posts stay clean
- Share buttons for Twitter/X, WhatsApp, and copy link — positioned above the cover image so readers see them before they start reading
- Related posts matched automatically by shared tags
- Breadcrumb trail with JSON-LD schema so Google shows your breadcrumbs in search results
- Back to top floating button that appears after 400px of scroll

**What's handled automatically:**
- Sitemap at `/sitemap.xml` — updates every time you publish a post
- RSS feed at `/rss.xml` — same
- Search index at `/search-index.json` — powers the live search in the header
- OG tags and Twitter cards on every page
- Canonical URLs
- robots.txt pointing to your sitemaps

---

## Prerequisites

You need three things:

1. A GitHub account
2. A Vercel account connected to that GitHub account
3. Your content ready to write

That's it. You don't need Node.js installed locally. You don't need npm. You don't need a code editor. Everything runs through GitHub's browser interface and Vercel's build system — exactly how I built it.

---

## Step One: Fork the Repository

Go to:

👉 [github.com/bytecascade11/isamueldev](https://github.com/bytecascade11/isamueldev)

Tap **Fork** in the top right. GitHub will create a copy of the entire repo under your account. Name it whatever you want — the name becomes your repo URL but doesn't affect your actual site URL.

---

## Step Two: Connect to Vercel

Go to [vercel.com](https://vercel.com) and sign in with GitHub.

Tap **Add New Project** → **Import Git Repository** → find your forked repo → tap **Import**.

On the configuration screen, leave everything as default. Vercel detects Astro automatically and knows exactly how to build it. Tap **Deploy**.

Your site will be live at `your-repo-name.vercel.app` within about 90 seconds. Every time you push a commit to your main branch from now on, Vercel rebuilds and redeploys automatically. You never need to touch Vercel again unless you want to add a custom domain.

---

## Step Three: Configure Your Site

This is the most important step. Open `src/config.ts` in your forked repo on GitHub and tap the pencil icon to edit it.

```ts
export const SITE = {
  name: "YourBlog",
  tagline: "Your blog tagline here.",
  url: "https://your-vercel-url.vercel.app",
  description: "Your site description for SEO.",
  author: "Your Name",
  email: "you@email.com",

  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Tags", href: "/tags/" },
    { label: "About", href: "/about/" },
  ],

  socials: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    whatsapp: "",
    instagram: "",
  },

  ogImage: "/og-default.png",
  googleVerification: "",

  postsPerPage: 6,
  showReadingTime: true,
  showTableOfContents: true,
  showRelatedPosts: true,
  showShareButtons: true,
};
```

Update every field with your real information. The `url` field must match your actual Vercel URL — this is what generates your canonical URLs, OG image URLs, sitemap URLs, and RSS feed links. If it's wrong, all of those break.

For `googleVerification`, leave it empty for now. We'll come back to it after your site is live.

Commit the file. Vercel rebuilds. Your name, tagline, and socials now appear across the entire site — header, footer, meta tags, RSS feed, everywhere.

---

## Step Four: Customize the Pages

Open `src/pages/about.astro` and replace the placeholder text with your actual about content. Same for `src/pages/contact.astro` — update the email address to yours.

For the legal pages — Privacy Policy, Terms, Disclaimer — the placeholder content is generic enough to work, but you should update them to reflect your actual site and monetization setup, especially if you run ads or affiliate links.

---

## Step Five: Write Your First Post

All posts live in `src/content/blog/`. Create a new file with a `.md` extension. The filename becomes your URL slug — so `my-first-post.md` becomes `/blog/my-first-post/`.

Every post starts with frontmatter:

```md
---
title: "Your Post Title"
description: "One or two sentences describing the post for SEO and previews."
date: 2024-01-01
tags: ["tag1", "tag2"]
author: "Your Name"
cover: "/images/your-cover.jpg"
featured: false
draft: false
---

Your content starts here.
```

A few things to know about these fields:

**`date`** must be in `YYYY-MM-DD` format. If the format is wrong the build fails.

**`featured`** — set this to `true` on one post and it becomes the hero on the homepage. Set it to `false` on everything else. If multiple posts have `featured: true`, the most recent one wins.

**`draft`** — set to `true` while you're working on a post. Draft posts don't appear anywhere on the site and aren't included in the sitemap or RSS feed. Set it to `false` when you're ready to publish.

**`cover`** — this is the image that appears at the top of the post, in the post card on the homepage and blog list, and as the OG image when the post is shared on social media. You have two options:

Local image — upload your image to `public/images/` on GitHub and reference it as `/images/filename.jpg`.

Unsplash URL — paste a direct Unsplash image URL. Add `?w=800&auto=format&fit=crop` to the end for optimized sizing.

---

## Step Six: Add Your OG Default Image

The homepage and pages without a cover image use `/og-default.png` as their OG image — the preview that shows when someone shares your site link on WhatsApp, Twitter, or anywhere else.

You need to create this image and upload it to `public/`.

Go to Canva, create a design at exactly **1200 × 630 pixels**, put your site name and tagline on it, export as PNG, name it `og-default.png`, and upload it to the `public/` folder on GitHub via **Add file → Upload files**.

Test it after uploading at [opengraph.xyz](https://opengraph.xyz) — paste your site URL and it shows exactly how your link will preview across every platform.

---

## Step Seven: Google Search Console

Once your site is live and you've published at least one real post, add it to Google Search Console.

Go to [search.google.com/search-console](https://search.google.com/search-console), add your Vercel URL as a property, choose the HTML tag verification method, copy the content value from the meta tag they give you, and paste it into `src/config.ts` under `googleVerification`.

Commit. Vercel redeploys. Go back to Search Console and tap Verify.

After verification, go to Sitemaps in the left sidebar and submit:

```
sitemap.xml
```

Google will start crawling your posts within 24 to 48 hours.

---

## Step Eight: Changing the Accent Color

The default accent color is blue — `#3b82f6`. Every interactive element uses it: links, tags, hover states, the back to top button, the search bar focus ring, share buttons.

To change it, open `tailwind.config.ts` and find the accent color object:

```ts
accent: {
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#2563eb",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a",
},
```

Replace the entire set of values with your chosen color's shades. Tailwind's color palette at [tailwindcss.com/docs/customizing-colors](https://tailwindcss.com/docs/customizing-colors) has every color with all shades ready to copy. Commit and the entire site updates.

---

## What I Didn't Include (And Why)

No comments system. Adding one means adding a third party script that slows down every page load. If you want comments, Giscus is the cleanest option — it uses GitHub Discussions and loads lazily.

No analytics script in the theme by default. Add Vercel Analytics or Umami yourself — one line of code, your choice of provider.

No AdSense integration. That's specific to each site's setup and approval status.

---

## The Repo

Everything above is already live and working at the demo:

👉 **[isamueldev.vercel.app](https://isamueldev.vercel.app)**

Fork the repo, follow these steps, and you'll have your blog live before the end of the day:

👉 **[github.com/bytecascade11/isamueldev](https://github.com/bytecascade11/isamueldev)**

I'm the only contributor. Every line of code in that repo was written by me, on a phone, without a terminal. If something isn't working, open an issue on GitHub and I'll look at it.

If it helps you ship something — a star on the repo goes a long way.
