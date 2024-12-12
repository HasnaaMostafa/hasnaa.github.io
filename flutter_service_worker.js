'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "72440f4f58476bafb4b1027ea0494cad",
".git/config": "df4759ee4e89c2f75fce8887dd3e5a3c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "575ec77a73695854e6fab9153f470c40",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a1482be5286fb8c444655f7f1fe2efad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d10001fa8d23b54a8b4af6349367b6a0",
".git/logs/refs/heads/main": "332b3d62a7f3732769110291cee6ff66",
".git/logs/refs/remotes/origin/main": "29d7a8881c4fa33a6739b8db0fb8d7e0",
".git/objects/01/ca69aecf7fde879f57cc18661e79906832ccdb": "43c175d9651b0e5d2600145df2f0a27f",
".git/objects/02/4c614bc9eb23e20363bd9ca2621c5bbed3b63e": "43840423b2d5de0217e7a9b04e228950",
".git/objects/03/03e24c196d09a5e4f7709160040c487026d7c0": "8bee2e94be39e7a028d5ecd564c2b638",
".git/objects/03/4811e16472397a16261ebc921e78dd19c28ee8": "46c65c72b1954d80772c566f64a07107",
".git/objects/06/9b1340da8c110b024a9a697370ab32b16d956c": "acbf140e245de59b07e10286423fd16c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/11/bba87044028997ba9c46c0f7696603f3847d24": "f6604aa37c7e95e53c04186471778004",
".git/objects/13/184e7bf27430f739004c56dcbcc9057f9011b2": "cb376b1617e8f85c980611ffb582966b",
".git/objects/15/74f8c9b2475a39bceab75106d89c5efb1d1cda": "0b01a6a538f9f6bf98488f539556254b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/2f8b1d8ca1d241b58b5d54d65bbf1dc4c8900f": "d82d4c66c044192f54bccd36fdd1fb7a",
".git/objects/24/d45f7a90e14a05fe10f7975c78457c6c0fa7d2": "0b6c3ec27e49dedc55b73edcd2a575f2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/528821ebefe161f3b84474d6d2c517251fa54d": "924d9649dc6bcd0a7b6b09f372fe9547",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/46533b5bcd0698df0bc93bd6234a4a43ac18f6": "a168f63c2689435f7c762eb9b5756d52",
".git/objects/38/4ca79e37f96983d2afcfa0c2dc51c20765e558": "c2c98dad43f61e0ec280ef3f9d53b1bb",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/30db8658d7303874b6bdc091dab8b053cee7ef": "48a134aa0eff286a26791b20b369ddec",
".git/objects/48/9ade6ba519f679dfd3a3126453da8b64311c83": "5d6eb47d43d9a3dce3bc94d66e661238",
".git/objects/4c/c45ff8d502d2ac11c10b6407f98d29c00be539": "58375e5d1b4e79ea2428f54344779512",
".git/objects/4c/e0967a26f83aea0ee93c085662d2c31d0d0303": "808ba5ee7d6058e6a7b1aeae9d5ed7d9",
".git/objects/52/094868ac92164d260efa273736254ec5fb049f": "ae550d2507c64819ec90788d7533cb26",
".git/objects/59/2a82093bd873a4187e04430e006b766f4dd641": "da21350bc4865cc1d949b534437ca2cc",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/6d50e36c8f93acc3934a5c8ee2b3abf0b41836": "72b16e7a2793e27df4eee804869fbde9",
".git/objects/5b/0024147bfae9727acf1af600baec23f07a9687": "7b50862392c00d0da2918d53fdf75f5f",
".git/objects/5d/a2a1cb2cc56643dc34e7b5821ab3a02e70aacf": "47ba49a5dacc2e186dcba665d8dae955",
".git/objects/60/2831a7ebebb0939b032beb9d29fb4ff8f95150": "196f3aeea9753da2f34785c35aaf77c5",
".git/objects/68/9c3850249af917e73547dc0569ce1e1b9804b9": "513dcca0f6d8a2da90e1ba1978d69727",
".git/objects/68/ee71014ae05731e4e89bdc8d99a028ee2369e4": "30fb1727e07e9b62492c507d318dc304",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/74/5eeea344dc70dc03abdbe905766b39f5986ff4": "09d50480aa8673faaf41a614d891d32b",
".git/objects/79/0b8c0ed5a556dc3a0f28a885a8064ea35f2d34": "143455520a31a52d33078f6ed0a3b15d",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/cb45cd5982f35e4df3cf4c9670e1229cc3001a": "37d64cb851d317dda626f56342bc61b4",
".git/objects/80/5cf0b1f9208c558ffae46f1a1df01bccee9e95": "4c0b51eb84cfd2603cc450f955792030",
".git/objects/81/d4c393da8550e97d176e3ff1a3230e71f00657": "1e38b3477de97dacf74011390475b221",
".git/objects/83/c62c18bbf4eef2aff0b08d256e0017e4f1c6e7": "bf7e3e6d3335ceb7dffb4001ccef3756",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/ffcf319d18a77502ffbb9d34f63a9e749266a0": "ef7d778a34be5bf153529985eb2e9c01",
".git/objects/87/72ac6922fcecf3fe127843ad077f61a60b0a57": "5bf29b690bded1ff00fd9caccfedebe2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/243d87b38d8ca152f682fe63a0802508442150": "0e5144e95e855badef0d0841ec4dd5ef",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/4c61baa9edbb65b02bb1e2c6602820da19f1ec": "dbd38308bdf5bf9490c5938be65ab882",
".git/objects/94/5d53824f3c9510e9ee3ae1aadfb31c5272b607": "42051b50c372e82ae6add84003ae8adf",
".git/objects/97/1e4fc00d27645ee6c975a2156b12bebb243aa7": "87b0dbd9f9c047f8f6ae9ed64f1a0f4d",
".git/objects/98/4617b644cdfe7130c1c905ebed35d27230d9ab": "1f7b7614b6cef6455647f10b26ad7e40",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/a5/14b2fd688e1c6b47976f2cc79b9787882c8bf3": "bad1c0129ea9cbadfec9f1ebb0bd3ba8",
".git/objects/a8/1c6d584496ec087c2f60dd516920ce504c5652": "93b00ffefe486135120542f5d6256fe1",
".git/objects/aa/460fb4de59379250a5a2c04daab34b8a0d23e0": "7b1b98da0bf8d5707affba35bc005b1f",
".git/objects/aa/e859fd0cef37386cb38fbb3df1940a2c8501fe": "74fefae322b2ff8170834de38458668f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8219ca77933733a0c3616a5e4a0b2ed238eae4": "3a97bdd49b9d39d2616e4aea84f8f34a",
".git/objects/ba/41e83c7daed71b066ce9b56c0a06710f5f1a2e": "579f131b573b35ae1ddc648f898ead89",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c9/836c21a2c802a9fd2b881238f8ea01d542c13e": "ee2931f839c1f81e0ad63ce50848613a",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/48f9e79492935189ce9f8c275e7117ce5bf2dc": "4946e5b842ac3f062f8a0fb0ac885065",
".git/objects/cb/6d702c3df32c5339fab56e68e6032dd3c59790": "ed76869e3291bfe4267118c509945f2b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/d57ed0704ef55b49696ed0bf47d2b4ccc05219": "31add135008b2891796ec8fca9630416",
".git/objects/d6/1ed3f0120201b2b82491d920096f072d2cccd3": "c6d4de246522ee1bcfc97b5aaa8227b0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/ce0a6daaf83a62c7ae0cf9fc1cdb53a0fdcd33": "06e7bd8e3cf1b42c6365bf2416dd1a84",
".git/objects/dd/54032f5109b3e9fa8736e2c703ac0a2ef0bfdf": "614216f805a4391632193c61bd4786cb",
".git/objects/df/caf8ba10c66c06733013d3d79d8b138e980f7d": "b640c0c7cff1e3a122fcec2dafd49410",
".git/objects/e2/13600edbe5273566d605cf925d58c193b97015": "1f77f54ef63517b1eec2c13c1bbaa900",
".git/objects/e6/e9d907dd75930fdb11666e7aafc69c0e54fda8": "946b06ffa738c5396711f93ebd47b8dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/5cac68587d03775ffe0eccdc2f20af820af4cf": "bcc5d73c28ea9bc471ea49ad6dec67c6",
".git/objects/ef/efa4f3c6d7bfc55aa28ed539923bf3567b9152": "517b8b8cc86196d6a7e6d7d833f60969",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1b507762510846a5c8794fa9f9bf0a6d899175": "bd3e4c73be67a43a7aabb3f6ad9564f7",
".git/objects/f4/8fa9d1ed64ad5b421492adc79becb634332add": "f162e49f0e0dc1de912c5b83e315ff8b",
".git/objects/fa/bc6e73b959b1052ab60b57fdeaf45a8e2894aa": "62ccf90d3959886156db441db672394e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/7db58fda5c4d860968ccd65939f1aa3ab2a0f2": "4a23011c673d6b2ed04d901c5b47aaef",
".git/objects/fe/ea7b428b5c47709852293147a3c00ad064d5e2": "7cd1dddfa2dbabee244a5368db84aade",
".git/ORIG_HEAD": "7d8183b3c1ecff043cc36a1eb4104752",
".git/refs/heads/main": "763f670d4a4ac1c1c576e35f17c6d69d",
".git/refs/remotes/origin/main": "763f670d4a4ac1c1c576e35f17c6d69d",
"assets/AssetManifest.bin": "4cc15762f707bfbce9d72fedb1c3a912",
"assets/AssetManifest.bin.json": "49f48371366d66be2f74ddf2aedf84f1",
"assets/AssetManifest.json": "e87bba9d3cd4853957ecf4753ba53f66",
"assets/assets/fonts/Berkshire%2520Swash.ttf": "ce313427e6a2252bb111eb6474bc1e03",
"assets/assets/images/bookly_app.jpg": "18eee378e136e1c63c320cda4b912c5f",
"assets/assets/images/boutique_app.jpg": "12d9a570d1ec0d196a84a9bf80874224",
"assets/assets/images/github.svg": "60106c68e09fbdca5f90b3734b414bb6",
"assets/assets/images/hm.svg": "53620126687bbfb50d2dc43a603b7a02",
"assets/assets/images/home.png": "c37a8202c0cc24058585a814622ede90",
"assets/assets/images/lin.svg": "5100826d208b6c173e599d9463b36dcf",
"assets/assets/images/me.jpg": "8a199f4cde526f1c6dd7db8893e74a10",
"assets/assets/images/movie_zone.jpg": "4e6198bafb50c6e3634640c09c64e8a2",
"assets/assets/images/note_app.jpeg": "0caab43d50a4145b3a99bf2e618eca5d",
"assets/assets/images/vital_heal.jpg": "d02b1d37eb609c6926260394ee6d94c7",
"assets/assets/images/weather_app.jpg": "5e284cc238943fbbf6d95ccdd6bea673",
"assets/FontManifest.json": "6325b8f7b31aca5917d21ed812340d69",
"assets/fonts/MaterialIcons-Regular.otf": "9994f7d11859355051c37fed238df3e2",
"assets/NOTICES": "7f310b038fa923cf4d76d21ca1db6747",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "409fef8f7652ba7cef3c4cf271dd6d1b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "fc53a65029b29395517b67cd06551777",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
