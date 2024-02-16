/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#4299E1',
        'secondary-blue': '#BEE3F8',
        'grayblue': '#EDF2F7',
        'gray-1':'#B0B0B0',
        'gray-2':'#A0AEC0'
      },
    },
  },
  plugins: [],
}

