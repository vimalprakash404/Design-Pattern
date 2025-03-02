### 10. Prototype for a User Session Manager
## 💡 Problem:
### You need a session manager where multiple user sessions share authentication properties.

## ✅ Solution:

### Create a session prototype with shared properties like userID and token.
**Clone it to create multiple user sessions.**
📌 Example Usage:

```javascript
const sessionPrototype = {
    authenticate() {
        console.log(`User ${this.userID} authenticated with token ${this.token}`);
    },
    clone() {
        return Object.create(this);
    }
};

const userSession = sessionPrototype.clone();
userSession.userID = "12345";
userSession.token = "abcdef";
userSession.authenticate(); // Output: User 12345 authenticated with token abcdef
```