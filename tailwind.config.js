/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors:{
        green:{
          100: '#CAFFF8',
          200: '#C5EDE3',
          500: '#3DB695',
          900: '#24504A',
        }
      }
    },
  },
  plugins: [],
}
