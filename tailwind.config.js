/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
      },
      colors: {
        light: {
          "main-color": "#fafafa",
          "secondary-color": "#e4e5f1",
          "third-color": "#d2d3db",
          "text-color": "#484b6a",
        },
        dark: {
          "main-color": "#242526",
          "secondary-color": "#18191a",
          "third-color": "#3a3b3c",
          "text-color": "#e4e6eb",
        },
      },
    },
  },
  plugins: [],
};
