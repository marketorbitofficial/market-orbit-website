/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#c8f000",
        "brand-black": "#0d0d0d",
        "brand-dark": "#111111",
        "brand-border": "#1e1e1e",
      },
      fontFamily: {
        serif: ["Playfair Display"],
        sans: ["Inter"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },
};

export default config;
