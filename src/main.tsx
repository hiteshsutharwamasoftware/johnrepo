import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './theme.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext'

// Force a consistent light theme to ensure a white background across pages
;(function initTheme(){
  document.documentElement.setAttribute('data-theme', 'light')
})()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
