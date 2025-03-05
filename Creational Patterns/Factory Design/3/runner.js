const NotificationFactory = require('./NotificationFactory');

const notifier = NotificationFactory.createNotifier('SMS');
notifier.sendNotification('Hello');


const notifier2 = NotificationFactory.createNotifier('Email');
notifier2.sendNotification('Hello');


const notifier3 = NotificationFactory.createNotifier('Whatsapp');
notifier3.sendNotification('Hello');