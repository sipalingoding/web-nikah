/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cokelat: "#6C4C49",
        putih: "#EEE5D9",
        cokelatTua: "#4A3E35",
      },
      fontFamily: {
        signature: ["Photograph Signature", "cursive"],
        marcellus: ["var(--font-marcellus)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
