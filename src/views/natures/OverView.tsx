import React, { Fragment } from 'react';
import { Box, Button, Grid } from '@mui/material';
import {
  greyPalette,
  redPalette,
  orangePalette,
  yellowPalette,
  limePalette,
  greenPalette,
  tealPalette,
  turquoisePalette,
  aquaPalette,
  bluePalette,
  ultramarinePalette,
  purplePalette,
  pinkPalette,
} from '../designTokens';

const OverView: React.VFC = () => {
  type Color = 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
  const colors: Color[] = ['primary', 'secondary', 'error', 'info', 'warning', 'success'];

  const palettes = [
    greyPalette,
    redPalette,
    orangePalette,
    yellowPalette,
    limePalette,
    greenPalette,
    tealPalette,
    turquoisePalette,
    aquaPalette,
    bluePalette,
    ultramarinePalette,
    purplePalette,
    pinkPalette,
  ];

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
      <Box mt={2}>Color Palette</Box>
      {palettes.map((pallete, idx) => (
        <Box key={idx} mt={{ xs: 1, sm: 3 }}>
          <Grid container spacing={{ xs: 1, sm: 3 }}>
            {Object.entries(pallete).map((item, idx) => (
              <Grid key={idx} item xs={6} md={3}>
                <Box p={2} sx={{ background: item[1], color: idx < 5 ? '#fff' : '#000' }}>
                  <Box>{item[0]}</Box>
                  <Box>{item[1]}</Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default OverView;
