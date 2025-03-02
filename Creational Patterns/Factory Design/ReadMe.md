# Factory Design Pattern in Node.js
## What is the Factory Pattern?
    The Factory Pattern is a creational design pattern that provides a way to create objects without specifying their exact class. Instead of using new to create an object, a factory method is used to return an instance of different objects based on some input.

##  When to Use the Factory Pattern?
    - When you have a common interface but different types of objects.
    - When object creation logic is complex or repetitive.
    - When you want to centralize object creation in one place.
## 1️⃣ Basic Factory Pattern Example
    💡 Scenario:
        You need to create different types of users (Admin, Customer, Guest), but all should have a common method like getDetails().

## 📌 Implementation:
```javascript

class Admin {
    constructor(name) {
        this.name = name;
        this.role = "Admin";
    }
    getDetails() {
        return `${this.name} is an ${this.role}`;
    }
}

class Customer {
    constructor(name) {
        this.name = name;
        this.role = "Customer";
    }
    getDetails() {
        return `${this.name} is a ${this.role}`;
    }
}

class Guest {
    constructor(name) {
        this.name = name;
        this.role = "Guest";
    }
    getDetails() {
        return `${this.name} is a ${this.role}`;
    }
}

// Factory Function
class UserFactory {
    static createUser(name, type) {
        switch (type) {
            case "Admin":
                return new Admin(name);
            case "Customer":
                return new Customer(name);
            case "Guest":
                return new Guest(name);
            default:
                throw new Error("Invalid user type");
        }
    }
}

// Creating Users
const admin = UserFactory.createUser("Alice", "Admin");
console.log(admin.getDetails()); // Output: Alice is an Admin

const customer = UserFactory.createUser("Bob", "Customer");
console.log(customer.getDetails()); // Output: Bob is a Customer

const guest = UserFactory.createUser("Charlie", "Guest");
console.log(guest.getDetails()); // Output: Charlie is a Guest
```

## 💡 How It Works?
1. We define three classes: Admin, Customer, and Guest.
1. Each class has a common method getDetails().
1. Instead of manually creating instances, we use UserFactory.createUser().
1. The factory decides which class to instantiate based on the type parameter.
## 2️⃣ Factory Pattern with Database Connections
### 💡 Scenario:
    You need to connect to different databases (MongoDB, MySQL, PostgreSQL), but you want a single factory to create the connection.

📌 Implementation:
```javascript
class MongoDB {
    connect() {
        console.log("Connected to MongoDB");
    }
}

class MySQL {
    connect() {
        console.log("Connected to MySQL");
    }
}

class PostgreSQL {
    connect() {
        console.log("Connected to PostgreSQL");
    }
}

// Factory Function
class DatabaseFactory {
    static createDatabase(type) {
        switch (type) {
            case "MongoDB":
                return new MongoDB();
            case "MySQL":
                return new MySQL();
            case "PostgreSQL":
                return new PostgreSQL();
            default:
                throw new Error("Unsupported database type");
        }
    }
}

// Using the Factory
const mongo = DatabaseFactory.createDatabase("MongoDB");
mongo.connect(); // Output: Connected to MongoDB

const mysql = DatabaseFactory.createDatabase("MySQL");
mysql.connect(); // Output: Connected to MySQL

const postgres = DatabaseFactory.createDatabase("PostgreSQL");
postgres.connect(); // Output: Connected to PostgreSQL
```
### ✨ Why Use a Factory Here?
    ✅ Encapsulates object creation – You don’t need to manually create database connections.
    ✅ Easy to extend – Just add another class for a new database type.
    ✅ Simplifies code – The logic for creating databases is centralized.

## 3️⃣ Factory Pattern with API Requests
### 💡 Scenario:
    You need to send API requests (GET, POST, PUT, DELETE) but want a single interface to handle all of them.

📌 Implementation:
```javascript
class GetRequest {
    send(url) {
        console.log(`Sending GET request to ${url}`);
    }
}

class PostRequest {
    send(url, data) {
        console.log(`Sending POST request to ${url} with data`, data);
    }
}

class PutRequest {
    send(url, data) {
        console.log(`Sending PUT request to ${url} with data`, data);
    }
}

class DeleteRequest {
    send(url) {
        console.log(`Sending DELETE request to ${url}`);
    }
}

// Factory Function
class APIRequestFactory {
    static createRequest(type) {
        switch (type) {
            case "GET":
                return new GetRequest();
            case "POST":
                return new PostRequest();
            case "PUT":
                return new PutRequest();
            case "DELETE":
                return new DeleteRequest();
            default:
                throw new Error("Invalid request type");
        }
    }
}

// Using the Factory
const getRequest = APIRequestFactory.createRequest("GET");
getRequest.send("https://api.example.com/data"); 
// Output: Sending GET request to https://api.example.com/data

const postRequest = APIRequestFactory.createRequest("POST");
postRequest.send("https://api.example.com/data", { name: "John" }); 
// Output: Sending POST request to https://api.example.com/data with data { name: 'John' }

```


### ✨ Why Use a Factory Here?
    ✅ Keeps request logic centralized – No need to manually instantiate different requests.
    ✅ Flexible – You can add new request types (PATCH, HEAD) easily.
    ✅ Encourages reuse – Instead of rewriting request handling logic, you use the factory.

### 🔹 Benefits of the Factory Pattern
    ✅ Encapsulates Object Creation – The logic for object creation is centralized in the factory.
    ✅ Promotes Loose Coupling – The client code does not need to know the exact implementation.
    ✅ Easier to Extend – You can add new types without modifying existing code.
    ✅ Better Maintainability – Changes to object creation logic do not affect other parts of the system.

### 🔹 When NOT to Use Factory Pattern?
    ❌ When object creation is simple and does not require abstraction.
    ❌ If using ES6 classes with simple constructors, a factory might add unnecessary complexity.

For example, using a factory for something like this is overkill:

```javascript
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}

const myCar = new Car("Toyota");
```