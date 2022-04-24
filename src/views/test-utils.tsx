import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { render, RenderOptions } from '@testing-library/react';

import { store } from '~/state/store';
import theme from '~/views/styles/theme';

type AllTheProvidersProps = {
  children: React.ReactNode;
};

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
