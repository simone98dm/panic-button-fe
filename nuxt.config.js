export default {
  ssr: false,
  target: 'static',
  router: {
    base: '/',
  },
  head: {
    title: 'panic-button',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon_32x32.png',
      },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {
    baseURL: '/',
  },
  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#0064ff',
      short_name: 'Panic',
      name: 'Panic Button',
      description: 'Extroverted questions for introverters',
      author: 'simone98dm',
    },
  },
  build: {},
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
}
