# Prototype Design Pattern 

The **Prototype Pattern** is a creational design pattern that allows objects to be cloned from an existing object (a prototype) instead of being created from scratch. This pattern is useful when object creation is costly or complex.


### When to Use the Prototype Pattern?
- When object creation is expensive (e.g., deep copies with a lot of properties).
- When you need to create multiple objects with similar properties.
- When the structure of an object is fixed but its values may change.

#### Implementation of Prototype Pattern in Node.js
**Example 1: Cloning an Object using Object.create()**

```javascript
// Prototype object
const carPrototype = {
    drive() {
        console.log(`${this.model} is driving.`);
    },
    clone() {
        return Object.create(this);
    }
};

// Creating a new object from the prototype
const car1 = carPrototype.clone();
car1.model = "Tesla Model S";
car1.drive(); // Output: Tesla Model S is driving.

const car2 = carPrototype.clone();
car2.model = "BMW M3";
car2.drive(); // Output: BMW M3 is driving.
```



#### Example 2: Using a Constructor with Prototype


```javascript 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Creating an object
const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I'm 25 years old.

// Cloning the object
const person2 = Object.create(person1);
person2.name = "Bob";
person2.age = 30;
person2.greet(); // Output: Hello, my name is Bob and I'm 30 years old.

```

## Challenges  
Here are 10 problems to practice:

#### Prototype for a Database Connection:
1. Create a prototype object that represents a database connection and allows multiple instances to reuse its properties.

#### Prototype for a Game Character:
2. Implement a game character with a prototype object and clone new characters from it with different properties.

#### Prototype for a Logger System:
3. Create a prototype-based logging system where different loggers can be created from a prototype object.

#### Prototype for API Requests:
4. Build a prototype for an API request handler that can be cloned to make different types of API requests.

#### Prototype for a Notification System:
5. Implement a notification prototype that can be used to generate various types of notifications (email, SMS, push).

#### Prototype for a Product Catalog:
6. Design a prototype for products in an e-commerce application, allowing different product types to be cloned with specific attributes.

#### Prototype for a Chatbot Reply System:
7. Develop a chatbot reply system where new responses can be cloned from a prototype response object.

#### Prototype for a File System Object:
8. Create a prototype for handling files, allowing different file types (PDF, DOC, TXT) to be cloned with specific behaviors.

#### Prototype for a Vehicle Rental System:
. Implement a prototype for vehicles in a rental system, allowing different car types to be cloned from a base vehicle object.

#### Prototype for a User Session Manager:
10. Build a prototype for managing user sessions, where cloned sessions inherit base authentication properties.