# Changelog

## [1.0.0] - 22-09-2024

### Initial Release

- **Basic Logger Functionality**: Introduced a logging system that supports various log types (info, warning, error, etc.).
- **Timestamp Formats**: Added support for multiple timestamp formats:

  - European: `DD-MM-YYYY HH:mm:ss`
  - American: `MM-DD-YYYY HH:mm:ss`
  - ISO: `YYYY-MM-DDTHH:mm:ssZ`

- **Color Coding**: Implemented color-coded console outputs for better visibility and organization of logs.
- **Configuration Options**: Users have ability to define timestamp formats the app will use.
- **Validation**: Added a validation feature to ensure only valid timestamp formats can be set.
- **Testing**: Set up Jest for testing the logging functionalities and validation methods.
- **Documentation**: Created [README](README.md) and [contributing guidelines](CONTRIBUTING.md) to help users understand and contribute to the project.

### Upcoming Features

- More logging options (e.g., file logging)
