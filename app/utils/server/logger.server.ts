/* eslint-disable */
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import pino from "pino";

console.log(process.env.NODE_ENV, "<<< NODE_ENV from logger.server");

interface ExtendedLogger extends pino.Logger {
  log: (details: any, ...params: any[]) => void;
}

function createLogger(fileName: string): ExtendedLogger {
  // Fix directory name resolution
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Ensure logs directory exists
  const logsDir = path.join(__dirname, "../../../logs");
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  console.log(`Environment: ${process.env.NODE_ENV}`);

  // Define common logger options
  const loggerOptions: pino.LoggerOptions = {
    timestamp: () => `,"Timestamp":"${new Date(Date.now()).toISOString()}"`,
    formatters: {
      bindings: () => ({}),
      level: (label) => ({ level: label.toUpperCase() }),
    },
    // Always log errors and higher to console
    hooks: {
      logMethod(inputArgs, method) {
        // @ts-ignore:next-line
        if (inputArgs[0].level >= 50) {
          console.error("[ERROR]", ...inputArgs.slice(1));
        }
        return method.apply(this, inputArgs);
      },
    },
  };

  // Configure transports based on environment
  let transport;

  if (process.env.NODE_ENV === "production") {
    console.log("Setting up production logging to file and console");
    const logFilePath = path.join(logsDir, fileName);

    transport = pino.transport({
      targets: [
        // File target for all logs
        {
          target: "pino/file",
          options: { destination: logFilePath },
          level: "info",
        },
        // Console target for all logs in production
        {
          target: "pino-pretty",
          options: {
            destination: 1, // stdout
            colorize: true,
            translateTime: "yyyy-mm-dd HH:MM:ss",
            ignore: "pid,hostname",
          },
          level: "info",
        },
      ],
    });
  } else if (process.env.NODE_ENV === "test") {
    console.log("Setting up test logging to file only");
    const logFilePath = path.join(logsDir, fileName);

    transport = pino.transport({
      targets: [
        // File target only
        //{
        //  target: 'pino/file',
        //  options: { destination: logFilePath },
        //  level: 'info',
        //},
        {
          target: "pino-pretty",
          options: {
            destination: 1, // stdout
            colorize: true,
            translateTime: "yyyy-mm-dd HH:MM:ss",
            ignore: "pid,hostname",
            flushSync: true,
          },
          level: "debug",
        },
      ],
    });
  } else {
    // Development mode - log to console only with pretty formatting
    console.log("Setting up development logging to console");

    transport = pino.transport({
      targets: [
        {
          target: "pino-pretty",
          options: {
            destination: 1, // stdout
            colorize: true,
            translateTime: "yyyy-mm-dd HH:MM:ss",
            ignore: "pid,hostname",
          },
          level: "debug", // More verbose in development
        },
      ],
    });
  }

  // Create the logger
  const baseLogger = pino(loggerOptions, transport) as ExtendedLogger;

  // Add the .log() method
  baseLogger.log = function (message: any, ...params: any[]) {
    this.info(message, ...params);
  };

  return baseLogger;
}

// Create and export the logger instance
const logger = createLogger("general.log");
export default logger;
