const  carPrototype = {
    drive() { 
        console.log(` ${this.model} is driving.`);
    } , 
    clone() { 
        return Object.create(this);
    }
}


// creating the toyota car from prototype
const car = Object.create(carPrototype);
car.model = 'Toyota';
car.drive();


//crating the honda car from prototype 
const car2 = car.clone();
car2.model = 'Honda';
car2.drive();