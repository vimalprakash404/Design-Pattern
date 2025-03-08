## Proxy Pattern

    The Proxy Pattern is a structural design pattern that provides an object that acts as a substitute or intermediary for another object. The proxy controls access to the original object, allowing additional functionality such as lazy loading, access control, logging, caching, and request validation.

### 🛠 When to Use the Proxy Pattern?
- **Access Control:** Restrict access to an object (e.g., authentication).
- **Lazy Loading:** Delay object initialization until it's actually needed.
- **Logging & Monitoring:** Track method calls or data access.
- **Caching:** Store frequently requested data to improve performance.
- **Security:** Protect sensitive operations from direct access.


### Example: Logging Proxy
    This proxy logs method calls before passing them to the real object.

```javascript
class RealService {
  request() {
    console.log("RealService: Handling request...");
  }
}

class ProxyService {
  constructor(realService) {
    this.realService = realService;
  }

  request() {
    console.log("Proxy: Logging request..."); // Extra behavior added
    this.realService.request(); // Forward request to the real object
  }
}

// Usage
const realService = new RealService();
const proxy = new ProxyService(realService);

proxy.request();
```

### How It Works (Step-by-Step)
1. Real Object (RealService)

    - This is the actual object that performs the main operation.
    - It has a request() method that prints "RealService: Handling request...".
1. Proxy Object (ProxyService)

    - Acts as an intermediary for RealService.
    - It logs a message before forwarding the request to the real service.
1. Usage (proxy.request())

    - When calling proxy.request(), the proxy:
    - Logs a message ("Proxy: Logging request...").
    - Calls realService.request() to execute the real operation.
```javascript
Proxy: Logging request...
RealService: Handling request...
```
##### ✅ The Proxy adds extra behavior (logging) before calling the real method.