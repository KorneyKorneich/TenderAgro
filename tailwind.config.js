/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "flakes-in-spoon": "url('/src/shared/assets/img/flakes-large.webp')",
        "flakes-in-bowl": "url('/src/shared/assets/img/flakes-in-bowl.webp')",
      }
    },
  },
  plugins: [],
}