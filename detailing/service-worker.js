"use strict";var precacheConfig=[["/detailing/index.html","8a773dfb1f9a85307dddf724ae4fc23f"],["/detailing/static/css/main.35f7b473.css","147cfdb947e53d464c91e1b95748adb3"],["/detailing/static/js/main.aaac9eed.js","8f29f915eb54f753c2d9182c53f28f7a"],["/detailing/static/media/DIN-Next-W01-Light.4dc77f0f.woff","4dc77f0ff1474412272ba230b085d035"],["/detailing/static/media/DIN-Next-W02-Light.4a4bf0fe.woff","4a4bf0fe935cd023c1bc6a6d0700a3f1"],["/detailing/static/media/DIN-Next-W10-Light.ec19c194.woff","ec19c194fa1688b324ebf7aa7a0a1864"],["/detailing/static/media/logo.19d45880.png","19d45880ee40888d703c6756d4860f6b"],["/detailing/static/media/logo2.a195523c.png","a195523cec697c0462f8935b825be1cc"],["/detailing/static/media/paint.a8168613.jpg","a81686135fb8bbad1d14ef7253a3a84b"],["/detailing/static/media/pic1.6f22dcca.jpg","6f22dcca816381935b1d48d3e70409ef"],["/detailing/static/media/qotes.8bd401aa.webp","8bd401aa9117a958474b9ac56987e63c"],["/detailing/static/media/repairAfter.4d4480f0.jpg","4d4480f0c93dd492b963a564603b5619"],["/detailing/static/media/repairDo.f902fd25.jpg","f902fd25f211eef0ef3ad03704e8a223"],["/detailing/static/media/serviceMain.25abe742.jpg","25abe7427fb6de3d2fddff8ec5af4900"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/detailing/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});