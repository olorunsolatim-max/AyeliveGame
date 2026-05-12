import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/—/g, "-")
    .replace(/–/g, "-")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "");
}

export const GET: APIRoute = async () => {
  const siteUrl = "https://isamueldev.vercel.app";

  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const postsWithImages = posts.filter(post => post.data.cover);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${postsWithImages.map(post => {
  const imageUrl = post.data.cover?.startsWith("http")
    ? post.data.cover
    : `${siteUrl}${post.data.cover}`;

  return `  <url>
    <loc>${siteUrl}/blog/${post.slug}/</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escapeXml(post.data.title)}</image:title>
      <image:caption>${escapeXml(post.data.description)}</image:caption>
    </image:image>
  </url>`;
}).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
