const VERSION = 'v1'


self.addEventListener('install', e=>{
    console.log('install')
    e.waitUntil(precache())
})

self.addEventListener('fetch', e=>{
    const request = e.request;
    //get
    if(request.method!=="GET"){
        return
    }


    //buscar en cache
    e.respondWith(cachedResponse(request))


    //actualizar el cache
    e.waitUntil(updateCache(request))
})

async function precache(){
    const cache = await caches.open(VERSION)
    cache.addAll([
    ])
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response|| fetch(request)
}

async function updateCache(request){
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request,response)
}