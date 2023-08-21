/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          "main-color": "#FFFFFF",
          "secondary-color": "#E5E5E5",
          "third-color": "#F0F0F0",
          "text-color": "#000000",
        },
        dark: {
          "main-color": "#292929",
          "secondary-color": "#121212",
          "third-color": "#1A232A",
          "text-color": "#FFF",
        },
      },
    },
  },
  plugins: [],
};
