import { createTheme } from '@mui/material/styles';
import { blue, blueGrey } from '@mui/material/colors';

export const FLEXIBLE_MAX_WIDTH = 1366;

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#333333',
          backgroundColor: blueGrey[50],
          fontFamily: ['Noto Sans', 'Noto Sans JP', 'sans-serif'].join(','),
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
