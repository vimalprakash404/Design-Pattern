class Logger {
    constructor(type) {
        this._type = type;
    }

    set type(value) { 
        this._type = value;
    }

    log(message) {
        console.log(`[${this._type}] ${message}`);
    }

    clone(){
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);
        cloned._type = this._type;
        return cloned;
    }


}


module.exports = Logger