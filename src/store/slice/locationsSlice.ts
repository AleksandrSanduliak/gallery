import { createSlice } from '@reduxjs/toolkit';
import { TSelectValue } from '../../types/select';

const initialState: { location: TSelectValue } = {
  location: null,
};

export const locationsSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationsSlice.actions;

export default locationsSlice.reducer;
