import React from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { blue } from '@mui/material/colors';

export const APP_HEADER_HEIGHT = 64;

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
    <AppBar sx={{ height: `${APP_HEADER_HEIGHT}px`, backgroundColor: blue[900] }} position="static">
      <Toolbar
        sx={{
          width: '100vw',
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
        <Button
          variant="text"
          sx={{ color: '#ffffff', fontSize: '1rem' }}
          onClick={onAppTitleClick}
        >
          React Scaffold
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
