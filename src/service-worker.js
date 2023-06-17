var cacheName = 'my-web-app-cache-v1';
var filesToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/main.js',
    '/images/logo.png'
];

window.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.addAll(filesToCache);
            })
    );
});

window.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.match(event.request)
                    .then(function (response) {
                        return response || fetch(event.request)
                            .then(function (networkResponse) {
                                // Cache the fetched response for future use
                                cache.put(event.request, networkResponse.clone());
                                return networkResponse;
                            });
                    });
            })
    );
});
