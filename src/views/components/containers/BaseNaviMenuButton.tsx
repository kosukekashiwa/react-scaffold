import React from 'react';
import { ListItemButton } from '@mui/material';

export type BaseNaviMenuButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};
const BaseNaviMenuButton: React.FC<BaseNaviMenuButtonProps> = ({ onClick, children }) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        minHeight: 48,
        justifyContent: 'initial',
      }}
    >
      {children}
    </ListItemButton>
  );
};

export default BaseNaviMenuButton;
