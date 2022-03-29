import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type UIState = {
  darkMode: boolean;
};

const initialState: UIState = {
  darkMode: false,
};

// slices
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    darkModeOn: (state) => {
      state.darkMode = true;
    },
    darkModeOff: (state) => {
      state.darkMode = false;
    },
  },
});

// actions
export const { darkModeOn, darkModeOff } = uiSlice.actions;

// selectors
export const isDarkModeOn = ({ ui }: RootState) => ui.darkMode;

export default uiSlice.reducer;
