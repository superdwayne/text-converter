# Textese Compressor API

A serverless API that transforms regular text into textese abbreviations to reduce token usage in AI prompts. Deployed on Vercel.

## Features

- **Textese Compression**: Converts text into aggressive textese abbreviations
- **Token Reduction**: Significantly reduces text length to save tokens in AI API calls
- **Public API**: Open REST API endpoint available on Vercel
- **Serverless**: Fast, scalable serverless function

## API Endpoint

### Production URL
```
https://your-project.vercel.app/api/compress
```

### Request

**Method**: `POST`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```json
{
  "text": "Hello, how are you doing today?"
}
```

### Response

```json
{
  "original": "Hello, how are you doing today?",
  "compressed": "Hi, how r u doin 2day?",
  "reduction": "25%"
}
```

### Example with cURL

```bash
curl -X POST https://your-project.vercel.app/api/compress \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello, how are you doing today?"}'
```

### Example with JavaScript

```javascript
const response = await fetch('https://your-project.vercel.app/api/compress', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    text: 'Hello, how are you doing today?'
  })
});

const data = await response.json();
console.log(data.compressed); // "Hi, how r u doin 2day?"
```

### Example with Python

```python
import requests

response = requests.post(
    'https://your-project.vercel.app/api/compress',
    json={'text': 'Hello, how are you doing today?'}
)

data = response.json()
print(data['compressed'])  # "Hi, how r u doin 2day?"
```

## Compression Examples

The API uses aggressive textese compression:

- `great` → `gr8`
- `mate` → `m8`
- `you` → `u`
- `are` → `r`
- `today` → `2day`
- `tonight` → `2nite`
- `laugh out loud` → `lol`
- `oh my god` → `omg`
- `to be honest` → `tbh`
- And many more with vowel removal patterns

## Deployment to Vercel

### Prerequisites

- Vercel account
- Vercel CLI installed (`npm i -g vercel`)

### Deploy

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Environment Variables

No environment variables required - the API is fully self-contained.

## Local Development

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run locally:
```bash
vercel dev
```

The API will be available at `http://localhost:3000/api/compress`

## Project Structure

```
Textese/
├── api/
│   └── compress.js      # Vercel serverless function
├── lib/
│   └── compressor.js    # Compression logic
├── vercel.json          # Vercel configuration
└── package.json         # Project configuration
```

## CORS

The API has CORS enabled and accepts requests from any origin, making it publicly accessible.

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `400` - Bad Request (invalid input)
- `405` - Method Not Allowed (only POST is supported)
- `500` - Internal Server Error

## License

ISC
