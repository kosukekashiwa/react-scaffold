import React from 'react';
import { Box } from '@mui/material';

export type NavigationDrawerProps = {
  open: boolean;
  width: number;
  children: React.ReactNode;
};
const NavigationDrawer: React.VFC<NavigationDrawerProps> = ({ open, width, children }) => {
  return (
    <Box
      width={open ? `${width}px` : '0px'}
      sx={{
        overflowY: 'auto',
        transition: 'width 0.2s ease',
      }}
    >
      {children}
    </Box>
  );
};

export default NavigationDrawer;
