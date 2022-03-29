import React from 'react';
import { Drawer } from '@mui/material';
import theme from '../theme';

const MODAL_NAVIGATION_MARGIN_SPACING = 1;

export type ModalNavigationDrawerProps = {
  open: boolean;
  width: number;
  top: number;
  onClose: () => void;
  children: React.ReactNode;
};
const ModalNavigationDrawer: React.VFC<ModalNavigationDrawerProps> = ({
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
          maxHeight: `calc(100% - ${top}px - ${theme.spacing(
            MODAL_NAVIGATION_MARGIN_SPACING * 2,
          )})`,
          width: `${width}px`,
          top: top,
          m: MODAL_NAVIGATION_MARGIN_SPACING,
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
