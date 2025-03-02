const File = require("./File");


const file = new File("/path/to/file.txt");

file.open();

file.close();

const cloned = file.clone();

cloned.open();

cloned.close();
