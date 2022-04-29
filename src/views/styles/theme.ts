import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { getLabelColor, isDarkMode } from '~/utils';
import tokens from '~/views/styles/tokens';

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
      MuiBackdrop: {
        styleOverrides: {
          root: {
            // backgroundColor: tokens.color.surface.overlay.value,
            // npm scripts tokne:genJson でRGBA変換が上手くいかないため直書き
            backgroundColor: 'rgba(28, 43, 54, 0.8)',
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
          outlinedSecondary: {
            color: labelColor,
          },
        },
      },
    },
  });
};

export default theme;
