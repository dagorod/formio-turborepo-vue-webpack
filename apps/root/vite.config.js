import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    ViteEjsPlugin({
      title: 'Demo test app',
    }),
  ],
})
