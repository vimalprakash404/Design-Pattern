class SMSNotification  {
    sendNotification(message){
        console.log(`Sending SMS: ${message}`);
    }

}

class WhatsappNotification  { 
    sendNotification(message){
        console.log(`Sending Whatsapp: ${message}`);
    }
}

class EmailNotification {
    sendNotification(message){
        console.log(`Sending Email: ${message}`);
    }
} 

module.exports = {
    SMSNotification,
    WhatsappNotification,
    EmailNotification
}