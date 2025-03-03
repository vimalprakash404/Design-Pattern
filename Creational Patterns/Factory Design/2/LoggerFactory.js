class LoggerFactory{ 
    static createLogger(type){
        if(type === 'file'){
            const { FileLogger } = require('./Logger')
            return new FileLogger()
        }else if(type === 'console'){
            const { ConsoleLogger } = require('./Logger')
            return new ConsoleLogger()
        }else if(type === 'database'){
            const { DataBaseLogger } = require('./Logger')
            return new DataBaseLogger()
        }else{
            throw new Error('Invalid logger type')
        }
    }
}


module.exports = LoggerFactory;