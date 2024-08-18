import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { paintingsApi } from './api/paintingsApi';
import themeSlice from './slice/themeSlice';
import paintingsSlice from './slice/paintingsSlice';
import { authorsApi } from './api/authorsApi';
import authorsSlice from './slice/authorsSlice';
import { locationsApi } from './api/locationsApi';
import locationsSlice from './slice/locationsSlice';
import yearsSlice from './slice/yearsSlice';
import filterSlice from './slice/filterSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    paintings: paintingsSlice,
    author: authorsSlice,
    location: locationsSlice,
    years: yearsSlice,
    filter: filterSlice,
    [paintingsApi.reducerPath]: paintingsApi.reducer,
    [authorsApi.reducerPath]: authorsApi.reducer,
    [locationsApi.reducerPath]: locationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      paintingsApi.middleware,
      authorsApi.middleware,
      locationsApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
