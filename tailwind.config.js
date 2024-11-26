/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(11, 13, 23)",
        secondary: "rgb(208, 214, 249)",
      },
      fontFamily: {
        body: "'Barlow Condensed', serif",
        heading: "Bellefair, serif",
      },
    },
  },
  plugins: [],
};
