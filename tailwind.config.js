/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'satisfy': ['Satisfy'],
     }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake", "black"],
  },
}

