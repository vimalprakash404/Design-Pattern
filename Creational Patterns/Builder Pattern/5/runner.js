const HouseBuilder  = require('./HouseBuilder');

const house = new HouseBuilder()
    .setRooms(3)
    .setBathrooms(2)
    .setGarage({ type: "Attached", capacity: 2 })
    .build();

console.log(house);