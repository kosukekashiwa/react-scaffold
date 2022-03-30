import { createTheme } from '@mui/material/styles';
import { blue, blueGrey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const FLEXIBLE_MAX_WIDTH = 1280;

const fontFamily = ['Noto Sans', 'Noto Sans JP', 'sans-serif'].join(',');

const theme = (mode?: PaletteMode) => {
  return createTheme({
    palette: {
      // primary: blue,
      // secondary: blueGrey,
      mode: mode ?? 'light',
    },
    breakpoints: {
      values: {
        xs: 0, // mobile
        sm: 600, // tablet
        md: 1024, // laptop
        lg: 1384, // desktop
        xl: 1536,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            // color: '#1f1f1f',
            fontFamily: fontFamily,
            boxSizing: 'border-box',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            // color: '#1f1f1f',
            fontFamily: fontFamily,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontFamily: fontFamily,
          },
        },
      },
    },
  });
};

export default theme;
