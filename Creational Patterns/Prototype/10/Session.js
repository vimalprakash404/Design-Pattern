class Session{ 
    constructor(userId , token ){
        this._userId = userId;
        this._token = token;
    }

    set userId(value) { 
        this._userId = value;
    }

    get userId() { 
        return this._userId;
    }

    set token(value) { 
        this._token = value;
    }

    get token() { 
        return this._token;
    }

    authenticate() {
        console.log(`User ${this._userId} authenticated with token ${this._token}`);
    }

    clone(){ 
        var proto = Object.getPrototypeOf(this) ; 
        var cloned = Object.create(proto);
        cloned._userId = this._userId;
        cloned._token = this._token;
        return cloned;
    }
}

module.exports  = Session;