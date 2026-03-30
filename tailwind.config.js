/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#eef5ff', 100: '#d9e8ff', 200: '#bcd5ff', 300: '#8ebbff', 400: '#5996ff', 500: '#3370ff', 600: '#1a4ff5', 700: '#133ae1', 800: '#1630b6', 900: '#182e8f', 500: '#3b82f6' },
        accent: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

