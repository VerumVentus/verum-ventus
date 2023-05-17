/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8f3ced',
        secondary: '#c82881',
        dark: '#121619',
        base: '#cccccc',
        error: '#D90429',
      },
    },
  },
  plugins: [],
};
