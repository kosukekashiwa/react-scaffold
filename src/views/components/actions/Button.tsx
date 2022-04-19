import React from 'react';

import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonProps = Required<Pick<MuiButtonProps, 'onClick'>> &
  Pick<MuiButtonProps, 'variant' | 'color'> & {
    children: React.ReactNode;
  };

const Button: React.FC<ButtonProps> = ({ onClick, variant, color, children }) => {
  return (
    <MuiButton onClick={onClick} variant={variant} color={color}>
      {children}
    </MuiButton>
  );
};

export default Button;
