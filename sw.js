self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'js/main.js',
        'css/styles.css',
        'js/restaurant_info.js',
        'img/'
      ])
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response) return response;
      return fetch(event.request);
    })
  );
});
