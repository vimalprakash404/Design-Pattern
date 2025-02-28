var Db = require("./db.js");

var db = new Db();
db.connect();

var db2 = db.clone();

db2.connect();