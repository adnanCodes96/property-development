module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'color-gold': '#e3ae7e',
        'color-dark-blue': '#05151b',
        'color-gray': '#efebe6',
      },
      fontFamily: {
        'serif': 'Playfair Display serif',
        'sans-serif': 'Roboto sans-serif'
      },
      backgroundImages: {
        'hero': 'url(src/images/hero_bg.jpg)',
        'about': 'url(src/images/about.jpg)',
        'social': 'url(src/images/social_bg.jpg)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
