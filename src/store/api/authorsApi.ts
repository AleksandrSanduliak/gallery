import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authorsApi = createApi({
  reducerPath: 'authorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAuthors: builder.query<[], void>({
      query: () => {
        return {
          url: `authors`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetAuthorsQuery } = authorsApi;
