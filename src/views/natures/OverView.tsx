import React from 'react';
import { Box, Button, Grid, Stack } from '@mui/material';
import { blue } from '@mui/material/colors';

const OverView: React.VFC = () => {
  const pallete: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <Box>
      <Box>Button</Box>
      <Box>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Box>
      <Box mt={2}>Grid Layout (レスポンシブ確認)</Box>
      <Grid container spacing={{ xs: 1, sm: 3 }}>
        {pallete.map((code) => (
          <Grid key={code} item xs={6} sm={3} md={1.5}>
            <Box p={2} sx={{ background: blue[code], color: code < 500 ? '#000000' : '#ffffff' }}>
              {code}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>OverView (スクロール確認)</Box>
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
