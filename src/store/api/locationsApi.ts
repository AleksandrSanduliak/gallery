import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const locationsApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getLocations: builder.query<[], void>({
      query: () => {
        return {
          url: `locations`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetLocationsQuery } = locationsApi;
