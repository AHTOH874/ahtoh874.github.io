"use strict";var precacheConfig=[["/detailing/index.html","7b2767f087f2dc87d3e4274798868a8f"],["/detailing/static/css/main.a915889e.css","f320eb2fe222a4c34261b2ce7e126744"],["/detailing/static/js/main.1519e3b9.js","bfd0cd6d8e7544950210463921474637"],["/detailing/static/media/after 1.c5b22783.png","c5b2278391893055a56fdecb2d0e6031"],["/detailing/static/media/after 2.c5868056.png","c58680561f6a5feec5b4bf883e439c11"],["/detailing/static/media/after 3.88523de7.png","88523de7ec9a543be463c93249e5f893"],["/detailing/static/media/after 4.261121b2.png","261121b2255cb3994a4add9b8411a3ed"],["/detailing/static/media/do 1.5842db13.png","5842db133f6798b86313340904886201"],["/detailing/static/media/do 2.9871851f.png","9871851f7270f720c9553e6432f6027e"],["/detailing/static/media/do 3.804671e6.png","804671e6afd5aad5f6ee958ece9b0027"],["/detailing/static/media/do 4.bea365dd.png","bea365dd66ed19922f5d8950b87ee596"],["/detailing/static/media/logo.19d45880.png","19d45880ee40888d703c6756d4860f6b"],["/detailing/static/media/logo2.a195523c.png","a195523cec697c0462f8935b825be1cc"],["/detailing/static/media/logo3.a9e5d0ff.jpeg","a9e5d0ff3af57d6a91cd5c3c199635c7"],["/detailing/static/media/pic1.6f22dcca.jpg","6f22dcca816381935b1d48d3e70409ef"],["/detailing/static/media/pic10.966e91b5.jpg","966e91b56cd0ee96e4bfb6064f361c3f"],["/detailing/static/media/pic3.04f5d88b.jpg","04f5d88bb48e973eda1304c39279024e"],["/detailing/static/media/pic5.5169fcdf.jpg","5169fcdf7ef0376bbf5d9e1fc21da55b"],["/detailing/static/media/pic6.4e007cb4.jpg","4e007cb4a97cd7aa8e139a6f0f5c1a7c"],["/detailing/static/media/pic7.0a3dd9e7.jpg","0a3dd9e7b1afe264e7bcc60b64959743"],["/detailing/static/media/pic8.fb0c5d8a.jpg","fb0c5d8a13c96c3fc95f4d69f0ddec78"],["/detailing/static/media/qotes.8bd401aa.webp","8bd401aa9117a958474b9ac56987e63c"],["/detailing/static/media/serviceMain.25abe742.jpg","25abe7427fb6de3d2fddff8ec5af4900"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var i=new URL(e);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),i=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var i="/detailing/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});