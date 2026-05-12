const CACHE_NAME = "myblog-v1";

const STATIC_ASSETS = [
  "/",
  "/offline/",
  "/manifest.json",
  "/favicon.svg",
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — delete old caches immediately
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch — network first, fall back to cache
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  // Never cache API routes or XML/JSON files
  const url = new URL(event.request.url);
  if (
    url.pathname.includes(".xml") ||
    url.pathname.includes(".json") ||
    url.pathname.includes("search-index") ||
    url.pathname.includes("sitemap") ||
    url.pathname.includes("rss")
  ) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Network first for HTML pages
  if (event.request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache first for assets (CSS, JS, fonts, images)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
          return response;
        })
      );
    })
  );
});
