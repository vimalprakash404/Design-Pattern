## 4️⃣ Database Connection Factory
### 💡 Problem:
**Your system supports multiple databases (MongoDB, MySQL, PostgreSQL). Implement a Database Factory that returns the correct connection instance.**

### 📌 Expected Input:

```javascript
const db = DatabaseFactory.createDatabase("MongoDB");
db.connect();
```
### 📌 Expected Output:

```sh
Connected to MongoDB
🔍 Hint: Each class should have a connect() method.
```