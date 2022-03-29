import React from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { blueGrey } from '@mui/material/colors';

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
    <AppBar
      sx={{ height: `${APP_HEADER_HEIGHT}px`, backgroundColor: blueGrey[50], boxShadow: 'none' }}
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
            sx={{ color: '#1f1f1f' }}
            aria-label="menu"
          >
            <MenuOpenIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={onMenuIconClick}
            size="large"
            edge="start"
            sx={{ color: '#1f1f1f' }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Button
          variant="text"
          sx={{ color: '#1f1f1f', fontSize: '1rem', ml: 2 }}
          onClick={onAppTitleClick}
        >
          React Scaffold
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
