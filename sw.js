const CACHE='bujo-core-v360-a886638a4963a23c', ART='bujo-art-v360';
const CORE=["./index.html", "./assets/app/app-a886638a4963a23c.js", "./icon-dot.png"];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(CORE);await self.skipWaiting();})());});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==self.location.origin)return;
 e.respondWith((async()=>{
  const shell=e.request.mode==='navigate';const app=u.pathname.includes('/assets/app/');
  const art=u.pathname.includes('/assets/ui/')||u.pathname.includes('/assets/postcards/');
  if(!shell&&!app&&!art)return fetch(e.request);
  const c=await caches.open(art?ART:CACHE),key=shell?'./index.html':e.request;
  const hit=await c.match(key);if(hit)return hit;
  try{const r=await fetch(e.request);if(r.ok){await c.put(key,r.clone());}return r;}
  catch(_){return new Response('Offline',{status:503});}
 })());
});
