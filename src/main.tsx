import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './theme.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext'
const THEME_KEY = 'app.theme'
 type Theme = 'light' | 'dark'
 (function initTheme(){
   try {
     const saved = localStorage.getItem(THEME_KEY) as Theme | null
     const theme = (saved === 'light' || saved === 'dark')
       ? saved
       : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
     document.documentElement.setAttribute('data-theme', theme)
   } catch {
     document.documentElement.setAttribute('data-theme', 'light')
   }
 })()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
