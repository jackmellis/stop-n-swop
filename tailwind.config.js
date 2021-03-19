const color = require('color');

const makeColors = (initial) => {
  const c = color(initial);

  return {
    50: c.lighten(0.8).hex(),
    100: c.lighten(0.6).hex(),
    200: c.lighten(0.4).hex(),
    300: c.lighten(0.2).hex(),
    400: initial,
    500: c.darken(0.2).hex(),
    600: c.darken(0.4).hex(),
    700: c.darken(0.6).hex(),
    800: c.darken(0.8).hex(),
    900: c.darken(0.9).hex(),
  };
};

module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './index.html'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      backgroundColor: ['focused-sibling'],
    },
  },
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33.333%',
        '1/2': '50%',
        '2/3': '66.666%',
        '3/4': '75%',
      },
      fontSize: {
        xs: '0.75em',
        sm: '0.875em',
        base: '1em',
        lg: '1.125em',
        xl: '1.25em',
        '2xl': '1.5em',
        '3xl': '1.875em',
        '4xl': '2.25em',
        '5xl': '3em',
        '6xl': '4em',
      },
      fontFamily: {
        // display: ['zx_spectrumregular'],
        title: ['zx_spectrumregular'],
        display: ['Roboto'],
        logo: ['lithographbold'],
      },
      colors: {
        // yellow: makeColors('#ffa70f'),
        // yellow: makeColors('#e1c749'),
        red: makeColors('#c6352b'),
        // brown: makeColors('#753c39'),
        // blue: makeColors('#4976ba'),
      },
      lineHeight: 1.5,
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
