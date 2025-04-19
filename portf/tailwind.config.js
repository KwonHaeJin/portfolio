/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans:['Basic'],
        'empha' : 'empha',
        'title' : 'title',
        'subtitle' : 'subtitle'
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

