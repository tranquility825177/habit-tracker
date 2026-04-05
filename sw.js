// ── Habit Tracker Service Worker ─────────────────────────────────────────────
// Strategy: Cache-first for assets, network-first for the HTML page.
// On update: new SW activates immediately and refreshes stale cache.

const CACHE_NAME = 'habit-tracker-v1';
const RUNTIME_CACHE = 'habit-tracker-runtime-v1';

// Files to pre-cache on install
const PRECACHE_URLS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // Google Fonts — cache the Inter font so it works offline
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
];

// ── INSTALL ───────────────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())   // activate immediately
  );
});

// ── ACTIVATE ──────────────────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  // Delete old caches from previous versions
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map(name => caches.delete(name))
      )
    ).then(() => self.clients.claim())  // take control of all open tabs
  );
});

// ── FETCH ─────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Don't intercept non-GET or chrome-extension requests
  if (request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;

  // Strategy A: Network-first for the main HTML page
  // (ensures the app always loads the latest version when online)
  if (url.pathname.endsWith('index.html') || url.pathname === '/') {
    event.respondWith(networkFirst(request));
    return;
  }

  // Strategy B: Cache-first for everything else (fonts, icons, manifest)
  event.respondWith(cacheFirst(request));
});

// ── STRATEGIES ────────────────────────────────────────────────────────────────
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    // Clone and store fresh copy in cache
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
    return response;
  } catch {
    // Offline — serve from cache
    const cached = await caches.match(request);
    if (cached) return cached;
    // Absolute fallback
    return new Response('<h2>You are offline</h2><p>Open the app while connected once to enable offline mode.</p>',
      { headers: { 'Content-Type': 'text/html' } });
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('', { status: 408 });
  }
}

// ── MESSAGE HANDLER (for update reload) ──────────────────────────────────────
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

// ── BACKGROUND SYNC (future-ready) ────────────────────────────────────────────
self.addEventListener('sync', event => {
  if (event.tag === 'sync-habits') {
    // Placeholder for future cloud sync
    console.log('[SW] Background sync triggered');
  }
});

// ── PUSH NOTIFICATIONS (future-ready) ─────────────────────────────────────────
self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'Habit Tracker', {
      body: data.body || "Don't forget your habits today! 🔥",
      icon: './icon-192.png',
      badge: './icon-192.png',
      tag: 'habit-reminder',
      renotify: true,
      data: { url: './index.html' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('index') && 'focus' in client)
          return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('./index.html');
    })
  );
});
