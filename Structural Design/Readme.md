# Adapter Pattern 
    The Adapter Pattern is a structural design pattern that allows objects with incompatible interfaces to work together. It acts as a bridge between two different interfaces by converting one interface into another that a client expects.

## 🛠 When to Use the Adapter Pattern?
    - When you want to integrate a third-party library with a different interface than your application expects.
    -When you need to adapt an old API to a new one without modifying existing code.
    - When working with legacy code that has different data formats.
## 📌 Example: Adapting a Third-Party API
    Let's say we have a third-party payment gateway that provides a method processPayment(amount), but in our application, we use a method pay(price). We can create an adapter to bridge the gap.

## Without Adapter (Incompatible APIs)
```javascript
class ThirdPartyPayment {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} through third-party gateway.`);
  }
}

class App {
  pay(price) {
    console.log(`Paying $${price} using our payment system.`);
  }
}

const paymentGateway = new ThirdPartyPayment();
paymentGateway.processPayment(100); // This doesn't match our App's `pay(price)`
```
👉 The method names are different, so we can't directly use ThirdPartyPayment in our application.

## ✅ Solution: Use an Adapter
    We create an adapter class to convert the method pay(price) into processPayment(amount), making them compatible.

```javascript
class PaymentAdapter {
  constructor(thirdPartyPayment) {
    this.thirdPartyPayment = thirdPartyPayment;
  }

  pay(price) {
    this.thirdPartyPayment.processPayment(price);
  }
}

// Usage
const thirdPartyPayment = new ThirdPartyPayment();
const adaptedPayment = new PaymentAdapter(thirdPartyPayment);

adaptedPayment.pay(100); // Now it's compatible with our app!
```
✅ Now, our application can use pay(price), and behind the scenes, it calls processPayment(amount). The adapter bridges the gap.

## 🎯 Real-World Example: Adapting JSON Data Format
    Sometimes APIs return data in a format that doesn't match our expected structure. Let's see how an adapter can fix that.

### Problem: API Returns Data in a Different Format
    Imagine we receive data like this from an API:

```javascript 
const apiResponse = {
  full_name: "John Doe",
  user_age: 25,
};
```
But we need it in this format:

```javascript 
const expectedData = {
  name: "John Doe",
  age: 25,
};
```
### ✅ Solution: Create an Adapter
```javascript
class UserAdapter {
  constructor(apiData) {
    this.name = apiData.full_name;
    this.age = apiData.user_age;
  }
}

// Usage
const adaptedUser = new UserAdapter(apiResponse);
console.log(adaptedUser); // { name: "John Doe", age: 25 }
```
Now, our application gets data in the expected format without modifying the API response directly.

### 🚀 Key Takeaways
    - The Adapter Pattern helps incompatible interfaces work together.
    - It is useful for third-party libraries, legacy code, and API data transformations.
    - It encapsulates the conversion logic in a separate class, keeping code clean and maintainable.
