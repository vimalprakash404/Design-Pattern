class File{
    constructor(path){
        this._path = path;
    }

    open(){
        console.log(`Opening file at ${this._path}`);
    }

    close(){
        console.log(`Closing file at ${this._path}`);
    }

    clone(){
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);
        cloned._path = this._path;
        return cloned;
    }



}

module.exports = File