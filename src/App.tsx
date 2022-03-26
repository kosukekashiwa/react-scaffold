import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { Backdrop, Box, List, Stack, Theme, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { blue } from '@mui/material/colors';
import { FLEXIBLE_MAX_WIDTH } from './views/theme';
import NaviMenuButton from './views/atoms/buttons/NaviMenuButton';
import NestedNaviMenuButton, {
  NestedNaviMenuButtonProps,
} from './views/atoms/buttons/NestedNaviMenuButton';
import AppHeader, { APP_HEADER_HEIGHT } from './views/ecosystems/AppHeader';
import NavigationDrawer from './views/organisms/NavigationDrawer';
import SPNavigationDrawer from './views/organisms/SPNavigationDrawer';

const NAVIGATION_WIDTH = 240;

const App: React.VFC = () => {
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
  const isTab = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'), {
    noSsr: true,
  });
  const navigate = useNavigate();
  const [naviOpen, setNaviOpen] = useState(true);

  useEffect(() => {
    setNaviOpen(!isTab);
  }, [isTab]);

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

  const dashboardMenuItems: NestedNaviMenuButtonProps['items'] = [
    { label: 'Q4 Milestones', onClick: handleQ4MilestonesClick },
    { label: 'Releases', onClick: handleReleasesClick },
    { label: 'Site Traffic', onClick: handleSiteTrafficClick },
  ];
  const menuList: React.ReactNode = (
    <List>
      <NaviMenuButton icon={<HomeIcon />} label="Home" onClick={handleHomeIconClick} />
      <NestedNaviMenuButton icon={<DashboardIcon />} label="Dashboard" items={dashboardMenuItems} />
      <NaviMenuButton icon={<GroupIcon />} label="Groups" onClick={handleGroupsIconClick} />
      <NaviMenuButton icon={<SettingsIcon />} label="Settings" onClick={handleSettingsIconClick} />
    </List>
  );

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
        height={`calc(100% - ${APP_HEADER_HEIGHT}px - 64px)`} // padding:64px(32px*2)
        flexGrow={1}
      >
        {isTab ? (
          <SPNavigationDrawer
            open={naviOpen}
            width={NAVIGATION_WIDTH}
            top={APP_HEADER_HEIGHT}
            onClose={handleMenuOpenIconClick}
          >
            {menuList}
          </SPNavigationDrawer>
        ) : (
          <NavigationDrawer open={naviOpen} width={NAVIGATION_WIDTH}>
            {menuList}
          </NavigationDrawer>
        )}
        <Box flexGrow={1} sx={{ overflowY: 'auto' }}>
          <Box maxWidth={`${FLEXIBLE_MAX_WIDTH}px`} margin="auto" px="32px" py="16px">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const OverView: React.VFC = () => {
  const pallete = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <Box>
      <Box>OverView (スクロール確認)</Box>
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

export default App;
