class UserService {
    getUser(id) {
      return { id, name: "Alice" };
    }
  }
  
  // Create LoggingProxy here
  class LoggingProxy{ 
    constructor(service) {
        this.service = service ;
    }

    getUser(id){ 
        console.log(`Fetching user with ID: ${id}`);
        return this.service.getUser(id)
    } 


  }
  // Usage
  const service = new UserService();
  const proxy = new LoggingProxy(service);
  
  console.log(proxy.getUser(1))