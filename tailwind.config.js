/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "main-color": "#030E16",
        // "secondary-color": "#1A232A",
        // "third-color": "#030A15",
        "main-color": "#292929",
        "secondary-color": "#121212",
        "third-color": "#164e63",
        "text-color": "#FFF",
      },
    },
  },
  plugins: [],
};
