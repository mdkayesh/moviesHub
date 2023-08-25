/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        bg_secondary: "var(--bg-secondary)",
        bg_primary: "var(--bg-primary)",
        black_100: "var(--black-100)",
        black_90: "var(--black-90)",
        black_80: "var(--black-80)",
        gray_100: "var(--gray-100)",
        gray_90: "var(--gray-90)",
        gray_80: "var(--gray-80)",
        white_100: "var(--white-100)",
        white_90: "var(--white-90)",
        gradient: "var(--gradient)",
      },
    },

    container: {
      center: true,
    },
  },
  plugins: [],
};
