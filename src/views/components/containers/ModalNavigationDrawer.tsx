import React from 'react';

import { Drawer } from '@mui/material';

import theme from '~/views/styles/theme';

const MODAL_NAVIGATION_MARGIN = 1;

export type ModalNavigationDrawerProps = {
  open: boolean;
  width: number;
  top: number;
  onClose: () => void;
  children: React.ReactNode;
};
const ModalNavigationDrawer: React.FC<ModalNavigationDrawerProps> = ({
  open,
  width,
  top,
  onClose,
  children,
}) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      ModalProps={{ sx: { top: top } }}
      PaperProps={{
        sx: {
          height: 'auto',
          maxHeight: `calc(100% - ${top}px - ${theme().spacing(MODAL_NAVIGATION_MARGIN * 2)})`,
          width: `${width}px`,
          top: top,
          m: MODAL_NAVIGATION_MARGIN,
          borderRadius: 2,
        },
      }}
      BackdropProps={{ sx: { top: top } }}
    >
      {children}
    </Drawer>
  );
};

export default ModalNavigationDrawer;
