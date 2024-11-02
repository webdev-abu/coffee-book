/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./assets/banner.jpg')",
      },
      color: {
        primary: "#3498db",
        secondary: "#ff41c7",
      },
    },
  },
  plugins: [require("daisyui")],
};
