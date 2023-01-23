module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackPink: '#200b6a',
        orange: '#fd562a',
        purple: '#4526b1',
        whitePurple: '#7153d9',
      },
      fontFamily: {
        noto: ['"Noto Sans KR"', 'sans-serif'],
        open: ['"Open Sans"', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}