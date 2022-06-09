module.exports = {
  content: [
    'src/**/*.{ts,tsx}',
    'preview/**/*.{pug,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    require('./tailwind-preset.cjs')
  ]
}
