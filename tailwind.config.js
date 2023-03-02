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
      },
      backgroundImage: {
        'shorten-desk':"url('https://res.cloudinary.com/dnzidlufh/image/upload/v1677652957/bg-shorten-desktop_lm9lz1.svg')",
        'shorten-mob': "url('https://res.cloudinary.com/dnzidlufh/image/upload/v1677652957/bg-shorten-mobile_wzraxw.svg')",
        'boost-desk': "url('https://res.cloudinary.com/dnzidlufh/image/upload/v1677652957/bg-boost-desktop_vk5r1o.svg')",
        'boost-mob': "url('https://res.cloudinary.com/dnzidlufh/image/upload/v1677652957/bg-boost-mobile_schxff.svg')"
      }
    },
  },
  plugins: [],
}
