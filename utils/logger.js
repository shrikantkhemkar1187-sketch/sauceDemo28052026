
const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({

    level: 'info',

    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),

    transports: [

        new winston.transports.Console(),

        new winston.transports.File({
            filename: path.join('reports', 'logs', 'execution.log')
        })
    ]
});

module.exports = logger;

