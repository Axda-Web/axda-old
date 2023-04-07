/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#151515',
        secondary: '#4EE1A0',
        tertiary: '#242424',
        silver: '#d9d9d9'
      },
      fontSize: {
        base: '1.125rem',
        'heading-m': '1.5rem',
        'heading-l': '3rem',
        'heading-m': '5.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)']
      }
    },
  },
  plugins: [],
}