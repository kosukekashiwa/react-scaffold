import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { Box, List, Theme, useMediaQuery } from '@mui/material';
import { FLEXIBLE_MAX_WIDTH } from '../theme';
import NaviMenuButton from '../atoms/buttons/NaviMenuButton';
import NestedNaviMenuButton, {
  NestedNaviMenuButtonProps,
} from '../atoms/buttons/NestedNaviMenuButton';
import AppHeader, { APP_HEADER_HEIGHT } from '../ecosystems/AppHeader';
import NavigationDrawer from '../organisms/NavigationDrawer';
import ModalNavigationDrawer from '../organisms/ModalNavigationDrawer';
import OverView from './OverView';

const AppRouter: React.VFC = () => {
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
  const MAIN_CONTENT_PX = 40;
  const MAIN_CONTENT_PY = 24;
  const NAVIGATION_WIDTH = 280;

  const isLaptop = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'), {
    noSsr: true,
  });
  const navigate = useNavigate();
  const [naviOpen, setNaviOpen] = useState(true);

  useEffect(() => {
    setNaviOpen(!isLaptop);
  }, [isLaptop]);

  const handleMenuIconClick = useCallback((): void => {
    setNaviOpen(true);
  }, []);
  const handleMenuOpenIconClick = useCallback((): void => {
    setNaviOpen(false);
  }, []);

  const handleNavigation = useCallback(
    (path: string): void => {
      navigate(path);
      if (isLaptop) {
        setNaviOpen(false);
      }
    },
    [navigate, isLaptop],
  );
  const handleAppTitleClick = useCallback((): void => {
    handleNavigation('/');
  }, [handleNavigation]);
  const handleHomeIconClick = useCallback((): void => {
    handleNavigation('home');
  }, [handleNavigation]);
  const handleQ4MilestonesClick = useCallback((): void => {
    handleNavigation('dashboard/q4-milestones');
  }, [handleNavigation]);
  const handleReleasesClick = useCallback((): void => {
    handleNavigation('dashboard/releases');
  }, [handleNavigation]);
  const handleSiteTrafficClick = useCallback((): void => {
    handleNavigation('dashboard/site-traffic');
  }, [handleNavigation]);
  const handleGroupsIconClick = useCallback((): void => {
    handleNavigation('groups');
  }, [handleNavigation]);
  const handleSettingsIconClick = useCallback((): void => {
    handleNavigation('settings');
  }, [handleNavigation]);

  const dashboardMenuItems: NestedNaviMenuButtonProps['items'] = [
    { label: 'Q4 Milestones', onClick: handleQ4MilestonesClick },
    { label: 'Releases', onClick: handleReleasesClick },
    { label: 'Site Traffic', onClick: handleSiteTrafficClick },
  ];
  const menuList: React.ReactNode = (
    <List>
      <NaviMenuButton label="Home" onClick={handleHomeIconClick} />
      <NestedNaviMenuButton label="Dashboard" items={dashboardMenuItems} />
      <NaviMenuButton label="Groups" onClick={handleGroupsIconClick} />
      <NaviMenuButton label="Settings" onClick={handleSettingsIconClick} />
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
        height={`calc(100% - ${APP_HEADER_HEIGHT}px - ${MAIN_CONTENT_PX * 2}px)`}
        flexGrow={1}
      >
        {isLaptop ? (
          <ModalNavigationDrawer
            open={naviOpen}
            width={NAVIGATION_WIDTH}
            top={APP_HEADER_HEIGHT}
            onClose={handleMenuOpenIconClick}
          >
            {menuList}
          </ModalNavigationDrawer>
        ) : (
          <NavigationDrawer open={naviOpen} width={NAVIGATION_WIDTH}>
            {menuList}
          </NavigationDrawer>
        )}
        <Box flexGrow={1} sx={{ overflowY: 'auto' }}>
          <Box
            maxWidth={`${FLEXIBLE_MAX_WIDTH}px`}
            margin="auto"
            px={`${MAIN_CONTENT_PX}px`}
            py={`${MAIN_CONTENT_PY}px`}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppRouter;