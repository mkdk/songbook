'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "228f47466000a49e23223529e7883743",
"version.json": "79695e35e98be675cbfba3b8c72ada2e",
"index.html": "d4649cda56251400ecc1a711ee3a6e4d",
"/": "d4649cda56251400ecc1a711ee3a6e4d",
"main.dart.js": "1131833d075939475e25f979e4e332ab",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "bce2faa7456243a29f281a1290624351",
"icons/favicon-16x16.png": "9f0f4a8f8ea978ba0c316cf7ecee2a01",
"icons/favicon-144x144.png": "2ed5ddbc2c674313ee5bdaec0f3191f2",
"icons/favicon.ico": "bce2faa7456243a29f281a1290624351",
"icons/favicon-310x310.png": "58d9aa39e314f4ae70a6c4596389aeae",
"icons/favicon-128x128.png": "b45b422d9b851ba73876f181ae2016a7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/favicon-512x512.png": "0bd2e82dc8623787266c61a52ac557bd",
"icons/favicon-114x114.png": "3006f19f537c336bc32208d65cfc454e",
"icons/favicon-70x70.png": "659db316e7c20d7c0a0efd7bd2ca7e2c",
"icons/favicon-60x60.png": "b07d6e5bcd67ce911b0bf24a755dfe6d",
"icons/favicon-180x180.png": "6c193b0b2ef778771343a82391c9d542",
"icons/favicon-96x96.png": "bbf25df8104be5e9cae6e929ba010e00",
"icons/favicon-72x72.png": "63afe9fd6c68dd2f2321200475549907",
"icons/favicon-152x152.png": "5f36db0ccc4aa9b746bbac3900468c29",
"icons/favicon-57x57.png": "a87003ac0a78e5210c6b4516e2f771bb",
"icons/favicon-150x150.png": "ee5413de4fe9d7fa3270fd72a93d5ca6",
"icons/favicon-120x120.png": "0aa5dd7d3973a6b489cf91f3da48cd9f",
"icons/favicon-192x192.png": "e89ad086b27e80b8782ae2657bb2d43e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "e5b5000fee588118025ff0950344715b",
"icons/favicon-384x384.png": "5a71eeb5bf0d49f5091cd188a013dcf9",
"icons/favicon-76x76.png": "8eea014d3930a8513dcf2ec5d4e1bcd8",
"manifest.json": "203cb4e5c381977c54726ae6b8903c47",
"commit_and_publish.sh": "9956457bebc87235cf8b5d027760ba6f",
".git/ORIG_HEAD": "b4472f39c967c21ef3b0a52eda075f3e",
".git/config": "cb6686b9f9fb3031aa264af16db90cdd",
".git/objects/95/e41e38c7c7c1fbbccb55a0e1685132183b8285": "07d5d4fa5b5bfe7faa636fba2484cd82",
".git/objects/pack/pack-cbe0734f7ab748ae5917dc7d26718fa45dba7b7b.pack": "0a29de9c0828ed5eec0005b11d975077",
".git/objects/pack/pack-cbe0734f7ab748ae5917dc7d26718fa45dba7b7b.idx": "e4235187e2d3700266580859c62d2f8a",
".git/objects/89/8373870b8432d4b2265642acf80142aac496ff": "4da435d3ebf993f607f2d1f3312fa611",
".git/objects/2f/14945d8e064c69f136145d389155601a3f3cd1": "0f5dc166dceac94a36b1fbada7b14e00",
".git/objects/6c/01a7b0869dae407813041574c2fad4e4175fa9": "5629f990ee2aa06ae914d2f6fa09daa3",
".git/objects/af/7cbf6cd274a972167a739faee48f00cc164431": "f6e25434bd22148631d7043609c6c62f",
".git/objects/e8/e5c31f36c83e4c6809c07e4ba87ed64aba4eda": "54c1999256fd3325af238aa2251c7d6d",
".git/objects/2c/670b95e664ca8c464b6e29594b31aeaa7389c6": "219e5e284559b12fb0d834afb90ce586",
".git/objects/24/30e9bd6355169e6e48243346cb43d983ff50ec": "b199da9416f4636b867121b226bfcc3c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e6853e4bf60628c4b75c20e26605071",
".git/logs/refs/heads/gh-pages": "74cff9e29c33ab58fd61f78d72e4f353",
".git/logs/refs/remotes/origin/gh-pages": "86341d3af34614e5f14c111a4c606d07",
".git/logs/refs/remotes/origin/main": "5868d210d206e7b247a2977910287811",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "ece6112028cf471724c76983402b2531",
".git/refs/remotes/origin/gh-pages": "ece6112028cf471724c76983402b2531",
".git/refs/remotes/origin/main": "4955aa56083d12666e1ac281be046c8e",
".git/index": "5e5d83fb01cd8dbb0ce61e813cb934f1",
".git/COMMIT_EDITMSG": "05c558e508a0b95f092329fa4a69fb72",
".git/FETCH_HEAD": "391f5589a4c0cef4217199a83f0fd0c3",
"assets/NOTICES": "d71451107820984ccca30f3a3217238c",
"assets/FontManifest.json": "acd331eca4a55f9bcdf4c559856875ca",
"assets/AssetManifest.bin.json": "0c070f5d05756dab6fa024e22804d8b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "42c42c14ba1f99594901a2e33f201197",
"assets/fonts/MaterialIcons-Regular.otf": "fc8be53cf9f038fc630cfee28e382e6b",
"assets/assets/images/border-beuty.png": "36a76a424d4a0c2ceaf14a8481f58b0b",
"assets/assets/json/songs.json": "8661f89250c78ddf8a5b5399da348571",
"assets/assets/json/rus_word.json": "b8631aa040e259c80c47fb70eca4ef14",
"assets/assets/fonts/NotoSerif-Regular.ttf": "a31fcddc07198b80f1af9a9404c16d71",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
