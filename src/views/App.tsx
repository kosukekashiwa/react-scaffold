import React, { useEffect } from 'react';

import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

import { darkModeOn, darkModeOff, getPaletteMode } from '~/state/ducks/ui/slices';
import { useAppDispatch, useAppSelector } from '~/views/hooks';
import AppRouter from '~/views/natures/AppRouter';
import theme from '~/views/theme';

const App: React.FC = () => {
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
