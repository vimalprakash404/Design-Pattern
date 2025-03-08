### 1️⃣ Convert a Legacy Logger to a Modern Logger
    You have a legacy logging system with a logMessage(msg) function. Your new application uses a log(msg, level) function where level can be "info", "warn", or "error".

## 👉 Task: Write an adapter to make the legacy logger work with the new system.

```javascript
class LegacyLogger {
  logMessage(msg) {
    console.log(`Legacy Log: ${msg}`);
  }
}

class ModernLogger {
  log(msg, level) {
    console.log(`[${level.toUpperCase()}] ${msg}`);
  }
}

// Create an adapter class
class LoggerAdapter {
  // Your implementation here
}

// Usage
const legacyLogger = new LegacyLogger();
const adaptedLogger = new LoggerAdapter(legacyLogger);

adaptedLogger.log("This is an info message", "info");
adaptedLogger.log("This is a warning", "warn");
adaptedLogger.log("An error occurred", "error");
```