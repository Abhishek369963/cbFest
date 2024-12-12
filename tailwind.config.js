/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          100: '#fdf4e3',
        },
      },
    },
  },
  plugins: [],
}
