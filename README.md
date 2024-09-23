# NyaLog

A lightweight, customizable logging package for console output with multiple timestamp formats and color-coded log levels.

[![npm (scoped)](https://img.shields.io/npm/v/@decaded/nyalog)](https://www.npmjs.com/package/@decaded/nyalog)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@decaded/nyalog)](https://bundlephobia.com/result?p=@decaded/nyalog)
[![npm](https://img.shields.io/npm/dt/@decaded/nyalog)](https://www.npmjs.com/package/@decaded/nyalog)
[![GitHub](https://img.shields.io/github/license/Decaded/nyalog)](https://github.com/Decaded/nyalog/blob/master/LICENSE.md)
![GitHub Actions](https://github.com/Decaded/NyaLog/actions/workflows/node.js.yml/badge.svg)

---

## Installation

You can install NyaLog via npm:

```bash
npm install @decaded/nyalog
```

## Usage

First, require the package in your application:

```javascript
const Logger = require('nyalog');
```

Then, initialize it in one of two ways:

Standard:

```javascript
const logger = new Logger();
```

With a timestamp format:

```javascript
const logger = new Logger({ timestampFormat: 'ISO' });
```

For supported [timestamp formats](#supported-timestamp-formats), refer to the table below.

### Logging Messages

You can log messages of different types:

| Log Type | Usage Example                                                                           | Color        |
| -------- | --------------------------------------------------------------------------------------- | ------------ |
| `info`   | `logger.consoleLog('info', 'This is an informational message.');`                       | Cyan         |
| `warn`   | `logger.consoleLog('warn', 'This is a warning message.');`                              | Yellow       |
| `error`  | `logger.consoleLog('error', 'This is an error message.', 'Additional error details.');` | Red          |
| `ok`     | `logger.consoleLog('ok', 'Operation completed successfully!');`                         | Green        |
| `debug`  | `logger.consoleLog('debug', 'Debugging information here...');`                          | Bold Magenta |
| `stop`   | `logger.consoleLog('stop', 'This is a stop message.');`                                 | Bold Red     |
| `start`  | `logger.consoleLog('start', 'This is a start message.');`                               | Bold Green   |

In case of a spelling error in `log type`, detailed path to the problem will be provided:

```javascript
logger.consoleLog('eror', 'This is wrongly typed value.');

// 09-22-2024 08:10:18 || [ UNDEFINED LOG TYPE ] "eror"
//                         Location: at function <anonymous> (/home/decaded/Projects/NyaLog/example/index.js:17:8);
```

⚠ **`NOTE`**: NyaLog automatically provides detailed error paths for undefined log types.

### `consoleLog` Parameters

- `logType` (string): The type of log (e.g., `'info'`, `'error'`, etc.).
- `message` (string): The primary message to be logged. Treat this how you would normally use `console.log()`.
- `extraDetails` (string): Secondary argument for `'error'` type, for example `error.stack`

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

⚠ **`NOTE`**: This is case insensitive. `European` is used by default when no value is provided.

## Contributing

Contributions are welcome! Please open an [issue](https://github.com/Decaded/NyaLog/issues) or submit a [pull request](https://github.com/Decaded/NyaLog/pulls) on the
[GitHub repository](https://github.com/Decaded/nyalog).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Like what I do?

If you find this project helpful or fun to use, consider supporting me on Ko-fi! Your support helps me keep creating and improving.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/L3L02XV6J)
