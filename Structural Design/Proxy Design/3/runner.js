class APIService {
    fetchData(url) {
      console.log(`Fetching data from ${url}...`);
      return `Data from ${url}`;
    }
  }
  
  // Create CachingProxy here

  class CachingProxy {
    constructor(api){ 
        this.api = api ; 
        this.cache = {} ; 
    }

    fetchData(url) {
        if(this.cache[`${url}`]){
            console.log(`Returning cached data for ${url}`)
        }
        else {
            this.cache[`${url}`]=api.fetchData(url);
        }
        
        return this.cache[`${url}`]
       
            
    }
  }
  
  // Usage
  const api = new APIService();
  const proxy = new CachingProxy(api);
  
  console.log(proxy.fetchData("https://api.example.com/data")); // Fetches from API
  console.log(proxy.fetchData("https://api.example.com/data")); // Returns cached data