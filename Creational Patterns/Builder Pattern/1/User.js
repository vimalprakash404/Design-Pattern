class User{ 
    constructor(builder){
        this.name = builder.name;
        this.email = builder.email;
        this.address = builder.address;
        this.age = builder.age;
    }
}

module.exports = User