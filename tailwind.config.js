const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    'src/**/*.{ts,tsx}',
    'preview/**/*.{pug,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Roboto Slab'", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
  presets: [
    require('./tailwind-preset.cjs')
  ]
}
