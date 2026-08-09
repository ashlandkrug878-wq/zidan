/* 子弹手账 · 离线缓存（联网时永远取最新，断网时用缓存兜底） */
const CACHE = 'bujo-cache-v2';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html', './icon.png']).catch(() => {})));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return res;
    }).catch(() =>
      caches.match(e.request, {ignoreSearch:true}).then(m => m || caches.match('./index.html'))
    )
  );
});
