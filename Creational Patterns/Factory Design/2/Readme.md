# 2️⃣ Logger Factory
## 💡 Problem:
**Your application needs to log messages to different outputs (ConsoleLogger, FileLogger, DatabaseLogger). Implement a Logger Factory that provides the correct logger.**

## 📌 Expected Input:

```javascript
const logger = LoggerFactory.createLogger("File");
logger.log("User signed in");
```
## 📌 Expected Output:

```sh
Logging to file: User signed in
```

*🔍 Hint: Each logger should have a log(message) method.*