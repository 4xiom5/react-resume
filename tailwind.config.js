/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        a4: '210mm',
      },
      height: {
        a4: '297mm',
      },
      fontFamily: {
        'sans': ['OpenSans', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
