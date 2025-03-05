const UserBuilder = require("./UserBuilder");

const user = new UserBuilder()
    .setName("Alice")
    .setAge(25)
    .setEmail("alice@example.com")
    .build();

console.log(user);