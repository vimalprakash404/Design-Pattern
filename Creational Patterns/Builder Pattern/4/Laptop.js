class Laptop{ 
    constructor(builder){
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.processor = builder.processor; 
        this.graphicsCard = builder.graphicsCard; 
    }   
}

module.exports = Laptop