import Typography from 'typography';

const options = {
  baseFontSize: '16px',
  baseLineHeight: '28px',
  modularScales: [
    'golden',
  ],
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '100',
        '400',
        '700',
        '900',
      ],
    },
  ],
  headerFontFamily: 'Lato',
  bodyFontFamily: 'Lato, sans-serif',
  headerGray: 10,
  headerGrayHue: 0,
  bodyGray: 40,
  bodyGrayHue: 0,
  headerWeight: '100',
  bodyWeight: 400,
  boldWeight: 700,
  fontFaces: [],
  googleHeaderFont: 'Lato',
  headerFont: 'Lato',
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
