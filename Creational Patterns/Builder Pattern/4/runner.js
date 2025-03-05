const LaptopBuilder = require("./LaptopBuilder");

const laptop = new LaptopBuilder()
    .setRAM("16GB")
    .setStorage("1TB SSD")
    .setProcessor("Intel i9")
    .build();

console.log(laptop);