/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryBtn': '#8C0427',
        'gradiantRed': '#D31A50',
        'gradiantOrange': '#FF4331',
        'cardFlowerBg': '#F3F4F6',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
