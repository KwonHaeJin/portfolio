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
      screens: {
        'tall-mobile': { raw:  '(min-height: 896px) and (max-width: 414px)' }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

