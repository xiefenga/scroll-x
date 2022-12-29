import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)

export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: {
      '@': resolve(__filename, '../src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__filename, '../src/main.tsx'),
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    outDir: 'lib',
    sourcemap: true,
    rollupOptions: {
      external: ['react'],
    },
  },
})