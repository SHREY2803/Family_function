/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '34': '2.8 rem', // Custom padding for 8.5rem
        '6': '1.5rem',  // Default class already exists for 1.5rem
      }
    },
  },
  plugins: [],
}

