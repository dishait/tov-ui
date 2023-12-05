import { defineConfig } from 'vitest/config'
import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import config from './vite.config'

export default defineConfig({
  ...config,
  plugins: [
    vue(),
    ...(config.plugins as Plugin[]),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['packages/**', '!packages/**/docs', '!packages/**/demos'],
    },
  },
})
