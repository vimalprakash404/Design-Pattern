const Logger = require("./Logger");

const fileLogger =  new Logger("FileLogger");
fileLogger.log("Logging to a file");

const consoleLogger = fileLogger.clone();
consoleLogger.type = "ConsoleLogger";
consoleLogger.log("Logging to console");


