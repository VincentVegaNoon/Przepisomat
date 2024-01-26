/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        medival: ["MedievalSharp", "sans-serif"],
      },
      colors: {
        customGray: "#262626",
      },
    },
  },
  plugins: [],
};
