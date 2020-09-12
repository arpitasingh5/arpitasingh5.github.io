/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1bfc9850-961b2fdf7ce3fe337301.js"
  },
  {
    "url": "1bfc9850-961b2fdf7ce3fe337301.js.map",
    "revision": "255e1fd09c077305fa574b1f6d943278"
  },
  {
    "url": "1bfc9850-e12bfdcdf159505b2598.js"
  },
  {
    "url": "1bfc9850-e12bfdcdf159505b2598.js.map",
    "revision": "cd0ef69dd4a565a1874f53ec71a9f3be"
  },
  {
    "url": "252f366e-3d8b61ff3c616ab3e907.js"
  },
  {
    "url": "252f366e-3d8b61ff3c616ab3e907.js.map",
    "revision": "7c18cc4cf2d5071e4dd1c57147e4ad11"
  },
  {
    "url": "252f366e-ae1d607d8e7a34a71244.js"
  },
  {
    "url": "252f366e-ae1d607d8e7a34a71244.js.map",
    "revision": "0c02019dccd27c481985ab2c2f132a6e"
  },
  {
    "url": "404.html",
    "revision": "f58a2eaade5592d5153dcf433a8f7d34"
  },
  {
    "url": "404/index.html",
    "revision": "24495caddf13bb0c72f5f645f3a44a8b"
  },
  {
    "url": "95b64a6e-8dff0d5ebd3e0221fe3d.js"
  },
  {
    "url": "95b64a6e-8dff0d5ebd3e0221fe3d.js.map",
    "revision": "3c12cefaca89e0fdd97fb22fb19b1b96"
  },
  {
    "url": "95b64a6e-bb41279d15d402a5f8f8.js"
  },
  {
    "url": "95b64a6e-bb41279d15d402a5f8f8.js.map",
    "revision": "b2825fdc59b199e2f04a9d5f79a889c5"
  },
  {
    "url": "app-8e5f7520a38333894bcf.js"
  },
  {
    "url": "app-8e5f7520a38333894bcf.js.map",
    "revision": "8947b582d4d09005585dbf778b1f0f8c"
  },
  {
    "url": "chunk-map.json",
    "revision": "c33f8c2625abc12083a4e053f6495c41"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-1af2b3b136460c4ee92c.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-1af2b3b136460c4ee92c.js.map",
    "revision": "1f9694425cdafffcbee111ebbfefdc61"
  },
  {
    "url": "component---src-pages-404-js-ecb8928078486b8a7e43.js"
  },
  {
    "url": "component---src-pages-404-js-ecb8928078486b8a7e43.js.map",
    "revision": "a10f407e7e8af8106b31ae70044f7bae"
  },
  {
    "url": "component---src-pages-index-js-d21507b2f486ea2f9072.js"
  },
  {
    "url": "component---src-pages-index-js-d21507b2f486ea2f9072.js.map",
    "revision": "9f1a81bc35b98313e2db12b8f9a16561"
  },
  {
    "url": "component---src-pages-index-js-fdc3b00ac019d3623a43.js"
  },
  {
    "url": "component---src-pages-index-js-fdc3b00ac019d3623a43.js.map",
    "revision": "45a42da76e5bb34c0027768e411a90b2"
  },
  {
    "url": "d7eeaac4-9df777bc4a17974a1e2e.js"
  },
  {
    "url": "d7eeaac4-9df777bc4a17974a1e2e.js.map",
    "revision": "6b9cb74cea3951215c3748b737faf2fc"
  },
  {
    "url": "d7eeaac4-bed4ec3b45b340fd5805.js"
  },
  {
    "url": "d7eeaac4-bed4ec3b45b340fd5805.js.map",
    "revision": "7550ac1b0239d32efb2e44a1dc5b9c65"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "316ce22c144e620dab59a692042df86e"
  },
  {
    "url": "framework-a7bb16c5c6afeed647b2.js"
  },
  {
    "url": "framework-a7bb16c5c6afeed647b2.js.map",
    "revision": "cedebc8e93c59efaa2af4d4c61652d0b"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "7425ae1e72656d64ad3b06d56eda928b"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "67246fc2b900667066c758438ac10707"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "bd2b5f20b13854686d983fed68b38ac6"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "e065509a1c9826a72a90ef985d35ca07"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "f7563b9a1ddb98cb7dfbfae2e7f75d19"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "83ea8c9d1a82430c4fb99d05ef174df4"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "1a34cfea4f4b0d8b1ceac69910450514"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "2349fa1e134fed77692b71a4ceb46b2c"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "dc518383f9037f84e91a5ce581566d7b"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "175f80df0f6a9dfb87c2416ea5e1edfd"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8d8a34d5d9dffa6a6396358eeefbb12a"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "73b53c376c0c6df9ec96677d201cf94b"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "517e1f8ce5610edb94d7dea4bede4428"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2a0640c5f2604839eb73786578d393e5"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "06161a94f1e57a13ae942e5d896a1ef2"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e88555c77f3b58bbdf1112293f5886bb"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "polyfill-1623e8dfae5ff58e9a52.js"
  },
  {
    "url": "polyfill-1623e8dfae5ff58e9a52.js.map",
    "revision": "44f667e0a396ea338d0d1735b21ca31a"
  },
  {
    "url": "sitemap.xml",
    "revision": "24b83904d0d76e45a790dd0b54f5c3a9"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/0aa94/sketch.webp"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/4c427/sketch.png"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/91664/sketch.png"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/c05ea/sketch.webp"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/e711a/sketch.webp"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/ff4be/sketch.png"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/0aa94/fcpx.webp"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/4c427/fcpx.png"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/91664/fcpx.png"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/c05ea/fcpx.webp"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/e711a/fcpx.webp"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/ff4be/fcpx.png"
  },
  {
    "url": "static/0ee2ba99d3da902497fd3723565d0807/183c2/thapar.png"
  },
  {
    "url": "static/0ee2ba99d3da902497fd3723565d0807/829e2/thapar.png"
  },
  {
    "url": "static/0ee2ba99d3da902497fd3723565d0807/ff4be/thapar.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/2a4de/preview.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/403a4/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/58556/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/630fb/preview.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/6d161/preview.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/ad85c/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/e7487/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/ee604/preview.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/1f5c5/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/2a4de/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/497c6/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/58556/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/61e93/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/65e33/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/685a2/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/69585/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/ad85c/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/bbee5/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/d1f52/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/ee604/mutual-fund-calculator.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/0aa94/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/4c427/web.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/91664/web.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/c05ea/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/e711a/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/ff4be/web.png"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/0756a/about.png"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/34b62/about.webp"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/525af/about.png"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/52ea1/about.webp"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/61fd6/about.png"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/62915/about.png"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/7f8e9/about.webp"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/a3e81/about.webp"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/a8378/about.png"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/bc59e/about.png"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/cc834/about.webp"
  },
  {
    "url": "static/355021e47b80001f53d4c87675ce740b/cde37/about.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/0aa94/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/4c427/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/91664/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/c05ea/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/e711a/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/ff4be/nodejs.png"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/0aa94/python.webp"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/4c427/python.png"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/91664/python.png"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/c05ea/python.webp"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/e711a/python.webp"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/ff4be/python.png"
  },
  {
    "url": "static/3b8275bff1fad3c2b44fe25946a92dfa/02c28/amadeus.png"
  },
  {
    "url": "static/3b8275bff1fad3c2b44fe25946a92dfa/3fc98/amadeus.png"
  },
  {
    "url": "static/3b8275bff1fad3c2b44fe25946a92dfa/63538/amadeus.webp"
  },
  {
    "url": "static/3b8275bff1fad3c2b44fe25946a92dfa/897d6/amadeus.webp"
  },
  {
    "url": "static/3b8275bff1fad3c2b44fe25946a92dfa/8c258/amadeus.png"
  },
  {
    "url": "static/3b8275bff1fad3c2b44fe25946a92dfa/f4842/amadeus.webp"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/0aa94/tensorflow.webp"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/4c427/tensorflow.png"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/91664/tensorflow.png"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/c05ea/tensorflow.webp"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/e711a/tensorflow.webp"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/ff4be/tensorflow.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/1f5c5/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/2a4de/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/497c6/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/58556/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/61e93/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/65e33/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/69585/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/9cf1d/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/ad85c/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/d1f52/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/d8298/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/ee604/reactive-resume.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/0aa94/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/4c427/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/91664/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/c05ea/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/e711a/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/ff4be/database.png"
  },
  {
    "url": "static/7cd58c2a33a1e00986cbe050a2312db5/02c28/novartis.png"
  },
  {
    "url": "static/7cd58c2a33a1e00986cbe050a2312db5/3fc98/novartis.png"
  },
  {
    "url": "static/7cd58c2a33a1e00986cbe050a2312db5/63538/novartis.webp"
  },
  {
    "url": "static/7cd58c2a33a1e00986cbe050a2312db5/897d6/novartis.webp"
  },
  {
    "url": "static/7cd58c2a33a1e00986cbe050a2312db5/8c258/novartis.png"
  },
  {
    "url": "static/7cd58c2a33a1e00986cbe050a2312db5/f4842/novartis.webp"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/119c4/logo.png"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/130c1/logo.png"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/20ef8/logo.png"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/26717/logo.png"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/2b4de/logo.webp"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/307ba/logo.png"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/408a9/logo.webp"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/a5ab3/logo.webp"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/bda67/logo.webp"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/be3cd/logo.png"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/d0fb6/logo.webp"
  },
  {
    "url": "static/8b9e1b714aab69ec0f1a8aaeb4aafa7a/d3cb6/logo.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/09af0/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/1f5c5/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/2a4de/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/497c6/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/58556/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/61e93/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/65e33/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/69585/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/ad85c/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/bbdb3/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/d1f52/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/ee604/be-thrifty-today.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/0aa94/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/4c427/android.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/91664/android.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/c05ea/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/e711a/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/ff4be/android.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/1f5c5/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/2a4de/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/497c6/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/58556/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/61e93/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/65e33/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/69585/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/ad85c/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/d1f52/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/e0dbb/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/e1b47/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/ee604/madrasi-bride.png"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/0aa94/photography.webp"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/4c427/photography.png"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/91664/photography.png"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/c05ea/photography.webp"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/e711a/photography.webp"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/ff4be/photography.png"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/0b7e8/icon.webp"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/62cc5/icon.webp"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/adbdf/icon.webp"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/aff39/icon.png"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/c1598/icon.png"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/ea22a/icon.png"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/0756a/photo.png"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/0aa13/photo.png"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/22bc8/photo.webp"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/34b62/photo.webp"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/61fd6/photo.png"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/62915/photo.png"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/7f8e9/photo.webp"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/a3e81/photo.webp"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/a8378/photo.png"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/bc59e/photo.png"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/cc834/photo.webp"
  },
  {
    "url": "static/bbbaee90ce8d735c15d222db7f440dbc/cde37/photo.webp"
  },
  {
    "url": "static/d/1222469640.json"
  },
  {
    "url": "static/d/1409895069.json"
  },
  {
    "url": "static/d/1688607152.json"
  },
  {
    "url": "static/d/2217879028.json"
  },
  {
    "url": "static/d/2392941271.json"
  },
  {
    "url": "static/d/2513114674.json"
  },
  {
    "url": "static/d/2864300244.json"
  },
  {
    "url": "static/d/3506755355.json"
  },
  {
    "url": "static/d/3839990767.json"
  },
  {
    "url": "static/d/3961674297.json"
  },
  {
    "url": "static/d/4056429656.json"
  },
  {
    "url": "static/d/883961150.json"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/0aa94/flutter.webp"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/4c427/flutter.png"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/91664/flutter.png"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/c05ea/flutter.webp"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/e711a/flutter.webp"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/ff4be/flutter.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/1f5c5/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/2a4de/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/497c6/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/58556/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/605f8/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/61e93/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/65e33/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/69585/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/81149/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/ad85c/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/d1f52/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/ee604/words-i-know.png"
  },
  {
    "url": "styles-89fd2ae28bdf06750a71.js"
  },
  {
    "url": "styles-89fd2ae28bdf06750a71.js.map",
    "revision": "50a943b8a40210b91a33534f76345165"
  },
  {
    "url": "styles.e5201a974d419c681ad0.css"
  },
  {
    "url": "webpack-runtime-33cecf0f65ef0b6c995a.js"
  },
  {
    "url": "webpack-runtime-33cecf0f65ef0b6c995a.js.map",
    "revision": "e6f559bf4c04d0fb9d02c7e09a40a142"
  },
  {
    "url": "webpack-runtime-c89be84214faafebd409.js"
  },
  {
    "url": "webpack-runtime-c89be84214faafebd409.js.map",
    "revision": "08716be176efda4b6969966c836b41ca"
  },
  {
    "url": "webpack.stats.json",
    "revision": "844c24ec6600f8cc47b0ce9f0f3f158f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-8e5f7520a38333894bcf.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
