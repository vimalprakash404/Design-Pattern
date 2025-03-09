## 5️⃣ Smart Home Device System
### You are designing a smart home system where:

- A Device is a simple smart device (Leaf).
- A DeviceGroup is a collection of devices (Composite).
- Calling turnOn() should turn on all devices inside a group.
### Task
- Implement a Device class (Leaf).
- Implement a DeviceGroup class (Composite).
- turnOn() should turn on all devices in a group.
### Code Skeleton
```js
class Device {
  // Your implementation here
}

class DeviceGroup {
  // Your implementation here
}

// Usage
const light = new Device("Smart Light");
const speaker = new Device("Smart Speaker");
const group = new DeviceGroup("Living Room");
group.add(light);
group.add(speaker);

group.turnOn();

```
### Expected Output
```sh
✅ Smart Light is now ON
✅ Smart Speaker is now ON
```