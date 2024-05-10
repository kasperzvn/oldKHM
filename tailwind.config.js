/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        viafont: ["ViaFontru", "sans-serif"],
        oi: ["Oi", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        "grid": "url(../fonts/grid.png)"
      }
    },
  },
  plugins: [],
}

