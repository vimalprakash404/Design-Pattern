class File {
    // Your implementation here
    constructor(name , size) { 
        this.name = name ;
        this.size = size ;
    }

    getSize(){
        return this.size;
    }
  }
  
  class Folder {
    // Your implementation here
    constructor(name) { 
        this.name = name;
        this.children = []
    }

    add(component){
        this.children.push(component)
    }

    getSize(){
        return this.children.reduce( (per , current ) => per.getSize() + current.getSize() )
    }
  }
  
  // Usage
  const file1 = new File("Doc.txt", 100);
  const file2 = new File("Image.png", 500);
  const folder = new Folder("My Folder");
  folder.add(file1);
  folder.add(file2);
  
  console.log(`Total size: ${folder.getSize()} KB`);