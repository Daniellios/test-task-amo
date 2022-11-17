/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //prettier-ignore
      fontFamily: {
        'inter': ["Inter", 'sans-serif'],
        'moserrat': ['Montserrat', 'sans-serif']
      },
    },
    //prettier-ignore
    screens: {
      'sm': '714px',
      // => @media (min-width: 640px) { ... }
      
      'md': '904px',
      // => @media (min-width: 904px) { ... }

      'md-lg' : '964px',
      // => @media (min-width: 964px) { ... }

      'lg': '1160px',
       // => @media (min-width: 1160px) { ... }
    },
  },
  plugins: [],
};
