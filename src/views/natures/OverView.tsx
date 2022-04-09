import React, { Fragment } from 'react';
import { Box, Button, Grid } from '@mui/material';

const OverView: React.VFC = () => {
  type Color = 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
  const colors: Color[] = ['primary', 'secondary', 'error', 'info', 'warning', 'success'];

  return (
    <Box>
      <Box>Button</Box>
      <Box>
        {colors.map((color) => (
          <Fragment key={color}>
            <Box>{color}</Box>
            <Box display="flex">
              <Box>
                <Button variant="contained" color={color}>
                  Contained
                </Button>
              </Box>
              <Box ml={1}>
                <Button variant="outlined" color={color}>
                  Outlined
                </Button>
              </Box>
              <Box ml={1}>
                <Button variant="text" color={color}>
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
