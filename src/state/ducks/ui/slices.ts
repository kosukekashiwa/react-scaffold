import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/state/store';

export type UIState = {
  paletteMode: PaletteMode;
};

const initialState: UIState = {
  paletteMode: 'light',
};

// slices
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    darkModeOn: (state) => {
      state.paletteMode = 'dark';
    },
    darkModeOff: (state) => {
      state.paletteMode = 'light';
    },
  },
});

// actions
export const { darkModeOn, darkModeOff } = uiSlice.actions;

// selectors
export const getPaletteMode = ({ ui }: RootState) => ui.paletteMode;

export default uiSlice.reducer;
