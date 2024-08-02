'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "920d437960ac1a9b630ebbb23d1d3936",
"assets/AssetManifest.bin.json": "7f0a5e358ae6301a9c2666d10be48b26",
"assets/AssetManifest.json": "63c1735436a4ed39472e4435125b2cd6",
"assets/assets/Facebook.svg": "7d42c41efa244fc192799fb959396e0d",
"assets/assets/fonts/FFShamelFamily-SansOneBold.ttf": "7dff95ecbcb0417be36a44f6ca712bad",
"assets/assets/fonts/FFShamelFamily-SansOneBook.ttf": "c398871b85c6bcecbee391b4b247d38f",
"assets/assets/home.svg": "6279531b66acc25dfc2b29fd4d5d293d",
"assets/assets/images/back_ground.webp": "f6dbb2a7005ab20045e044100c173ec7",
"assets/assets/images/course1.webp": "f53ef0dd07926301185a0a9e457ceed2",
"assets/assets/images/course2.webp": "21b07052f0f0d6e38153835d6c45c70e",
"assets/assets/images/course3.webp": "b8a20fe899697b4aa04ddb76fb391731",
"assets/assets/images/course4.webp": "7225255159f8372d15b497afa66a19d6",
"assets/assets/images/course5.webp": "269e1e01273fa79e766d9d08c415d248",
"assets/assets/images/course6.webp": "95e17e3c26f6b52ab73f03713cbe7bf8",
"assets/assets/images/human.webp": "4bce2f7a676f7a4212c1dddeb184ff05",
"assets/assets/images/logo.webp": "9c7cda2bec74e4b875dded7f192b1f67",
"assets/assets/instagram.svg": "f2ffd67adb24b953903cd49dd8978486",
"assets/assets/pdf.svg": "b80a0c075db4926b81c648f08e10063b",
"assets/assets/ticktock.svg": "fe2c3c9c5a40450671d428f858e1206b",
"assets/assets/whatsapp.svg": "e3e532199e697847502192807deaf96c",
"assets/assets/x.svg": "68322dbe828dab5c7660799e48e1a732",
"assets/assets/youtube.svg": "f2619d8a51f7b0fecc769e2cf58dc26a",
"assets/FontManifest.json": "3834c0751994577fbd8d3871b3c92a59",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "639dd99cad49d37ad0d862b31fa95476",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "e9ae6d96b3d66e3aca7b09a961c83a38",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "98fb59bc44bfe363efc7726b58dea27c",
"icons/android-chrome-192x192.png": "663a8e2c813842597d1143639229b961",
"icons/android-icon-144x144.png": "2b7aefbb0063422aa686a3efaf8546e5",
"icons/apple-icon-144x144.png": "2b7aefbb0063422aa686a3efaf8546e5",
"icons/apple-touch-icon.png": "8ce0abcd9d670d2065bc15b58ad5e9f6",
"index.html": "e4b68254e51ee3b2d40b304f975e5f98",
"/": "e4b68254e51ee3b2d40b304f975e5f98",
"main.dart.js": "30f190a9a6d6e4a61a8c3699b5f33417",
"main.dart.mjs": "546d1dc618e93f3d2165372a506ec6bf",
"main.dart.wasm": "bc8233ddd8ea440ee7a5d46c06793e01",
"manifest.json": "b19f1b31cab273828c3c0d37c2ee0357",
"splash/img/logo.png": "3e1f0c7d93a5a17671bb2caa4ede328e",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "e0f7b7a4fbc9f5bd4920f3fc74f396c3",
"version.json": "302193beb0d9d088bbc6561741fd014f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
