## 2️⃣ Access Control Proxy
    You have a BankAccount class with a withdraw(amount) method. Only admins should be able to withdraw money.

### Task
    - Implement a SecurityProxy that blocks non-admins from withdrawing money.
    - If a non-admin calls withdraw(amount), show "Access Denied: Only admin can withdraw."
    - If an admin calls withdraw(amount), allow withdrawal.
```javascript
class BankAccount {
  withdraw(amount) {
    console.log(`Withdrawn $${amount}`);
  }
}

// Create SecurityProxy here

// Usage
const account = new BankAccount();
const userProxy = new SecurityProxy(account, "user");
userProxy.withdraw(100); // Should deny access

const adminProxy = new SecurityProxy(account, "admin");
adminProxy.withdraw(100); // Should allow withdrawal
```
### Expected Output
```sh
Access Denied: Only admin can withdraw.
Withdrawn $100
```