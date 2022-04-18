import React, { Fragment, useCallback } from 'react';
import { Box } from '@mui/material';
import Button from '~/views/components/actions/Button';

const OverView: React.FC = () => {
  type Color = 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
  const colors: Color[] = ['primary', 'secondary', 'error', 'info', 'warning', 'success'];

  const handleButtonClick = useCallback((): void => {
    // No Action
  }, []);

  return (
    <Box>
      <Box>OverView</Box>
      <Box>Button</Box>
      <Box>
        {colors.map((color) => (
          <Fragment key={color}>
            <Box>{color}</Box>
            <Box display="flex">
              <Box>
                <Button onClick={handleButtonClick} variant="contained" color={color}>
                  Contained
                </Button>
              </Box>
              <Box ml={1}>
                <Button onClick={handleButtonClick} variant="outlined" color={color}>
                  Outlined
                </Button>
              </Box>
              <Box ml={1}>
                <Button onClick={handleButtonClick} variant="text" color={color}>
                  Text
                </Button>
              </Box>
            </Box>
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default OverView;
