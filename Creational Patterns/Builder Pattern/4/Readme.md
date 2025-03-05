## 4. Laptop Configuration Builder
### Question:
    Create a LaptopBuilder class that allows setting RAM, Storage, Processor, and GraphicsCard.

### Example Input
```javascript
const laptop = new LaptopBuilder()
    .setRAM("16GB")
    .setStorage("1TB SSD")
    .setProcessor("Intel i9")
    .build();

console.log(laptop);
```
### Expected Output

```javascript
{
  RAM: '16GB',
  Storage: '1TB SSD',
  Processor: 'Intel i9',
  GraphicsCard: undefined
}
```