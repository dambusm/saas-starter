import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const localApiSlice = createApi({
  reducerPath: 'localApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: () => ({}),
});
