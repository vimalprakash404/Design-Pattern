# Builder Design 


**The Builder Design Pattern is a creational design pattern used to construct complex objects step by step. It provides a clear separation between the construction process and the final representation, allowing for greater flexibility when creating objects.**

## Why Use the Builder Pattern?
- To construct complex objects with multiple optional parameters.
- To avoid large constructors with too many parameters (i.e., telescoping constructor problem).
- To ensure immutability while creating objects.
- To simplify object creation by providing a fluent and readable API.
## Structure of Builder Pattern
The Builder pattern consists of the following components:

1. **Product (Complex Object)** → The object being created.
1. **Builder Interface (Optional)** → Defines the steps for building the object.
1. **Concrete Builder** → Implements the steps to build the product.
1. **Director (Optional)** → Orchestrates the building process.
1. **Client** → Uses the builder to construct the object.

## Example in JavaScript
```javascript
class Car {
    constructor(builder) {
        this.engine = builder.engine;
        this.wheels = builder.wheels;
        this.airConditioning = builder.airConditioning;
    }
}

class CarBuilder {
    constructor() {
        this.engine = 'Default Engine';
        this.wheels = 4;
        this.airConditioning = false;
    }

    setEngine(engine) {
        this.engine = engine;
        return this;
    }

    setWheels(wheels) {
        this.wheels = wheels;
        return this;
    }

    setAirConditioning(airConditioning) {
        this.airConditioning = airConditioning;
        return this;
    }

    build() {
        return new Car(this);
    }
}

// Client Code
const car = new CarBuilder()
    .setEngine("V8")
    .setAirConditioning(true)
    .build();

console.log(car);
```

### Advantages of Builder Pattern
    ✅ Makes object creation more readable (fluent API).
    ✅ Reduces constructor overload issues.
    ✅ Provides immutability since the final object is built step by step.
    ✅ Supports optional parameters cleanly.

### Disadvantages
    ❌ More code compared to simple object creation.  
    ❌ Overhead if the object is simple and doesn’t need stepwise construction.

### When to Use the Builder Pattern?
    ✔ When an object has many optional parameters.
    ✔ When constructing complex hierarchical objects (e.g., DOM elements, JSON, or XML).
    ✔ When we need an immutable object with multiple configuration options.

