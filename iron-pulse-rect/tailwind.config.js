/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        "black": "#000",
        "gainsboro": "#d9d9d9",
        "gold": {
          "100": "#ffdd33",
          "200": "#ffd300"
        },
        "gray": {
          "100": "rgba(0, 0, 0, 0.3)",
          "200": "rgba(255, 255, 255, 0.3)"
        },
        "crimson": "#e13030",
        "darkslategray": "#093052",
        "whitesmoke": {
          "100": "#f9f9f9",
          "200": "rgba(249, 249, 249, 0.55)"
        },
        "blue": "#570df8"
      },
      fontFamily: {
        "urbanist": "Urbanist"
      },
      borderRadius: {
        "31xl": "50px",
        "6xs-5": "6.5px",
        "mini-9": "14.9px",
        "xl-6": "20.6px",
        "29xl-8": "48.8px",
        "7xl-2": "26.2px"
      }
    },
    fontSize: {
      "11xl": "30px",
      "39xl-5": "58.5px",
      "4xl": "23px",
      "34xl-8": "53.8px",
      "25xl-7": "44.7px",
      "62xl-6": "81.6px",
      "sm": "14px", 
      "base": "16px",
      "xl": "20px",
      "21xl": "40px",
      "8xl": "27px",
      "23xl-6": "42.6px",
      "sm-1": "13.1px",
      "2xl-5": "21.5px",
      "6xl-3": "25.3px",
      "3xs-5": "9.5px",
      "46xl-3": "65.3px",
      "3xl-5": "22.5px",
      "18xl-4": "37.4px",
      "3xl": "22px",
      "smi-1": "12.1px",
      "mini": "15px",
      "mid": "17px",
      "7xl-8": "26.8px",
      "51xl": "70px"
    }
  },
  plugins: [require("daisyui")],

}