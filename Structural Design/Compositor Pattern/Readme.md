## Composite Pattern
    The Composite Pattern is a structural design pattern used when you need to work with tree-like structures where individual objects and groups of objects should be treated uniformly.

### 🔹 Real-World Analogy
    Think of a file system where:

- A file is an individual object.
- A folder can contain multiple files or even other folders.
- Both files and folders should support the same operations (e.g., getSize(), delete()).
The Composite Pattern allows us to treat both files and folders the same way!

#### 📝 JavaScript Example: File System Structure
  Let's implement a file system where both files and folders can be handled using the same interface.

##### 1️⃣ Component (Base Class)
  Defines a common interface for both files and folders.

```javascript 
class FileSystemComponent {
  constructor(name) {
    this.name = name;
  }

  showDetails(indent = 0) {
    throw new Error("Method not implemented");
  }
}
```

#### 2️⃣ Leaf (File)
  A file is a leaf node (it doesn’t contain other elements).

```javascript 
class File extends FileSystemComponent {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  showDetails(indent = 0) {
    console.log(`${" ".repeat(indent)}📄 File: ${this.name} (${this.size} KB)`);
  }
}
```

#### 3️⃣ Composite (Folder)
  A folder is a composite that can contain files and other folders.

```javascript
class Folder extends FileSystemComponent {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  showDetails(indent = 0) {
    console.log(`${" ".repeat(indent)}📁 Folder: ${this.name}`);
    this.children.forEach(child => child.showDetails(indent + 2));
  }
}
```
4️⃣ Usage
```javascript
// Creating files
const file1 = new File("Document.txt", 100);
const file2 = new File("Photo.jpg", 500);
const file3 = new File("Video.mp4", 2000);

// Creating folders
const folder1 = new Folder("My Documents");
const folder2 = new Folder("Media");

// Adding files to folders
folder1.add(file1);
folder2.add(file2);
folder2.add(file3);

// Creating a root folder and adding other folders
const rootFolder = new Folder("Root");
rootFolder.add(folder1);
rootFolder.add(folder2);

// Displaying the structure
rootFolder.showDetails();
```
##### 🖥 Expected Output
```sh
📁 Folder: Root
  📁 Folder: My Documents
    📄 File: Document.txt (100 KB)
  📁 Folder: Media
    📄 File: Photo.jpg (500 KB)
    📄 File: Video.mp4 (2000 KB)
```
### 💡 How It Works
  1. FileSystemComponent (Base Class)
    - Provides a common interface (showDetails()).
  1. File (Leaf Class)
    - Implements showDetails() and represents an individual file.
  1. Folder (Composite Class)
    - Implements add() to store children (files/folders).
    - Calls showDetails() recursively for all its children.
## ✨ Key Benefits
  - ✅ Treats individual and composite objects the same way.
  - ✅ Tree structure is easy to traverse.
  - ✅ New components can be added without modifying existing code.

