const Session = require('./Session');

const session1 = new Session(1, 'token1');

const session2 = session1.clone();
session2.userId = 2;
session2.token = 'token2';

const session3 = session1.clone();
session3.userId = 3;
session3.token = 'token3';

session1.authenticate();
session2.authenticate();
session3.authenticate();






