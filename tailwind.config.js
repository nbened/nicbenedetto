module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#FE2C55', // the real color,  FE2C55
          // primary: '#15B8ED', // the disguise
          secondary: '#455F91', // gray
          accent: '#25F4EE', // color
          neutral: '#F2F2F2', // between dark and light
          'base-100': '#FFFFFF', // lightest gray
          'base-200': '#F2F2F2', // lighter gray
          'base-300': '#5B5B65', // darker gray
          'base-content': '#000000', // darkest gray
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#A020F0',
          error: '#F87272',
        },
      },
    ],
  },
};