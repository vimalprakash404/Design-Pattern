const { PayPal, Stripe, Razorpay } = require('./Payment')



class PaymentFactory{ 
    static createGateway(type){
        console.log(type)
        if(type === 'PayPal'){
            return new PayPal()
        }else if(type === 'Stripe'){
            return new Stripe()
        }else if(type === 'Razorpay'){
            return new Razorpay()
        }else{
            throw new Error('Invalid payment type')
        }
    }

}


module.exports = PaymentFactory