/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },

      animation: {
        meteor: "meteor 5s linear infinite",
        typing: "typing 4s steps(30) forwards, blink 0.7s infinite",
        scroll: "scroll 10s linear infinite",
        carousel: "carousel 30s linear infinite",
      },

      dropShadow: {
        "cyan-sharp": "0 0 15px #22D3EE",
        "yellow-sharp": "0 0 15px #FACC15",
        "blue-sharp": "0 0 15px #af1e88ff",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
