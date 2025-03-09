class Employee {
    // Your implementation here
    constructor(name , salary){ 
        this.name =  name ;
        this.salary = salary ;
    }

    showDetails(indent = 0 ){ 
        console.log(`${" ".repeat(indent)}👨‍💻 Employee: ${this.name}, Salary: $${this.salary}`)
    }
}
  
  class Manager  extends Employee{
    // Your implementation here
    constructor(name , salary)  {
        super(name , salary)
        this.children = [] 
    }

    add(component) { 
        this.children.push(component);
    }

    showDetails(indent = 0){
        console.log(`${" ".repeat(indent)}👤Manager: ${this.name}, Salary: $${this.salary}`)
        this.children.forEach(child => child.showDetails(indent + 2));
    }
  }
  
  // Usage
  const dev1 = new Employee("Alice", 5000);
  const dev2 = new Employee("Bob", 6000);
  const manager = new Manager("Charlie", 10000);
  manager.add(dev1);
  manager.add(dev2);
  
  manager.showDetails();