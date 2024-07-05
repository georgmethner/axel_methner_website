// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import fs from 'fs'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devServer: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')).toString(),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')).toString()
    }
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: [
    "@nuxt/image",
    [
      "@storyblok/nuxt",
      {
        accessToken: "Kfr8rwrPuioprOFe801rQgtt",
      },
    ],
  ],
});


