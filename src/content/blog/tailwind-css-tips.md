---
title: "10 Tailwind CSS Tips That Will Change How You Write Styles"
description: "After building dozens of projects with Tailwind CSS, here are the tips and tricks that made the biggest difference in my workflow."
date: 2026-05-10
tags: ["tailwind", "css", "web dev"]
author: "iSamuel"
featured: false
cover: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop"
---

## Why Tailwind CSS?

When Tailwind CSS first came out, I was skeptical. Writing utility classes directly in HTML felt wrong — it went against everything I'd learned about separation of concerns.

Then I actually used it on a real project. I haven't written traditional CSS since.

Here are the tips that made the biggest difference.

## 1. Use the `@apply` Directive Sparingly

It's tempting to use `@apply` to create component classes everywhere, but this defeats the purpose of Tailwind. Reserve it for truly reusable patterns.

```css
/* Good */
.btn {
  @apply inline-flex items-center px-4 py-2 rounded-lg font-medium;
}

/* Bad — just write it inline */
.card-title {
  @apply text-lg font-bold;
}

## *2. Master the* group *and* peer *Classes*
These two classes unlock powerful interaction patterns without any JavaScript.

*Html*

<div class="group">
  <img class="group-hover:scale-105 transition-transform" />
  <h2 class="group-hover:text-blue-500">Title</h2>
</div>
Hovering the parent div triggers styles on all children with group-hover:.
3. Use clsx or cn for Dynamic Classes
Never concatenate class strings with template literals. Use a utility:

*ts*

import { clsx } from "clsx";

const classes = clsx(
  "base-class",
  isActive && "active-class",
  variant === "primary" && "bg-blue-500"
);

## 4. Dark Mode with class Strategy
Always use darkMode: "class" in your config. It gives you full control over when dark mode activates instead of relying on system preferences.
## 5. Custom Colors in Config
Define your brand colors once in tailwind.config.ts and use them everywhere:

*ts*
colors: {
  accent: {
    500: "#3b82f6",
    600: "#2563eb",
  }
}

## Final Thoughts
Tailwind rewards you the more you use it. The first week feels strange. By week two, you'll never want to go back to writing CSS files.
