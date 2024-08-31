/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        pre: ['"Pretendard Variable", Pretendard, sans-serif'],
        suit: ["SUIT Variable", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "shadow-my": "inset 0 0 10px red",
      },
      colors: {
        primary: {
          100: "#FED8DF",
          200: "#FF9494",
          300: "#FF7074",
        },
        secondary: {
          100: "#585858",
          200: "#000000",
        },
      },
      borderRadius: {
        none: 0,
        "": 50,
      },
    },
  },
  plugins: [],
};
