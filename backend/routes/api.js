import express from 'express';
import { encode as encodeToon } from '@toon-format/toon';
import { compressText, calculateReduction } from '../utils/compressor.js';

const router = express.Router();

/**
 * POST /api/compress
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
 *   "compressed": "Hello, how r u doing today?",
 *   "reduction": "15%"
 * }
 */
router.post('/compress', (req, res) => {
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

    const payload = {
      original: text,
      compressed,
      reduction
    };

    if (req.query.format === 'toon') {
      return res.type('text/plain').send(encodeToon(payload));
    }

    res.json(payload);
  } catch (error) {
    console.error('Error compressing text:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while compressing the text'
    });
  }
});

export default router;

