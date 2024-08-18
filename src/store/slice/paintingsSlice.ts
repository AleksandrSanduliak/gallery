import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { paintingsApi } from '../api/paintingsApi';

interface IPainting {
  response: [];
  totalCount: number;
  currentPage: number;
}

const initialState: IPainting = {
  response: [],
  totalCount: 0,
  currentPage: 1,
};

export const paintingsSlice = createSlice({
  name: 'paintings',
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.currentPage === state.totalCount) return;
      state.currentPage++;
    },
    prevPage: (state) => {
      if (state.currentPage === 1) return;
      state.currentPage--;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(paintingsApi.endpoints.getPaintings.matchFulfilled),
      (state, { payload }) => {
        state.totalCount = payload.totalCount;
      },
    );
  },
});

export const { nextPage, prevPage, setPage } = paintingsSlice.actions;

export default paintingsSlice.reducer;
