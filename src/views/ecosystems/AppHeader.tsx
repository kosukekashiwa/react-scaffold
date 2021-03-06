import React, { useCallback } from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';

import { darkModeOn, darkModeOff, getPaletteMode } from '~/state/ducks/ui/slices';
import { isDarkMode, getLabelColor } from '~/utils';
import { useAppDispatch, useAppSelector } from '~/views/hooks';
import tokens from '~/views/styles/tokens';

export const APP_HEADER_HEIGHT = 64;

export type AppHeaderProps = {
  open: boolean;
  onMenuIconClick: () => void;
  onMenuOpenIconClick: () => void;
  onAppTitleClick: () => void;
};
const AppHeader: React.FC<AppHeaderProps> = ({
  open,
  onMenuIconClick,
  onMenuOpenIconClick,
  onAppTitleClick,
}) => {
  const dispatch = useAppDispatch();

  const handleDarkModeOnIconClick = useCallback((): void => {
    dispatch(darkModeOn());
  }, [dispatch]);
  const handleDarkModeOffIconClick = useCallback((): void => {
    dispatch(darkModeOff());
  }, [dispatch]);

  const paletteMode = useAppSelector(getPaletteMode);

  const darkMode = isDarkMode(paletteMode);
  const labelColor = getLabelColor(paletteMode);

  return (
    <AppBar
      sx={{
        height: `${APP_HEADER_HEIGHT}px`,
        backgroundColor: darkMode
          ? tokens.color.header.global.reversed.value
          : tokens.color.header.global.primary.value,
        boxShadow: 'none',
      }}
      position="static"
    >
      <Toolbar
        sx={{
          width: '100vw',
          height: '100%',
        }}
      >
        {open ? (
          <IconButton onClick={onMenuOpenIconClick} size="large" edge="start" aria-label="menu">
            <MenuOpenIcon />
          </IconButton>
        ) : (
          <IconButton onClick={onMenuIconClick} size="large" edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
        <Button
          variant="text"
          sx={{
            color: labelColor,
            fontSize: '1rem',
            ml: 2,
          }}
          onClick={onAppTitleClick}
        >
          React Scaffold
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          {darkMode ? (
            <IconButton onClick={handleDarkModeOffIconClick}>
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton onClick={handleDarkModeOnIconClick}>
              <Brightness4Icon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
