import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { blueGrey } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const APP_HEADER_HEIGHT = 64;

export type AppHeaderProps = {
  open: boolean;
  onMenuIconClick: () => void;
  onMenuOpenIconClick: () => void;
  onAppTitleClick: () => void;
  onDarkModeOnIconClick: () => void;
  onDarkModeOffIconClick: () => void;
};
const AppHeader: React.VFC<AppHeaderProps> = ({
  open,
  onMenuIconClick,
  onMenuOpenIconClick,
  onAppTitleClick,
  onDarkModeOnIconClick,
  onDarkModeOffIconClick,
}) => {
  return (
    <AppBar
      sx={{
        height: `${APP_HEADER_HEIGHT}px`,
        // backgroundColor: blueGrey[50],
        boxShadow: 'none',
      }}
      color="secondary"
      position="static"
    >
      <Toolbar
        sx={{
          width: '100vw',
          height: '100%',
        }}
      >
        {open ? (
          <IconButton
            onClick={onMenuOpenIconClick}
            size="large"
            edge="start"
            // sx={{ color: '#1f1f1f' }}
            aria-label="menu"
          >
            <MenuOpenIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={onMenuIconClick}
            size="large"
            edge="start"
            // sx={{ color: '#1f1f1f' }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Button
          // variant="text"
          // color="secondary"
          sx={{
            // color: '#1f1f1f',
            fontSize: '1rem',
            ml: 2,
          }}
          onClick={onAppTitleClick}
        >
          React Scaffold
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton onClick={onDarkModeOnIconClick}>
            <Brightness4Icon />
          </IconButton>
          <IconButton onClick={onDarkModeOffIconClick}>
            <Brightness7Icon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
