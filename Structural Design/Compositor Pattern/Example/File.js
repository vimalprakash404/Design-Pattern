const FileSystem  = require("./FileSystem")

class File extends FileSystem { 
    constructor(name , size  )  {
        super(name),
        this.size = size ;
    }


    showDetails(indent = 0 )  {
        console.log(`${" ".repeat(indent)}📄 File: ${this.name} (${this.size} KB`)
    }
}

module.exports  = File