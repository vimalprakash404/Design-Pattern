## 3. Prototype for a Logger System
### 💡 Problem:
**You need a logging system where different loggers (fileLogger, consoleLogger) share common logging methods.**

### ✅ Solution:

### Create a logger prototype with a log() method.
*Clone and modify specific loggers.*
📌 Example Usage:

```javascript
const loggerPrototype = {
    log(message) {
        console.log(`[${this.type}] ${message}`);
    },
    clone() {
        return Object.create(this);
    }
};

const fileLogger = loggerPrototype.clone();
fileLogger.type = "FileLogger";
fileLogger.log("Logging to a file"); // Output: [FileLogger] Logging to a file

const consoleLogger = loggerPrototype.clone();
consoleLogger.type = "ConsoleLogger";
consoleLogger.log("Logging to console"); // Output: [ConsoleLogger] Logging to console
```