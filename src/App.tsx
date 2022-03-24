import React, { useCallback, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { blue } from '@mui/material/colors';
import { FLEXIBLE_MAX_WIDTH, FLEXIBLE_MIN_WIDTH } from './views/theme';

export const App: React.VFC = () => {
  const [naviOpen, setNaviOpen] = useState(true);

  const handleMenuIconClick = useCallback((): void => {
    setNaviOpen(true);
  }, []);
  const handleMenuOpenIconClick = useCallback((): void => {
    setNaviOpen(false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Navigate to={`ui`} />} />
        <Route
          path="ui"
          element={
            <AppLayout
              naviOpen={naviOpen}
              onMenuIconClick={handleMenuIconClick}
              onMenuOpenIconClick={handleMenuOpenIconClick}
            />
          }
        >
          <Route index element={<Navigate to={`hoge`} />} />
          <Route
            path={`hoge`}
            element={
              <Box sx={{ border: '2px solid gold' }} height="1200px">
                hoge
              </Box>
            }
          />
          <Route path={`fuga`} element={<div>fuga</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

type AppLayoutProps = Pick<AppHeaderProps, 'naviOpen' | 'onMenuIconClick' | 'onMenuOpenIconClick'>;
const AppLayout: React.VFC<AppLayoutProps> = ({
  naviOpen,
  onMenuIconClick,
  onMenuOpenIconClick,
}) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppHeader
        naviOpen={naviOpen}
        onMenuIconClick={onMenuIconClick}
        onMenuOpenIconClick={onMenuOpenIconClick}
      />
      <Box
        display="flex"
        height="calc(100% - 64px - 64px)" // header:64px, padding:32px*2
        flexGrow={1}
        sx={{ border: '2px solid green' }}
      >
        <Box sx={{ overflowY: 'auto', border: '2px solid blue' }}>
          <List>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: naviOpen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: naviOpen ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <MenuOpenIcon />
              </ListItemIcon>
              <ListItemText primary={'hoge'} sx={{ opacity: naviOpen ? 1 : 0 }} />
            </ListItemButton>
          </List>
        </Box>
        <Box flexGrow={1} sx={{ overflowY: 'auto', border: '2px solid red' }}>
          <Box
            minWidth={`${FLEXIBLE_MIN_WIDTH}px`}
            maxWidth={`${FLEXIBLE_MAX_WIDTH}px`}
            margin="auto"
            px="32px"
            py="16px"
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export type AppHeaderProps = {
  naviOpen: boolean;
  onMenuIconClick: () => void;
  onMenuOpenIconClick: () => void;
};
const AppHeader: React.VFC<AppHeaderProps> = ({
  naviOpen,
  onMenuIconClick,
  onMenuOpenIconClick,
}) => {
  return (
    <AppBar sx={{ backgroundColor: blue[900] }} position="static">
      <Toolbar
        sx={{
          width: '100vw',
          margin: 'auto',
        }}
      >
        {naviOpen ? (
          <IconButton
            onClick={onMenuOpenIconClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuOpenIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={onMenuIconClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box>React Scaffold</Box>
      </Toolbar>
    </AppBar>
  );
};
