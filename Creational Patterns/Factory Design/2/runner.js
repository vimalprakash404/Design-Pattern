const LoggerFactory = require("./LoggerFactory"); 

const FileLogger = LoggerFactory.createLogger("file");
const ConsoleLogger = LoggerFactory.createLogger("console");
const DatabaseLogger = LoggerFactory.createLogger("database");

FileLogger.log("This is a log message from the file logger.");
ConsoleLogger.log("This is a log message from the console logger.");
DatabaseLogger.log("This is a log message from the database logger.");