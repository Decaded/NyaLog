function formatTimestamp(format) {
	const now = new Date();
	let formattedTimestamp;

	switch (format.toUpperCase()) {
		case 'EUROPEAN': // DD-MM-YYYY HH:mm:ss
			formattedTimestamp = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(
				2,
				'0',
			)}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
			break;
		case 'AMERICAN': // MM-DD-YYYY HH:mm:ss
			formattedTimestamp = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(
				2,
				'0',
			)}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
			break;
		case 'ISO': // YYYY-MM-DD HH:mm:ss
			formattedTimestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(
				2,
				'0',
			)}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
			break;
		default:
			formattedTimestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(
				2,
				'0',
			)}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
			break;
	}

	return formattedTimestamp;
}

module.exports = formatTimestamp;
