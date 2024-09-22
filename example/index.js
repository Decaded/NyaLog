const Logger = require('../src/app');

// Initialize the logger with the desired timestamp format
const logger = new Logger({ timestampFormat: 'iso' }); // Change this to 'European' or 'American' as needed

// Example log messages
logger.consoleLog('info', 'This is an informational message.');

logger.consoleLog('warn', 'This is a warning message.');

logger.consoleLog('error', 'This is an error message.', 'Additional error details.'); // Accepts 2 values.

logger.consoleLog('ok', 'Operation completed successfully!');

logger.consoleLog('debug', 'Debugging information here...');

logger.consoleLog('stop', 'This is a stop message.');

logger.consoleLog('start', 'This is a start message.');

logger.consoleLog('eror', 'This is wrongly typed value.'); // Returns path to where the mistake happened.
