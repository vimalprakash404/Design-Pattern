## 1️⃣ Employee Hierarchy (Simple Composite)
**You need to build an employee hierarchy where:**
- A Manager can have multiple Employees under them.
- Each Employee has a name and a salary.
- The showDetails() method should display the hierarchy.
### Task
- Implement an Employee class (Leaf).
- Implement a Manager class (Composite) that can have multiple employees.
*Use the Composite Pattern to display the hierarchy.*
### Code Skeleton
```javascript
class Employee {
  // Your implementation here
}

class Manager {
  // Your implementation here
}

// Usage
const dev1 = new Employee("Alice", 5000);
const dev2 = new Employee("Bob", 6000);
const manager = new Manager("Charlie", 10000);
manager.add(dev1);
manager.add(dev2);

manager.showDetails();
```
### Expected Output

```sh
👤 Manager: Charlie, Salary: $10000
  👨‍💻 Employee: Alice, Salary: $5000
  👨‍💻 Employee: Bob, Salary: $6000
```