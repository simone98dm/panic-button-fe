export default {
  ssr: false,
  target: 'static',
  router: {
    base: '/panic-button/',
  },
  head: {
    title: 'panic-button',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon_32x32.png' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {
    baseURL: '/',
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {},
}
