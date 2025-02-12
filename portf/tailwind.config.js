/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans:['Basic'],
        'empha' : 'empha'
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

