/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        viafont: ["ViaFontru", "sans-serif"],
        oi: ["Oi", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}

