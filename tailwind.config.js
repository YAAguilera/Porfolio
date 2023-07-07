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
    },
  },
  plugins: [],
}

module.exports.colors =module.exports.theme.extend.colors

