class ChatBot{
    constructor(message ){
        this._message = message;
    }
    reply(){
        console.log(this._message);
    }

    message(value){
        this._message = value;
    }

    clone(){
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);
        cloned._message = this._message;
        return cloned;
    }
}

module.exports = ChatBot;