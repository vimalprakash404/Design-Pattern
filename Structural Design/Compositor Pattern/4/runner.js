class Employee {
    // Your implementation here
    constructor (name) { 
        this.name = name ;
        this.children = []
    }  

    add (component){
        this.children.push(component);
    }

    showHierarchy(intend = 0 ){
        console.log(`${" ".repeat(intend)}${this.name}`)
        this.children.forEach(element => element.showHierarchy(intend + 2))
    }
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