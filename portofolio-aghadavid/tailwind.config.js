/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        base : "#0b121f",
        bgSecondary : "#141d2b",
        bgT:"#202837",
        baseText : "#a4b1cd",
        secondary: "#ed3921"
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}