import { PaletteMode } from '@mui/material';
import { dt } from '../views/designTokens';

export const isDarkMode = (mode: PaletteMode): boolean => {
  return mode === 'dark';
};

export const getLabelColor = (mode: PaletteMode): string => {
  return isDarkMode(mode) ? dt.text.reversed : dt.text.primary;
};
