const Laptop = require("./Laptop");

class LaptopBuilder {
    constructor(){
        this.cpu = undefined;
        this.ram = undefined;
        this.storage = undefined;
        this.processor = undefined; 
        this.graphicsCard = undefined; 
    }

    setCPU(cpu){
        this.cpu = cpu;
        return this;
    }
    setRAM(ram){
        this.ram = ram;
        return this;
    }
    setStorage(storage){
        this.storage = storage;
        return this;
    }
    setProcessor(processor){
        this.processor = processor;
        return this;
    }
    setGraphicsCard(graphicsCard){
        this.graphicsCard = graphicsCard;
        return this;
    }
    build(){
        return new Laptop(this);
    }
}

module.exports = LaptopBuilder