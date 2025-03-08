## 4️⃣ Adapt an Old Payment System to a New One
A legacy payment system uses payNow(amount), but your new app expects makePayment(amount, currency), where the currency is always "USD".

### 👉 Task: Write an adapter to make the old payment system compatible with the new method.

```js
class OldPaymentSystem {
  payNow(amount) {
    console.log(`Paid $${amount} using Old Payment System`);
  }
}

class PaymentAdapter {
  // Your implementation here
}

// Usage
const oldPayment = new OldPaymentSystem();
const adaptedPayment = new PaymentAdapter(oldPayment);

adaptedPayment.makePayment(50, "USD"); // Should internally call payNow(50)
```