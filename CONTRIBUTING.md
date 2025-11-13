# Contributing to Textese Compressor

Thank you for your interest in contributing to Textese Compressor! This document provides guidelines and instructions for contributing.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Node version, etc.)

### Suggesting Features

We welcome feature suggestions! Please open an issue with:
- A clear description of the feature
- Use cases and examples
- Why this feature would be useful

### Contributing Code

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes**:
   ```bash
   cd frontend && npm install && npm run dev
   ```
5. **Commit your changes**:
   ```bash
   git commit -m "Add: description of your changes"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request**

### Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small

### Adding Abbreviations

To add new textese abbreviations, edit `lib/compressor.js`:
- Add entries to the `abbreviations` object
- Keep longest phrases first (for proper matching)
- Test your additions

### Testing

Before submitting a PR, please:
- Test the compression with various text inputs
- Ensure the API still works correctly
- Check that the UI displays properly

## Questions?

Feel free to open an issue for any questions or discussions!

