import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { fetcherBaseQuery } from '../lib/baseQueries';

export const databaseApiSlice = createApi({
  reducerPath: 'databaseApi',
  baseQuery: fetcherBaseQuery(),
  endpoints: () => ({}),
});
