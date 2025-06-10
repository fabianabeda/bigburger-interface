import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bigburger-interface/', // ← ESSENCIAL para GitHub Pages
  plugins: [react()],
})

