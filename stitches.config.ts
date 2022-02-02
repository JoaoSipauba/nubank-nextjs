// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
        darkerGray: '#7A7A80',
        buttonGray: '#E8E8F0',
        whiteText: '#FFFFFF',
        roxinho: '#820AD1',
        textBlack: '#000000',
        orange: '#FF7900',
        background: '#F7F7FF',
        blackIcon: '#323232'
    },
    fonts: {
      montserrat: 'Montserrat, sans-serif',
    }
  },
});

export const globalStyles = globalCss({
  '*': { 
    margin: 0, 
    padding: 0, 
  },
  'body': {
    backgroundColor: '$background',
    fontSize: 14,
    fontWeight: 'normal'
  }
})