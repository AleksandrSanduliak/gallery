import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { limit } from '../../consts/posts';
import { ICard, IResponse } from '../../types/card';

type TQueryParams = {
  page: number;
  q?: string;
  authorId?: number;
  locationId?: number;
  createdFrom?: string;
  createdTo?: string;
};

export const paintingsApi = createApi({
  reducerPath: 'paintingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  // keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getPaintings: builder.query<IResponse, TQueryParams>({
      query: (params) => {
        return {
          url:
            `paintings?_page=${params.page}&_limit=10` +
            `${params.q ? `&q=${params.q}` : ''}` +
            `${params.authorId ? `&authorId=${params.authorId}` : ''}` +
            `${params.locationId ? `&locationId=${params.locationId}` : ''}` +
            `${params.createdFrom ? `&created_gte=${params.createdFrom}` : ''}` +
            `${params.createdTo ? `&created_lte=${params.createdTo}` : ''}`,
          method: 'GET',
        };
      },
      transformResponse: (response: ICard[], meta) => {
        const getCountsFromheaders = Number(
          meta?.response?.headers.get('X-Total-Count'),
        );
        const totalCount = Math.ceil(getCountsFromheaders / limit);

        return {
          response,
          totalCount,
        };
      },
      keepUnusedDataFor: 200,
    }),
  }),
});

export const { useLazyGetPaintingsQuery } = paintingsApi;
