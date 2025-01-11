/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary1: "rgba(0, 174, 205, 0.1)",
        primary2:"#00aecd ",
         primary3:"#1d68a7 "
      },
      screens: {
        xs: "400px",
        ls: "550px",
        sm: "640px",
        md: "768px",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "1636px",
      },
      boxShadow: {
        'custom': '2px 2px 14px rgb(0 0 0 / 40%)',
      },
    },
  },
  plugins: [],
};
