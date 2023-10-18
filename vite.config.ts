import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    sourcemap: false,
    lib: { entry: 'src/index.tsx', fileName: 'index', formats: ['es'] },
  },
})