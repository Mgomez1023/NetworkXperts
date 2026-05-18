/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nxg: {
          red: "#f0242d",
          cyan: "#31bdd6",
          black: "#050505",
          charcoal: "#101113",
        },
      },
      boxShadow: {
        "nxg-red": "0 18px 45px rgba(240, 36, 45, 0.18)",
        "nxg-cyan": "0 18px 45px rgba(49, 189, 214, 0.16)",
      },
    },
  },
  plugins: [],
};
