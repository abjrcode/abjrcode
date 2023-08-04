const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      xs: '595px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: '2rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
