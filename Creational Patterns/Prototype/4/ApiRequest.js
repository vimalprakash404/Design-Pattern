class ApiRequest{
    constructor(method ) { 
        this._method =    method
    }

    send(url) {
        console.log(`Output: Sending ${this._method} request to ${url}`)
    }

    set method(value)  {
        this._method = value ;
    }

    clone(){
        var proto =  Object.getPrototypeOf(this) ;
        var cloned = Object.create(proto); 
        cloned._method = this._method ; 
        return cloned ;
    }   

}

module.exports = ApiRequest