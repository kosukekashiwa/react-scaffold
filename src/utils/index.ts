import { PaletteMode } from '@mui/material';

export const isDarkMode = (mode: PaletteMode): boolean => {
  return mode === 'dark';
};

export const getLabelColor = (mode: PaletteMode): string => {
  return isDarkMode(mode) ? '#ffffff' : '#1f1f1f';
};
