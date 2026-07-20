const CACHE='mml-fleet-20260720-tcluk-logo';const ASSETS=['./','./index.html','./fleet-data.js','./manifest.json,
  "mml-aircraft-logo.png",
  "icon-192.png",
  "icon-512.png"
]];self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))));self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
