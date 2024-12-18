/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontFamily: {
      poppins: '"Poppins", sans-serif',
      montserrat: '"Montserrat", sans-serif',},
    extend: {
      dropShadow: {
        "header": "0_1.2px_1.2px_rgba(0,0,0,0.8)",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        appear: "appear 0.5s ease-in-out",
        slidein300: "slidein 1.5s ease 300ms 1 forwards",
        slidein500: "slidein 1.5s ease 500ms 1 forwards",
        slidein700: "slidein 1.5s ease 700ms 1 forwards",
      },

      colors: {
        black: "#141619",
        "dark-gray": "#2c2e3a",
        gray: "#B3B4BD",
        "light-gray": "#E0E0E0",
        white: "#fffafa",
        blue: "#0a21c0",
        "dark-blue": "#050a44",
        navy: "#000080",
      },
    },
    screens: {
      xxs: "359px",
      // => @media (max-width: 398px) { ... }

      xs: "389px",
      // => @media (max-width: 398px) { ... }

      s: "524px",
      // => @media (max-width: 524px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
