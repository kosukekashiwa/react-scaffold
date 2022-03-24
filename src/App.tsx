import React, { useCallback, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { blue, blueGrey } from '@mui/material/colors';
import { FLEXIBLE_MAX_WIDTH, FLEXIBLE_MIN_WIDTH } from './views/theme';

export const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Navigate to={'ui'} />} />
        <Route path="ui" element={<AppLayout />}>
          <Route index element={<OverView />} />
          <Route path={'home'} element={<Box>Home</Box>} />
          <Route path={'dashboard'}>
            <Route index element={<Navigate to={'q4-milestones'} />} />
            <Route path={'q4-milestones'} element={<Box>Q4 Milestones</Box>} />
            <Route path={'releases'} element={<Box>Releases</Box>} />
            <Route path={'site-traffic'} element={<Box>Site Traffic</Box>} />
          </Route>
          <Route path={'groups'} element={<Box>Groups</Box>} />
          <Route path={'settings'} element={<Box>Settings</Box>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

const AppLayout: React.VFC = () => {
  const navigate = useNavigate();
  const [naviOpen, setNaviOpen] = useState(true);

  const handleMenuIconClick = useCallback((): void => {
    setNaviOpen(true);
  }, []);
  const handleMenuOpenIconClick = useCallback((): void => {
    setNaviOpen(false);
  }, []);

  const handleAppTitleClick = useCallback((): void => {
    navigate('/');
  }, [navigate]);
  const handleHomeIconClick = useCallback((): void => {
    navigate('home');
  }, [navigate]);
  const handleQ4MilestonesClick = useCallback((): void => {
    navigate('dashboard/q4-milestones');
  }, [navigate]);
  const handleReleasesClick = useCallback((): void => {
    navigate('dashboard/releases');
  }, [navigate]);
  const handleSiteTrafficClick = useCallback((): void => {
    navigate('dashboard/site-traffic');
  }, [navigate]);
  const handleGroupsIconClick = useCallback((): void => {
    navigate('groups');
  }, [navigate]);
  const handleSettingsIconClick = useCallback((): void => {
    navigate('settings');
  }, [navigate]);

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppHeader
        open={naviOpen}
        onMenuIconClick={handleMenuIconClick}
        onMenuOpenIconClick={handleMenuOpenIconClick}
        onAppTitleClick={handleAppTitleClick}
      />
      <Box
        display="flex"
        height="calc(100% - 64px - 64px)" // header:64px, padding:64px(32px*2)
        flexGrow={1}
      >
        <AppNavigationDrawer
          naviOpen={naviOpen}
          onHomeIconClick={handleHomeIconClick}
          onQ4MilestonesClick={handleQ4MilestonesClick}
          onReleasesClick={handleReleasesClick}
          onSiteTrafficClick={handleSiteTrafficClick}
          onGroupsIconClick={handleGroupsIconClick}
          onSettingsIconClick={handleSettingsIconClick}
        />
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
  onAppTitleClick: () => void;
};
const AppHeader: React.VFC<AppHeaderProps> = ({
  open,
  onMenuIconClick,
  onMenuOpenIconClick,
  onAppTitleClick,
}) => {
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
        <Button variant="text" sx={{ color: '#ffffff' }} onClick={onAppTitleClick}>
          React Scaffold
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export type AppNavigationDrawerProps = {
  naviOpen: boolean;
  onHomeIconClick: () => void;
  onQ4MilestonesClick: () => void;
  onReleasesClick: () => void;
  onSiteTrafficClick: () => void;
  onGroupsIconClick: () => void;
  onSettingsIconClick: () => void;
};
const AppNavigationDrawer: React.VFC<AppNavigationDrawerProps> = ({
  naviOpen,
  onHomeIconClick,
  onQ4MilestonesClick,
  onReleasesClick,
  onSiteTrafficClick,
  onGroupsIconClick,
  onSettingsIconClick,
}) => {
  const [dashboardMenuOpen, setDashboardMenuOpen] = React.useState(true);

  const handleClick = () => {
    setDashboardMenuOpen(!dashboardMenuOpen);
  };

  return (
    <Box
      width={naviOpen ? '240px' : '0px'}
      // width={naviOpen ? '240px' : '64px'}
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
          onClick={onHomeIconClick}
        />
        <ListItemButton
          onClick={handleClick}
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
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ opacity: naviOpen ? 1 : 0 }} />
          {naviOpen && <>{dashboardMenuOpen ? <ExpandLess /> : <ExpandMore />}</>}
        </ListItemButton>
        <Collapse in={dashboardMenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9, whiteSpace: 'nowrap' }} onClick={onQ4MilestonesClick}>
              <ListItemText primary="Q4 Milestones" sx={{ opacity: naviOpen ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={onReleasesClick}>
              <ListItemText primary="Releases" sx={{ opacity: naviOpen ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, whiteSpace: 'nowrap' }} onClick={onSiteTrafficClick}>
              <ListItemText primary="Site Traffic" sx={{ opacity: naviOpen ? 1 : 0 }} />
            </ListItemButton>
          </List>
        </Collapse>
        <NaviMenuButton
          open={naviOpen}
          icon={<GroupIcon />}
          label="Groups"
          onClick={onGroupsIconClick}
        />
        <NaviMenuButton
          open={naviOpen}
          icon={<SettingsIcon />}
          label="Settings"
          onClick={onSettingsIconClick}
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
  const pallete = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <Box>
      <Box>OverView (scroll check)</Box>
      <Stack>
        {pallete.map((code) => (
          <Box
            key={code}
            height={200}
            width={100}
            p={2}
            sx={{ background: blue[code], color: code < 500 ? '#000000' : '#ffffff' }}
          >
            {code}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
