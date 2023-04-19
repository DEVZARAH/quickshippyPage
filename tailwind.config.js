/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens :{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
          },
    extend: {

      colors: {
        "shippy-green": "#079B56",
        "shippy-blue": "#124CA4",
        "shippy-blue-two": "#3A6AB3",
        "shippy-gray": "#DAE1E6",
        "shippy-gray-two": "#859AAB",
        "shippy-gray-three": "#C2CCD5",
        "shippy-gray-four": "#3C566C",
        "shippy-gray-five": "#304556",
        "shippy-gray-six": "#F6F7F9",
        "shippy-gray-tx": "#678096",
        "shippy-black": "#14171A",
        "public-page": "#FDFDFD",
        "shippy-red": "#FF3233",
        "shippy-red-two": "#DC1B1C",
        "shippy-red-light": "#FFF2F2",
        "shippy-modal-overlay": "rgba(20, 23, 26, 0.2);",
      }
    },
  },
  plugins: [],
}

