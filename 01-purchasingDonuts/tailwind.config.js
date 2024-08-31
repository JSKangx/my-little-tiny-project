/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      boxShadow: {
        "shadow-my": "inset 0 0 10px red",
      },
    },
  },
  plugins: [],
};
