const { validateTimestampFormat } = require('../src/validators/timestampFormat');

describe('Timestamp Format Validator', () => {
	const validFormats = ['EUROPEAN', 'AMERICAN', 'ISO'];

	validFormats.forEach(format => {
		test(`should validate the correct timestamp format: ${format}`, () => {
			const result = validateTimestampFormat(format);
			expect(result).toBe(format); // Check that the valid format is returned
		});
	});

	test('should return European for an invalid timestamp format', () => {
		const invalidFormat = 'InvalidFormat';
		const result = validateTimestampFormat(invalidFormat);
		expect(result).toBe('EUROPEAN'); // Check that it defaults to European
	});
});
