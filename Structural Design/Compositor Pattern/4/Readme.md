## 4️⃣ Organization Chart with Depth Levels
### You need to build an organization chart where:

- Each employee can have multiple subordinates.
- The showHierarchy() method should display indentation based on depth level.
### Task
- Implement an Employee class that can have subordinates.
- Implement showHierarchy() to display levels correctly.
### Code Skeleton
```js
class Employee {
  // Your implementation here
}

// Usage
const ceo = new Employee("CEO");
const manager1 = new Employee("Manager 1");
const manager2 = new Employee("Manager 2");
const emp1 = new Employee("Employee 1");
const emp2 = new Employee("Employee 2");

ceo.add(manager1);
ceo.add(manager2);
manager1.add(emp1);
manager2.add(emp2);

ceo.showHierarchy();
```

### Expected Output
```sh 
👑 CEO
  📌 Manager 1
    👨‍💻 Employee 1
  📌 Manager 2
    👨‍💻 Employee 2
```