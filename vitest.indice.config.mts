import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@shared': resolve(import.meta.dirname, 'src/shared'),
      '@': resolve(import.meta.dirname, 'src/renderer'),
      'openchemlib-recursos': resolve(import.meta.dirname, 'node_modules/openchemlib/dist/resources.json')
    }
  },
  test: { include: ['tests/generar/**/*.generar.ts'], environment: 'node', testTimeout: 60_000 }
})
