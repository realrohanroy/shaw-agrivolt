import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    ViteImageOptimizer({
      // default options are usually fine, it optimizes SVG, PNG, JPEG, GIF, TIFF, WebP, Avif
    }),
  ],
})
