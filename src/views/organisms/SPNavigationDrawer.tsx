import React from 'react';
import { Backdrop, Box } from '@mui/material';

export type SPNavigationDrawerProps = {
  open: boolean;
  width: number;
  top: number;
  onClose: () => void;
  children: React.ReactNode;
};
const SPNavigationDrawer: React.VFC<SPNavigationDrawerProps> = ({
  open,
  width,
  top,
  onClose,
  children,
}) => {
  return (
    <Backdrop open={open} onClick={onClose} sx={{ top: top, display: 'inline' }}>
      <Box sx={{ background: '#ffffff', width: `${width}px` }}>{children}</Box>
    </Backdrop>
  );
};

export default SPNavigationDrawer;
