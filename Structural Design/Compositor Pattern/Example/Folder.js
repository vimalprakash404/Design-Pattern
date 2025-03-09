const FileSystem = require("./FileSystem")


class Folder extends FileSystem{ 
    constructor(name){
        super(name) ;
        this.children = []
    }

    add(component) { 
        this.children.push(component);
    }

    showDetails(indent = 0 ) 
    {
        console.log(`${" ".repeat(indent)}📁 Folder: ${this.name}`)
        this.children.forEach(child => child.showDetails(indent + 2));
    }

}

module.exports = Folder