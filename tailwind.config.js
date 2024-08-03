/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js",],
  theme: {
    extend: {
      screens: {
        'media321':'321px',
        'media426':'426px',
        'media769':'769px',
      },
    },
    fontFamily :{
      anton: ["Anton SC","sans-serif"],
      anton1: ["Anton", "sans-serif"],
      pacifico: ["Pacifico", "sans-serif"],
    }
  },
  plugins: [],
}

