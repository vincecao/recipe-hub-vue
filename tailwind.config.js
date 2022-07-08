/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./composables/**/*.{vue,js,ts}",
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
      backgroundImage: {
        'heroCredential': "url('https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_1280.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
