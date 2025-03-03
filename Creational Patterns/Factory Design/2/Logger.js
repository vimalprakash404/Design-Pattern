class FileLogger{
    log(message){
        console.log(`Logging to file: ${message}`)
    }
}

class ConsoleLogger{
    log(message){
        console.log(`Logging to console: ${message}`)
    }
}

class DataBaseLogger{ 
    log(message) { 
        console.log(`Logging to database: ${message}`)
    }
}

module.exports = { FileLogger, ConsoleLogger , DataBaseLogger}