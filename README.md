# NyaLog

A simple and customizable logging package for console output, supporting multiple timestamp formats.

[![npm (scoped)](https://img.shields.io/npm/v/@decaded/nyalog)](https://www.npmjs.com/package/@decaded/nyalog)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@decaded/nyalog)](https://bundlephobia.com/result?p=@decaded/nyalog)
[![npm](https://img.shields.io/npm/dt/@decaded/nyalog)](https://www.npmjs.com/package/@decaded/nyalog)
[![GitHub](https://img.shields.io/github/license/Decaded/nyalog)](https://github.com/Decaded/nyalog/blob/master/LICENSE.md)

## Installation

You can install NyaLog via npm:

```bash
npm install nyalog
```

## Usage

First, require the package in your application:

```javascript
const Logger = require('nyalog');
```

### Initialization

You can initialize the logger:

```javascript
const logger = new Logger();
```

For supported timestamp formats, refer to the table below.

### Logging Messages

You can log messages of different types:

| Log Type | Usage Example                                                                           | Description                                    | Color          |
| -------- | --------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------- |
| `info`   | `logger.consoleLog('info', 'This is an informational message.');`                       | Logs an informational message.                 | Cyan           |
| `warn`   | `logger.consoleLog('warn', 'This is a warning message.');`                              | Logs a warning message.                        | Yellow         |
| `error`  | `logger.consoleLog('error', 'This is an error message.', 'Additional error details.');` | Logs an error message with additional details. | Red            |
| `ok`     | `logger.consoleLog('ok', 'Operation completed successfully!');`                         | Logs a success message.                        | Green          |
| `debug`  | `logger.consoleLog('debug', 'Debugging information here...');`                          | Logs debugging information.                    | Bright Magenta |
| `stop`   | `logger.consoleLog('stop', 'This is a stop message.');`                                 | Logs a stop message.                           | Bright Red     |
| `start`  | `logger.consoleLog('start', 'This is a start message.');`                               | Logs a start message.                          | Bright Green   |

In case of spelling error in `log type`, detailed path to the problem will be provided:

```javascript
logger.consoleLog('eror', 'This is wrongly typed value.');

// 09-22-2024 08:10:18 || [ UNDEFINED LOG TYPE ] "erro"
//                         Location: at function <anonymous> (/home/decaded/Projects/NyaLog/example/index.js:17:8);
```

### Supported Timestamp Formats

| Name     | Format                |
| -------- | --------------------- |
| European | `DD-MM-YYYY HH:mm:ss` |
| American | `MM-DD-YYYY HH:mm:ss` |
| ISO      | `YYYY-MM-DD HH:mm:ss` |

You can specify the desired format during initialization:

```javascript
const logger = new Logger({ timestampFormat: 'ISO' });
```

**`NOTE`**: This is case insensitive.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/Decaded/nyalog).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Enjoying the Project?

If you find this project helpful or fun to use, consider supporting me on Ko-fi! Your support helps me keep creating and improving.

<!-- MD033: Inline HTML used for styling -->
<div align="center">
  <a href="https://ko-fi.com/decaded" target="_blank">
    <img src="https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0" alt="Support me on Ko-fi" style="height: 40px; border: 0px;">
  </a>
</div>
