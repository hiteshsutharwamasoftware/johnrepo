import { useEffect, useState } from "react"
import "./App.css"
import { useWidgetUser } from "./hooks/useWidget"
import { useAuth } from "./contexts/AuthContext"

import { useTheme } from "./contexts/ThemeContext"
function App() {
  const [query, setQuery] = useState("")
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [color, setColor] = useState<string>("#aa3bff")
  const { user } = useAuth()
  const { theme, toggleTheme } = useTheme()

  // Persist selected color to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('homepage.color')
    if (saved) setColor(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('homepage.color', color)
  }, [color])

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
        {/* Theme toggle */}
        <div>
          <button
            type="button"
            aria-pressed={theme === 'dark'}
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="counter"
          >
            {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          </button>
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
        {/* Color Picker */}
        <div className="color-picker" role="group" aria-labelledby="color-picker-label">
          <label id="color-picker-label" htmlFor="homepage-color">Choose a color</label>
          <input
            id="homepage-color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            aria-label="Homepage color picker"
          />
          <div
            className="color-preview"
            data-testid="color-preview"
            aria-label={`Selected color ${color}`}
            role="img"
            style={{ backgroundColor: color }}
          />
          <span className="color-value" aria-live="polite">{color}</span>
        </div>
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
