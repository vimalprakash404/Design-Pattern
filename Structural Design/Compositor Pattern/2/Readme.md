## File System with Total Size Calculation
### Modify the File System Example from earlier so that:

- The File class has a getSize() method that returns its size.
- The Folder class has a getSize() method that sums up the sizes of all files and folders inside it.
### Task
- Implement a getSize() method in both File and Folder classes.
### Code Skeleton
```javascript
class File {
  // Your implementation here
}

class Folder {
  // Your implementation here
}

// Usage
const file1 = new File("Doc.txt", 100);
const file2 = new File("Image.png", 500);
const folder = new Folder("My Folder");
folder.add(file1);
folder.add(file2);

console.log(`Total size: ${folder.getSize()} KB`);
```
### Expected Output
```javascript 
Total size: 600 KB
```