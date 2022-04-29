import React, { useCallback } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box, Grid, Stack, ThemeProvider } from '@mui/material';

import { getLabelColor } from '~/utils';
import Button from '~/views/components/actions/Button';
import IconButton from '~/views/components/actions/IconButton';
import theme from '~/views/styles/theme';

const ActionsView: React.FC = () => {
  type Color = 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
  const colors: Color[] = ['primary', 'secondary', 'error', 'info', 'warning', 'success'];

  const contrast = {
    light: {
      contained: {
        primary: 'AA',
        secondary: 'AAA',
        error: 'AA',
        info: '×',
        warning: 'AAA',
        success: 'AA',
      },
      outlined: {
        primary: 'AA',
        secondary: 'AAA',
        error: 'AA',
        info: '×',
        warning: '×',
        success: 'AA',
      },
    },
    dark: {
      contained: {
        primary: 'AAA',
        secondary: '×',
        error: 'AAA',
        info: 'AA',
        warning: '×',
        success: 'AAA',
      },
      outlined: {
        primary: 'AAA',
        secondary: 'AAA',
        error: 'AAA',
        info: '×',
        warning: 'AA',
        success: 'AAA',
      },
    },
  };

  const handleButtonClick = useCallback((): void => {
    // No Action
  }, []);

  return (
    <Box>
      <Box>ActionsView</Box>
      <Box>
        <Box>Button</Box>
        <Box px={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>Light Mode</Box>
              <ThemeProvider theme={theme('light')}>
                <Box p={2} sx={{ color: getLabelColor('light'), background: '#FFFFFF' }}>
                  <Stack alignItems="center" spacing={2}>
                    {colors.map((color) => (
                      <Box key={color}>
                        <Box>{color}</Box>
                        <Stack direction="row" spacing={1}>
                          <Box>
                            <Box>
                              <Button onClick={handleButtonClick} variant="contained" color={color}>
                                Contained
                              </Button>
                            </Box>
                            <Box>{contrast.light.contained[color]}</Box>
                          </Box>
                          <Box>
                            <Button onClick={handleButtonClick} variant="outlined" color={color}>
                              Outlined
                            </Button>
                            <Box>{contrast.light.outlined[color]}</Box>
                          </Box>
                          <Box>
                            <Button onClick={handleButtonClick} variant="text" color={color}>
                              Text
                            </Button>
                          </Box>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>Dark Mode</Box>
              <ThemeProvider theme={theme('dark')}>
                <Box p={2} sx={{ color: getLabelColor('dark'), background: '#121212' }}>
                  <Stack alignItems="center" spacing={2}>
                    {colors.map((color) => (
                      <Box key={color}>
                        <Box>{color}</Box>
                        <Stack direction="row" spacing={1}>
                          <Box>
                            <Box>
                              <Button onClick={handleButtonClick} variant="contained" color={color}>
                                Contained
                              </Button>
                              <Box>{contrast.dark.contained[color]}</Box>
                            </Box>
                          </Box>
                          <Box>
                            <Box>
                              <Button onClick={handleButtonClick} variant="outlined" color={color}>
                                Outlined
                              </Button>
                              <Box>{contrast.dark.outlined[color]}</Box>
                            </Box>
                          </Box>
                          <Box>
                            <Button onClick={handleButtonClick} variant="text" color={color}>
                              Text
                            </Button>
                          </Box>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Box>Variations</Box>
          <Stack direction="row" spacing={2}>
            <Box>
              <Box>Icon Button</Box>
              <IconButton onClick={handleButtonClick}>
                <AddIcon />
              </IconButton>
            </Box>
            <Box>
              <Box>Basic Button</Box>
              <Button onClick={handleButtonClick} variant="contained" color="primary">
                Submit
              </Button>
            </Box>
            <Box>
              <Box>startIcon Button</Box>
              <Button
                onClick={handleButtonClick}
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
              >
                Create
              </Button>
            </Box>
            <Box>
              <Box>endIcon Button</Box>
              <Button
                onClick={handleButtonClick}
                variant="contained"
                color="primary"
                endIcon={<AddIcon />}
              >
                Create
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ActionsView;
