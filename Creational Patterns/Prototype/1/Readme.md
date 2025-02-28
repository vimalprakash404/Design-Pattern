## 💡 Problem:
**You need a system where multiple database connections can share common properties instead of reinitializing them every time.**

### ✅ Solution:

#### Create a database connection prototype with properties like host, port, and connect() method.
*Clone the prototype whenever a new connection is needed.
This prevents redundant memory usage for repeated connections.*

### 📌 Example Usage:

```javascript
const dbPrototype = {
    host: "localhost",
    port: 27017,
    connect() {
        console.log(`Connecting to DB at ${this.host}:${this.port}`);
    },
    clone() {
        return Object.create(this);
    }
};

const db1 = dbPrototype.clone();
db1.connect(); // Output: Connecting to DB at localhost:27017

const db2 = dbPrototype.clone();
db2.host = "127.0.0.1";
db2.connect(); // Output: Connecting to DB at 127.0.0.1:27017
```