/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const bgSyncPlugin = new workbox.backgroundSync.Plugin('todoQueue', {
  maxRetentionTime: 24 * 60
});

workbox.routing.registerRoute(
  /\.(?:js|css|html)$/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'static-cache',
  })
)

workbox.routing.registerRoute(
  'http://localhost:3000',
  new workbox.strategies.NetworkFirst({
    cacheName: 'root-cache',
  })
)

workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

// workbox.routing.registerRoute(
//   'http://localhost:8000/todos',
//   workbox.strategies.networkFirst(),
//   'GET'
// )

// workbox.routing.registerRoute(
//   'http://localhost:8000/todos',
//   workbox.strategies.networkFirst({
//     plugins: [bgSyncPlugin]
//   }),
//   'POST'
// )