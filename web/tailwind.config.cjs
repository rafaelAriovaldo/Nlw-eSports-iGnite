/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage:{
        Fundo: "url('./public/Fundo.png')"
      }
    },
  },
  plugins: [],
}
