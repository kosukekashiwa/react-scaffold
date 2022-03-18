import { AppBar, Box, Toolbar } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { FLEXIBLE_MAX_WIDTH, FLEXIBLE_MIN_WIDTH } from './views/theme';

export const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Redirect exact strict from="/" to="/cra-app" /> */}
        <Route path={`/`} element={<Navigate to={`ui`} />} />
        <Route path="ui" element={<AppLayout />}>
          <Route index element={<Navigate to={`hoge`} />} />
          <Route path={`hoge`} element={<div>hoge</div>} />
          <Route path={`fuga`} element={<div>fuga</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

const AppLayout: React.VFC = () => {
  return (
    <AppContainer>
      <AppHeader />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </AppContainer>
  );
};

// ヘッダとコンテンツを並べるComponent仮実装
type AppContainerProps = {
  children: React.ReactNode;
};
const AppContainer: React.VFC<AppContainerProps> = (props) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {props.children}
    </Box>
  );
};

// コンテンツを表示するComponent仮実装
type MainContainerProps = {
  children: React.ReactNode;
};
const MainContainer: React.VFC<MainContainerProps> = (props) => {
  return (
    <Box flexGrow={1} sx={{ overflowY: 'auto' }}>
      <Box
        width="100vw"
        minWidth={`${FLEXIBLE_MIN_WIDTH}px`}
        maxWidth={`${FLEXIBLE_MAX_WIDTH}px`}
        margin="auto"
        px="32px"
        py="16px"
      >
        {props.children}
      </Box>
    </Box>
  );
};

// ヘッダComponent仮実装
const AppHeader: React.VFC = () => {
  return (
    <AppBar sx={{ backgroundColor: blue[900] }} position="static">
      <Toolbar
        sx={{
          width: '100vw',
          minWidth: `${FLEXIBLE_MIN_WIDTH}px`,
          maxWidth: `${FLEXIBLE_MAX_WIDTH}px`,
          margin: 'auto',
        }}
      >
        <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Managing Normalized Data</Box>
      </Toolbar>
    </AppBar>
  );
};
