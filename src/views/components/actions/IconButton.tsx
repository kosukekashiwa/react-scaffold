import React from 'react';

import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

export type IconButtonProps = Required<Pick<MuiIconButtonProps, 'onClick'>> &
  Pick<MuiIconButtonProps, 'color'> & {
    children: React.ReactNode;
  };

const IconButton: React.FC<IconButtonProps> = ({ onClick, color, children }) => {
  return (
    <MuiIconButton onClick={onClick} color={color}>
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
