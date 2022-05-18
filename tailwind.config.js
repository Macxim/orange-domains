const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'od-black': '#190F0A',
        // Primary
        'od-orange': '#F97900',
        'od-peach': '#FDB270',
        'od-navy': '#09005F',
      },
      fontFamily: {
        headlines: ['Satoshi', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        captions: ['Nippo', ...defaultTheme.fontFamily.mono],
      },
      screens: {
        'tall': { 'raw': '(max-height: 640px)' },
        'taller': { 'raw': '(max-width: 768px), (max-height: 880px)' },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
