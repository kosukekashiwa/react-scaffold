import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { getLabelColor, isDarkMode } from '../utils';
import { dt } from './designTokens';

export const FLEXIBLE_MAX_WIDTH = 1280;

const fontFamily = ['Noto Sans', 'Noto Sans JP', 'sans-serif'].join(',');

const theme = (paletteMode?: PaletteMode) => {
  const labelColor = getLabelColor(paletteMode);
  const darkMode = isDarkMode(paletteMode);

  return createTheme({
    palette: {
      primary: { main: darkMode ? dt.mui.palette.primaryDark : dt.mui.palette.primary },
      secondary: { main: darkMode ? dt.mui.palette.secondaryDark : dt.mui.palette.secondary },
      error: { main: darkMode ? dt.mui.palette.errorDark : dt.mui.palette.error },
      info: { main: darkMode ? dt.mui.palette.infoDark : dt.mui.palette.info },
      warning: { main: darkMode ? dt.mui.palette.warningDark : dt.mui.palette.warning },
      success: { main: darkMode ? dt.mui.palette.successDark : dt.mui.palette.success },
      mode: paletteMode ?? 'light',
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
            color: labelColor,
            fontFamily: fontFamily,
            boxSizing: 'border-box',
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: dt.surface.overlay,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: labelColor,
            fontFamily: fontFamily,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontFamily: fontFamily,
            fontWeight: 'bold',
            boxShadow: 'none',
          },
        },
      },
    },
  });
};

export default theme;
