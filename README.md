# React UI Components

> 🚧 In active development. Breaking changes will happen without warning.

Opinionated set of reusable components. Expect to be used in an environment with
Font Awesome icons and TailwindCSS utility classes.

## Requirements
- TailwindCSS ^3
- Font Awesome React
- A Font Awesome fam if you want to use icons. We don't use the babel macros.

## Installation

Install the JavaScript module:
```shell
npm i @fsac/react-ui
```

Add the TailwindCSS preset to your project:
```javascript
// tailwind.config.js
module.exports = {
  presets: [
    require('@fsac/react-ui/tailwind-preset')
  ]
}
```


## Development
```shell
npm run watch
```