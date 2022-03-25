import React from 'react';
import { ListItemButton, ListItemIcon } from '@mui/material';

export type BaseNaviMenuButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  children: React.ReactNode;
};
const BaseNaviMenuButton: React.VFC<BaseNaviMenuButtonProps> = ({ icon, onClick, children }) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        minHeight: 48,
        justifyContent: 'initial',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: 3,
          justifyContent: 'center',
        }}
      >
        {icon}
      </ListItemIcon>
      {children}
    </ListItemButton>
  );
};

export default BaseNaviMenuButton;
