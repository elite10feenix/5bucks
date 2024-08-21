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
        'custom-purple': '#1B0535',
        'custom-purple2': '#21173C',
        'custom-pink': '#8B57F5',
        'custom-pink2': '#B4A1F7',
        'custom-gray': '#EAEAEA',
        'custom-black': '#170738',
        'register': '#4C0E95',
        'login': '#A0FF42',
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(to right, #4F0F9B47, #1B053547)',
      }
    },
  },
  plugins: [],
}
