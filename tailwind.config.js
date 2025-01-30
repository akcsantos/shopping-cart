/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobS: "320px",
        mobM: "375px",
        mobL: "425px",
        tablet: "768px",
        lapt: "1024px",
        laptL: "1440px",
      },
      backgroundImage: {
        coffeeBg: "url('/coffeebg.jpg')",
        blackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
        smallAbout: "url('/small-about.jpg')",
      },
    },
  },
  plugins: [],
};
