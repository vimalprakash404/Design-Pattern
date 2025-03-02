### 4. Prototype for API Requests
## 💡 Problem:
**Your application makes multiple API requests, but the requests share common properties like headers, timeout, etc.**

### ✅ Solution:

### Create an API request prototype with shared configurations.
Clone and modify it for different requests.
📌 Example Usage:

```javascript
const apiRequestPrototype = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    send(url) {
        console.log(`Sending ${this.method} request to ${url}`);
    },
    clone() {
        return Object.create(this);
    }
};

const getRequest = apiRequestPrototype.clone();
getRequest.send("https://api.example.com/users"); 
// Output: Sending GET request to https://api.example.com/users

const postRequest = apiRequestPrototype.clone();
postRequest.method = "POST";
postRequest.send("https://api.example.com/users"); 
// Output: Sending POST request to https://api.example.com/users
```