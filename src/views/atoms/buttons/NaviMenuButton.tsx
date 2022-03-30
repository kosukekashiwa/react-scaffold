import React from 'react';
import { ListItemText } from '@mui/material';
import BaseNaviMenuButton, { BaseNaviMenuButtonProps } from './BaseNaviMenuButton';

export type NaviMenuButtonProps = Pick<BaseNaviMenuButtonProps, 'onClick'> & {
  label: string;
};

const NaviMenuButton: React.VFC<NaviMenuButtonProps> = ({ label, onClick }) => {
  return (
    <BaseNaviMenuButton onClick={onClick}>
      <ListItemText primary={label} sx={{ whiteSpace: 'nowrap' }} />
    </BaseNaviMenuButton>
  );
};

export default NaviMenuButton;
