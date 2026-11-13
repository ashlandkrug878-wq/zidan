/* App shell: network first. Bundled postcard art: cache on first successful read. */
const CACHE='bujo-cache-v353';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./icon-dot.png']).catch(()=>{})));});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);if(url.origin!==self.location.origin)return;
 const art=url.pathname.includes('/assets/postcards/');
 e.respondWith((async()=>{
  const cache=await caches.open(CACHE),hit=await cache.match(e.request);
  if(art&&hit)return hit;
  try{const res=await fetch(e.request);if(res.ok){await cache.put(e.request,res.clone());return res;}if(hit)return hit;return res;}
  catch(_){if(hit)return hit;if(e.request.mode==='navigate'){const shell=await cache.match('./index.html');if(shell)return shell;}return new Response('',{status:503,statusText:'Offline'});}
 })());
});
