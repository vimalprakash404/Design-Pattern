## 1. Implement a Simple Builder for a User Profile
### Question:
    Create a UserBuilder class that allows step-by-step construction of a User object with optional parameters: name, age, email, and address.

### Example Input
```javascript
const user = new UserBuilder()
    .setName("Alice")
    .setAge(25)
    .setEmail("alice@example.com")
    .build();

console.log(user);
```

### Expected Output
```javascript
{
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
  address: undefined
}
```