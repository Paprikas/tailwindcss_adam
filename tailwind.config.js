module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-red': '#BA1F1F'
      },
      spacing: {
        '95': '23rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover']
    }
  },
  plugins: [],
}
