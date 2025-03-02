## 2. Prototype for a Game Character
### 💡 Problem:
**In a game, you have different characters (warriors, mages, archers), but they share common abilities like attack() and defend().**

### ✅ Solution:

### Create a character prototype with shared methods.
*Clone and modify specific attributes like name, health, and weapon.*
📌 Example Usage:

```javascript

const characterPrototype = {
    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`);
    },
    clone() {
        return Object.create(this);
    }
};

const warrior = characterPrototype.clone();
warrior.name = "Thor";
warrior.weapon = "Hammer";
warrior.attack(); // Output: Thor attacks with Hammer

const archer = characterPrototype.clone();
archer.name = "Legolas";
archer.weapon = "Bow";
archer.attack(); // Output: Legolas attacks with Bow
```