import { PaletteMode } from '@mui/material';

import tokens from '~/views/styles/tokens';

export const isDarkMode = (mode?: PaletteMode): boolean => {
  return mode === 'dark';
};

export const getLabelColor = (mode?: PaletteMode): string => {
  return isDarkMode(mode) ? tokens.color.text.reversed.value : tokens.color.text.primary.value;
};
