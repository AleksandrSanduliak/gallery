import { createSlice } from '@reduxjs/toolkit';
import { TSelectValue } from '../../types/select';

const initialState: { artist: TSelectValue } = {
  artist: null,
};

export const authorsSlice = createSlice({
  name: 'paintings',
  initialState,
  reducers: {
    setCurrentAuthor: (state, action) => {
      state.artist = action.payload;
    },
  },
});

export const { setCurrentAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
