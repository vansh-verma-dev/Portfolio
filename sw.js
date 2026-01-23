const cacheName = 'portfolio-cache-v1';
const assets = [
  '/',
  '/Portfolio/',
  '/Portfolio/index.html',
  '/Portfolio/style.css',
  '/Portfolio/script.js',
  // add more files you want cached
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
