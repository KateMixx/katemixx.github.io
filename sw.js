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
    "url": "webpack-runtime-f278135b905490d55308.js"
  },
  {
    "url": "framework-f045dbe50023c9eeb99e.js"
  },
  {
    "url": "app-c83daf22cbb98b5c6b02.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f078f37d57f48d090f96dd4b5f7cea19"
  },
  {
    "url": "google-fonts/s/droidserif/v12/tDbI2oqRg1oM3QBjjcaDkOr9rAU.woff2",
    "revision": "62b4ed3cb1a22974f1a1b14a45ebb76e"
  },
  {
    "url": "google-fonts/s/droidserif/v12/tDbK2oqRg1oM3QBjjcaDkOr4nAfcHg.woff2",
    "revision": "847076af0a2064282724f913e8443124"
  },
  {
    "url": "google-fonts/s/droidserif/v12/tDbV2oqRg1oM3QBjjcaDkOJGiRD7OwE.woff2",
    "revision": "c914631f20a99ca0d322d775090ea4f7"
  },
  {
    "url": "google-fonts/s/droidserif/v12/tDbX2oqRg1oM3QBjjcaDkOr4lLz5CwOnSA.woff2",
    "revision": "21b7bed43e1c81de0277b6e2e96e9981"
  },
  {
    "url": "google-fonts/s/droidserif/v13/tDbI2oqRg1oM3QBjjcaDkOr9rAU.woff2",
    "revision": "62b4ed3cb1a22974f1a1b14a45ebb76e"
  },
  {
    "url": "google-fonts/s/droidserif/v13/tDbK2oqRg1oM3QBjjcaDkOr4nAfcHg.woff2",
    "revision": "847076af0a2064282724f913e8443124"
  },
  {
    "url": "google-fonts/s/droidserif/v13/tDbV2oqRg1oM3QBjjcaDkOJGiRD7OwE.woff2",
    "revision": "c914631f20a99ca0d322d775090ea4f7"
  },
  {
    "url": "google-fonts/s/droidserif/v13/tDbX2oqRg1oM3QBjjcaDkOr4lLz5CwOnSA.woff2",
    "revision": "21b7bed43e1c81de0277b6e2e96e9981"
  },
  {
    "url": "google-fonts/s/kaushanscript/v8/vm8vdRfvXFLG3OLnsO15WYS5DG74wNI.woff2",
    "revision": "e2ea67e80b95334da4768bffdf3d4f9d"
  },
  {
    "url": "google-fonts/s/kaushanscript/v9/vm8vdRfvXFLG3OLnsO15WYS5DG74wNI.woff2",
    "revision": "e2ea67e80b95334da4768bffdf3d4f9d"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2",
    "revision": "39d93cf678c740f9f6b2b1cfde34bee3"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2",
    "revision": "bc3aa95dca08f5fee5291e34959c27bc"
  },
  {
    "url": "google-fonts/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2",
    "revision": "39d93cf678c740f9f6b2b1cfde34bee3"
  },
  {
    "url": "google-fonts/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2",
    "revision": "bc3aa95dca08f5fee5291e34959c27bc"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b2b665af9dfdaffd8641.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7abcc02f13fbb3533e2610525c5b2def"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3d0dba3f822089b2dd5deb8356c77fc7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

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
  if (!resources || !(await caches.match(`/app-c83daf22cbb98b5c6b02.js`))) {
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
