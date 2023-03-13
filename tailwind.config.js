module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      /* Добавить пользовательские стили */
      styles: {
        /* Скрыть стрелки в полях input с типом number */
        'no-number-spinners': {
          'input[type="number"]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
            display: 'none',
          },
          'input[type="number"]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
            display: 'none',
          },
        },
      },
    },
  },
  plugins: [
    /* Добавить пользовательские стили в виде плагина */
    function ({ addBase, config }) {
      addBase({
        /* Скрыть стрелки в полях input с типом number */
        ...config('theme.styles.no-number-spinners'),
      });
    },
  ],
};
