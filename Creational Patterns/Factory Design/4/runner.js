const DatabaseFactory  = require('./DatabaseFactory');


const database = DatabaseFactory.createDatabase("MongoDB");
database.connect();

const database2 = DatabaseFactory.createDatabase("MySql");
database2.connect();

const database3 = DatabaseFactory.createDatabase("FireBase");
database3.connect();