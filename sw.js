const CACHE = "bujo-core-c4986311e1f0a8d9", ART = "bujo-art-v360";
const CORE = ["./index.html","./assets/app/app-UPztTm1O.js","./assets/app/abu-data-DfA2KwJp.js","./styles/app-b6ed50130fcec9da.css","./icon-dot.png"];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(CORE.map(p=>new Request(p,{cache:'reload'})));const html=await (await c.match('./index.html')).text();if(!CORE.filter(path => /\.(?:js|css)$/.test(path)).every(path => html.includes(path)))throw new Error('App version mismatch');await self.skipWaiting();})());});
self.addEventListener('activate', event => {
 event.waitUntil((async () => {
  const names = await caches.keys();
  const obsolete = names.filter(name => name.startsWith('bujo-core-') && name !== CACHE);
  await Promise.all(obsolete.map(name => caches.delete(name)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==self.location.origin)return;
 e.respondWith((async()=>{
  const shell=e.request.mode==='navigate';const app=CORE.some(path => new URL(path,self.registration.scope).href === u.href);
  const art=u.pathname.includes('/assets/ui/')||u.pathname.includes('/assets/postcards/');
  if(!shell&&!app&&!art)return fetch(e.request);
  const c=await caches.open(art?ART:CACHE),key=shell?'./index.html':e.request;
  const hit=await c.match(key);if(hit)return hit;
  try{const r=await fetch(e.request);if(r.ok){await c.put(key,r.clone());}return r;}
  catch(_){return new Response('Offline',{status:503});}
 })());
});
