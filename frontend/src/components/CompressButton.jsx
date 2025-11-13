import { Sparkles } from 'lucide-react'
import './CompressButton.css'

function CompressButton({ onClick, loading, disabled }) {
  return (
    <button
      className={`compress-button ${loading ? 'loading' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <span className="spinner"></span>
          Compressing...
        </>
      ) : (
        <>
          <Sparkles size={16} />
          Compress Text
        </>
      )}
    </button>
  )
}

export default CompressButton

