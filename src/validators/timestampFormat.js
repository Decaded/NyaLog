const { timestamps } = require('../config/config.json').validator;

function validateTimestampFormat(format) {
	if (!timestamps.includes(format.toUpperCase())) {
		// Log the error in bold red font
		console.log('\u001b[31;1mNyaLog | Invalid timestamp format: ' + format + '. Valid options are: ' + timestamps.join(', ') + '\n	 Format has been set to: European.\u001b[0m');

		// Set European as default (returning the new format)
		return 'EUROPEAN'; // Return the default format
	}
	return format; // Return the valid format
}

module.exports = {
	validateTimestampFormat,
};
