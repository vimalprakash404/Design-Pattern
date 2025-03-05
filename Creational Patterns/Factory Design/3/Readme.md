## 3️⃣ Notification Service Factory
### 💡 Problem:
**Your system sends notifications via Email, SMS, and Push Notifications. Implement a Notification Factory that provides the correct notification service.**

## 📌 Expected Input:

```javascript 
const notifier = NotificationFactory.createNotifier("SMS");
notifier.sendNotification("Hello User!");
```

## 📌 Expected Output:

```sh
Sending SMS: Hello User!
🔍 Hint: Each class should have a sendNotification(message) method.
```