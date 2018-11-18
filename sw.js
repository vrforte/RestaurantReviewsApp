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

self.addEventListener('fetch', event => {
	event.respondWith(
	    caches.match(event.request).then(response => {
	      return response || fetch(event.request);
	    })
	    .catch(error => {
	    	console.log(error);
	    })
  	);
});



// ---------------- Sources ---------------

// Credit given to the following sources for completion of this project:
// https://classroom.udacity.com/
// https://stackoverflow.com/
// https://webaim.org/techniques/skipnav/
// https://developer.mozilla.org/
// https://developers.google.com/
// https://www.sketchingwithcss.com/samplechapter/cheatsheet.html
// https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-1-map-api/
// https://medium.com/quick-code/service-workers-in-js-and-offline-reading-7bac9d4980ea











