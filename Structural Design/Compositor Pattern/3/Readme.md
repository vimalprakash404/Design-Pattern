## 3️⃣ Menu System (Nested Menu Items)
### You are creating a menu system where:

 -A MenuItem is a single clickable item (Leaf).
- A Menu is a group of menu items (Composite).
- The display() method should show nested menus correctly.
### Task
- Implement MenuItem (Leaf) and Menu (Composite).
- Use the Composite Pattern to create nested menus.
### Code Skeleton
```js
class MenuItem {
  // Your implementation here
}

class Menu {
  // Your implementation here
}

// Usage
const item1 = new MenuItem("Home");
const item2 = new MenuItem("About");
const submenu = new Menu("Services");
submenu.add(new MenuItem("Web Development"));
submenu.add(new MenuItem("SEO"));

const mainMenu = new Menu("Main Menu");
mainMenu.add(item1);
mainMenu.add(item2);
mainMenu.add(submenu);

mainMenu.display();
```
### Expected Output
```sh
📌 Menu: Main Menu
  ✅ Home
  ✅ About
  📌 Menu: Services
    ✅ Web Development
    ✅ SEO
```