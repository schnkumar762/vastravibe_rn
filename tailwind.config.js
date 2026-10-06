/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    fontFamily: {
       'regular':['Nunito-Regular'],
  'raleway-regular': ['Raleway-Regular'],
  'raleway-medium': ['Raleway-Medium'],
  'raleway-semibold': ['Raleway-SemiBold'],
  'raleway-bold': ['Raleway-Bold'],

  'nunito-regular': ['NunitoSans-Regular'],
  'nunito-semibold': ['NunitoSans-SemiBold'],
  'nunito-bold': ['NunitoSans-Bold'],
           
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
