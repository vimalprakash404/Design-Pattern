const House = require('./House');   

class HouseBuilder {
    constructor(){
        this.roof = null;
        this.walls = null;
        this.windows = null;
        this.doors = null;
        this.garage = null;
        this.bathrooms = null;
        this.rooms = null;
    }

    setRooms(rooms){
        this.rooms = rooms;
        return this;
    }

    setRoof(roof){
        this.roof = roof;
        return this;
    }
    setWalls(walls){
        this.walls = walls;
        return this;
    }
    setWindows(windows){
        this.windows = windows;
        return this;
    }
    setDoors(doors){
        this.doors = doors;
        return this;
    }
    setGarage(garage){
        this.garage = garage;
        return this;
    }
    setBathrooms(bathrooms){
        this.bathrooms = bathrooms;
        return this;
    }

    getHouse(){
        return new House(this);
    }

    build(){
        return this.getHouse();
    }
}



module.exports = HouseBuilder;