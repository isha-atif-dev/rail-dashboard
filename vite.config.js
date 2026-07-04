import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // IMPORTANT: change this to match your GitHub repo name exactly, e.g. '/rail-dashboard/'
  base: '/rail-dashboard/',
  plugins: [react(), tailwindcss()],
})
