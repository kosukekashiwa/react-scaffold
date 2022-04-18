import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { getLabelColor, isDarkMode } from '~/utils';
import tokens from '~/views/tokens';

export const FLEXIBLE_MAX_WIDTH = 1280;

const fontFamily = ['Noto Sans', 'Noto Sans JP', 'sans-serif'].join(',');

const theme = (paletteMode?: PaletteMode) => {
  const labelColor = getLabelColor(paletteMode);
  const darkMode = isDarkMode(paletteMode);

  return createTheme({
    palette: {
      primary: {
        main: darkMode
          ? tokens.color.mui.palette.primaryDark.value
          : tokens.color.mui.palette.primary.value,
      },
      secondary: {
        main: darkMode
          ? tokens.color.mui.palette.secondaryDark.value
          : tokens.color.mui.palette.secondary.value,
      },
      error: {
        main: darkMode
          ? tokens.color.mui.palette.errorDark.value
          : tokens.color.mui.palette.error.value,
      },
      info: {
        main: darkMode
          ? tokens.color.mui.palette.infoDark.value
          : tokens.color.mui.palette.info.value,
      },
      warning: {
        main: darkMode
          ? tokens.color.mui.palette.warningDark.value
          : tokens.color.mui.palette.warning.value,
      },
      success: {
        main: darkMode
          ? tokens.color.mui.palette.successDark.value
          : tokens.color.mui.palette.success.value,
      },
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
      // MuiBackdrop: {
      //   styleOverrides: {
      //     root: {
      //       backgroundColor: tokens.color.surface.overlay.value,
      //     },
      //   },
      // },
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
