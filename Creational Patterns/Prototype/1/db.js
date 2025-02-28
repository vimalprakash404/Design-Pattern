class Db {
    constructor(host, port) {
        this._host = host || "localhost";
        this._port = port || "27017";
    } 

    set host(value) {
        this._host = value;  
    } 


    set port(value) { 
        this._port = value;
    }

    get host(){ 
        this._host;
    }

    connect()  {
        console.log(`Connecting to DB at ${this._host}:${this._port}`);
    }

    get port(){ 
        this._port;
    }
    clone() { 
        var  proto =  Object.getPrototypeOf(this);
        
        var cloned =  Object.create(proto);
        cloned._port  =  this._port;
        cloned._host  =  this._host;
        return cloned;
    }


}

module.exports = Db;

