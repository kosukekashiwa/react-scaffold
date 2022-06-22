import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

import { Box, List, Theme, useMediaQuery } from '@mui/material';

import ModalNavigationDrawer from '~/views/components/containers/ModalNavigationDrawer';
import NavigationDrawer from '~/views/components/containers/NavigationDrawer';
import NaviMenuButton from '~/views/components/containers/NaviMenuButton';
import NestedNaviMenuButton, {
  NestedNaviMenuButtonProps,
} from '~/views/components/containers/NestedNaviMenuButton';
import AppHeader, { APP_HEADER_HEIGHT } from '~/views/ecosystems/AppHeader';
import ActionsView from '~/views/natures/ActionsView';
import CheckFetchView from '~/views/natures/CheckFetchView';
import OverView from '~/views/natures/OverView';
import { FLEXIBLE_MAX_WIDTH } from '~/views/styles/theme';

const AppRouter: React.FC = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    // basename={process.env.PUBLIC_URL} is required for GitHub Pages.
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={'/'} element={<Navigate to={'ui'} />} />
        <Route path="ui" element={<AppLayout />}>
          <Route index element={<OverView />} />
          <Route path={'check-fetch'} element={<CheckFetchView />} />
          <Route path={'components'}>
            <Route index element={<Navigate to={'actions'} />} />
            <Route path={'actions'} element={<ActionsView />} />
            <Route path={'containers'} element={<Box>Containers</Box>} />
            <Route path={'content-display'} element={<Box>Content Display</Box>} />
            <Route path={'data-display'} element={<Box>Data Display</Box>} />
            <Route path={'feedback'} element={<Box>Feedback</Box>} />
            <Route path={'forms-and-inputs'} element={<Box>{'Forms & Inputs'}</Box>} />
            <Route path={'loading-and-status'} element={<Box>{'Loading & Status'}</Box>} />
            <Route path={'navigational'} element={<Box>Navigational</Box>} />
            <Route path={'search-and-filters'} element={<Box>{'Search & Filters'}</Box>} />
          </Route>
          <Route path={'groups'} element={<Box>Groups</Box>} />
          <Route path={'settings'} element={<Box>Settings</Box>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

const AppLayout: React.FC = () => {
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
  const handleCheckFetchClick = useCallback((): void => {
    handleNavigation('check-fetch');
  }, [handleNavigation]);
  const handleActionsClick = useCallback((): void => {
    handleNavigation('components/actions');
  }, [handleNavigation]);
  const handleContainersClick = useCallback((): void => {
    handleNavigation('components/containers');
  }, [handleNavigation]);
  const handleContentDisplayClick = useCallback((): void => {
    handleNavigation('components/content-display');
  }, [handleNavigation]);
  const handleDataDisplayClick = useCallback((): void => {
    handleNavigation('components/data-display');
  }, [handleNavigation]);
  const handleFeedbackClick = useCallback((): void => {
    handleNavigation('components/feedback');
  }, [handleNavigation]);
  const handleFormsAndInputsClick = useCallback((): void => {
    handleNavigation('components/forms-and-inputs');
  }, [handleNavigation]);
  const handleLoadingAndStatusClick = useCallback((): void => {
    handleNavigation('components/loading-and-status');
  }, [handleNavigation]);
  const handleNavigationalClick = useCallback((): void => {
    handleNavigation('components/navigational');
  }, [handleNavigation]);
  const handleSearchAndFiltersClick = useCallback((): void => {
    handleNavigation('components/search-and-filters');
  }, [handleNavigation]);
  const handleGroupsClick = useCallback((): void => {
    handleNavigation('groups');
  }, [handleNavigation]);
  const handleSettingsClick = useCallback((): void => {
    handleNavigation('settings');
  }, [handleNavigation]);

  const componentsMenuItems: NestedNaviMenuButtonProps['items'] = [
    { label: 'Actions', onClick: handleActionsClick },
    { label: 'Containers', onClick: handleContainersClick },
    { label: 'Content Display', onClick: handleContentDisplayClick },
    { label: 'Data Display', onClick: handleDataDisplayClick },
    { label: 'Feedback', onClick: handleFeedbackClick },
    { label: 'Forms & Inputs', onClick: handleFormsAndInputsClick },
    { label: 'Loading & Status', onClick: handleLoadingAndStatusClick },
    { label: 'Navigational', onClick: handleNavigationalClick },
    { label: 'Search & Filters', onClick: handleSearchAndFiltersClick },
  ];
  const menuList: React.ReactNode = (
    <List>
      <NaviMenuButton label="Check Fetch" onClick={handleCheckFetchClick} />
      <NestedNaviMenuButton label="Components" items={componentsMenuItems} />
      <NaviMenuButton label="Groups" onClick={handleGroupsClick} />
      <NaviMenuButton label="Settings" onClick={handleSettingsClick} />
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
