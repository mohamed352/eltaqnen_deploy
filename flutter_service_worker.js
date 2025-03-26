'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ca2fed70a28472aa62d36d425213ebaa",
"assets/AssetManifest.bin.json": "25dc8d793d445461906c177e3445080f",
"assets/AssetManifest.json": "45044d36ce254b353e2e630a99681aad",
"assets/assets/Facebook.svg": "7d42c41efa244fc192799fb959396e0d",
"assets/assets/fonts/FFShamelFamily-SansOneBold.ttf": "7dff95ecbcb0417be36a44f6ca712bad",
"assets/assets/fonts/FFShamelFamily-SansOneBook.ttf": "c398871b85c6bcecbee391b4b247d38f",
"assets/assets/home.svg": "9a878af280cd0f5fe4f6670a679a0909",
"assets/assets/images/back_ground.webp": "f6dbb2a7005ab20045e044100c173ec7",
"assets/assets/images/course1.webp": "f53ef0dd07926301185a0a9e457ceed2",
"assets/assets/images/course2.webp": "21b07052f0f0d6e38153835d6c45c70e",
"assets/assets/images/course3.webp": "b8a20fe899697b4aa04ddb76fb391731",
"assets/assets/images/course4.webp": "7225255159f8372d15b497afa66a19d6",
"assets/assets/images/course5.webp": "269e1e01273fa79e766d9d08c415d248",
"assets/assets/images/course6.webp": "95e17e3c26f6b52ab73f03713cbe7bf8",
"assets/assets/images/course7.jpg": "13365bdacf1805e0a2251ec870263964",
"assets/assets/images/human.webp": "4bce2f7a676f7a4212c1dddeb184ff05",
"assets/assets/images/logo.webp": "9c7cda2bec74e4b875dded7f192b1f67",
"assets/assets/instagram.svg": "f2ffd67adb24b953903cd49dd8978486",
"assets/assets/linkedin.svg": "cd57d9f005f5f36d8d64b47010ddc4eb",
"assets/assets/pdf.svg": "347163e371b97ee5bd62e52c6f28af38",
"assets/assets/ticktock.svg": "fe2c3c9c5a40450671d428f858e1206b",
"assets/assets/whatsapp.svg": "e3e532199e697847502192807deaf96c",
"assets/assets/x.svg": "68322dbe828dab5c7660799e48e1a732",
"assets/assets/youtube.svg": "f2619d8a51f7b0fecc769e2cf58dc26a",
"assets/FontManifest.json": "c25419836bfc0e10802492b6a397daba",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "253329778c44e25405b766a9c5c5a1a7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "e9ae6d96b3d66e3aca7b09a961c83a38",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "18654fc1ad9ce4730787db340961d00e",
"icons/android-chrome-192x192.png": "663a8e2c813842597d1143639229b961",
"icons/android-icon-144x144.png": "2b7aefbb0063422aa686a3efaf8546e5",
"icons/apple-icon-144x144.png": "2b7aefbb0063422aa686a3efaf8546e5",
"icons/apple-touch-icon.png": "8ce0abcd9d670d2065bc15b58ad5e9f6",
"index.html": "4ae74c236431df5b4d6eb9e3ab418b4f",
"/": "4ae74c236431df5b4d6eb9e3ab418b4f",
"main.dart.js": "34e9b0ae957592d957c7de37d756868a",
"main.dart.mjs": "79011332b6e0e891f415b2f262245511",
"main.dart.wasm": "f6070f69f3a4613efd66d3d403420302",
"manifest.json": "b19f1b31cab273828c3c0d37c2ee0357",
"splash/img/logo.png": "3e1f0c7d93a5a17671bb2caa4ede328e",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "5aafbfaec0ecfa430a9dfe7603b97584",
"version.json": "1f200f5d7d37fe6c9ecb77dc834f7741"};
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
