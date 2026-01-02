import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize, errors } = format;

// Custom log format with object handling
const logFormat = printf(({ level, message, timestamp, stack }) => {
  const formattedMessage =
    typeof message === 'object'
      ? JSON.stringify(message, null, 2)
      : message;

  return `${timestamp} [${level}]: ${stack || formattedMessage}`;
});

export const logger = createLogger({
  level: 'debug',
  format: combine(
    errors({ stack: true }),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // 🌈 Colorful console output
    new transports.Console({
      format: combine(
        colorize({
          all: true, // colors entire log line
        }),
        logFormat
      ),
    }),

    // 📄 Clean file logs (no colors)
    new transports.File({
      filename: 'logs/automation.log',
    }),
  ],
});
