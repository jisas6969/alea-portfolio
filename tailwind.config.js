/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5a2a4d",
        dark: "#1f1f1f",
      },
    },
  },
  plugins: [],
}
