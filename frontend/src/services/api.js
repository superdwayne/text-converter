import { decode as decodeToon } from '@toon-format/toon';

// Use the same origin when deployed, or localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:3001');

/**
 * Compresses text using the backend API
 * @param {string} text - The text to compress
 * @returns {Promise<{original: string, compressed: string, reduction: string}>}
 */
export async function compressText(text) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/compress?format=toon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const toonPayload = await response.text();
    const data = decodeToon(toonPayload);

    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      throw new Error('Unexpected response format from server.');
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Unable to connect to the server. Please make sure the backend is running.');
    }
    throw error;
  }
}

