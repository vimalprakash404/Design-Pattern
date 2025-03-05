## 5. House Builder with Nested Objects
### Question:
    Create a HouseBuilder class where the house object contains rooms, bathrooms, and an optional garage object.

### Example Input
```javascript
const house = new HouseBuilder()
    .setRooms(3)
    .setBathrooms(2)
    .setGarage({ type: "Attached", capacity: 2 })
    .build();

console.log(house);
```
### Expected Output
```javascript
{
  rooms: 3,
  bathrooms: 2,
  garage: { type: 'Attached', capacity: 2 }
}
```