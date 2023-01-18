/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgColor: "hsl(212, 45%, 89%)",

        containerColor: " hsl(0, 0%, 100%)",
      },
      textColor: {
        textColor: "hsl(218, 44%, 22%)",
        pColor: "hsl(220, 15%, 55%)",
      },
    },
  },
  plugins: [],
};
