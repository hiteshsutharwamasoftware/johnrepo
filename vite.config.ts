import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', '127.0.0.1', '0.0.0.0','99c5-2409-40d4-1247-3176-ccd0-a379-43aa-e509.ngrok-free.app'],
  },
})
