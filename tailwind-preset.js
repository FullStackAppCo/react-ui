const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  theme: {
    rotate: {
      '360': '360deg',
    },
    screens: Object.keys(defaultTheme.screens).reduce((screens, breakpoint) => {
      if (['2xl'].indexOf(breakpoint) === -1) {
        screens[breakpoint] = defaultTheme.screens[breakpoint];
      }
      return screens;
    }, {}),
    extend: {
      colors: {
        primary: colors.violet,
        focus: colors.amber,
        success: colors.green,
        danger: colors.red,
      },
      fontFamily: {
        display: ["'Roboto Slab'", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        ...([5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90].reduce((acc, curr) => {
          acc[`screen-${curr}`] = `${curr}vh`;
          return acc;
        }, {}))
      },
    },
  },
  plugins: [],
}
