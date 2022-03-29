import { createTheme } from '@mui/material/styles';
import { blue, blueGrey } from '@mui/material/colors';

export const FLEXIBLE_MAX_WIDTH = 1280;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 1024,
      desktop: 1384,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#1f1f1f',
          backgroundColor: '#ffffff',
          fontFamily: ['Noto Sans', 'Noto Sans JP', 'sans-serif'].join(','),
          boxSizing: 'border-box',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#1f1f1f',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
