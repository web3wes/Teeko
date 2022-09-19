/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "0px",
      // => @media (min-width: 640px) { ... }

      sm: "600px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        "th-background": "var(--background)",
        "th-background-secondary": "var(--background-secondary)",
        "th-foreground": "var(--foreground)",
        "th-primary-dark": "var(--primary-dark)",
        "th-primary-medium": "var(--primary-medium)",
        "th-primary-light": "var(--primary-light)",
        "th-accent-dark": "var(--accent-dark)",
        "th-accent-medium": "var(--accent-medium)",
        "th-accent-light": "var(--accent-light)",
      },
    },
  },
  plugins: [],
}
