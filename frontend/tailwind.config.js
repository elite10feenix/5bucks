/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the extensions if needed
  ],
  theme: {
    extend: {
      height: {
        '160': '160px',
        '80': '80px',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        'custom-green': '#A0FF42',
        'custom-green2': '#5AFF1A',
        'custom-green3': '#76BD31',
        'custom-purple': '#1B0535',
        'custom-purple2': '#21173C',
        'custom-pink': '#8B57F5',
        'custom-pink2': '#B4A1F7',
        'custom-gray': '#EAEAEA',
        'custom-gray2': '#989898',
        'custom-gray3': '#5E5C62',
        'custom-black': '#170738',
        'custom-white': '#888',
        'custom-white2': '#BBB7C4',
        'register': '#4C0E95',
        'login': '#A0FF42',
      },
      borderRadius: {
        'scrollbar': '10px', // border-radius for the scrollbar thumb
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(to right, #4F0F9B47, #1B053547)',
        'gradient-purple-pink2': 'linear-gradient(to bottom, #2D1A5B, #1B0D39)',
        'gradient-pink': 'linear-gradient(to bottom, #6723B6, #4C0E95)',
        'gradient-green': 'linear-gradient(to bottom, #A0FF42, #609928)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
