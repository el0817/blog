importScripts('/blog/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "el0817-blog",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/blog/_nuxt/app.2782c7faf1f82301c5e2d5d1fca55fd8.css",
    "revision": "2782c7faf1f82301c5e2d5d1fca55fd8"
  },
  {
    "url": "/blog/_nuxt/app.d7da3da0c3ca1070206d.js",
    "revision": "ec90e20d909c8122122655a3f44041fd"
  },
  {
    "url": "/blog/_nuxt/layouts/default.46f4bcaaddd2ecedff5d.js",
    "revision": "8b126d10fa2e28436dcf3f8c2083f288"
  },
  {
    "url": "/blog/_nuxt/manifest.938da1287de462467fcc.js",
    "revision": "5133e6de08c8efc2b2c3b569ddbb6138"
  },
  {
    "url": "/blog/_nuxt/pages/index.e3eba0b41e757d11b41b.js",
    "revision": "a5731ece6bfdfad07c944023669468af"
  },
  {
    "url": "/blog/_nuxt/pages/posts/_id.797086b2a6c2a12959de.js",
    "revision": "aafe063e7212eed4fa9b787b70e0bd5e"
  },
  {
    "url": "/blog/_nuxt/pages/posts/index.f9cfa723b7975dfdf6ee.js",
    "revision": "9578e7051e1008b5f8f054c0b2a1c67d"
  },
  {
    "url": "/blog/_nuxt/vendor.411a97ca455263ab2bae.js",
    "revision": "097639182753014272abb6a8943ff399"
  },
  {
    "url": "/blog/_nuxt/vendor.46fb5c009ee58f8e503ebce4640d86b8.css",
    "revision": "46fb5c009ee58f8e503ebce4640d86b8"
  }
])


workboxSW.router.registerRoute(new RegExp('/blog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/blog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

