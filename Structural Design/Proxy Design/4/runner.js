class HeavyResource {
    constructor() {
      console.log("HeavyResource: Loading large data...");
    }
  
    fetchData() {
      console.log("HeavyResource: Fetching data...");
    }
  }
  
  // Create LazyLoadingProxy here
  
class LazyLoadingProxy{
    fetchData(){
        const  heavyData = new HeavyResource();
        heavyData.fetchData();
    }
}


  // Usage
  const proxy = new LazyLoadingProxy();
  console.log("Proxy created, but resource is not loaded yet...");
  proxy.fetchData(); // Should initialize the resource only now