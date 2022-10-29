/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fff',
      'blue-dark': '#000520',
      'pink': '#ff49db',
      'green': '#28A163',
      'gray-dark': '#273444',
      'purple': '#5267D7',
      'purple-dark': '#010B40',

    },
    extend: {},
  },
  plugins: [],
}
