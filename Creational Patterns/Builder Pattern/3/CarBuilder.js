const Car = require('./Car');


class CarBuilder{ 
    constructor(){
        this.model = null;
        this.color = null;
        this.seats = null;
        this.engine = "V4";
        this.wheels = 4;
    }

    setModel(model){
        this.model = model;
        return this;
    }


    setColor(color){
        this.color = color;
        return this;
    }

    setSeats(seats){
        this.seats = seats;
        return this;
    }
    setEngine(engine){
        this.engine = engine;
        return this;
    }
    

    build(){
        return new Car(this);
    }
}

module.exports = CarBuilder