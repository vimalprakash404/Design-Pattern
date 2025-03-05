## 3. Car Builder with Default Values
### Question:
    Create a CarBuilder class that sets default values (engine: "V4", wheels: 4) but allows overriding them.

### Example Input
```javascript
const car = new CarBuilder()
    .setEngine("V8")
    .build();

console.log(car);
```
### Expected Output
```javascript
{
  engine: 'V8',
  wheels: 4
}
```