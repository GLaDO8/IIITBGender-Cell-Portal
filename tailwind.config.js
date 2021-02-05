module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: [
        "Poppins",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
      ],
      sans: [
        "Poppins",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
      ],
    },
    extend: {
      colors: {
        "link-blue": "#06c",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        base: "1.05rem",
        lg: "1.2rem",
        xl: "1.6rem",
        "2xl": "1.8rem",
        "5xl": "2.5rem",
        "6xl": "3.5rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      maxWidth: {
        "2xl": "36rem",
        "3xl": "50rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
