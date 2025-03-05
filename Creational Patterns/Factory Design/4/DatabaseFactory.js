const { MongoDB, MySql, FireBase } = require('./Database');


class DatabaseFactory {
    static createDatabase(type) {
        switch (type) {
            case "MongoDB":
                return new MongoDB();
            case "MySql":
                return new MySql();
            case "FireBase":
                return new FireBase();
            default:
                throw new Error("Unsupported database type");
        }
    }
}

module.exports = DatabaseFactory;