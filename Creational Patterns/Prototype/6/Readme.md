### Prototype for a Product Catalog
## 💡 Problem:
**An e-commerce store has products with shared properties (name, price, category).**

### ✅ Solution:

### Create a product prototype with common attributes.
*Clone and modify it for different products.*
📌 Example Usage:

```javascript
const productPrototype = {
    details() {
        console.log(`${this.name} - $${this.price} in ${this.category}`);
    },
    clone() {
        return Object.create(this);
    }
};

const laptop = productPrototype.clone();
laptop.name = "MacBook Pro";
laptop.price = 2000;
laptop.category = "Electronics";
laptop.details(); // Output: MacBook Pro - $2000 in Electronics

```