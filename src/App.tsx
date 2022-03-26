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
    if (isTab) {
      setNaviOpen(false);
    }
    if (!isTab) {
      setNaviOpen(true);
    }
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
            naviOpen={naviOpen}
            onHomeIconClick={handleHomeIconClick}
            onQ4MilestonesClick={handleQ4MilestonesClick}
            onReleasesClick={handleReleasesClick}
            onSiteTrafficClick={handleSiteTrafficClick}
            onGroupsIconClick={handleGroupsIconClick}
            onSettingsIconClick={handleSettingsIconClick}
          />
        ) : (
          <NavigationDrawer
            naviOpen={naviOpen}
            onHomeIconClick={handleHomeIconClick}
            onQ4MilestonesClick={handleQ4MilestonesClick}
            onReleasesClick={handleReleasesClick}
            onSiteTrafficClick={handleSiteTrafficClick}
            onGroupsIconClick={handleGroupsIconClick}
            onSettingsIconClick={handleSettingsIconClick}
          />
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

export type SPNavigationDrawerProps = {
  naviOpen: boolean;
  onHomeIconClick: () => void;
  onQ4MilestonesClick: () => void;
  onReleasesClick: () => void;
  onSiteTrafficClick: () => void;
  onGroupsIconClick: () => void;
  onSettingsIconClick: () => void;
};
const SPNavigationDrawer: React.VFC<SPNavigationDrawerProps> = ({
  naviOpen,
  onHomeIconClick,
  onQ4MilestonesClick,
  onReleasesClick,
  onSiteTrafficClick,
  onGroupsIconClick,
  onSettingsIconClick,
}) => {
  const dashboardMenuItems: NestedNaviMenuButtonProps['items'] = [
    { label: 'Q4 Milestones', onClick: onQ4MilestonesClick },
    { label: 'Releases', onClick: onReleasesClick },
    { label: 'Site Traffic', onClick: onSiteTrafficClick },
  ];

  return (
    <Backdrop open={naviOpen} sx={{ top: APP_HEADER_HEIGHT, display: 'inline' }}>
      <Box sx={{ background: '#ffffff', width: `${NAVIGATION_WIDTH}px` }}>
        <List>
          <NaviMenuButton icon={<HomeIcon />} label="Home" onClick={onHomeIconClick} />
          <NestedNaviMenuButton
            icon={<DashboardIcon />}
            label="Dashboard"
            items={dashboardMenuItems}
          />
          <NaviMenuButton icon={<GroupIcon />} label="Groups" onClick={onGroupsIconClick} />
          <NaviMenuButton icon={<SettingsIcon />} label="Settings" onClick={onSettingsIconClick} />
        </List>
      </Box>
    </Backdrop>
  );
};

export type NavigationDrawerProps = {
  naviOpen: boolean;
  onHomeIconClick: () => void;
  onQ4MilestonesClick: () => void;
  onReleasesClick: () => void;
  onSiteTrafficClick: () => void;
  onGroupsIconClick: () => void;
  onSettingsIconClick: () => void;
};
const NavigationDrawer: React.VFC<NavigationDrawerProps> = ({
  naviOpen,
  onHomeIconClick,
  onQ4MilestonesClick,
  onReleasesClick,
  onSiteTrafficClick,
  onGroupsIconClick,
  onSettingsIconClick,
}) => {
  const dashboardMenuItems: NestedNaviMenuButtonProps['items'] = [
    { label: 'Q4 Milestones', onClick: onQ4MilestonesClick },
    { label: 'Releases', onClick: onReleasesClick },
    { label: 'Site Traffic', onClick: onSiteTrafficClick },
  ];

  return (
    <Box
      width={naviOpen ? `${NAVIGATION_WIDTH}px` : '0px'}
      sx={{
        overflowY: 'auto',
        transition: 'width 0.2s ease',
      }}
    >
      <List>
        <NaviMenuButton icon={<HomeIcon />} label="Home" onClick={onHomeIconClick} />
        <NestedNaviMenuButton
          icon={<DashboardIcon />}
          label="Dashboard"
          items={dashboardMenuItems}
        />
        <NaviMenuButton icon={<GroupIcon />} label="Groups" onClick={onGroupsIconClick} />
        <NaviMenuButton icon={<SettingsIcon />} label="Settings" onClick={onSettingsIconClick} />
      </List>
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
