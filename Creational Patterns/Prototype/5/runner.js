const NotificationPrototype = require('./Notification.js');

const notification = new NotificationPrototype('email');
notification.send('Hello, check your inbox!');

const pushNotification = notification.clone();
pushNotification.type = 'push';

pushNotification.send('Hello, check your inbox!');