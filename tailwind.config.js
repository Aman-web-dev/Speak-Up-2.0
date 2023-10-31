/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


export default withMT({
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

 
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [require("daisyui")]
})

