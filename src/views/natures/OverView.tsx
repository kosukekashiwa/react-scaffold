import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import { blue } from '@mui/material/colors';

const OverView: React.VFC = () => {
  const gridItem: React.ReactNode = (
    <Grid item xs={6} sm={3}>
      <Box sx={{ border: '1px solid blue' }}>xs=6 sm=3</Box>
    </Grid>
  );
  const pallete: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <Box>
      <Box>Grid Layout (レスポンシブ確認)</Box>
      <Grid container spacing={{ xs: 1, sm: 3 }}>
        {gridItem}
        {gridItem}
        {gridItem}
        {gridItem}
        {gridItem}
        {gridItem}
        {gridItem}
        {gridItem}
        {gridItem}
        {gridItem}
      </Grid>
      <Box>OverView (スクロール確認)</Box>
      <Stack>
        {pallete.map((code) => (
          <Box
            key={code}
            height={200}
            width={100}
            p={2}
            sx={{ background: blue[code], color: code < 500 ? '#000000' : '#ffffff' }}
          >
            {code}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default OverView;
