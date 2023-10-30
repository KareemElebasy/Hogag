export default defineNuxtConfig({
  devtools: { enabled: true },
  css:["~/assets/style/tailwind.css"],
  // app: {
  //   // Start:: Head Configurations //
  //   head: {
  //     meta: [
  //       { charset: "utf-8" },
  //       {
  //         name: "viewport",
  //         content: "width=device-width, initial-scale=1",
  //       },
  //     ],
  //     link: [{ rel: "icon", type: "image/x-icon", href: "/static/logo.png" }],
  //     style: [],
  //     script: [],
  //     noscript: [],
  //   },
  //   // End:: Head Configurations //
  // },
  modules: [
    "@nuxtjs/tailwindcss",'nuxt-swiper',
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en.json",
            dir: "ltr",
          },
          {
            name: "عربي ",
            code: "ar",
            iso: "ar-AR",
            file: "ar.json",
            dir: "rtl",
          },
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "ar",
        // detectBrowserLanguage: {
        //     useCookie: true,
        //     cookieKey: 'hogag_website_lang',
        //     alwaysRedirect: true,
        //     fallbackLocale: 'ar'
        // },
        vueI18nLoader: true,
      },
    ],
  ],
  // ssr:false,
  runtimeConfig: {
    public: {
        baseURL: "https://phpv8.aait-d.com/alhajaaj/public/api/website/",
    },
},

  plugins: [
    '~/plugins/i18n.client.ts',
  ],
  // tailwindcss: {
  //   cssPath: '~/assets/style/tailwind.scss',
  // },

});
