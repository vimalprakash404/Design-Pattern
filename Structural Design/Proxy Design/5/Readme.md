## 5️⃣ Read-Only Proxy
    You have a config object that should be read-only. If someone tries to modify it, show an error message.

### Task
Use JavaScript's Proxy API to prevent modification.
If a property is modified, show "Cannot modify read-only config".
```javascript 
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

// Create ReadOnlyProxy here

// Test Cases
console.log(readOnlyProxy.apiUrl); // Should return "https://api.example.com"
readOnlyProxy.timeout = 10000; // Should show an error
```
### Expected Output
```sh
https://api.example.com
Cannot modify read-only config
```