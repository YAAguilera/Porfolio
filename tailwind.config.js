/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
       colors: {
        bgPurple: '#210D41',
        pink: '#D5328B',
        orange: '#F08A38',
        lilac: '#955583',
        purple: '#2F1953'
      },
      screens: {
        'xs': '280px', //280-425
        'sm': '425px', //425-640
        'md': '640px', //640-1024
        'lg': '1024px',//1024-1280
        'xl': '1280px',//1280-1883
        'xxl': '1883px'
      },
    },
  },
  plugins: [],
}

module.exports.colors =module.exports.theme.extend.colors

