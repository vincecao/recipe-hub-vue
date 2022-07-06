/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        serif: ['Cormorant\\ Garamond', ...defaultTheme.fontFamily.serif],
        editor: ['Noto\\ Serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
