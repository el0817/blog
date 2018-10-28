importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "el0817-blog",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2782c7faf1f82301c5e2d5d1fca55fd8.css",
    "revision": "2782c7faf1f82301c5e2d5d1fca55fd8"
  },
  {
    "url": "/_nuxt/app.e022f3b064a34c9553d2.js",
    "revision": "a13f293e8f6f322c465d5c78e8aa0e81"
  },
  {
    "url": "/_nuxt/layouts/default.46f4bcaaddd2ecedff5d.js",
    "revision": "8b126d10fa2e28436dcf3f8c2083f288"
  },
  {
    "url": "/_nuxt/manifest.a165d5d5001d7c4de6b0.js",
    "revision": "53a8c257712dc555f76f7c83fffba82e"
  },
  {
    "url": "/_nuxt/pages/index.7d8ef3c8dbde797915b6.js",
    "revision": "966956dc662358bd2d224f6d1a6ae1f8"
  },
  {
    "url": "/_nuxt/pages/posts/_id.9ae35e5b4a2394706709.js",
    "revision": "89c5138d422bb195cffd52ebc9eb4f64"
  },
  {
    "url": "/_nuxt/pages/posts/index.3a70283ba2cc6c673dec.js",
    "revision": "6105a48ade3857e652e9c8e3a33b894b"
  },
  {
    "url": "/_nuxt/vendor.411a97ca455263ab2bae.js",
    "revision": "097639182753014272abb6a8943ff399"
  },
  {
    "url": "/_nuxt/vendor.46fb5c009ee58f8e503ebce4640d86b8.css",
    "revision": "46fb5c009ee58f8e503ebce4640d86b8"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

