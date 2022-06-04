module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
    extend: {},
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd']
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
