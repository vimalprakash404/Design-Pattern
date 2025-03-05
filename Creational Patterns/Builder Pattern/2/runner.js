const PizzaBuilder = require("./PizzaBuilder");


const pizza = new PizzaBuilder()
    .setSize("Large")
    .addCheese()
    .addPepperoni()
    .build();

console.log(pizza);