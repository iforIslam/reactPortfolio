/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Custom Raleway font
        lobster: ['Lobster', 'cursive'],
      },
      boxShadow: {
        'white-light': '0 0.1px 0.5px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
}