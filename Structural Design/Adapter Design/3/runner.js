class WeatherAPI {
    getTemperature() {
      return 98.6; // Temperature in Fahrenheit
    }
  }
  
  class TemperatureAdapter {
    constructor(weatherAPI) {
        this.weatherAPI = weatherAPI 
    }

    getTemperature(){
        return (this.weatherAPI.getTemperature() -32) *5/9;
    }
  }
  
  // Usage
  const weatherAPI = new WeatherAPI();
  const adaptedWeather = new TemperatureAdapter(weatherAPI);
  console.log(adaptedWeather.getTemperature()); // Should print temperature in Celsius