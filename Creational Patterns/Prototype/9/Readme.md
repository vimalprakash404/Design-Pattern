### Prototype Pattern for a Vehicle Rental System 🚗🏍️🚚
## 💡 Problem:
**vehicle rental system needs to manage different types of vehicles, such as cars, bikes, and trucks. Each vehicle type shares common properties like brand, model, rentPerDay, and book(), but their values differ.**

***Instead of creating multiple vehicle objects manually, we can use the Prototype Pattern to clone a base vehicle and modify specific properties.***

### ✅ Solution Using Prototype Pattern
#### We will:

- Create a vehicle prototype with shared properties.
- Clone the prototype for different vehicle types (Car, Bike, Truck).
Modify specific properties like brand, model, and rentPerDay.
📌 Implementation in Node.js
```javascript
// Prototype object
const vehiclePrototype = {
    book() {
        console.log(`${this.brand} ${this.model} booked for $${this.rentPerDay} per day.`);
    },
    clone() {
        return Object.create(this);
    }
};

// Creating a car from the prototype
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
```