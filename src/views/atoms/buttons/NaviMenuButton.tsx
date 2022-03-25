import React from 'react';
import { ListItemText } from '@mui/material';
import BaseNaviMenuButton, { BaseNaviMenuButtonProps } from './BaseNaviMenuButton';

export type NaviMenuButtonProps = Pick<BaseNaviMenuButtonProps, 'icon' | 'onClick'> & {
  label: string;
};

const NaviMenuButton: React.VFC<NaviMenuButtonProps> = ({ icon, label, onClick }) => {
  return (
    <BaseNaviMenuButton onClick={onClick} icon={icon}>
      <ListItemText primary={label} sx={{ whiteSpace: 'nowrap' }} />
    </BaseNaviMenuButton>
  );
};

export default NaviMenuButton;
