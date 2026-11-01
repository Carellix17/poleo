/* Poleo: cache della sola applicazione, dati personali solo in localStorage. */
'use strict';
const PREFIX = 'poleo-shell:' + self.registration.scope + ':';
const CACHE = PREFIX + 'f05be4292792';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./logo.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  const scope = new URL(self.registration.scope);
  if (request.method !== 'GET' || url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3000);
      try {
        const response = await fetch(request, {signal: controller.signal});
        if (response.ok) {
          const cache = await caches.open(CACHE);
          await cache.put(new URL('./index.html', self.registration.scope).href, response.clone());
        }
        return response;
      } catch (_) {
        const response = await caches.match(new URL('./index.html', self.registration.scope).href);
        return response || new Response('Apri Poleo una volta con Internet per preparare la modalità offline.', {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
      } finally { clearTimeout(timer); }
    })());
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
