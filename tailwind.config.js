/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        clCyan: 'var(--color-cyan)',
        clViolet: 'var(--color-very-dark-violet)',
        clGrayish: 'var(--color-grayish-violet)',
        clRed: 'var(--color-red)'
      },
      backgroundColor:{
        bgDarkViolet: 'var(--color-dark-violet)',
        bgVeryViolet: 'var(--color-very-dark-violet)',
        bgGray: 'var(--color-grayish-violet)',
        bgCyan: 'var(--color-cyan)'
      }
    },
  },
  plugins: [],
}
