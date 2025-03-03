### 1️⃣ Payment Gateway Factory
## 💡 Problem:
**Your e-commerce app supports multiple payment gateways like PayPal, Stripe, and Razorpay. You need a PaymentFactory that returns the correct payment gateway instance based on user selection.**

## 📌 Expected Input:

```javascript
const gateway = PaymentFactory.createGateway("PayPal");
gateway.processPayment(100);
```
📌 Expected Output:

```sh
Processing $100 payment via PayPal.
```
*🔍 Hint: Each class (PayPal, Stripe, Razorpay) should have a processPayment(amount) method.*