## 2. Implement a Pizza Builder
### Question:
    Create a PizzaBuilder class that allows adding size, cheese, pepperoni, and vegetables to a pizza.

### Example Input
```javascript
const pizza = new PizzaBuilder()
    .setSize("Large")
    .addCheese()
    .addPepperoni()
    .build();

console.log(pizza);
```
### Expected Output
```javascript
{
  size: 'Large',
  cheese: true,
  pepperoni: true,
  vegetables: false
}
```