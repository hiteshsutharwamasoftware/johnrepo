import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useWidgetUser } from './hooks/useWidget'
import { useAuth } from './contexts/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  // homepage textbox state
  const [query, setQuery] = useState('')
  const [lastSubmitted, setLastSubmitted] = useState<string | null>(null)
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
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
          <div style={{ marginTop: '1rem' }}>
            <label htmlFor="homepage-input" style={{ display: 'block', fontWeight: 600 }}>
              Quick input
            </label>
            <input
              id="homepage-input"
              aria-label="Quick input"
              type="text"
              placeholder="Type here..."
              style={{ padding: '0.5rem', width: '100%', maxWidth: 360 }}
            />
          </div>
        </div>
        {/* Accessible textbox prominently shown above the fold */}
        <form
          aria-label="Homepage input form"
          className="homepage-input"
          onSubmit={(e) => {
            e.preventDefault()
            const value = query.trim()
            if (!value) return
            // Minimal demo processing: store locally to show acceptance
            setLastSubmitted(value)
          }}
        >
          <label htmlFor="homepage-textbox" className="visually-hidden">
            Enter text
          </label>
          <input
            id="homepage-textbox"
            name="homepage-textbox"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type here and press Enter"
            aria-describedby={lastSubmitted ? 'submission-status' : undefined}
            autoComplete="off"
            className="textbox"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {lastSubmitted && (
          <p id="submission-status" role="status" aria-live="polite">
            Submitted: <code>{lastSubmitted}</code>
          </p>
        )}
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
