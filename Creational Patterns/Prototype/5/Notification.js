class Notification {
    constructor(type) {
        this._type = type;
    }

    send(message) {
        console.log(`Sending ${this._type} notification: ${message}`);
    }

    set type(value) {
        this._type = value;
    }

    clone() {
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);
        cloned._type = this._type;
        return cloned;

    }
}

module.exports = Notification;