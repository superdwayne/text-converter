import { compressText, calculateReduction } from '../lib/compressor.js';

/**
 * Vercel Serverless Function
 * POST /api/compress
 * 
 * Compresses text using textese abbreviations
 * 
 * Request body:
 * {
 *   "text": "Hello, how are you doing today?"
 * }
 * 
 * Response:
 * {
 *   "original": "Hello, how are you doing today?",
 *   "compressed": "Hello, how r u doin 2day?",
 *   "reduction": "15%"
 * }
 */
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Allow GET requests for API info
  if (req.method === 'GET') {
    return res.status(200).json({
      name: 'Textese Compressor API',
      version: '1.0.0',
      endpoint: '/api/compress',
      method: 'POST',
      description: 'Compresses text into textese abbreviations',
      example: {
        request: {
          text: 'Hello, how are you doing today?'
        },
        response: {
          original: 'Hello, how are you doing today?',
          compressed: 'Hi, how r u doin 2day?',
          reduction: '25%'
        }
      },
      usage: 'Send a POST request with JSON body: {"text": "your text here"}'
    });
  }

  // Only allow POST requests for compression
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      message: 'Only POST and GET requests are supported'
    });
  }

  try {
    const { text } = req.body;

    // Validate input
    if (!text || typeof text !== 'string') {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'Please provide a valid text string in the request body'
      });
    }

    // Compress the text
    const compressed = compressText(text);
    const reduction = calculateReduction(text, compressed);

    // Return response
    return res.status(200).json({
      original: text,
      compressed: compressed,
      reduction: reduction
    });
  } catch (error) {
    console.error('Error compressing text:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while compressing the text'
    });
  }
}

