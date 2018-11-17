console.log('Service Worker registered');

var cacheName = 'v1';

const urlsToCache = [
	'/',
	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/data/restaurants.json',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll(urlsToCache);
		})
	)
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
	    caches.match(event.request).then(function(response) {
	      return response || fetch(event.request);
	    })
	    .catch(function(error) {
	    	console.log(error);
	    })
  	);
});

