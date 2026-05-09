export const SITE = {
  // Site info
  name: "iSamueldev",
  tagline: "A fast, minimal tech blog built with Astro.",
  url: "https://isamueldev.vercel.app",
  description: "A fast, minimal tech blog built with Astro and Tailwind CSS.",
  author: "iSamuel",
  email: "revibyte20@gmail.com",

  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Tags", href: "/tags" },
    { label: "About", href: "/about" },
  ],

  // Social links
  socials: {
    twitter: "https://x.com/ByteCascade1",
    github: "https://github.com/ByteCascade11/",
    whatsapp: "",
    instagram: "",
  },

  // SEO
  ogImage: "/og-default.png",
  googleVerification: "",

  // Features
  postsPerPage: 6,
  showReadingTime: true,
  showTableOfContents: true,
  showRelatedPosts: true,
  showShareButtons: true,
};

export const THEME = {
  // Change accent color here (default: blue)
  // Options: blue, purple, green, rose, orange
  accent: "blue",

  // Default to dark mode
  defaultDark: true,
};
