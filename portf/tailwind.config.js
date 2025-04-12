/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans:['Basic'],
        'empha' : 'empha',
        'title' : 'title'
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

