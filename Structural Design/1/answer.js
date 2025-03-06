class LegacyLogger {
    logMessage(msg) {
      console.log(`Legacy Log: ${msg}`);
    }
  }
  
  class ModernLogger {
    log(msg, level) {
      console.log(`[${level.toUpperCase()}] ${msg}`);
    }
  }
  
  // Create an adapter class
  class LoggerAdapter {
    constructor(legacyLogger){
        this.legacyLogger = legacyLogger ; 
    }

    log(msg, level){ 
        this.legacyLogger.logMessage(`[${level.toUpperCase()}] ${msg}`)
    } 

  }


  const legacyLogger = new LegacyLogger();
const adaptedLogger = new LoggerAdapter(legacyLogger);

adaptedLogger.log("This is an info message", "info");
adaptedLogger.log("This is a warning", "warn");
adaptedLogger.log("An error occurred", "error");