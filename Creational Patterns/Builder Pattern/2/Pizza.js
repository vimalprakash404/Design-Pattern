class Pizza { 
    constructor(builder){
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.vegetables = builder.vegetables;
    }   
}

module.exports = Pizza