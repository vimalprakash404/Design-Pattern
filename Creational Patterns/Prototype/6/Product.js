class Product { 
    constructor(name, price , category) { 
        this._name = name;
        this._price = price;
        this._category = category;
    }

    get name() { return this._name; }
    get price() { return this._price; }
    get category() { return this._category; }

    set name(value) { this._name = value; }
    set price(value) { this._price = value; }
    set category(value) { this._category = value; }


    details() { 
        console.log(`${this._name} - ${this._price} in ${this._category}`);
    }
    clone() { 
        var proto = Object.getPrototypeOf(this);    
        var cloned = Object.create(proto);
        cloned._name = this._name;
        cloned._price = this._price;
        cloned._category = this._category;
        return cloned;
    }
}

module.exports = Product;