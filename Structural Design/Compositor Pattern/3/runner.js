class MenuItem {
    // Your implementation here
    constructor(name) { 
        this.name = name ;
    }

    display(intend = 0 ){
        console.log(`${" ".repeat(intend)} ✅ ${this.name}`)
    }
  }
  
  class Menu extends MenuItem{
    // Your implementation here
    constructor(name){
        super(name);
        this.children = []
    }

    add(component) {
        this.children.push(component)
    }

    display(intend = 0){
        console.log(`${" ".repeat(intend)} 📌 Menu: ${this.name}`)
        this.children.forEach(element => element.display(intend + 2));
    }
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