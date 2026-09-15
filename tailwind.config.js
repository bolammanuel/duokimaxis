/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#0D1C23",
        brandCard: "#07151C",
        brandOrange: "#FA4517",
        brandOrangeHover: "#FF6B35",
        brandBlue: "#0066FF",
        brandPurple: "#6D28D9",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
    },
  },
  plugins: [],
}
