/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mobile" : 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg'
      },
      fontFamily: {
        Ubuntu : 'Ubuntu, sans-serif'
      }
    },
  },
  plugins: [],
}

