import React from 'react';
import { ListItemText } from '@mui/material';
import BaseNaviMenuButton, {
  BaseNaviMenuButtonProps,
} from '~/views/components/containers/BaseNaviMenuButton';

export type NaviMenuButtonProps = Pick<BaseNaviMenuButtonProps, 'onClick'> & {
  label: string;
};

const NaviMenuButton: React.FC<NaviMenuButtonProps> = ({ label, onClick }) => {
  return (
    <BaseNaviMenuButton onClick={onClick}>
      <ListItemText primary={label} sx={{ whiteSpace: 'nowrap' }} />
    </BaseNaviMenuButton>
  );
};

export default NaviMenuButton;
