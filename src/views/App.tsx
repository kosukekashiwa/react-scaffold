import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { useAppDispatch, useAppSelector } from '~/views/hooks';
import { darkModeOn, darkModeOff, getPaletteMode } from '~/state/ducks/ui/slices';
import theme from '~/views/theme';
import AppRouter from '~/views/natures/AppRouter';

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
