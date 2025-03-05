class Car { 
    constructor(builder) { 
        this.model = builder.model;
        this.color = builder.color;
        this.seats = builder.seats;
        this.engine = builder.engine;
        this.wheels = builder.wheels;
    }
}


module.exports = Car