const User = require("./User");

class UserBuilder {
    constructor() {
        this.name = null;
        this.email = null;
        this.address = null;
        this.age = null;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    build() {
        return new User(this);
    }
}

module.exports = UserBuilder
