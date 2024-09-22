const { colors, messages } = require('./config/config.json');
const formatTimestamp = require('./formatters/timestamp');
const { validateTimestampFormat } = require('./validators/timestampFormat');

class Logger {
	constructor(options = {}) {
		this.colors = colors; // Use the colors from the config
		this.messages = messages; // Use the messages from the config
		this.timestampFormat = options.timestampFormat; // Read user format

		// Validate the timestamp format and set the default if needed
		this.timestampFormat = validateTimestampFormat(this.timestampFormat);
	}

	// Function to get color based on log type
	getColor(logType) {
		switch (logType.toUpperCase()) {
			case 'OK':
				return this.colors.green;
			case 'WARN':
				return this.colors.yellow;
			case 'ERROR':
				return this.colors.red;
			case 'INFO':
				return this.colors.cyan;
			case 'DEBUG':
				return this.colors.bold_magenta;
			case 'STOP':
				return this.colors.bold_red;
			case 'START':
				return this.colors.bold_green;
			default:
				return this.colors.undefined;
		}
	}
	async consoleLog(logType, consoleMessage, errorMessage = '') {
		if (!logType) {
			logType = 'UNDEFINED';
		}
		if (errorMessage) errorMessage = '\n			' + errorMessage;

		const color = this.getColor(logType); // Use the getColor function

		let logMessage = `${formatTimestamp(this.timestampFormat)} ${this.colors.bold_magenta}||${this.colors.clear} ${color}`;

		if (this.messages[logType.toUpperCase()]) {
			logMessage += `${this.messages[logType.toUpperCase()]}${this.colors.text}${consoleMessage}${errorMessage}${this.colors.clear}`;
		} else {
			// Handle invalid logType
			logMessage += `${this.colors.red}${this.messages.UNDEFINED}${this.colors.text}${errorMessage}${this.colors.clear} "${logType}"`;

			// Capture the stack trace
			const err = new Error();
			const stack = err.stack.split('\n');
			const location = stack[2] ? stack[2].trim() : 'Location not available'; // Get the second line for file info

			logMessage += `\n			Location: ${location.replace('Object.', 'function ')};`;
		}

		console.log(logMessage);
	}
}

module.exports = Logger;
