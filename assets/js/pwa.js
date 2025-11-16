// This is the "Offline page" service worker

function pwaInit() {

  importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");
  let CACHE = "pwabuilder-page";

  // TODO: replace the following with the correct offline fallback page i.e.: let offlineFallbackPage = "offline.html";
  let offlineFallbackPage = "/pwaoffline.html";

  self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
      self.skipWaiting();
    }
  });

  self.addEventListener("install", async (event) => {
    event.waitUntil(
      caches.open(CACHE).then((cache) => cache.add(offlineFallbackPage))
    );
  });

  if (workbox.navigationPreload.isSupported()) {
    workbox.navigationPreload.enable();
  }

  self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
      event.respondWith(
        (async () => {
          try {
            let preloadResp = await event.preloadResponse;
            if (preloadResp) {
              return preloadResp;
            }
            let networkResp = await fetch(event.request);
            return networkResp;
          } catch (error) {
            let cache = await caches.open(CACHE);
            let cachedResp = await cache.match(offlineFallbackPage);
            return cachedResp;
          }
        })()
      );
    }
  });

}