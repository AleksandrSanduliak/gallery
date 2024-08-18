import { createSlice } from '@reduxjs/toolkit';
import { paintingsApi } from '../api/paintingsApi';

interface IFilter {
  sendRequest: boolean;
}

const initialState: IFilter = {
  sendRequest: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    sendRequest: (state) => {
      state.sendRequest = true;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      paintingsApi.endpoints.getPaintings.matchFulfilled,
      (state) => {
        state.sendRequest = false;
      },
    );
    builder.addMatcher(
      paintingsApi.endpoints.getPaintings.matchPending,
      (state) => {
        state.sendRequest = false;
      },
    );
    builder.addMatcher(
      paintingsApi.endpoints.getPaintings.matchRejected,
      (state) => {
        state.sendRequest = false;
      },
    );
  },
});

export const { sendRequest } = filterSlice.actions;

export default filterSlice.reducer;
