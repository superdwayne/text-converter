# Textese Compressor

<div align="center">

**Transform text into textese abbreviations to reduce token usage in AI prompts**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-blue.svg)](https://github.com)

</div>

## 🚀 Features

- **Textese Compression**: Converts text into aggressive textese abbreviations
- **Token Reduction**: Significantly reduces text length to save tokens in AI API calls
- **Public API**: Open REST API endpoint available on Vercel
- **Serverless**: Fast, scalable serverless function
- **Modern UI**: Clean, shadcn-inspired React interface
- **No Authentication**: Free to use, no API keys required

## 📖 What is Textese?

Textese is a form of written language that uses abbreviations and number substitutions to compress text, similar to SMS language. Examples:

- `great` → `gr8`
- `mate` → `m8`
- `you` → `u`
- `are` → `r`
- `today` → `2day`
- `tonight` → `2nite`
- `laugh out loud` → `lol`
- `oh my god` → `omg`
- `to be honest` → `tbh`

## 🎯 Use Cases

- **AI Prompt Optimization**: Reduce token usage in AI API calls
- **Text Compression**: Compress long messages while maintaining readability
- **Cost Savings**: Lower costs when using token-based AI services
- **Character Limits**: Fit more content in character-limited fields

## 🚀 Quick Start

### Using the API

**Endpoint**: `https://sms-six-mocha.vercel.app/api/compress`

```bash
curl -X POST https://sms-six-mocha.vercel.app/api/compress \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello, how are you doing today?"}'
```

**Response**:
```json
{
  "original": "Hello, how are you doing today?",
  "compressed": "Hi, how r u doin 2day?",
  "reduction": "25%"
}
```

### JavaScript Example

```javascript
const response = await fetch('https://sms-six-mocha.vercel.app/api/compress', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'Hello, how are you doing today?' })
});

const data = await response.json();
console.log(data.compressed); // "Hi, how r u doin 2day?"
```

### Python Example

```python
import requests

response = requests.post(
    'https://sms-six-mocha.vercel.app/api/compress',
    json={'text': 'Hello, how are you doing today?'}
)

print(response.json()['compressed'])  # "Hi, how r u doin 2day?"
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/textese-compressor.git
cd textese-compressor
```

2. **Install dependencies**:
```bash
# Frontend
cd frontend
npm install

# Backend (optional, for local testing)
cd ../backend
npm install
```

3. **Run the frontend**:
```bash
cd frontend
npm run dev
```

4. **Run the backend locally** (optional):
```bash
cd backend
npm start
```

## 📦 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login and deploy**:
```bash
vercel login
vercel --prod
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📁 Project Structure

```
textese-compressor/
├── api/                    # Vercel serverless functions
│   ├── compress.js         # Main compression endpoint
│   └── index.js            # API info endpoint
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API client
│   │   └── App.jsx        # Main app component
│   └── package.json
├── lib/                    # Shared utilities
│   └── compressor.js      # Compression logic
├── backend/                # Express server (optional)
├── .github/                # GitHub templates
├── LICENSE                 # MIT License
├── CONTRIBUTING.md         # Contribution guidelines
└── README.md              # This file
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on:

- Code of conduct
- How to submit bug reports
- How to suggest features
- How to submit pull requests

### Adding New Abbreviations

To add new textese abbreviations, edit `lib/compressor.js`:

```javascript
const abbreviations = {
  // Add your abbreviations here (longest first)
  'your phrase': 'abbrev',
  // ...
};
```

## 📝 API Documentation

### POST `/api/compress`

Compresses text into textese format.

**Request**:
```json
{
  "text": "Your text here"
}
```

**Response**:
```json
{
  "original": "Your text here",
  "compressed": "Ur txt hr",
  "reduction": "30%"
}
```

**Status Codes**:
- `200` - Success
- `400` - Bad Request (invalid input)
- `405` - Method Not Allowed
- `500` - Internal Server Error

### GET `/api/compress`

Returns API information and usage examples.

## 🐛 Known Issues

- Some abbreviations may not compress as expected
- Very short words are preserved to maintain readability

## 🔮 Roadmap

- [ ] Add more abbreviation patterns
- [ ] Support for multiple languages
- [ ] Compression level options (aggressive vs moderate)
- [ ] Batch compression endpoint
- [ ] Compression statistics and analytics

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by SMS/texting language
- Built with [Vercel](https://vercel.com)
- UI inspired by [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

## ⭐ Star History

If you find this project useful, please consider giving it a star!

---

Made with ❤️ by the open source community
