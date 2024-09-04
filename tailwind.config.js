/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontFamily: {
      krona: '"Krona One", serif',
      poppins: '"Poppins", sans-serif',
      syne: '"Syne", sans-serif',
    },
    extend: {
      keyframes: {
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
        slideout: {
          from: {
            opacity: "0",
            transform: "translateY(-70px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1.5s ease 300ms 1 forwards",
        slidein500: "slidein 1.5s ease 500ms 1 forwards",
        slidein700: "slidein 1.5s ease 700ms 1 forwards",
        slideout300: "slideout 1s ease 300ms 1 forwards",
        slideout500: "slideout 1s ease 500ms 1 forwards",
        slideout700: "slideout 1s ease 700ms 1 forwards",
      },

      colors: {
        black: "#141619",
        "dark-gray": "#141619",
        "dark-dark-gray": "#2c2e3a",
        gray: "#B3B4BD",
        "light-gray": "#E0E0E0",
        white: "#fffafa",
        blue: "#0a21c0",
        "dark-blue": "#050a44",
      },
    },
    screens: {
      xxs: "298px",
      // => @media (max-width: 524px) { ... }

      xs: "398px",
      // => @media (max-width: 524px) { ... }

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
