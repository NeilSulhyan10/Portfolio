/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
      },
      animation: {
        typing: "typing 4s steps(30) forwards, blink 0.7s infinite",
        scroll: "scroll 10s linear infinite",
        carousel: "carousel 30s linear infinite"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}