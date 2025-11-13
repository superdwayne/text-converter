import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import './TextOutput.css'

function TextOutput({ text, reduction }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <div className="text-output-container">
      <div className="text-output-header">
        <label className="text-output-label">
          Compressed Text
        </label>
        <div className="text-output-actions">
          <span className="reduction-badge">
            {reduction} reduction
          </span>
          <button
            className="copy-button"
            onClick={handleCopy}
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <>
                <Check size={16} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy
              </>
            )}
          </button>
        </div>
      </div>
      <div className="text-output">
        {text}
      </div>
    </div>
  )
}

export default TextOutput

