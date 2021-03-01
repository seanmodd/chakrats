/* eslint-disable no-undef */
import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  ...chakraTheme.fonts,
  body:
    'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  heading:
    'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
};

// const breakpoints = createBreakpoints([
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   // xl: '62em',
// ]);
// const fontWeights = {
//   normal: 300,
//   medium: 600,
//   bold: 800,
// };

// const fontSizes = {
//   xs: '12px',
//   sm: '14px',
//   md: '16px',
//   lg: '18px',
//   xl: '20px',
//   // '2xl': '24px',
//   // '3xl': '28px',
//   // '4xl': '36px',
//   // '5xl': '48px',
//   // '6xl': '64px',
// };

// const overrides = {
//   ...chakraTheme,
//   fonts,
//   fontWeights,
//   fontSizes,
//   // breakpoints,
// };

const customTheme = extendTheme({ fonts });

export default customTheme;
