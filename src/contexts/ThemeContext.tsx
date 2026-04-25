import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (t: Theme) => void
}

const THEME_KEY = 'app.theme'

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getInitialTheme(): Theme {
  // Persisted first
  const saved = (typeof localStorage !== 'undefined')
    ? (localStorage.getItem(THEME_KEY) as Theme | null)
    : null
  if (saved === 'light' || saved === 'dark') return saved
  // Fallback to system preference
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  // Reflect theme on <html data-theme=...> and persist
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      // ignore storage failures
    }
  }, [theme])

  // Keep in sync with OS preference changes only if user hasn't chosen explicitly yet
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const saved = localStorage.getItem(THEME_KEY)
      if (!saved) setThemeState(mq.matches ? 'dark' : 'light')
    }
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  const api = useMemo<ThemeContextValue>(() => ({
    theme,
    setTheme: (t: Theme) => setThemeState(t),
    toggleTheme: () => setThemeState((t) => (t === 'light' ? 'dark' : 'light')),
  }), [theme])

  return <ThemeContext.Provider value={api}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

