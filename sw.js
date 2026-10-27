// ── Habit Tracker Service Worker ─────────────────────────────────────────────
// Strategy: network-first for the app shell (HTML/CSS/JS) so updates always show
// when online, cache-first for static assets (icons, fonts).
// Bump CACHE_NAME whenever you want old caches wiped.

const CACHE_NAME = 'habit-tracker-v3';
const RUNTIME_CACHE = 'habit-tracker-runtime-v3';

const PRECACHE_URLS = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// ── INSTALL ───────────────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE ──────────────────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names
          .filter(n => n !== CACHE_NAME && n !== RUNTIME_CACHE)
          .map(n => caches.delete(n))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH ─────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  // Leaderboard / API calls must always hit the network — only cache our own files and Google Fonts
  if (url.origin !== self.location.origin && !/(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) return;

  const isShell =
    url.origin === self.location.origin &&
    (request.mode === 'navigate' ||
      /\/(index\.html|style\.css|script\.js)$/.test(url.pathname) ||
      url.pathname.endsWith('/'));

  event.respondWith(isShell ? networkFirst(request) : cacheFirst(request));
});

// ── STRATEGIES ────────────────────────────────────────────────────────────────
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    if (request.mode === 'navigate') {
      const shell = await caches.match('./index.html');
      if (shell) return shell;
    }
    return new Response('You are offline. Open the app once while connected to enable offline mode.',
      { status: 503, headers: { 'Content-Type': 'text/plain' } });
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && (response.ok || response.type === 'opaque')) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
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
