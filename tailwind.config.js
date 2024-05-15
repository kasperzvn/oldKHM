/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
        2.5: "2.5px",
        1.5: "1.5px",
      },
      fontFamily: {
        viafont: ["ViaFont", "sans-serif"],
        syne: ["Syne", ...defaultTheme.fontFamily.sans],
        anek: ["Anek Latin", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        "grid": "url(../fonts/grid.png)"
      },
      scale: {
        '103': '1.03',
        '102': '1.02',
        '101': '1.01'
      }
    },
  },
  plugins: [],
}

