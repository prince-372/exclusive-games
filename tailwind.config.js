/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Anton: ["'Anton', sans-serif"],
        Inter: ["'Inter', sans-serif "],
      },
      backgroundImage: {
        "blue-307": "linear-gradient(307deg, #51C8EF -13.72%, #7AF57A 102.02%)",
        "sec3bg": "url('../src/assets/image/bg-white.webp')",
        "sec5bg": "url('../src/assets/image/bg-sec-elipes.png')",
        "sec6bg": "url('../src/assets/image/bg-casino-white.png')",
        "sec7bg": "url('../src/assets/image/bg-sec-game-img.png')",
        "sec8bg": "url('../src/assets/image/penguntas-bg.png')",
      },
    },
  },
  plugins: [],
}