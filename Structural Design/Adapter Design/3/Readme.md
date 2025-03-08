## Convert Fahrenheit to Celsius using an Adapter
### You have a weather API that provides temperatures in Fahrenheit, but your app needs temperatures in Celsius.

## 👉 Task: Create an adapter that converts Fahrenheit to Celsius.

```javascript
class WeatherAPI {
  getTemperature() {
    return 98.6; // Temperature in Fahrenheit
  }
}

class TemperatureAdapter {
  // Your implementation here
}

// Usage
const weatherAPI = new WeatherAPI();
const adaptedWeather = new TemperatureAdapter(weatherAPI);
console.log(adaptedWeather.getTemperature()); // Should print temperature in Celsius
```s