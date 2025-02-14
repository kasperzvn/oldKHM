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
        5.5: "5.5px",
      },
      fontFamily: {
        // viafont: ["ViaFont", "sans-serif"],
        anek: ["Anek Latin", ...defaultTheme.fontFamily.sans],
        kode: ["Kode Mono", ...defaultTheme.fontFamily.sans],
        playfair: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        akshar: ["Akshar", ...defaultTheme.fontFamily.sans],
        serifdisplay: ["DM Serif Display", ...defaultTheme.fontFamily.sans],
        cookie: ["Cookie", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "grid": "url(../fonts/grid.png)",
        "planks5": "url(../fonts/planks5.jpeg)",
        "planks6": "url(../fonts/planks6.jpeg)",
      },
      scale: {
        '103': '1.03',
        '102': '1.02',
        '101': '1.01'
      },
      width: {
        4.5: "1.125rem",
      },
      height: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [],
}

