const { SMSNotification, WhatsappNotification, EmailNotification } = require('./Notification');

class NotificationFactory { 
    static createNotifier(type){
        if(type === 'SMS'){
            return new SMSNotification()
        }else if(type === 'Whatsapp'){
            return new WhatsappNotification()
        }else if(type === 'Email'){
            return new EmailNotification()
        }
        else { 
            throw new Error('Invalid notification type')
        }

    }
}

module.exports = NotificationFactory