/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "ft-white": "#ffffff",
        "ft-black": "#152A16",
        "ft-gray-200": "#E7E7E7",
        "ft-gray-300": "#D4E9FF",
        "ft-gray-400": "#A7A8A8",
        "ft-gray-500": "#5C635A",
        "ft-blue-400": "#4285F3",
        "ft-blue-500": "#156BCA",
        "ft-red-100": "#FFECEA",
        "ft-red-500": "#F15E4A"
      },
    },
  },
  plugins: [],
};
