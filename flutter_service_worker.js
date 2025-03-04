'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a68dc4a679c5cdb010bfcd99e5ca1aa8",
"assets/AssetManifest.bin.json": "f0e494d18d789415c6ceb7d25550936a",
"assets/AssetManifest.json": "224bfa9055bf8d75d275406f507c3390",
"assets/assets/animations/delivery_anim.json": "daa2bd487c0faa0445b68418c413027c",
"assets/assets/animations/ecom.json": "3d40748398805bed4f10b62ca598fd35",
"assets/assets/animations/ecom1.mp4.lottie.json": "3d40748398805bed4f10b62ca598fd35",
"assets/assets/animations/failure_1.json": "03fd116856d143fb54dca1cd362b2653",
"assets/assets/animations/loading.json": "2669f6f18bff9cad98caf8c23e5f2f04",
"assets/assets/animations/order-complete-car-delivery-animation.json": "f4ac9e34a730c64dad0940752f2438bd",
"assets/assets/animations/pencil_animation.json": "273770cbd634d6d59dabd35a877b4351",
"assets/assets/animations/process4.json": "6bd2a05c8ab518f83a6a223cb04af1fe",
"assets/assets/animations/purchase_anim.json": "082f74c59bd0206726414780bcfb98dc",
"assets/assets/animations/shop_anim.json": "b47002549f93965341bb3c03b548388f",
"assets/assets/animations/success3.json": "765a37a051ce07ecc401b3bca49dff41",
"assets/assets/animations/success_1.json": "daa2bd487c0faa0445b68418c413027c",
"assets/assets/animations/success_anim.json": "f8c4acda95299e16882b414e85d8e41f",
"assets/assets/animations/success_blue.json": "6f7449ab3d0fe97e4fa45c604da03e4b",
"assets/assets/animations/success_yellow.json": "ae10fb8816d5d16f2b1719797875b202",
"assets/assets/files/Safari_policy.pdf": "14426f93a7248e2f349261ffd836d588",
"assets/assets/fonts/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/fonts/Poppins-Italic.otf": "64e838b9ef3275db2341f1b023caf63a",
"assets/assets/fonts/Poppins-Light.otf": "02c5a7af5427f03f93cd9094334ee181",
"assets/assets/fonts/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/fonts/Poppins-MediumItalic.otf": "d11c31441864d4a8048a9763160f561b",
"assets/assets/fonts/Poppins-Regular.otf": "de2dd9339ae7636475fcd91b3ed0e24f",
"assets/assets/fonts/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/images/animations/process4.mp4": "b063f5788818b899725ab07e1ff956fb",
"assets/assets/images/animations/shop1.jpg": "d33cd3b01422152e4ee5f0139c002cb8",
"assets/assets/images/animations/shop2.jpg": "3089068864b53233782231182dd92840",
"assets/assets/images/animations/shop3.jpg": "689321fb501af3fb335694980e38f2c0",
"assets/assets/images/animations/shop4.jpg": "0f31f45b54ff6b3b04ce59c9df51e6ba",
"assets/assets/images/animations/success.png": "cc67365e9486ae7bac11ac51b854d0fa",
"assets/assets/images/background/back1.avif": "f65bde7fca8d7b173c1b3f763c144a39",
"assets/assets/images/background/back1.jpg": "b0c0e8f0f964e913bf1275c0d09958b1",
"assets/assets/images/background/back2.jpg": "ea8ad8fbc840dad30ef4e252506f28e3",
"assets/assets/images/background/temp1.jpg": "154b5980c64a2075d7013f3f5cb2af0e",
"assets/assets/images/background/temp2.jpg": "47db46699aff32b3d17b36c76f0911eb",
"assets/assets/images/background/temp3.jpg": "b1e7ea19bd3fbb8d7984cd608050bf85",
"assets/assets/images/banners/banner_2.jpg": "c20228aba1cf55b58dca20c4c776ad2d",
"assets/assets/images/banners/banner_img.png": "d202ab152efa871826130d645ab41dfd",
"assets/assets/images/banners/banner_img_1.png": "661492b2b55c8967d5cc6f7fdf9bda3f",
"assets/assets/images/banners/banner_img_2.png": "3438711082f3f9a2050b48ca9e0d0021",
"assets/assets/images/banners/banner_img_3.png": "f86bf255c61f8fd6627ba773f836b676",
"assets/assets/images/banners/image_banner.png": "9269cceeb41d272068e12b23ab40a4cf",
"assets/assets/images/cars/slide1.jpg": "e3ce691511cbbdb63f65ed4ece169a87",
"assets/assets/images/cars/slide2.jpg": "1caffdf078c7e409b383f844d0c906c8",
"assets/assets/images/cars/slide3.jpg": "d636fe0aa47e860a3cf87e7accebbd63",
"assets/assets/images/on_boarding_images/delivery.jpeg": "1eacbbefc226233274b7a7a7bab5288d",
"assets/assets/images/on_boarding_images/sammy-line-delivery.gif": "faf973c05c1858e0ddecb6d771d42e53",
"assets/assets/images/on_boarding_images/sammy-line-no-connection.gif": "58aedc14a78caa9edfccf3683a80a186",
"assets/assets/images/on_boarding_images/sammy-line-searching.gif": "deb343fe59f59566d98cd14119aedd61",
"assets/assets/images/on_boarding_images/sammy-line-shopping.gif": "3cdbc77e78f238419f5daddfc2c63117",
"assets/assets/images/on_boarding_images/search.jpeg": "3570e32a42f17229dabb0e4f5b0114ff",
"assets/assets/images/on_boarding_images/shop2.jpeg": "4fee062aead729837ce1322dbdb5a42d",
"assets/assets/images/payment_methods/applepay.png": "f281c03dff0f134bf6e8563887cf9625",
"assets/assets/images/payment_methods/creditcard.png": "242d37ad18b74692a7087d39a6227710",
"assets/assets/images/payment_methods/googlepay.png": "b4b89e2caf95c10828025df76f4cc9d8",
"assets/assets/images/payment_methods/mastercard.png": "440a272a16e32303d97c50f65952563b",
"assets/assets/images/payment_methods/paypal.png": "e60feca3722c3f215669fdaad313adaf",
"assets/assets/images/payment_methods/paystack.png": "9712ba902acb52d9995f3913a328a101",
"assets/assets/images/payment_methods/paytm.png": "b17b9d51c0a8469aee00afca4c33a1fb",
"assets/assets/images/payment_methods/successfulpayment.png": "fa35b9c0e44adff83efa0cdeee5c2fde",
"assets/assets/images/payment_methods/visa.png": "34bd376adaf3942ece26dcaabf530e83",
"assets/assets/images/products/batteries.jpg": "53d70901520aa5d9bd50e2bf50d21049",
"assets/assets/images/products/consumer-electronics.jpeg": "74ae8fc91e1413c5d8a3bee98d86a257",
"assets/assets/images/products/entertainment-devices.jpg": "30d50945b7b3fe43eb7fcd596ec5dc00",
"assets/assets/images/products/home-appliance.jpg": "b80526330fe8e0e3fd0b18bc357b52ea",
"assets/assets/images/products/imagA.png": "0be80b27679807c4213271c2fe303e4c",
"assets/assets/images/products/imagB.png": "03d743e31a00ef608e0c17670153a0e9",
"assets/assets/images/products/imagC.png": "99cf2744d4dd7857655fa6ac04d9b678",
"assets/assets/images/products/imagD.png": "962710b2f0802afa9f9e1be2e39ab510",
"assets/assets/images/products/imagE.png": "b18b62d13dc1d093e60de710a340fd04",
"assets/assets/images/products/imagF.png": "19018fd1e5e24c87b7acd4fa17d43c48",
"assets/assets/images/products/imagG.png": "a1de0199f580727e6541c8a8249b0046",
"assets/assets/images/products/imagH.jpg": "066d770a9530abb17e21113fd2d0fc1c",
"assets/assets/images/products/imagI.png": "5c5982f1b8ea4235c1874d1f51a9ba5c",
"assets/assets/images/products/IT-accessories.png": "33773356fde2bb5c8e7f1db6fb08ce70",
"assets/assets/images/products/kitchen_refrigerator.png": "2797e33ae0421a08f83dabd2381eeef8",
"assets/assets/images/products/lightening-equipment.jpeg": "39d3fd6205e6aed1937400ab963a1081",
"assets/assets/images/products/medical-equipment.png": "0e7a44c425f64b36ee7f55e07e2c4c0e",
"assets/assets/images/products/miscellaneous-equipment.png": "7e9b2886e0bfc2b2907247f0b264fc1a",
"assets/assets/images/products/networking-equipment.jpg": "b8cc007eb56736c27972486e0ffc0651",
"assets/assets/images/products/office-equipment.png": "70450f6ad23a763f1c1e8bbeb2b8a7a8",
"assets/assets/images/products/samsung_s9_mobile.png": "c3db5a401883d892b4ffbe62faba274c",
"assets/assets/images/products/thumb.png": "35103fa8f8c0d9a65ad413c6a7a54c20",
"assets/assets/images/user/user2.png": "69c301e48a4cdeaa26b2e994c86e1fbb",
"assets/assets/images/user/user3.png": "899a78760f7550316ded2749193f69c4",
"assets/assets/logos/ar_logo.png": "05eebacf587885bf085f9505172d55c2",
"assets/assets/logos/ar_logo1.png": "0c106d2bc19bc5140094f8a1bc149409",
"assets/assets/logos/ar_logo_black.png": "2e7f5d648027252609c063eb062e411a",
"assets/assets/logos/ar_logo_white.png": "ca1d297a5e2ab5654d514a9282279417",
"assets/assets/logos/facebk.png": "63f13d85d02f44cfa03a5005f7d8f352",
"assets/assets/logos/google_1.png": "ca40640a7dbc839c6c67ff183feea9e4",
"assets/assets/logos/splash_dark.png": "64dd141db62679f1704d84ef7979b733",
"assets/assets/logos/splash_white1.png": "66cb622c0408e4918141a58f9f7eaa1e",
"assets/FontManifest.json": "baaeb07baa2c6f8510c945aea1445693",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "54fbf8bb69540f5c896ba00d278f0de1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/lucide_icons/assets/lucide.ttf": "f9ba0b4172a0beabfecd5857b55dfe72",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "566ddc46da3eadc36d4cb8d5ff444d35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d1d8a72b5547328160e11988fca154d",
"/": "6d1d8a72b5547328160e11988fca154d",
"main.dart.js": "72dfcd7ca3bd13a8155d1d98ad7c7595",
"manifest.json": "f4f26ae92e2bca35acbbbe65535a36f1",
"version.json": "eaba5b4af7ebe2aa872edf67a5fd86b2"};
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
