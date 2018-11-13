import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    black: '#000',
    darkgrey: '#333',
    grey: '#aaa',
    icyBlue: '#ccf',
    white:  '#fff',
  },
  fonts: {
    sizes: {
      veryBig: '30px',
      big: '20px',
      normal: '14px',
      small: '12px',
    },
    weights: {
      normal: 500,
      bold: 700,
    },
  },
};

export const ExampleTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
