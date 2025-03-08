## 4️⃣ Lazy Loading Proxy
    You have a HeavyResource class that takes time to load. Instead of initializing it immediately, only create it when fetchData() is first called.

## Task
    HeavyResource should only be initialized when fetchData() is called.
```javascript
class HeavyResource {
  constructor() {
    console.log("HeavyResource: Loading large data...");
  }

  fetchData() {
    console.log("HeavyResource: Fetching data...");
  }
}

// Create LazyLoadingProxy here

// Usage
const proxy = new LazyLoadingProxy();
console.log("Proxy created, but resource is not loaded yet...");
proxy.fetchData(); // Should initialize the resource only now
```
### Expected Output
```sh
Proxy created, but resource is not loaded yet...
HeavyResource: Loading large data...
HeavyResource: Fetching data...
```