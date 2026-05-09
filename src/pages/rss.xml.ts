import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.toString().replace(/\/$/, "") ?? "";

  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const sortedPosts = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MyBlog</title>
    <link>${siteUrl}</link>
    <description>A fast, minimal tech blog built with Astro.</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${sortedPosts.map(post => `<item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}/</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}/</guid>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      ${post.data.tags.map(tag => `<category>${tag}</category>`).join("\n      ")}
    </item>`).join("\n    ")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
