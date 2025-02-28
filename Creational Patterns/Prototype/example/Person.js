function Person(name , age){ 
    this.name = name  ; 
    this.age = age ;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}


//  first Persons  object 
const person1 = new Person('John', 30);
person1.greet();


// second person object 
const person2 = Object.create(person1);
person2.name = 'Alice';
person2.age = 25;
person2.greet();