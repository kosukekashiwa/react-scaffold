import { createTheme } from '@mui/material/styles';
import { blue, blueGrey } from '@mui/material/colors';

export const FLEXIBLE_MAX_WIDTH = 1280;

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
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
