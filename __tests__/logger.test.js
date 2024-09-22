const Logger = require('../src/app');

describe('Logger', () => {
	let logger;
	const fixedDate = new Date('2024-09-22T06:58:11'); // Your fixed date

	beforeAll(() => {
		// Mock Date to return the fixed date
		jest.spyOn(global, 'Date').mockImplementation((...args) => {
			if (args.length) return new originalDate(...args);
			return fixedDate;
		});
	});

	afterAll(() => {
		// Restore the original Date
		global.Date.mockRestore();
	});

	beforeEach(() => {
		logger = new Logger({ timestampFormat: 'ISO' });
	});

	// Test for all log types
	const logTypes = ['OK', 'WARN', 'ERROR', 'INFO', 'DEBUG', 'STOP'];
	logTypes.forEach(type => {
		test(`should log messages for ${type} log type`, () => {
			const logSpy = jest.spyOn(console, 'log').mockImplementation();

			logger.consoleLog(type, `Test message for ${type}`);

			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(`[ ${type} ]`));
			logSpy.mockRestore();
		});
	});

	// Test for valid timestamp formats
	const timestampFormats = {
		European: '22-09-2024',
		American: '09-22-2024',
		ISO: '2024-09-22',
	};

	Object.entries(timestampFormats).forEach(([format, expected]) => {
		test(`should log messages with ${format} timestamp format`, () => {
			const logSpy = jest.spyOn(console, 'log').mockImplementation();

			logger = new Logger({ timestampFormat: format });
			logger.consoleLog('INFO', `${format} format test`);

			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
			logSpy.mockRestore();
		});
	});

	// Test for unknown log type
	test('should log an error for unknown log type', () => {
		const logSpy = jest.spyOn(console, 'log').mockImplementation();

		logger.consoleLog('UNKNOWN', 'This is an unknown log type');

		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ UNDEFINED LOG TYPE ]'));
		logSpy.mockRestore();
	});

	// Test for applying correct color based on log type
	test('should apply the correct color for WARN log type', () => {
		const logSpy = jest.spyOn(console, 'log').mockImplementation();

		logger.consoleLog('WARN', 'This is a warning');

		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('\u001b[33m')); // yellow for WARN
		logSpy.mockRestore();
	});

	// Edge cases: empty message and null logType
	test('should handle empty log message', () => {
		const logSpy = jest.spyOn(console, 'log').mockImplementation();

		logger.consoleLog('INFO', '');

		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ INFO ]  ')); // No message, just log type
		logSpy.mockRestore();
	});

	test('should handle null logType and log as UNDEFINED', () => {
		const logSpy = jest.spyOn(console, 'log').mockImplementation();

		logger.consoleLog(null, 'Null logType test');

		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ UNDEFINED LOG TYPE ]'));
		logSpy.mockRestore();
	});
});
