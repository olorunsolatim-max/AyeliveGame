// src/pages/sitemap-images.xml.ts
//
// Google Image Sitemap — tells Google which post page owns each cover image.
// This fixes the issue where clicking an image in Google Lens / Google Images
// lands on the homepage instead of the actual post that contains the image.
//
// Reference: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps

import { getCollection } from "astro:content";
import { SITE } from "../config";

export async function GET() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const websiteBase = SITE.url.endsWith("/")
    ? SITE.url
    : `${SITE.url}/`;

  const urlEntries = posts
    .filter((post) => post.data.cover)
    .map((post) => {
      const postUrl = new URL(`blog/${post.slug}/`, websiteBase).toString();

      const cover = post.data.cover as string;
      const imageUrl = cover.startsWith("http")
        ? cover
        : new URL(
            cover.startsWith("/") ? cover.slice(1) : cover,
            websiteBase
          ).toString();

      const imageTitle = post.data.title;

      return `
  <url>
    <loc>${postUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escapeXml(imageTitle)}</image:title>
    </image:image>
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
