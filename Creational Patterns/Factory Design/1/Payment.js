 class PayPal{ 
    processPayment(amount){
        console.log(`Processing $${amount} payment with PayPal`)
    }
}


 class Stripe { 
    processPayment(amount){
        console.log(`Processing $${amount} payment with Stripe`)
    }
}


 class Razorpay{ 
    processPayment(amount){
        console.log(`Processing $${amount} payment with Razorpay`)
    }
}


module.exports = { PayPal, Stripe, Razorpay }