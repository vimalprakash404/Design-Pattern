class Vehicle { 
    constructor(brand , model , rentPerDay){
        this._brand = brand ;
        this._model = model ; 
        this._rentPerDay = rentPerDay  ;
    }


    set brand(value) { 
        this._brand = value ;
    }

    set model(value) { 
        this._model  =  value ;
    }

    set rentPerDay(value) {
        this._rentPerDay = value ;
    }

    book() {
        console.log(`${this._brand} ${this._model} booked for $${this._rentPerDay}`)
    }

    clone() { 
        var proto = Object.getPrototypeOf(this); 
        const clone = Object.create(proto);
        clone._brand = this._brand;
        clone._model = this._model ;
        clone._rentPerDay = this._rentPerDay ;

        return clone
    }

}


module.exports = Vehicle