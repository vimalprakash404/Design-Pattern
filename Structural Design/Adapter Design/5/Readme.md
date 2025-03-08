### 5️⃣ Adapt a Third-Party User API
A third-party API provides user data in this format:

```js
const thirdPartyUser = {
  userId: 101,
  user_name: "Alice",
  user_email: "alice@example.com",
};
```
## Your app expects:

```js

const expectedUser = {
  id: 101,
  name: "Alice",
  email: "alice@example.com",
};
```
### 👉 Task: Write an adapter to convert the third-party user format into the expected format.

```js
class UserAdapter {
  // Your implementation here
}

// Usage
const adaptedUser = new UserAdapter(thirdPartyUser);
console.log(adaptedUser); // Should print the expected format
```