export const SITE = {
  name: "iSamuelDev",
  tagline: "A fast, minimal tech blog built with Astro.",
  url: "https://isamueldev.vercel.app",
  description: "A fast, minimal tech blog built with Astro and Tailwind CSS.",
  author: "iSamuel",
  email: "hello@isamueldev.com",

  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Tags", href: "/tags" },
    { label: "About", href: "/about" },
  ],

  socials: {
    twitter: "https://x.com/ByteCascade1",
    github: "https://github.com/bytecascade11/",
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

export const THEME = {
  accent: "blue",
  defaultDark: true,
};
