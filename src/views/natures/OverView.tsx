import React from 'react';
import { Box, Stack } from '@mui/material';
import { blue } from '@mui/material/colors';

const OverView: React.VFC = () => {
  const pallete = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <Box>
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
