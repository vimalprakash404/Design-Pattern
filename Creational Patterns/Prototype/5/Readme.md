### 5. Prototype for a Notification System
## 💡 Problem:
**Your system sends different types of notifications (email, SMS, push), but they share a common structure.**

### ✅ Solution:

## Create a notification prototype with a send() method.
*Clone and modify it for different notification types.*
📌 Example Usage:

```javascript
const notificationPrototype = {
    send(message) {
        console.log(`Sending ${this.type} notification: ${message}`);
    },
    clone() {
        return Object.create(this);
    }
};

const emailNotification = notificationPrototype.clone();
emailNotification.type = "Email";
emailNotification.send("Hello, check your inbox!"); 
// Output: Sending Email notification: Hello, check your inbox!
```