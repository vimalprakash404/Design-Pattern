const CarBuilder = require('./CarBuilder');

const car = new CarBuilder()
    .setEngine("V8")
    .build();

console.log(car);