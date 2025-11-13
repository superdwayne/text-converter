import { useState } from 'react'
import TextInput from './components/TextInput'
import TextOutput from './components/TextOutput'
import CompressButton from './components/CompressButton'
import { compressText } from './services/api'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [compressedText, setCompressedText] = useState('')
  const [reduction, setReduction] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleCompress = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to compress')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const result = await compressText(inputText)
      setCompressedText(result.compressed)
      setReduction(result.reduction)
    } catch (err) {
      setError(err.message || 'Failed to compress text. Please try again.')
      setCompressedText('')
      setReduction('')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (value) => {
    setInputText(value)
    // Clear output when input changes
    if (compressedText) {
      setCompressedText('')
      setReduction('')
    }
    if (error) {
      setError(null)
    }
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>Textese Compressor</h1>
          <p className="subtitle">Transform your text into textese abbreviations to reduce token usage in AI prompts</p>
        </header>

        <div className="app-content">
          <div className="input-section">
            <TextInput
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter your text here..."
            />
            <CompressButton
              onClick={handleCompress}
              loading={loading}
              disabled={!inputText.trim()}
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {compressedText && (
            <div className="output-section">
              <TextOutput
                text={compressedText}
                reduction={reduction}
              />
            </div>
          )}
        </div>

        <footer className="app-footer">
          <p>API available at: <code>POST /api/compress</code></p>
        </footer>
      </div>
    </div>
  )
}

export default App

