import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
export const prerender = true;
export const GET: APIRoute = async ({ site }) => {
  const siteUrl = "https://isamueldev.vercel.app";

  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/blog/", priority: "0.9", changefreq: "daily" },
    { url: "/tags/", priority: "0.8", changefreq: "weekly" },
    { url: "/about/", priority: "0.7", changefreq: "monthly" },
    { url: "/contact/", priority: "0.6", changefreq: "monthly" },
  ];

  const postPages = posts.map(post => ({
    url: `/blog/${post.slug}/`,
    priority: "0.8",
    changefreq: "weekly",
    lastmod: post.data.updated?.toISOString() ?? post.data.date.toISOString(),
  }));

  const allPages = [...staticPages, ...postPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.lastmod ? `
    <lastmod>${page.lastmod}</lastmod>` : ""}
  </url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
