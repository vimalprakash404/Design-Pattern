## 3️⃣ Caching Proxy
    You have an APIService class with a fetchData(url) method that fetches data from an API. Implement a CachingProxy that caches responses and returns cached data if available.

## Task
- If fetchData(url) is called for the first time, fetch from API.
- If fetchData(url) is called again with the same URL, return cached data.
Code Skeleton
```javascript
class APIService {
  fetchData(url) {
    console.log(`Fetching data from ${url}...`);
    return `Data from ${url}`;
  }
}

// Create CachingProxy here

// Usage
const api = new APIService();
const proxy = new CachingProxy(api);

console.log(proxy.fetchData("https://api.example.com/data")); // Fetches from API
console.log(proxy.fetchData("https://api.example.com/data")); // Returns cached data

```
### Expected Output
```
Fetching data from https://api.example.com/data...
Data from https://api.example.com/data
Returning cached data for https://api.example.com/data
Data from https://api.example.com/data
```