export const SITE = {
  name: "AyeliveGame",
  tagline: "A fast, minimal gaming blog built with Astro.",
  url: "https://ayelive-game.vercel.app/",
  description: "AyeliveGame is where mobile gaming comes alive — real-time updates, in-depth guides, and everything you need to stay ahead in your favorite games.",
  author: "Ayelabowo",
  email: "olorunsolatim@gmail.com",

  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Tags", href: "/tags/" },
    { label: "About", href: "/about/" },
  ],

  socials: {
    twitter: "",
    github: "https://github.com/olorunsolatim-max/",
    whatsapp: "",
    instagram: "",
  },

  ogImage: "/og-default.jpg",
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
