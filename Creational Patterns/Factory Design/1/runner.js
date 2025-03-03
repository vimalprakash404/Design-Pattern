// Example Usage


const PaymentFactory  =  require('./PaymentFactory');


const gateway1 = PaymentFactory.createGateway("PayPal");
gateway1.processPayment(100); // Output: Processing $100 payment via PayPal.

const gateway2 = PaymentFactory.createGateway("Stripe");
gateway2.processPayment(200); // Output: Processing $200 payment via Stripe.

const gateway3 = PaymentFactory.createGateway("Razorpay");
gateway3.processPayment(300); // Output: Processing $300 payment via Razorpay.
