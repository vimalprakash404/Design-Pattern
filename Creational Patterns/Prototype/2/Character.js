class Character {
    constructor(name, weapon) {
        this._name = name ;
        this._weapon = weapon ;
    }

    set name(name) { this._name = name ; }
    set weapon(weapon) { this._weapon = weapon ; }


    get name() { return this._name ; }
    get weapon() { return this._weapon ; }

    attack() { 
        console.log(`${this._name} attacks with ${this._weapon}`);       
    }

    clone(){ 
        var proto = Object.getPrototypeOf(this);    
        var cloned = Object.create(proto);
        cloned._name = this._name;
        cloned._weapon = this._weapon;
        return cloned;
    }
}


module.exports = Character
