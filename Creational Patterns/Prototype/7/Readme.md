### 7. Prototype for a Chatbot Reply System
## 💡 Problem:
**A chatbot has predefined responses (greeting, help, farewell), but each bot may need custom variations.**

### ✅ Solution:

### Create a reply prototype and clone it for different responses.
📌 Example Usage:

```javascript
const chatbotReplyPrototype = {
    reply() {
        console.log(`${this.message}`);
    },
    clone() {
        return Object.create(this);
    }
};

const greetingReply = chatbotReplyPrototype.clone();
greetingReply.message = "Hello! How can I help you?";
greetingReply.reply(); // Output: Hello! How can I help you?
```