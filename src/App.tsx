import { useState } from "react"
import "./App.css"
import { useWidgetUser } from "./hooks/useWidget"
import { useAuth } from "./contexts/AuthContext"

function App() {
  const [query, setQuery] = useState("")
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [color, setColor] = useState<string>("#9135ff")
  const { user } = useAuth()

  useWidgetUser(
    user
      ? {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          tenant: user.tenant
            ? {
                id: user.tenant.id,
                name: user.tenant.name
              }
            : undefined
        }
      : null
  )

  return (
    <>
      <section id="center">
        <h1>Welcome</h1>
        {/* Color picker for homepage personalization */}
        <div className="homepage-color-picker" role="group" aria-label="Color selection">
          <label htmlFor="color-picker" className="visually-hidden">Pick a color</label>
          <input
            id="color-picker"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            aria-label="Color picker"
          />
          <p className="selected-color" aria-live="polite">
            Selected color: <strong>{color}</strong>
            <span aria-hidden="true" className="color-swatch" style={{ background: color }} />
          </p>
          </div>
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
