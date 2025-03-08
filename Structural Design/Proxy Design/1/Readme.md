## 1️⃣ Logging Proxy
    You have a UserService class with a getUser(id) method that fetches user details. Create a LoggingProxy that logs when getUser(id) is called.

### Task
    Implement a LoggingProxy that logs:
    "Fetching user with ID: {id}" before calling getUser(id).
### Code Skeleton
```javascript
class UserService {
  getUser(id) {
    return { id, name: "Alice" };
  }
}

// Create LoggingProxy here

// Usage
const service = new UserService();
const proxy = new LoggingProxy(service);

console.log(proxy.getUser(1));
```
### Expected Output
```sh
Fetching user with ID: 1
{ id: 1, name: 'Alice' }
````