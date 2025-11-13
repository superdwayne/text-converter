import './TextInput.css'

function TextInput({ value, onChange, placeholder }) {
  return (
    <div className="text-input-container">
      <label htmlFor="text-input" className="text-input-label">
        Input Text
      </label>
      <textarea
        id="text-input"
        className="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={8}
      />
      <div className="text-input-footer">
        <span className="char-count">{value.length} characters</span>
      </div>
    </div>
  )
}

export default TextInput

