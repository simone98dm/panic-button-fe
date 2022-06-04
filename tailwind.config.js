module.exports = {
  darkMode: 'class',  
  theme: {
    darkSelector: '.dark-mode',
  },
  variants: {
    backgroundColor: ['dark'],
    textColor: ['dark'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
