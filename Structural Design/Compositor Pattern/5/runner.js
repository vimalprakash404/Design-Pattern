class Device {
    // Your implementation here
    constructor(name) { 
        this.name = name;
    }

    turnOn() {
        console.log(`${this.name} is now On`)
    }
  }
  
  class DeviceGroup extends Device {
    // Your implementation here
    constructor(name){
        super(name) 
        this.children = []
    }

    add(component ){
        this.children.push(component);
    }

    turnOn(){
        this.children.forEach(element => element.turnOn())
    }
  }
  
  // Usage
  const light = new Device("Smart Light");
  const speaker = new Device("Smart Speaker");
  const group = new DeviceGroup("Living Room");
  group.add(light);
  group.add(speaker);
  
  group.turnOn();
  