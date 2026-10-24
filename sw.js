/* Oxendine Drywall service worker (oxendine-drywall-v79). Network-first for this site only; never touches api.openai.com or any other origin. */
var CACHE='oxendine-drywall-v79';
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png']).catch(function(){})}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==CACHE}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET')return;var u;try{u=new URL(r.url)}catch(x){return}if(u.origin!==self.location.origin)return;
e.respondWith(fetch(r).then(function(res){if(res&&res.ok){var c=res.clone();caches.open(CACHE).then(function(ca){ca.put(r,c)})}return res}).catch(function(){return caches.match(r).then(function(m){return m||(r.mode==='navigate'?caches.match('./index.html'):undefined)})}))});
