# iSamuelDev Astro Theme

A fast, minimal, and modern blog theme built with [Astro](https://astro.build?utm_source=chatgpt.com) and [Tailwind CSS](https://tailwindcss.com?utm_source=chatgpt.com).

Designed for developers and content creators who want a clean, performant blog without the bloat.

![Theme Preview](https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&auto=format&fit=crop)

---

## ✨ Features

- ⚡ **Blazing fast** — Static site generation with zero JS by default
- 🌙 **Dark mode** — Persistent dark/light toggle with localStorage
- 🔍 **Live search** — Instant post search with no external dependencies
- 📖 **Reading time** — Auto-calculated per post
- 📋 **Table of contents** — Auto-generated for long posts
- 🔗 **Share buttons** — Twitter, WhatsApp, and copy link
- 🃏 **Related posts** — Auto-matched by shared tags
- 🏷️ **Tag system** — Tag index and individual tag pages
- 📡 **RSS feed** — Auto-generated at `/rss.xml`
- 🗺️ **Sitemap** — Auto-generated at `/sitemap.xml`
- 📱 **PWA ready** — Installable with offline support
- 🔝 **Back to top** — Floating button on long posts
- 🎨 **Typography** — Beautiful prose styling via Tailwind Typography

---

## 📁 Project Structure

```txt
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── PostCard.astro
│   ├── ShareBar.astro
│   └── BackToTop.astro
├── content/
│   ├── config.ts
│   └── blog/
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── tags/
│   │   ├── index.astro
│   │   └── [tag].astro
│   ├── author.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── privacy-policy.astro
│   ├── terms.astro
│   ├── disclaimer.astro
│   ├── 404.astro
│   ├── offline.astro
│   ├── rss.xml.ts
│   ├── sitemap.xml.ts
│   └── search-index.json.ts
├── styles/
│   └── global.css
└── config.ts
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bytecascade11/isamueldev.git
cd isamueldev
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Your Site

Open `src/config.ts` and update it with your information:

```ts
export const SITE = {
  name: "YourBlog",
  tagline: "Your blog tagline here.",
  url: "https://yourdomain.com",
  description: "Your site description for SEO.",
  author: "Your Name",
  email: "you@email.com",

  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Tags", href: "/tags" },
    { label: "About", href: "/about" },
  ],

  socials: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    whatsapp: "",
    instagram: "",
  },

  googleVerification: "your-verification-code",
};
```

---

### 4. Start the Development Server

```bash
npm run dev
```

Visit:

```txt
http://localhost:4321
```

---

## ✍️ Writing Posts

Create a new `.md` file inside:

```txt
src/content/blog/
```

Example:

```md
---
title: "Your Post Title"
description: "A short description for SEO and previews."
date: 2024-01-01
tags: ["tag1", "tag2"]
author: "Your Name"
cover: "/images/your-cover.jpg"
featured: false
draft: false
---

Your post content here...
```

---

## 📋 Frontmatter Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | ✅ | Post title |
| `description` | string | ✅ | SEO description |
| `date` | date | ✅ | Publication date |
| `tags` | string[] | ✅ | Post tags |
| `author` | string | ❌ | Defaults to config author |
| `cover` | string | ❌ | Cover image URL or path |
| `featured` | boolean | ❌ | Pin to homepage hero |
| `draft` | boolean | ❌ | Hide from production |
| `updated` | date | ❌ | Last updated date |

---

## 🖼️ Adding Images

### Option A — Local Images

Recommended for original images and optimized performance.

Upload images to:

```txt
public/images/
```

Then reference them like this:

```yaml
cover: "/assets/posts/my-cover.jpg"
```

---

### Option B — Unsplash Images

Quick and easy for placeholders or demos:

```yaml
cover: "https://images.unsplash.com/photo-xxxxx?w=800&auto=format&fit=crop"
```

---

## 🚢 Deploying to Vercel

1. Push your repo to GitHub
2. Go to [Vercel](https://vercel.com?utm_source=chatgpt.com)
3. Import your repository
4. Leave all settings as default
5. Click **Deploy**

Your site should be live in under a minute.

Every push to `main` automatically triggers a new deployment.

---

## 🔍 Google Search Console Setup

1. Open [Google Search Console](https://search.google.com/search-console?utm_source=chatgpt.com)
2. Add your site as a property
3. Choose **HTML tag verification**
4. Copy the verification content value
5. Paste it into:

```ts
googleVerification: "your-verification-code"
```

inside `src/config.ts`

Then submit:

```txt
/sitemap.xml
```

---

## 📦 Built With

- [Astro](https://astro.build?utm_source=chatgpt.com) — Static site framework
- [Tailwind CSS](https://tailwindcss.com?utm_source=chatgpt.com) — Utility-first CSS
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin?utm_source=chatgpt.com) — Beautiful prose styling
- [Vercel](https://vercel.com?utm_source=chatgpt.com) — Hosting and deployment

---

## 📄 License

MIT License — free to use for personal and commercial projects.

---

Built with ❤️ by [iSamuel](https://github.com/bytecascade/)
