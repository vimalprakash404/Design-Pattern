const vehicle=  require("./Vehicle");


const vehiclePrototype = new vehicle();




const car = vehiclePrototype.clone();
car.brand = "Toyota";
car.model = "Camry";
car.rentPerDay = 50;

car.book(); // Output: Toyota Camry booked for $50 per day.

// Creating a bike from the prototype
const bike = vehiclePrototype.clone();
bike.brand = "Yamaha";
bike.model = "MT-15";
bike.rentPerDay = 20;

bike.book(); // Output: Yamaha MT-15 booked for $20 per day.

// Creating a truck from the prototype
const truck = vehiclePrototype.clone();
truck.brand = "Volvo";
truck.model = "FH16";
truck.rentPerDay = 150;

truck.book(); // Output: Volvo FH16 booked for $150 per day.