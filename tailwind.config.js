/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    fontFamily: {
       'regular':['Nunito-Regular'],
            'nunito-light': ['Nunito-Light'],
            'nunito-medium': ['Nunito-Medium'],
            'nunito-semibold': ['Nunito-SemiBold'],
            'nunito-bold': ['Nunito-Bold'],
            'nunito-italic': ['Nunito-Italic'],
            'nunito-medium-italic': ['Nunito-MediumItalic']
    },
    extend: {},
  },
  plugins: [
      plugin(function ({addUtilities}){
            addUtilities({
                '.font-light':{
                    fontFamily:'Nunito-Light'
                }
            })
        })
  ],
};
