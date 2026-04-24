import { useState } from "react"
import "./App.css"

function App() {
  const [query, setQuery] = useState("")
  const [submitted, setSubmitted] = useState<string | null>(null)

  return (
    <>
      <section id="center">
        <h1>Welcome</h1>
        <form
          className="homepage-textbox"
          onSubmit={(e) => {
            e.preventDefault()
            const v = query.trim()
            if (v) setSubmitted(v)
          }}
        >
          <label htmlFor="homepage-input" className="visually-hidden">Enter text</label>
          <input
            id="homepage-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type here..."
            aria-label="Homepage input"
          />
          <button type="submit" className="submit">Submit</button>
        </form>
        {submitted && (
          <p className="submitted" role="status" aria-live="polite">
            You entered: <strong>{submitted}</strong>
          </p>
        )}
      </section>
    </>
  )
}

export default App
