const winston = require('winston');
const { combine, timestamp, label, printf, prettyPrint  } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const logger = winston.createLogger({
    format: combine(
        winston.format.colorize(),
        label({ label: 'right meow!' }),
        timestamp(),
        prettyPrint()
    ),
    transports: [
        // new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});
module.exports = logger;