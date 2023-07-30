module.exports = {
  content: ['index.html'],
  theme: {
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
