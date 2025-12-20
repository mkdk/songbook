'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f34ad1969641ed34ac2de6f1616df8b1",
"version.json": "79695e35e98be675cbfba3b8c72ada2e",
"index.html": "d4649cda56251400ecc1a711ee3a6e4d",
"/": "d4649cda56251400ecc1a711ee3a6e4d",
"main.dart.js": "fd2358bc50834403945b4ad2aaafa695",
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
".git/objects/0d/a597bce4d1e32b6e531cd2307491995f3f3111": "af6aab3702f96b2cfb4a88ee1e06b554",
".git/objects/95/e41e38c7c7c1fbbccb55a0e1685132183b8285": "07d5d4fa5b5bfe7faa636fba2484cd82",
".git/objects/50/0f8dab3b81447886d140bce99fa52564f57b19": "8cb56c2f2bad72ad4e0aaf2b51993a8e",
".git/objects/3b/b05422d21dd6bc3bdef1f99f8e982d9c9f715d": "880b85a7e4d79e42c747e15029fc240e",
".git/objects/04/e203fec8d14c1e11efec4d643dcc12d699f836": "7b7b7162b6eea13a2d5089f732a5d430",
".git/objects/60/2234b76bafe9b596f51b505ec2595c1a301c4b": "f2ac33a3ab3ec0c4bc7cbd5998238f60",
".git/objects/9d/a8ebcfb353367089cc04cea832c9f9de701e80": "0430ebc63b8c7dadfb9aa4a087a007b3",
".git/objects/9d/be77a3aa79d66fdd63728a2a4a91b677ca7fb1": "d80d89ef54b8e79866e94e05104a35b8",
".git/objects/b4/d2c262537c3fa72e83605c67c0739d99c954cb": "b645e828a36a3b4e4105e9e3688acafe",
".git/objects/pack/pack-cbe0734f7ab748ae5917dc7d26718fa45dba7b7b.pack": "0a29de9c0828ed5eec0005b11d975077",
".git/objects/pack/pack-cbe0734f7ab748ae5917dc7d26718fa45dba7b7b.idx": "e4235187e2d3700266580859c62d2f8a",
".git/objects/89/8373870b8432d4b2265642acf80142aac496ff": "4da435d3ebf993f607f2d1f3312fa611",
".git/objects/7b/b890ba0299f1b5b2a48176b2df92d3db5f37f0": "32ad30200518a349273f4c87812ae208",
".git/objects/2f/14945d8e064c69f136145d389155601a3f3cd1": "0f5dc166dceac94a36b1fbada7b14e00",
".git/objects/6d/90efd78c11addbfedd675b78a022b7b835874d": "3429adc871c6e122fa14d7f1e5492031",
".git/objects/6c/01a7b0869dae407813041574c2fad4e4175fa9": "5629f990ee2aa06ae914d2f6fa09daa3",
".git/objects/dd/de9f7f399ea68706e19e7337ea031a1cc35231": "d33098843dfff98bd233b7de5eb087d7",
".git/objects/af/7cbf6cd274a972167a739faee48f00cc164431": "f6e25434bd22148631d7043609c6c62f",
".git/objects/a8/f834062989cb80d08acc66bb96db36184470d8": "0f9edc3f468c8969b750ccccd06fe34f",
".git/objects/c4/12d8333ebbb275e19cf96a87163e2235bd807a": "bf2b9c08f8c2e151662445e9a0575533",
".git/objects/e1/5ebdb1ad822e3c4bf1a40fefae9bf84169f3c8": "7e61b72dc03587bac3ddec0f38799fc4",
".git/objects/f9/89e8228a3e0d94ea1f00b8063f6ba68eafc30b": "a432cdb49abc03c2e0fbbebc90091922",
".git/objects/e8/e5c31f36c83e4c6809c07e4ba87ed64aba4eda": "54c1999256fd3325af238aa2251c7d6d",
".git/objects/c5/bd4be18a76e820b2602db88eccdb15bf3204c1": "cff81c75b0ba50d494b8628c00674a42",
".git/objects/e9/a9bd2fb7c6fd934b333c9faced2a550d6b2e4a": "b121ef509e90e634e318baaa851abed6",
".git/objects/e7/2514b3e6e212ec8e478999c972ec3eabcc1e7e": "e02b1b58d412f786f396202042d6bb08",
".git/objects/cb/22f635b750b9c3f92b3758145c52fd217d2226": "3f4b1fcd1c05335a9798160a5ced2ec3",
".git/objects/ce/05d5204c7eaed647a57009e39c1cb02a9fa4b7": "6eaa7093863a2b0868799977cacd3f52",
".git/objects/2c/670b95e664ca8c464b6e29594b31aeaa7389c6": "219e5e284559b12fb0d834afb90ce586",
".git/objects/1b/d0780756b19c3e5bad298c0413d87a4b6ee3e6": "e143dda471dc51e6b0363e543ed6783c",
".git/objects/24/30e9bd6355169e6e48243346cb43d983ff50ec": "b199da9416f4636b867121b226bfcc3c",
".git/objects/8d/090c6cb977337a40920783f2e1a1774460337e": "e9a3bbf8fdd673208602ddfaec4286cf",
".git/objects/82/9ae3f005ea1cb6823826c789fd54a7593d872b": "9443e338c065403b729c1d928a616103",
".git/objects/2b/d2bff160caf89432b4267db00a3c3fc464a326": "fc13b9b5476739c4587c83c7052d3173",
".git/objects/2b/1d460e1cc8c45ed8f32ade8427f2850a06f0d5": "189ab079459feb95a4f50c2bfabe81dd",
".git/objects/8e/55094c7bb94047e7515bdc9566a73cceb89067": "49ede794428afba616a5c115a6a92b22",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c809a0dccedf7555be159c848a812a4a",
".git/logs/refs/heads/gh-pages": "e07072b59ed19398546fa0ac165f4467",
".git/logs/refs/remotes/origin/gh-pages": "9574f8afdcc237f08b0a61f14aebc01a",
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
".git/refs/heads/gh-pages": "5ca4c68d95054a9e844c490bc8bc23e5",
".git/refs/remotes/origin/gh-pages": "5ca4c68d95054a9e844c490bc8bc23e5",
".git/refs/remotes/origin/main": "4955aa56083d12666e1ac281be046c8e",
".git/index": "cc56acb363db7cd48441bf08c83f59a2",
".git/COMMIT_EDITMSG": "15bc1a50be1d3029d4e897834ef2fe22",
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
