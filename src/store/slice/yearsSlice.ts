import { createSlice } from '@reduxjs/toolkit';

interface IYear {
  from: string;
  to: string;
}

const initialState: IYear = {
  from: '',
  to: '',
};

export const yearsSlice = createSlice({
  name: 'years',
  initialState,
  reducers: {
    setFromDate: (state, action) => {
      state.from = action.payload;
    },
    setToDate: (state, action) => {
      state.to = action.payload;
    },
  },
});

export const { setFromDate, setToDate } = yearsSlice.actions;

export default yearsSlice.reducer;
