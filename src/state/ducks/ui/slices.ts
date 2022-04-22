import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '~/state/store';

/** The type of UI state. */
export type UIState = {
  paletteMode: PaletteMode;
};

const initialState: UIState = {
  paletteMode: 'light',
};

/** The slice for the UI state. */
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

/** UI slice actions */
export const { darkModeOn, darkModeOff } = uiSlice.actions;

/** Returns palette mode in the store. */
export const getPaletteMode = ({ ui }: RootState) => ui.paletteMode;

/** UI reducer */
export default uiSlice.reducer;
