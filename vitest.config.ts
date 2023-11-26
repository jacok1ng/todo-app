import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 10000,
    environment: 'jsdom',
    exclude: ['node_modules', 'public'],
    setupFiles: ['./src/tests/setup'],
  },
})
