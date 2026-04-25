import { useEffect, useState } from 'react'
import './App.css'
import { useWidgetUser } from './hooks/useWidget'
import { useAuth } from './contexts/AuthContext'

type Theme = 'light' | 'dark'
const THEME_KEY = 'app.theme'

function App() {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [color, setColor] = useState<string>('#aa3bff')
  const [theme, setTheme] = useState<Theme>(
    () => (document?.documentElement.getAttribute('data-theme') as Theme) || 'light'
  )
  const { user } = useAuth()

  // Persist selected color to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('homepage.color')
    if (saved) setColor(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('homepage.color', color)
  }, [color])

  // Sync mock widget user
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

  // Load saved theme once on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY) as Theme | null
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved)
        document.documentElement.setAttribute('data-theme', saved)
      }
    } catch {
      // ignore
    }
  }, [])

  // Persist and apply theme whenever it changes
  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        aria-pressed={theme === 'dark'}
        aria-label="Toggle color theme"
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
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
            aria-label="Selected color"
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
