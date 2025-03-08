class OldPaymentSystem {
    payNow(amount) {
      console.log(`Paid $${amount} using Old Payment System`);
    }
  }
  
  class PaymentAdapter {
    constructor(oldPayment) {
        this.oldPayment = oldPayment ;

    }

    makePayment(price , currency) {
        this.oldPayment.payNow(price)
    }
  }
  
  // Usage
  const oldPayment = new OldPaymentSystem();
  const adaptedPayment = new PaymentAdapter(oldPayment);
  
  adaptedPayment.makePayment(50, "USD"); // Should internally call payNow(50)