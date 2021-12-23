// Typescript workaround for the event types
declare var self: ServiceWorkerGlobalScope;
export {};

console.log("[Service worker] It just works")
self.addEventListener("install", (event: ExtendableEvent) => {
    event.waitUntil(
        caches.open("v1").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
            ])
        })
    )
})

self.addEventListener('activate', (event: ExtendableEvent)  => {
    
})

self.addEventListener("fetch", (event: FetchEvent) => {

})

