/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: '#ed0d63',
        primaryBlue: '#00aeed',
      },
    },
  },
  plugins: [],
};
