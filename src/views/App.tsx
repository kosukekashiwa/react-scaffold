import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import theme from './theme';
import AppRouter from './natures/AppRouter';
import { useAppDispatch, useAppSelector } from './hooks';
import { darkModeOff, darkModeOn, getPaletteMode } from '../state/ducks/ui/slices';

const App: React.VFC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (prefersDarkMode) {
      dispatch(darkModeOn());
    }
    if (!prefersDarkMode) {
      dispatch(darkModeOff());
    }
  }, [dispatch, prefersDarkMode]);

  const paletteMode = useAppSelector(getPaletteMode);

  return (
    <ThemeProvider theme={theme(paletteMode)}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
