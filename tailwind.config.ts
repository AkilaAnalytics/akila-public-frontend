import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Merriweather", "serif"],
        poppins: ["Poppins"],
      },
      colors: {
        // Akila's colors
        cyan: "#00B8E9",
        periwinkle: "#544BFD",
        darkBlue: "#2325C9",
        periwinkleDark: "rgb(41, 38, 122)",
        // other colors
        turqoise: "#3BB3C1",
        darkGrey: "#292B2C",
        background: "#0C0C0C",
        secondaryBackground: "#1E1E1E",
        alternateBackground: "#18181B",
        lightGrey: "#555555",
        linkText: "#3b82f6", // same as text-blue-500
        greyText: "#71717A",
        redText: "#fe87a1",
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
  },
  plugins: [],
} satisfies Config;
