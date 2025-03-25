 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hijau: "#4CAF4F",
        hitam: "#18191F",
        abu: " #4D4D4D",
        background: "#F5F7FA",
      },
      boxShadow: {
        custom: '0px 8px 16px 0px rgba(171, 190, 209, 0.4)',
      },
    },
  },
  plugins: [],
}