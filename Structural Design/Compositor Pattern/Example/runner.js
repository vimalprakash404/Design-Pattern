const File= require("./File");
const Folder = require("./Folder");


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