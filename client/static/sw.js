importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0986c9ec80321aab912d.js",
    "revision": "0e244b2506ad2186b0dd87a396a4e300"
  },
  {
    "url": "/_nuxt/0fd26a36be2cf92c95f0.js",
    "revision": "f0e3858ff1f9dcdb38b86a941d839602"
  },
  {
    "url": "/_nuxt/31bdee08416b6bab464e.js",
    "revision": "1d1c36fe34d92c7225982930be3883a7"
  },
  {
    "url": "/_nuxt/3385fd390c8e6259d8d0.js",
    "revision": "51623fc3e2ce5c1b31e7618ed15833e6"
  },
  {
    "url": "/_nuxt/6523e0340df9af4db3f1.js",
    "revision": "585babf721db61d5f96718f96b0946c4"
  },
  {
    "url": "/_nuxt/824db4ea41474fd1e732.js",
    "revision": "070e49a02afa3bb8f6d5176db35a259e"
  },
  {
    "url": "/_nuxt/a1934540f7a3aa277c04.js",
    "revision": "af5e46ab50a57867542ff705484783e0"
  }
], {
  "cacheId": "ctrlHomeGadget",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
