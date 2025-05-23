import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite';
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js', // Adjust this to your entry file
      name: 'FlexTeXt',
      fileName: (format) => `flextext.${format}.js`,
    },
  },
});