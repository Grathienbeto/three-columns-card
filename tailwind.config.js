/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      sedan: "hsl(31, 77%, 52%)",
      suvs: "hsl(184, 100%, 22%)",
      luxury: "hsl(179, 100%, 13%)",
      trans_white: "hsla(0, 0%, 100%, 0.75)",
      light_white: "hsl(0, 0%, 95%)",
    },
    fontFamily: {
      lexend: ["Lexend Deca", "sans-serif"],
      shoulders: ["Big Shoulders Display", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
