import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { ghPages } from 'vite-plugin-gh-pages'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/SGI-test/",
  plugins: [
    vue({
      template: { transformAssetUrls }
    }), ghPages({
      base: "/SGI-test/"
    }),
    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: fileURLToPath(
        new URL('./src/quasar-variables.sass', import.meta.url)
      ),
      extras: ['mdi-v6']
    })
  ]
})