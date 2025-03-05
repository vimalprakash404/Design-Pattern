const Pizza = require("./Pizza");

class PizzaBuilder {
    constructor() {
        this.size = null;
        this.cheese = null;
        this.pepperoni = null;
        this.vegetables = null;
    }

    setSize(size) {
        this.size = size;
        return this;
    }

    setCheese(cheese) {
        this.cheese = cheese;
        return this;
    }
    addCheese() {
        this.cheese = true;
        return this;
    }

    addPepperoni() {
        this.pepperoni = true;
        return this;
    }

    setPepperoni(pepperoni) {
        this.pepperoni = pepperoni;
        return this;
    }

    setVegetables(vegetables) {
        this.vegetables = vegetables;
        return this;
    }

    build() {
        return new Pizza(this);
    }
}

module.exports = PizzaBuilder
