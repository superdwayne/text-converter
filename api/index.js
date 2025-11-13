/**
 * Root API endpoint - redirects to /api/compress info
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  return res.status(200).json({
    message: 'Textese Compressor API',
    version: '1.0.0',
    endpoints: {
      '/api/compress': {
        method: 'POST',
        description: 'Compress text into textese',
        example: {
          request: { text: 'Hello, how are you doing today?' },
          response: {
            original: 'Hello, how are you doing today?',
            compressed: 'Hi, how r u doin 2day?',
            reduction: '25%'
          }
        }
      }
    },
    usage: 'POST to /api/compress with JSON body: {"text": "your text here"}'
  });
}

