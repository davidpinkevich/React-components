import { TApiData } from '../../../types/types';
import { API } from '../../../data/items-data';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${API.BASE_URL}` }),
  tagTypes: ['heroes'],
  endpoints: (builder) => ({
    getItems: builder.query<TApiData, string>({
      query: (string) => `${string}`,
      providesTags: ['heroes'],
    }),
  }),
});

export const { useGetItemsQuery } = apiSlice;
