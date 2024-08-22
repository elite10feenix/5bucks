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
        'custom-white': '#808080',
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
        'gradient-pink2': 'radial-gradient(circle, #7C5BCF, #611EAF)',
        'gradient-green2': 'radial-gradient(circle at top left, #4C0E95 1%, #76BD31 100%)'

      },
      boxShadow: {
        'inner-top-left': 'inset 20px 30px 50px #7C5BCF30', // Adjust the values as needed
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function({ addComponents }) {
      addComponents({
        '.react-calendar': {
          backgroundColor: '#170738', // Black background of the calendar
          color: '#ffffff', // White text color for dates
          border: 'none', // No border around the calendar
          borderRadius: '0.5rem',
          '.react-calendar__tile': {
            color: '#ffffff', // White text color for normal dates
            backgroundColor: 'transparent', // Transparent background for normal dates
            border: 'none', // No border for normal dates
            '&:hover': {
              backgroundColor: 'transparent', // No background change on hover
              border: 'none', // No border on hover
            },
          },
          '.react-calendar__tile--active': {
            backgroundColor: '#ff69b4', // Pink background for selected date
            color: '#ffffff', // White text color for selected date
            borderRadius: '50%', // Circular shape for selected date
            padding: '0.5rem', // Padding to ensure the circle is visible
            border: 'none', // No border for selected date
          },
          '.react-calendar__tile--disabled': {
            color: '#808080', // Gray color for prev/next month dates
          },
          '.react-calendar__navigation': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem',
            borderBottom: 'none', // Remove the border below the navigation
            // Ensure no borders or lines around the title
          },
          '.react-calendar__navigation__prev-button, .react-calendar__navigation__next-button, .react-calendar__navigation__prev2-button, .react-calendar__navigation__next2-button': {
            color: '#A0FF42', // Green text color for navigation buttons
            backgroundColor: 'transparent', // Transparent background
            border: 'none', // Remove default border
            borderRadius: '0.25rem',
            padding: '0.25rem 0.5rem',
            cursor: 'pointer',
            '&:hover': {
              color: '#ff0000', // Red text color on hover for year navigation buttons
              backgroundColor: 'transparent', // No background on hover
            },
          },
          '.react-calendar__navigation__label': {
            color: '#ffffff', // White for the current month/year label
            fontSize: '1rem',
            textAlign: 'center',
            padding: '0 1rem',
            margin: '0',
            border: 'none', // Ensure no border around the label
          },
          '.react-calendar__month-view__weekdays__weekday': {
            color: '#4F4F4F', // Gray for weekday labels
          },
          '.react-calendar__month-view__days__day--neighboringMonth': {
            color: '#808080', // Gray for dates from the previous or next month
          },
        },
      });
    },
  ],
}
