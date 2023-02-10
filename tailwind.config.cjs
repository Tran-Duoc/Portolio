/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      theme: ' #0f172a',
      'primary-text': '#ffffff',
      'secondary-text': ' #4f599e',
      'title-text': '#8b99ae',
      wrapper: '#1e293b',
      paragraph: '#c6d0dc',
      hover: '#36b6ef'
    },
    extend: {},
    screens: {
      xl: { max: '1280px' },
      lg: { max: '991px' },
      md: { max: '767px' },
      sm: { max: '550px' },
      xsm: { max: '375px' }
    }
  },
  plugins: []
}
