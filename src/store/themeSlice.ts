import { createSlice } from '@reduxjs/toolkit';
import { Themes } from '../types/theme';

const initialState = {
  themeStatus: localStorage?.getItem('theme') ?? Themes.DARK,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      if (state.themeStatus === Themes.DARK) state.themeStatus = Themes.LIGHT;
      else state.themeStatus = Themes.DARK;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
