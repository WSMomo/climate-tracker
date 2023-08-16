/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#030E16",
        "secondary-color": "#1A232A",
        "third-color": "#030D15",
      },
    },
  },
  plugins: [],
};
