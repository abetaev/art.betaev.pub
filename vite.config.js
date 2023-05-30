import path from 'path'
import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  build: {
    target: 'esnext',
    minify: "esbuild"
  },
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'src/img')
    }
  },
});
