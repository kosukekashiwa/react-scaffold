import React, { useCallback, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { blue, blueGrey } from '@mui/material/colors';
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
        <Route path={'/'} element={<Navigate to={'ui'} />} />
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
          <Route index element={<OverView />} />
          <Route path={'home'} element={<Box>Home</Box>} />
          <Route path={'dashboard'} element={<Box>Dashboard</Box>} />
          <Route path={'groups'} element={<Box>Groups</Box>} />
          <Route path={'settings'} element={<Box>Settings</Box>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export type AppLayoutProps = Pick<AppHeaderProps, 'onMenuIconClick' | 'onMenuOpenIconClick'> &
  Pick<AppNavigationDrawerProps, 'naviOpen'>;
const AppLayout: React.VFC<AppLayoutProps> = ({
  naviOpen,
  onMenuIconClick,
  onMenuOpenIconClick,
}) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppHeader
        open={naviOpen}
        onMenuIconClick={onMenuIconClick}
        onMenuOpenIconClick={onMenuOpenIconClick}
      />
      <Box
        display="flex"
        height="calc(100% - 64px - 64px)" // header:64px, padding:32px*2
        flexGrow={1}
      >
        <AppNavigationDrawer naviOpen={naviOpen} />
        <Box flexGrow={1} sx={{ overflowY: 'auto' }}>
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
  open: boolean;
  onMenuIconClick: () => void;
  onMenuOpenIconClick: () => void;
};
const AppHeader: React.VFC<AppHeaderProps> = ({ open, onMenuIconClick, onMenuOpenIconClick }) => {
  const navigate = useNavigate();

  const handleAppTitleClick = useCallback((): void => {
    navigate('/');
  }, []);

  return (
    <AppBar sx={{ backgroundColor: blue[900], zIndex: 1 }} position="static">
      <Toolbar
        sx={{
          width: '100vw',
          margin: 'auto',
        }}
      >
        {open ? (
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
        <Button variant="text" sx={{ color: '#ffffff' }} onClick={handleAppTitleClick}>
          React Scaffold
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export type AppNavigationDrawerProps = {
  naviOpen: boolean;
};
const AppNavigationDrawer: React.VFC<AppNavigationDrawerProps> = ({ naviOpen }) => {
  const navigate = useNavigate();

  const handleHomeIconClick = useCallback((): void => {
    navigate('home');
  }, []);
  const handleDashboardIconClick = useCallback((): void => {
    navigate('dashboard');
  }, []);
  const handleGroupsIconClick = useCallback((): void => {
    navigate('groups');
  }, []);
  const handleSettingsIconClick = useCallback((): void => {
    navigate('settings');
  }, []);

  return (
    <Box
      width={naviOpen ? '240px' : '64px'}
      sx={{
        background: blueGrey[100],
        overflowY: 'auto',
        transition: 'width 0.2s ease',
      }}
    >
      <List>
        <NaviMenuButton
          open={naviOpen}
          icon={<HomeIcon />}
          label="Home"
          onClick={handleHomeIconClick}
        />
        <NaviMenuButton
          open={naviOpen}
          icon={<DashboardIcon />}
          label="Dashboard"
          onClick={handleDashboardIconClick}
        />
        <NaviMenuButton
          open={naviOpen}
          icon={<GroupIcon />}
          label="Groups"
          onClick={handleGroupsIconClick}
        />
        <NaviMenuButton
          open={naviOpen}
          icon={<SettingsIcon />}
          label="Settings"
          onClick={handleSettingsIconClick}
        />
      </List>
    </Box>
  );
};

export type NaviMenuButtonProps = {
  open: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};
const NaviMenuButton: React.VFC<NaviMenuButtonProps> = ({ open, icon, label, onClick }) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
};

const OverView: React.VFC = () => {
  return (
    <Box sx={{ border: '2px solid gold' }} height="1200px">
      OverView (scroll check)
    </Box>
  );
};
