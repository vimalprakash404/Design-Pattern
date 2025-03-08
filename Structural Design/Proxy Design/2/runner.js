class BankAccount {
    withdraw(amount) {
      console.log(`Withdrawn $${amount}`);
    }
  }
  
  // Create SecurityProxy here

  class SecurityProxy{ 
    constructor(account , userType) {
        this.account = account ;
        this.userType = userType ;
    } ; 

    withdraw(amount)  {
        if (this.userType !== "admin")
            console.log("Access Denied: Only admin can withdraw.")
        else 
            this.account.withdraw(amount);
    }
  }
  
  // Usage
  const account = new BankAccount();
  const userProxy = new SecurityProxy(account, "user");
  userProxy.withdraw(100); // Should deny access
  
  const adminProxy = new SecurityProxy(account, "admin");
  adminProxy.withdraw(100); // Should allow withdrawal