// vitest.config.ts
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  test: {
    environment: 'nuxt', // Usa o ambiente Nuxt para testes
  },
  resolve: {
    // Garante que o atalho ~/ seja resolvido corretamente
    alias: {
      '~': resolve(__dirname, '.'),
      '~~': resolve(__dirname, '.'),
      '@': resolve(__dirname, '.'),
      '@@': resolve(__dirname, '.'),
    },
  },
})