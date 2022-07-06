/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond"],
        editor: ["Noto Serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
