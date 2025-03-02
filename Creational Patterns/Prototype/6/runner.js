const Product  = require("./Product");

const Laptop = new Product("Laptop", 1000, "Electronics");


Laptop.details();

const PC = Laptop.clone();

PC.name = "PC";

PC.details();