import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    // sourcemap: false,
    lib: { entry: 'src/index.ts', fileName: 'index', formats: ['es'] },
  },
})